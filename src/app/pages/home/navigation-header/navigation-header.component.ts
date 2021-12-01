import { Component, Input } from "@angular/core";

@Component({
    selector: "app-navigation-header",
    templateUrl: "./navigation-header.component.html",
    styleUrls: ["./navigation-header.component.css"],
})
export class NavigationHeaderComponent {
    @Input() tabLinks: any[] = [];
}
