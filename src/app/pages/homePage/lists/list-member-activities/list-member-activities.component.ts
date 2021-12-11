import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-member-activities',
  templateUrl: './list-member-activities.component.html',
  styleUrls: ['./list-member-activities.component.css']
})
export class ListMemberActivitiesComponent{
  @Input() activityDescription:string = 'AAAAAAAA';
  @Input() activityValue: number = 0;
  public activityDone = 0;
  /**
   * Inverte o estilo do botão a partir do clique
   */
  public onclick(): void{
    if(this.activityDone == 0){ this.activityDone = 1; } 
    else{ this.activityDone = 0; }
  }
}
