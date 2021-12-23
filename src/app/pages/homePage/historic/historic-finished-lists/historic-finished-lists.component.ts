import { Component, Input } from "@angular/core";

@Component({
    selector: "app-historic-finished-lists",
    templateUrl: "./historic-finished-lists.component.html",
    styleUrls: ["./historic-finished-lists.component.css"],
})
export class HistoricFinishedListsComponent {
    @Input() listName: string = "Lista ABC SHOW";
    @Input() failedTasks: number = 12;
    @Input() initialDate: string = "07022000";
    @Input() finalDate: string = "07022000";

    public onclick(): void {
        console.log("funcionando");
    }
}
