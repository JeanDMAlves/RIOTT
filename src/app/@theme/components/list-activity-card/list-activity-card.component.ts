import { Component, Input } from "@angular/core";
import { IButton } from "../../interfaces/IButton";
import { Idata } from "../../interfaces/IData";

@Component({
    selector: "app-list-activity-card",
    templateUrl: "./list-activity-card.component.html",
    styleUrls: ["./list-activity-card.component.css"],
})
export class ListActivityCardComponent {
    @Input() data: Idata;
    @Input() buttons: IButton[];
    @Input() image;
    @Input() status: "editable" | "readonly";
}
