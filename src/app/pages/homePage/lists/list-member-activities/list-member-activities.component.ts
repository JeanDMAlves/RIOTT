import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-member-activities',
  templateUrl: './list-member-activities.component.html',
  styleUrls: ['./list-member-activities.component.css']
})
export class ListMemberActivitiesComponent{
  @Input() activityDescription:string = 'AAAAAAAA';
  @Input() activityValue:number = 0;
}
