import { IMember } from "src/app/@theme/interfaces/IMember";
import { MemberService } from "src/app/@core/services/member.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-historic",
    templateUrl: "./historic.component.html",
    styleUrls: ["./historic.component.css"],
})
export class HistoricComponent implements OnInit {
    public selectedId = 0;
    public members: IMember[] = [];
    constructor(private memberService: MemberService) {}

    public finishedLists = [
        {
            listName: "Lista ABC SHOW",
            failedTasks: 12,
            initialDate: "07022000",
            finalDate: "07022000",
        },
        {
            listName: "Lista ABC SHOW",
            failedTasks: 10,
            initialDate: "07022000",
            finalDate: "07022000",
        },
        {
            listName: "Lista ABC SHOW",
            failedTasks: 0,
            initialDate: "07022000",
            finalDate: "07022000",
        },
    ];

    public setSelected(id: number): void {
        this.selectedId = id;
    }

    public ngOnInit(): void {
        this.memberService.getMembers(1, 100, 1).subscribe((data) => {
            for (const member of data["data"]["rows"]) {
                this.members.push(member);
            }
        });
    }
}
