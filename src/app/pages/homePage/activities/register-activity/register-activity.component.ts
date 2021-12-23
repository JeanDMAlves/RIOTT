import { IActivity } from "./../../../../@theme/interfaces/IActivities";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { IModal } from "src/app/@theme/interfaces/IModal";

@Component({
    selector: "app-register-activity",
    templateUrl: "./register-activity.component.html",
    styleUrls: ["./register-activity.component.css"],
})
export class RegisterActivityComponent {
    @Input() propsModalRegister: IModal;
    public activity: FormControl = new FormControl("", [Validators.required]);

    public setActivity(): IActivity {
        return {
            description: this.activity.value,
        };
    }
}
