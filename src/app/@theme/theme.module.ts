import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ListActivityCardComponent } from "./components/list-activity-card/list-activity-card.component";
import { HeaderBoxComponent } from "./components/headerBox/header-box.component";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
    imports: [ReactiveFormsModule, CommonModule, HttpClientModule, MatButtonModule, NgbModule],
    declarations: [ListActivityCardComponent, HeaderBoxComponent, FeedbackComponent],
    providers: [],
    exports: [ListActivityCardComponent, HeaderBoxComponent, FeedbackComponent],
})
export class ThemeModule {}
