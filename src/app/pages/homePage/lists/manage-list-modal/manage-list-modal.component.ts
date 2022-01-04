import { ActivityListService } from "./../../../../@core/services/activity-list.service";
import { ActivityService } from "./../../../../@core/services/activity.service";
import { IData } from "./../../../../@theme/interfaces/IData";
import { IMember } from "./../../../../@theme/interfaces/IMember";
import { MemberService } from "./../../../../@core/services/member.service";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ITaskList } from "src/app/@theme/interfaces/ITaskList";

@Component({
    selector: "app-manage-list-modal",
    templateUrl: "./manage-list-modal.component.html",
    styleUrls: ["./manage-list-modal.component.css"],
})
export class ManageListModalComponent implements OnInit {
    @ViewChild("rawTasks") rawTasksTemplate: TemplateRef<any>;
    @ViewChild("memberSelectedTaskList") memberSelectedTaskList: TemplateRef<any>;

    public shownTemplate: TemplateRef<any>;
    public members: IMember[] = [];
    public tasks: IData[] = [];
    public selectedMemberTasks: ITaskList[];
    private selectedMemberId: string;

    constructor(private memberService: MemberService, private activityService: ActivityService, private taskListService: ActivityListService) {}

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
