import { IUser } from "../../@theme/interfaces/IUser";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private url: string = "http://34.136.200.153:4444/user";
    private token: string = this.localStorage.readToken();
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
        }),
    };

    public getUsers(page: number, size: number, order: number, orderBy: string = "ASC"): Observable<IUser> {
        return this.http.get<IUser>(`${this.url}?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}`, this.httpOptions);
    }

    public postUser(newUser: IUser): Observable<IUser> {
        return this.http.post<IUser>(this.url, newUser, this.httpOptions);
    }

    public putUser(userId: string, email: string, password: string): Observable<IUser> {
        const alteredUser: IUser = {
            id: userId,
            email: email,
            password: password,
        };
        return this.http.put<IUser>(this.url, alteredUser, this.httpOptions);
    }

    public getUserById(id: string): Observable<IUser> {
        return this.http.get<IUser>(this.url + `/${id}`, this.httpOptions);
    }

    public deleteUserById(id: string): Observable<IUser> {
        return this.http.delete<IUser>(this.url + `/${id}`, this.httpOptions);
    }
}
