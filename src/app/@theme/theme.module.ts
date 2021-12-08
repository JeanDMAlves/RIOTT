import { NgModule } from "@angular/core";
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { ListActivityCardComponent } from './components/list-activity-card/list-activity-card.component';

@NgModule({
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
	declarations: [
  
    ListActivityCardComponent
  ],
	providers: [ ],
    exports: [  
    ]
})
export class ThemeModule { }
