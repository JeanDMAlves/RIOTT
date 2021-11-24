import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent{
  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide = true;
  
  public getErrorMessage(): string{
    if (this.email.hasError('required')){
      return 'Você deve informar seu email';
    }
    return this.email.hasError('email') ? 'Não é um email válido' : '';
  }
}
