import { Component, Input } from "@angular/core";

@Component({
    selector: "app-manage-button",
    templateUrl: "./manage-button.component.html",
    styleUrls: ["./manage-button.component.css"],
})
export class ManageButtonComponent {
    @Input() action: () => void;
}
