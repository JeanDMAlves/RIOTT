import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
	private storage: Storage;
	private key: string = 'TokenLogin';
	constructor(){
		this.storage = window.localStorage;
	}

	public createToken(token: string): void{
		if(this.storage){
			this.storage.setItem(this.key, token);
		}
	}

	public readToken(): string{
		if(this.storage){
           return this.storage.getItem(this.key);
        }
	}
}
