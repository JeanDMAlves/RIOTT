import { IMember } from "./../../../../@theme/interfaces/IMember";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { IModal } from "src/app/@theme/interfaces/IModal";

@Component({
    selector: "app-register-member",
    templateUrl: "./register-member.component.html",
    styleUrls: ["./register-member.component.css"],
})
export class RegisterMemberComponent {
    @Input() propsModalRegister: IModal;
    @Input() component: any;
    public member: FormControl = new FormControl("", [Validators.required]);

    public setMember(): IMember {
        return {
            id: this.member.value.id,
            name: this.member.value.name,
            photo: this.member.value.photo,
            birthday: this.member.value.birthday,
            reward: this.member.value.reward,
        };
    }
}
