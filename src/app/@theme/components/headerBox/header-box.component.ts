import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-box',
  templateUrl: './header-box.component.html',
  styleUrls: ['./header-box.component.css']
})
export class HeaderBoxComponent{
	@Input() tittle: string; 
	@Input() button: string; 
}

