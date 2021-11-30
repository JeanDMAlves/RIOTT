import { Component} from '@angular/core';

@Component({
  selector: 'app-navegation-header',
  templateUrl: './navegation-header.component.html',
  styleUrls: ['./navegation-header.component.css']
})
export class NavegationHeaderComponent{
  public teste:number;
  public testando():void{
    console.log(this.teste);
  }
}
