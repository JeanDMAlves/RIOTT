import { Component, OnInit } from "@angular/core";
import { MemberService } from "src/app/@core/services/member.service";
import { IMember } from "src/app/@theme/interfaces/IMember";
@Component({
    selector: "app-lists",
    templateUrl: "./lists.component.html",
    styleUrls: ["./lists.component.css"],
})
export class ListsComponent implements OnInit {
    public discounts: number = 0;
    public selectedId = 0;
    public members: IMember[] = [];

    constructor(private memberService: MemberService) {}

    public membersActivities = [
        {
            activityValue: 300,
            activityDescription: "Tirar o lixo",
        },
        {
            activityValue: 300,
            activityDescription: "Tirar o lixo",
        },
        {
            activityValue: 300,
            activityDescription: "Tirar o lixo",
        },
    ];

    public ngOnInit(): void {
        this.memberService.getMembers(1, 50, 1).subscribe((data) => {
            const items: IMember[] = data["data"]["rows"];
            for (const member of items) {
                this.members.push(member);
            }
        });
    }

    public setSelected(id: number): void {
        this.selectedId = id;
    }
}
