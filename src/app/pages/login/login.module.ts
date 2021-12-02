import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './login-box/login-box.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LoginScreenComponent,
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
