import { IMember } from "./../../../../@theme/interfaces/IMember";
import { MemberService } from "./../../../../@core/services/member.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-manage-list-modal",
    templateUrl: "./manage-list-modal.component.html",
    styleUrls: ["./manage-list-modal.component.css"],
})
export class ManageListModalComponent implements OnInit {
    public members: IMember[] = [];
    constructor(private memberService: MemberService) {}

    ngOnInit(): void {
        this.memberService.getMembers(1, 100, 1).subscribe((data) => {
            const membersData: IMember[] = data["data"]["rows"];
            membersData.forEach((member) => this.members.push(member));
        });
    }
}
