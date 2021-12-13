import { IClient } from './../../@theme/interfaces/IClient';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	private url: string = 'http://34.136.200.153:4444'

	constructor(private http: HttpClient){}

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}

	private handleError(error: HttpErrorResponse): Observable<never>{
		let errorMessage: string = '';
		if(error.error instanceof ErrorEvent){
			errorMessage = error.error.message;
		} else{
			errorMessage = `Error Code: ${error.status}\nMensagem de Erro: ${error.error.error}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}

	public validateLogin(client: IClient): Observable<IClient>{
		return this.http.post<IClient>(this.url + '/login', client, this.httpOptions)
		.pipe(
			retry(1),
			catchError(this.handleError)
		);
	}
}
