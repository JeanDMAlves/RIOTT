import { IResultOperation } from "./../../../@theme/interfaces/IResultOperation";
import { IActivity } from "./../../../@theme/interfaces/IActivities";
import { ModalComponent } from "./../../../@theme/components/modal/modal.component";
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { ActivityService } from "src/app/@core/services/activity.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IButton } from "src/app/@theme/interfaces/IButton";
import { Idata } from "src/app/@theme/interfaces/IData";
import { IModal } from "src/app/@theme/interfaces/IModal";
@Component({
    selector: "app-activities",
    templateUrl: "./activities.component.html",
    styleUrls: ["./activities.component.css"],
})
export class ActivitiesComponent implements OnInit {
    @ViewChild("modalBody") modalBody: TemplateRef<any>;
    @ViewChild("modalUpdateElement") modalUpdateElement: TemplateRef<any>;
    @ViewChild("modalRegisterSuccessful") modalRegisterSuccessful: TemplateRef<any>;
    public title: string = "Atividades";
    public headerBoxButton: IButton;
    public activitiesList: Idata[] = [];
    private updateId: string;

    constructor(private activities: ActivityService, private modalService: NgbModal) {}

    public buttons: IButton[] = [
        {
            label: "Excluir",
            class: "orange-button",
            action: (parent: any): void => {
                this.activities.deleteActivityById(parent.id).subscribe(parent.remove());
            },
        },
        {
            label: "Editar",
            class: "light-green-button",
            action: (parent: any): void => {
                this.updateId = parent.id;
                this.openModals(this.modalUpdateElement, "Editar Atividade");
            },
        },
    ];

    public modalUpdateElementData: IModal = {
        title: "Altere os dados abaixo para editar uma atividade no RIOTT",
        label: "Descrição da atividade",
        buttons: [
            {
                label: "Salvar edição",
                class: "dark-green-button register-activity-add-button",
                action: (activity: IActivity): void => {
                    const item = this.activitiesList.find((item) => item.id == this.updateId);
                    item.value = activity.description;
                    this.activities.putActivity(this.updateId, activity.description).subscribe();
                    this.modalService.dismissAll();
                },
            },
            {
                label: "Cancelar",
                class: "orange-button",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalData: IModal = {
        title: "Insira os dados abaixo para cadastrar uma nova atividade ao RIOTT",
        label: "Descrição da atividade",
        buttons: [
            {
                label: "Adicionar atividade",
                class: "dark-green-button register-activity-add-button",
                action: (activity: IActivity): void => {
                    this.activities.postActivity(activity).subscribe(() => {
                        this.activitiesList.push({
                            title: "Descrição da atividade",
                            value: activity.description,
                        });
                        this.modalService.dismissAll();
                        this.openModals(this.modalRegisterSuccessful, "");
                    });
                },
            },
            {
                label: "Cancelar",
                class: "orange-button",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalRegisterSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Atividade adicionada com sucesso!",
        buttons: [
            {
                label: "Finalizar",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    /**
     * Abre um modal
     * @param modalBody - Corpo do modal
     * @param title - Título que será exibido
     * na parte esquerda do header do modal
     */
    private openModals(modalBody: TemplateRef<any>, title?: string): void {
        const openedModal = this.modalService.open(ModalComponent, { size: "xl" });
        openedModal.componentInstance.modalBody = modalBody;
        openedModal.componentInstance.title = title;
    }

    /**
     * Lista todas as atividades existentes na lista de atividades
     * e exibe elas na tela através do componente ListActivityCard
     */
    public ngOnInit(): void {
        this.headerBoxButton = {
            label: "Cadastrar nova atividade",
            class: "dark-green-button",
            action: (): void => {
                this.openModals(this.modalBody, "Cadastrar nova atividade");
            },
        };

        this.activities.getActivities(1, 10, 1, "ASC").subscribe((dataStorage) => {
            const data = dataStorage["data"]["rows"];
            for (const activity of data) {
                const item = {
                    title: "Descrição da atividade",
                    value: activity.description,
                    id: activity.id,
                };
                this.activitiesList.push(item);
            }
        });
    }
}
