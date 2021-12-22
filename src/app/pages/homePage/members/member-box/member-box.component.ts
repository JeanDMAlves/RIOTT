import { IButton } from "src/app/@theme/interfaces/IButton";
import { IMember } from "./../../../../@theme/interfaces/IMember";
import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector: "app-member-box",
    templateUrl: "./member-box.component.html",
    styleUrls: ["./member-box.component.css"],
})
export class MemberBoxComponent {
    @Input() memberList: IMember[];
    @Input() buttons: IButton;
}
