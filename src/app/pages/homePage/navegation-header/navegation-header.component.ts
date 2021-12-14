import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-navegation-header",
    templateUrl: "./navegation-header.component.html",
    styleUrls: ["./navegation-header.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class NavegationHeaderComponent {
    @Input() tabLinks: any[] = [];
}
