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
  /**
   * Checa as condições do campo e mostra uma mensagem ao usuário caso
   * tenha inserido um email inválido ou tenha deixado o campo vazio.
   * 
   * @returns mensagem de alerta ou vazia
   */
  public getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return this.email.hasError('email') ? 'Digite um email válido' : '';
  }
  /**
   * Checa as condições do campo e mostra uma mensagem ao usuário caso
   * tenha inserido uma senha muito curta ou tenha deixado o campo vazio.
   * 
   * @returns mensagem de alerta ou vazia
   */
  public getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    return this.password.hasError('minlength') ? 'Senha muito curta' : '';
  }
  /**
   * Recebe os valores de input do usuário e retorna uma interface
   * do tipo ICliente armazenando os valores 
   */
  private getClientData(): IClient {
    return {email: this.email.value, password: this.password.value};
  }
  /**
   * Ao enviar o formulário, imprime os valores inseridos no console
   */
  onSubmit(): void{
    console.log(this.getClientData());
  }
}
