import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-activity-card',
  templateUrl: './list-activity-card.component.html',
  styleUrls: ['./list-activity-card.component.css']
})
export class ListActivityCardComponent{
	@Input() data: Idata[]; 
	@Input() buttons: Ibutton[]; 
}

interface Idata{
	key: string,
	title: string,
	value: string
}

interface Ibutton{
	label: string,
	class: string,
	icon?: string,
	action: string
}