import { ActivityListService } from "./../../../@core/services/activity-list.service";
import { Component, OnInit } from "@angular/core";
import { MemberService } from "src/app/@core/services/member.service";
import { IMember } from "src/app/@theme/interfaces/IMember";
@Component({
    selector: "app-lists",
    templateUrl: "./lists.component.html",
    styleUrls: ["./lists.component.css"],
})
export class ListsComponent implements OnInit {
    public selectedId: string;
    public members: IMember[] = [];
    public membersTasks: any = [];

    constructor(private memberService: MemberService, private taskListService: ActivityListService) {}

    public setSelected(id: string): void {
        this.selectedId = id;
        this.taskListService.getTaskListByMemberId(id).subscribe((data) => {
            this.membersTasks = data["data"]["taskList"];
        });
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
