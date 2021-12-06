import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  public homeTabs = [
    {
        label: "Listas",
        link: "first",
    },
    {
        label: "Histórico",
        link: "second",
    },
    {
        label: "Atividades",
        link: "first",
    },
    {
        label: "Membros",
        link: "second",
    },
    {
        label: "Sair",
        link:"first"
    }
];
}
