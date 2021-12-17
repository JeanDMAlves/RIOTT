import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-header-box",
    templateUrl: "./header-box.component.html",
    styleUrls: ["./header-box.component.css"],
})
export class HeaderBoxComponent {
    @Input() tittle: string;
    @Input() button: string;
    @Input() content;
    constructor(private modalService: NgbModal) {}
    public openModal(): void {
        this.modalService.open(this.content);
    }
}
