import { NgModule } from "@angular/core";
import { MaterialExampleModule } from '../../material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';

@NgModule({
    imports: [
        MaterialExampleModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
	declarations: [
        RemoveButtonComponent,
        EditButtonComponent
  ],
	providers: [ ],
    exports: [  
        RemoveButtonComponent,
        EditButtonComponent
    ]
})
export class ThemeModule { }
