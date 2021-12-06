import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-navegation-header',
  templateUrl: './navegation-header.component.html',
  styleUrls: ['./navegation-header.component.css'],
})
export class NavegationHeaderComponent{
  @Input() tabLinks: any[] = [];
}
