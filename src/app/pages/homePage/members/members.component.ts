import { Router } from "@angular/router";
import { IResultOperation } from "./../../../@theme/interfaces/IResultOperation";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MemberService } from "src/app/@core/services/member.service";
import { IButton } from "src/app/@theme/interfaces/IButton";
import { IMember } from "src/app/@theme/interfaces/IMember";
import { ModalComponent } from "./../../../@theme/components/modal/modal.component";
import { IModal } from "src/app/@theme/interfaces/IModal";

@Component({
    selector: "app-members",
    templateUrl: "./members.component.html",
    styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit {
    @ViewChild("modalRegisterMember") modalRegisterMember: TemplateRef<any>;
    @ViewChild("modalRegisterSuccessful") modalRegisterSuccessful: TemplateRef<any>;
    @ViewChild("modalUpdateElement") modalUpdateElement: TemplateRef<any>;
    @ViewChild("modalDelete") modalDelete: TemplateRef<any>;
    @ViewChild("modalDeleteSuccessful") modalDeleteSuccessful: TemplateRef<any>;
    @ViewChild("modalUpdateSuccessful") modalUpdateSuccessful: TemplateRef<any>;

    public memberList: IMember[] = [];
    public memberHeaderTitle: string = "Membros";
    public memberHeaderButton: IButton;
    private itemParent: any;
    private updateId: string;

    constructor(private memberService: MemberService, private modalService: NgbModal, private router: Router) {}

    public memberBoxButtons: IButton[] = [
        {
            label: "Excluir",
            class: "orange-button",
            action: (parent: any): void => {
                this.itemParent = parent;
                this.openModals(this.modalDelete, "");
            },
        },
        {
            label: "Editar",
            class: "light-green-button",
            action: (parent: any): void => {
                this.updateId = parent.id;
                this.openModals(this.modalUpdateElement, "Editar Membro");
            },
        },
        {
            label: "Ver lista",
            class: "dark-green-button",
            action: (): void => {
                this.router.navigate(["pages/home/Listas"]);
            },
        },
    ];

    public modalRegisterMemberData: IModal = {
        title: "Insira os dados abaixo para cadastrar um novo membro ao RIOTT.",
        buttons: [
            {
                label: "Cadastrar membro",
                class: "dark-green-button",
                action: (member: IMember): void => {
                    this.memberService.postMember(member.name, member.photo, member.birthday, member.reward).subscribe(() => {
                        this.memberList.push(member);
                        this.modalService.dismissAll();
                        this.openModals(this.modalRegisterSuccessful, "");
                    });
                },
            },
        ],
    };

    public modalRegisterSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Membro adicionado com sucesso!",
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

    public modalUpdateElementData: IModal = {
        title: "Altere os dados abaixo para editar o cadastro de um membro no RIOTT",
        buttons: [
            {
                label: "Salvar edição",
                class: "dark-green-button",
                action: (member: IMember): void => {
                    let item = this.memberList.find((item) => item.id == this.updateId);
                    item = member;
                    this.memberService.putMember(this.updateId, item.name, item.birthday, item.reward, item.photo).subscribe(() => {
                        this.modalService.dismissAll();
                        this.openModals(this.modalUpdateSuccessful, "");
                    });
                },
            },
        ],
    };

    public modalDeleteData: IResultOperation = {
        img: "../../../../assets/Warning.png",
        message: "Deseja realmente excluir esse membro",
        buttons: [
            {
                label: "Confirmar e excluir o membro",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.memberService.deleteMemberById(this.itemParent.id).subscribe(() => {
                        this.modalService.dismissAll();
                        this.openModals(this.modalDeleteSuccessful, "");
                        this.itemParent.remove();
                    });
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

    public modalUpdateSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Membro editado com sucesso!",
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

    public modalDeleteSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Atividade excluída com sucesso!",
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

    private openModals(modalBody: TemplateRef<any>, title?: string): void {
        const openedModal = this.modalService.open(ModalComponent, { size: "xl" });
        openedModal.componentInstance.modalBody = modalBody;
        openedModal.componentInstance.title = title;
    }

    public ngOnInit(): void {
        this.memberHeaderButton = {
            label: "Cadastrar novo membro",
            class: "dark-green-button",
            action: (): void => {
                this.openModals(this.modalRegisterMember, "Cadastrar novo membro");
            },
        };

        this.memberService.getMembers(1, 50, 1).subscribe((data) => {
            const members: IMember[] = data["data"]["rows"];
            for (const member of members) {
                this.memberList.push(member);
            }
        });
    }
}
