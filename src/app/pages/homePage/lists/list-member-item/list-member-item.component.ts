import { ActivityListService } from "./../../../../@core/services/activity-list.service";
import { Component, Input, OnInit } from "@angular/core";
import { IMember } from "src/app/@theme/interfaces/IMember";

@Component({
    selector: "app-list-member-item",
    templateUrl: "./list-member-item.component.html",
    styleUrls: ["./list-member-item.component.css"],
})
export class ListMemberItemComponent implements OnInit {
    @Input() public member: IMember;
    public discounts: number = 0;

    constructor(private taskListService: ActivityListService) {}

    public getTotal(): number {
        return this.member.reward - this.discounts;
    }

    public ngOnInit(): void {
        this.taskListService.getTaskListByMemberId(this.member.id).subscribe((data) => {
            const discount = data["data"]["taskList"].totalDiscount;
            if (discount) {
                this.discounts = discount;
            }
        });
    }
}
