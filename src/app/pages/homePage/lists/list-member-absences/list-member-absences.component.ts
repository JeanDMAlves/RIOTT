import { ActivityListService } from "./../../../../@core/services/activity-list.service";
import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "app-list-member-absences",
    templateUrl: "./list-member-absences.component.html",
    styleUrls: ["./list-member-absences.component.css"],
})
export class ListMemberAbsencesComponent implements OnChanges {
    @Input() selectedMemberId: string;
    public absences: number = 0;
    public allowance: number = 0;
    public discounts: number = 0;

    constructor(private taskListService: ActivityListService) {}

    public getTotalPaid(): number {
        if (this.discounts) {
            return this.allowance - this.discounts;
        } else {
            return this.allowance;
        }
    }

    public ngOnChanges(): void {
        if (this.selectedMemberId) {
            this.absences = this.allowance = this.discounts = 0;
            this.taskListService.getTaskListByMemberId(this.selectedMemberId).subscribe((data) => {
                const memberData = data["data"]["taskList"];
                if (memberData.member) {
                    this.allowance = memberData.member.reward;
                }
                if (memberData.failedTasks) {
                    this.absences = memberData.failedTasks;
                }
                if (memberData.totalDiscount) {
                    this.discounts = memberData.totalDiscount;
                }
            });
        }
    }
}
