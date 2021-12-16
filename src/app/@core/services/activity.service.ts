import { Observable } from "rxjs";
import { IActivities, IActivity } from "../../@theme/interfaces/IActivities";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ActivityService {
    private url: string = "http://34.136.200.153:4444/task";
    private token: string = this.localStorage.readToken();
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
        }),
    };

    public getActivities(page: number, size: number, order: number, orderBy: string = "ASC"): Observable<IActivities> {
        console.log(this.token);
        console.log(typeof this.token);
        return this.http.get<IActivities>(`${this.url}?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}`, this.httpOptions);
    }

    public postActivity(activity: IActivity): Observable<IActivity> {
        return this.http.post<IActivity>(this.url, activity, this.httpOptions);
    }

    public putActivity(taskId: string, newDescription: string): Observable<IActivity> {
        const newActivityDescription: IActivity = {
            id: taskId,
            description: newDescription,
        };
        return this.http.put<IActivity>(this.url, newActivityDescription, this.httpOptions);
    }

    public getActivityById(id: string): Observable<IActivity> {
        return this.http.get<IActivity>(this.url + `/${id}`, this.httpOptions);
    }

    public deleteActivityById(id: string): Observable<IActivity> {
        return this.http.delete<IActivity>(this.url + `/${id}`, this.httpOptions);
    }
}
