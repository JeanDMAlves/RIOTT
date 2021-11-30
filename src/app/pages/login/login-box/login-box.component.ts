import { IClient } from '../../../@theme/interfaces/Iclient';

import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent{
  public hide: boolean = true;
  public email: FormControl = new FormControl('', [Validators.required, Validators.email])
  public password: FormControl = new FormControl('', [Validators.required])

  public getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return this.email.hasError('email') ? 'Digite um email válido' : '';
  }
  public getPasswordErrorMessage(): any {
    if (this.password.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return this.password.hasError('minlength') ? 'Senha muito curta' : '';
  }

  private getClientData(): IClient{
    return {email:this.email.value, password:this.password.value};
  }

  onSubmit(): void{
    console.log(this.getClientData());
  }
}
