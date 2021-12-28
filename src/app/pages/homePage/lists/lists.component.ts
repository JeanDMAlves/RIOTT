import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { IMember } from "src/app/@theme/interfaces/IMember";

@Component({
    selector: "app-lists",
    templateUrl: "./lists.component.html",
    styleUrls: ["./lists.component.css"],
})
export class ListsComponent implements OnInit {
    @ViewChild("modalBody") modalBody: TemplateRef<any>;
    @ViewChild("modalDelete") modalDelete: TemplateRef<any>;
    @ViewChild("modalDeleteSuccessful") modalDeleteSuccessful: TemplateRef<any>;
    public selectedId = 0;
    public members: IMember[];
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

    public setSelected(id: number): void {
        this.selectedId = id;
    }
}
