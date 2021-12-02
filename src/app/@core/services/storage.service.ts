import { IClientChildren } from '../../@theme/interfaces/IClientChildren';
import { IClient } from '../../@theme/interfaces/IClient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private client:IClient;
  private childrenList:IClientChildren[];
  constructor(private http: HttpClient) { }

  private getData(url: string): void{
    const response: Observable<IClient> = this.http.get<IClient>(url); 
    response.subscribe((data:IClient) => this.client = {
      email: data.email,
      password: data.password
    });
  }

  private post(data:IClientChildren, url:string): void{
    const response: Observable<IClientChildren>= this.http.post<IClientChildren>(url, data);
    response.subscribe(children => this.childrenList.push(children));
  }
}

///TODO - criar o método genérico que aceita os diferentes tipos de requisições.
///link de referência: https://www.positronx.io/angular-7-httpclient-http-service/#tc_1202_07
