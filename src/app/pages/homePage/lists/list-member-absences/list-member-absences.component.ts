import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-member-absences',
  templateUrl: './list-member-absences.component.html',
  styleUrls: ['./list-member-absences.component.css']
})
export class ListMemberAbsencesComponent{
  @Input() allowance: number = 0;
  @Input() discounts: number = 0;

  public getTotalPaid():number{
    return this.allowance - this.discounts;
  }
}
