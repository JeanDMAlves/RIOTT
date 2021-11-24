import { NgModule } from "@angular/core";
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MaterialExampleModule } from '../../material.module';

@NgModule({
    imports: [
        MaterialExampleModule
    ],
	declarations: [
        LoginBoxComponent,
        LoginScreenComponent
    ],
	providers: [ ],
    exports: [
        LoginBoxComponent,
        LoginScreenComponent   
    ]
})
export class ThemeModule { }
