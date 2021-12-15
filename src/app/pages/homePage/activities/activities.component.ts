import { Component, OnInit } from "@angular/core";
import { Idata, Ibutton } from "src/app/@theme/components/list-activity-card/list-activity-card.component";
import { ActivityService } from "src/app/@core/services/activity.service";
@Component({
    selector: "app-activities",
    templateUrl: "./activities.component.html",
    styleUrls: ["./activities.component.css"],
})
export class ActivitiesComponent implements OnInit {
    public tittle: string = "Atividades";
    public button: string = "Cadastrar nova atividade";
    public activitiesList: Idata[] = [];
    constructor(private activities: ActivityService) {}

    public buttons: Ibutton[] = [
        {
            label: "Excluir",
            class: "orange-button",
        },
        {
            label: "Editar",
            class: "light-green-button",
        },
    ];

    /**
     * Lista todas as atividades existentes na lista de atividades
     * e exibe elas na tela através do componente ListActivityCard
     */
    public ngOnInit(): void {
        this.activities.getActivities(1, 10, 1, "ASC").subscribe((dataStorage) => {
            const data = dataStorage["data"]["rows"];
            for (const activity of data) {
                const item = {
                    title: "Descrição da atividade",
                    value: activity.description,
                    id: activity.id,
                };
                this.activitiesList.push(item);
            }
        });
    }
}
