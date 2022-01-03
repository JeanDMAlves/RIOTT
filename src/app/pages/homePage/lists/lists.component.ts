import { ActivityListService } from "./../../../@core/services/activity-list.service";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MemberService } from "src/app/@core/services/member.service";
import { IMember } from "src/app/@theme/interfaces/IMember";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "src/app/@theme/components/modal/modal.component";
@Component({
    selector: "app-lists",
    templateUrl: "./lists.component.html",
    styleUrls: ["./lists.component.css"],
})
export class ListsComponent implements OnInit {
    @ViewChild("manageTaskList") manageTaskList: TemplateRef<any>;
    public selectedId: string;
    public members: IMember[] = [];
    public membersTasks: any = [];

    constructor(private memberService: MemberService, private taskListService: ActivityListService, private modalService: NgbModal) {}

    public manageButtonAction = (): void => {
        this.openModals(this.manageTaskList, "Gerenciar listas");
    };

    public setSelected(id: string): void {
        this.selectedId = id;
        this.taskListService.getTaskListByMemberId(id).subscribe((data) => {
            this.membersTasks = data["data"]["taskList"];
        });
    }

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

    public ngOnInit(): void {
        this.memberService.getMembers(1, 50, 1).subscribe((data) => {
            const items: IMember[] = data["data"]["rows"];
            for (const member of items) {
                this.members.push(member);
            }
        });
    }
}
