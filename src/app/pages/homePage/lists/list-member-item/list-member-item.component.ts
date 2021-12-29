import { Component, Input } from "@angular/core";
import { IMember } from "src/app/@theme/interfaces/IMember";

@Component({
    selector: "app-list-member-item",
    templateUrl: "./list-member-item.component.html",
    styleUrls: ["./list-member-item.component.css"],
})
export class ListMemberItemComponent {
    @Input() public member: IMember;
    public discounts: number = 0;

    public getTotal(): number {
        return this.member.reward - this.discounts;
    }
}
