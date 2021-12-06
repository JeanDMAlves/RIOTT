import { Component} from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent{
  public selectedId = 0
  public members = [
    {
      id:0,
      name: "Luisa Sousa",
      discounts: "500",
      allowance: "960"
    },
    {
      id:1,
      name: "Luisa Sousa",
      discounts: "500",
      allowance: "960"
    },
    {
      id:2,
      name: "Luisa Sousa",
      discounts: "500",
      allowance: "960"
    }
  ]
  public membersActivities = [
    {
      activityValue:300,
      activityDescription:"Tirar o lixo"
    },
    {
      activityValue:300,
      activityDescription:"Tirar o lixo"
    },
    {
      activityValue:300,
      activityDescription:"Tirar o lixo"
    },
  ]

  public setSelected(id:number): void{
    this.selectedId = id;
  }

}
