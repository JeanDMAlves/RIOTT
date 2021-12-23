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

    public memberList: IMember[] = [];
    public memberHeaderTitle: string = "Membros";
    public memberHeaderButton: IButton;
    private itemParent: any;
    private updateId: string;

    constructor(private memberService: MemberService, private modalService: NgbModal) {}

    public memberBoxButtons: IButton[] = [
        {
            label: "Excluir",
            class: "orange-button",
            action: (parent: any): void => {
                this.itemParent = parent;
                this.memberService.deleteMemberById(parent.id).subscribe(() => {
                    this.itemParent.remove();
                });
            },
        },
        {
            label: "Editar",
            class: "light-green-button",
            // action: (parent: any): void => {
            //     this.updateId = parent.id;
            //     this.openModals(this.modalUpdateElement, "Editar Atividade");
            // },
        },
        {
            label: "Ver lista",
            class: "dark-green-button",
            // action: ()=> {}
        },
    ];

    public modalRegisterMemberData: IModal = {
        title: "Insira os dados abaixo para cadastrar um novo membro ao RIOTT.",
        buttons: [
            {
                label: "Cadastrar membro",
                class: "dark-green-button",
                action: (member: IMember): void => {
                    console.log(member);
                    this.memberService.postMember(member.name, member.photo, member.birthday, member.reward).subscribe(() => {
                        this.memberList.push(member);
                        this.modalService.dismissAll();
                        // this.openModals(this.modalRegisterSuccessful, "");
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
