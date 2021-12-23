import { Component } from "@angular/core";

@Component({
    selector: "app-historic",
    templateUrl: "./historic.component.html",
    styleUrls: ["./historic.component.css"],
})
export class HistoricComponent {
    public selectedId = 0;
    public members = [
        {
            id: 0,
            name: "Luisa Sousa",
        },
        {
            id: 1,
            name: "Clébinho",
        },
        {
            id: 2,
            name: "Áquila",
        },
    ];
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
}
