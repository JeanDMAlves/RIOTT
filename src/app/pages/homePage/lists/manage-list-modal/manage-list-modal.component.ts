import { ModalComponent } from "src/app/@theme/components/modal/modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivityListService } from "./../../../../@core/services/activity-list.service";
import { ActivityService } from "./../../../../@core/services/activity.service";
import { IData } from "./../../../../@theme/interfaces/IData";
import { IMember } from "./../../../../@theme/interfaces/IMember";
import { MemberService } from "./../../../../@core/services/member.service";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ITaskList } from "src/app/@theme/interfaces/ITaskList";
import { IResultOperation } from "src/app/@theme/interfaces/IResultOperation";

@Component({
    selector: "app-manage-list-modal",
    templateUrl: "./manage-list-modal.component.html",
    styleUrls: ["./manage-list-modal.component.css"],
})
export class ManageListModalComponent implements OnInit {
    @ViewChild("rawTasks") rawTasksTemplate: TemplateRef<any>;
    @ViewChild("memberSelectedTaskList") memberSelectedTaskList: TemplateRef<any>;
    @ViewChild("modalDeleteTask") modalDeleteTask: TemplateRef<any>;
    @ViewChild("modalDeleteTaskSuccessful") modalDeleteTaskSuccessful: TemplateRef<any>;

    public shownTemplate: TemplateRef<any>;
    public members: IMember[] = [];
    public tasks: IData[] = [];
    public selectedMemberTasks: ITaskList;
    private selectedMemberId: string;

    constructor(
        private memberService: MemberService,
        private activityService: ActivityService,
        private taskListService: ActivityListService,
        private modalService: NgbModal,
    ) {}

    public modalDeleteTaskData: IResultOperation = {
        img: "../../../../assets/Warning.png",
        message: "Deseja realmente excluir essa lista?",
        buttons: [
            {
                label: "Confirmar e excluir a lista",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.taskListService.deleteTaskListById(this.selectedMemberTasks.id).subscribe(() => {
                        this.modalService.dismissAll();
                        this.openModals(this.modalDeleteTaskSuccessful, "");
                    });
                    console.log(this.selectedMemberTasks);
                },
            },
            {
                label: "Cancelar",
                class: "orange-button modalResultOperationButton",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalDeleteTaskSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Lista excluída com sucesso!",
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

    public setSelected(id: string): void {
        this.selectedMemberId = id;
        this.taskListService.getTaskListByMemberId(id).subscribe((data) => {
            this.selectedMemberTasks = data["data"]["taskList"];
            this.shownTemplate = this.memberSelectedTaskList;
        });
    }

    ngOnInit(): void {
        this.memberService.getMembers(1, 100, 1).subscribe((data) => {
            const membersData: IMember[] = data["data"]["rows"];
            membersData.forEach((member) => this.members.push(member));
        });

        this.activityService.getActivities(1, 100, 1, "ASC").subscribe((dataStorage) => {
            const data = dataStorage["data"]["rows"];
            for (const activity of data) {
                const item = {
                    title: "Descrição da atividade:",
                    value: activity.description,
                    id: activity.id,
                };
                this.tasks.push(item);
            }
            this.shownTemplate = this.rawTasksTemplate;
        });
    }
}
