import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomePageComponent {
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
        }
    ];
}
