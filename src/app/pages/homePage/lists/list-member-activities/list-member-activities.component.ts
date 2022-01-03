import { ActivityListService } from "./../../../../@core/services/activity-list.service";
import { ITaskList } from "./../../../../@theme/interfaces/ITaskList";
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-list-member-activities",
    templateUrl: "./list-member-activities.component.html",
    styleUrls: ["./list-member-activities.component.css"],
})
export class ListMemberActivitiesComponent {
    @Input() tasksInformation: ITaskList;
    @Input() taskItem;
    @Input() showButton: boolean;

    constructor(private taskListService: ActivityListService) {}

    /**
     * Inverte o estilo do botão a partir do clique
     */
    public onclick(): void {
        this.taskItem.failed = !this.taskItem.failed;
        const listId = this.tasksInformation.id;
        const taskId = this.taskItem.taskId;
        console.log(listId);
        console.log(taskId);
        // this.taskListService.toggleTaskListItem(listId, taskId)
        // .subscribe(dados => console.log(dados));
    }
}
