import { IMember } from "src/app/@theme/interfaces/IMember";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { IModal } from "src/app/@theme/interfaces/IModal";
import { formatDate } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-modal-register-member",
    templateUrl: "./modal-register-member.component.html",
    styleUrls: ["./modal-register-member.component.css"],
})
export class ModalRegisterMemberComponent {
    @Input() propsModalRegister: IModal;

    public memberImage: FormControl = new FormControl("", [Validators.required]);
    public memberName: FormControl = new FormControl("", [Validators.required]);
    public memberBirthday: FormControl = new FormControl("", [Validators.required]);
    public memberReward: FormControl = new FormControl("", [Validators.required]);

    constructor(public modalService: NgbModal) {}
    public setMember(): IMember {
        return {
            name: this.memberName.value,
            photo: this.memberImage.value,
            birthday: formatDate(this.memberBirthday.value, "yyyy-MM-dd", "en-US"),
            reward: this.memberReward.value,
        };
    }

    public closeModal(): void {
        this.modalService.dismissAll();
    }
}
