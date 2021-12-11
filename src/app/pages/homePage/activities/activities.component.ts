import { Component} from '@angular/core';
import { ActivityService } from 'src/app/@core/services/activity.service';
@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
	constructor(private activities: ActivityService){}
	ngOnInit(): void {
		this.activities.getActivities(1, 10, 1, 'ASC',)
		.subscribe();
	}

}