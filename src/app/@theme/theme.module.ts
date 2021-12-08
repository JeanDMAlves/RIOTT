import { NgModule } from "@angular/core";
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
	declarations: [
  ],
	providers: [ ],
    exports: [  
    ]
})
export class ThemeModule { }
