import { LocalStorageService } from './../../../@core/services/local-storage.service';
import { AuthenticationService } from './../../../@core/services/authentication.service';
import { IClient } from '../../../@theme/interfaces/Iclient';
import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent{
	public hide: boolean = true;
	public email: FormControl = new FormControl('', [Validators.required, Validators.email])
	public password: FormControl = new FormControl('')

	constructor(private login: AuthenticationService, private localStorage: LocalStorageService, private router: Router){}

	public getErrorMessage(): string {
		if (this.email.hasError('required')) {
			return 'Você deve digitar seu email';
		}
		return this.email.hasError('email') ? 'Não é um email válido' : '';
	}

	private getClientData(): IClient{
		return {email:this.email.value, password:this.password.value};
	}

	onSubmit(): void{
		const client: IClient = this.getClientData();
		this.login.validateLogin(client)
		.subscribe((dados) => {
			this.localStorage.createToken(dados['data']);
			this.router.navigate(['pages/home/']);
		});
	}
}
