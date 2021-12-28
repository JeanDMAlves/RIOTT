import { IMember } from "src/app/@theme/interfaces/IMember";
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-historic-member",
    templateUrl: "./historic-member.component.html",
    styleUrls: ["./historic-member.component.css"],
})
export class HistoricMemberComponent {
    @Input() public member: IMember;
}
