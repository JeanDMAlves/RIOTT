import { ITaskItem } from "./../../@theme/interfaces/ITaskList";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { ITaskList } from "src/app/@theme/interfaces/ITaskList";

@Injectable({
    providedIn: "root",
})
export class ActivityListService {
    private url: string = `${environment.apiURL}/tasklist`;
    private token: string = this.localStorage.readToken();
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
        }),
    };

    /**
     * Lista todas as listas de atividades cadastradas no sistema
     * @param page - Número da página
     * @param size - Quantidade de Itens
     * @param order - Chave para ordenar
     * @param orderBy - Direção da ordenação (asc ou desc)
     * @returns retorna um Observable de ITaskList
     * que listará as listas de atividades quando a requisição for concluída
     */
    public getTaskList(page: number, size: number, order: number, orderBy: string = "ASC"): Observable<ITaskList> {
        return this.http.get<ITaskList>(`${this.url}?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}`, this.httpOptions);
    }

    /**
     * Cadastra uma lista de atividades no sistema
     * @param tasklist - lista de atividades
     * @returns retorna se a lista de atividades foi cadastrada com sucesso
     */
    public postTaskList(taskList: ITaskList): Observable<ITaskList> {
        return this.http.post<ITaskList>(this.url, taskList, this.httpOptions);
    }

    /**
     * Altera uma lista de atividades
     * @param taskListId - Id da lista de atividades
     * @param taskListName - Nome da lista de atividades
     * @param memberId - Id do membro ao qual a lista está associada
     * @param taskListItems - Atividades dessa lista de atividades
     * @returns retorna se a lista de atividades foi atualizada com sucesso
     */
    public putTaskList(taskListId: string, taskListName: string, memberId: string, taskListItems: ITaskItem[]): Observable<ITaskList> {
        const taskList: ITaskList = {
            id: taskListId,
            name: taskListName,
            memberId: memberId,
            taskListItems: taskListItems,
        };
        return this.http.put<ITaskList>(this.url, taskList, this.httpOptions);
    }

    /**
     * Lista todas as listas de atividades cadastradas no sistema
     * de acordo com o Status
     * @param page - Número da página
     * @param size - Quantidade de Itens
     * @param order - Chave para ordenar
     * @param orderBy - Direção da ordenação (asc ou desc)
     * @param status - Status atual da lista
     * @returns retorna um Observable de ITaskList
     * que listará as listas de atividades quando a requisição for concluída
     */
    public getTaskListByStatus(
        page: number,
        size: number,
        order: number,
        orderBy: string = "ASC",
        status: "Em andamento" | "Finalizada" | "Em espera",
    ): Observable<ITaskList> {
        return this.http.get<ITaskList>(
            `${this.url}/getStatus/?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}&${status}`,
            this.httpOptions,
        );
    }

    /**
     * Lista o histórico com as listas de atividades por membro
     * @returns retorna um Observable de ITaskList
     * que listará o histórico de listas de atividades por membro quando
     * a requisição for concluída
     */
    public getTaskListHistoric(): Observable<ITaskList> {
        return this.http.get<ITaskList>(`${this.url}/history`, this.httpOptions);
    }

    /**
     * Retorna informações de uma lista de atividades
     * @param id - Id da lista de atividades
     * @returns retorna um Observable de ITaskList que
     * listará as informações da lista quando a requisição for concluída
     */
    public getTaskListById(id: string): Observable<ITaskList> {
        return this.http.get<ITaskList>(`${this.url}/${id}`, this.httpOptions);
    }

    /**
     * Apaga uma lista de atividade definitivamente
     * @param id - Id da lista de atividades
     * @returns retorna se a lista foi excluída com sucesso
     */
    public deleteTaskListById(id: string): Observable<ITaskList> {
        return this.http.delete<ITaskList>(`${this.url}/${id}`, this.httpOptions);
    }

    /**
     * Retorna informações de uma lista de atividades de um usuário com status
     * "Em espera" ou "Em andamento"
     * @param memberId - Id de um membro
     * @returns retorna as atividades pertencentes ao membro com o status
     * "Em espera" ou "Em andamento"
     */
    public getTaskListByMemberId(memberId: string): Observable<ITaskList> {
        return this.http.get<ITaskList>(`${this.url}/active/${memberId}`, this.httpOptions);
    }

    /**
     * Define o status da lista de "Em espera" para
     * "Em andamento"
     * @param listId - Identificação da lista
     * @returns se a mudança foi bem sucedida
     */
    public startTaskList(listId: string): Observable<ITaskList> {
        return this.http.patch<ITaskList>(`${this.url}/start/${listId}`, this.httpOptions);
    }

    /**
     * Define o status da lista de "Em andamento" para
     * "Finalizada"
     * @param listId - Identificação da lista
     * @returns se a mudança foi bem sucedida
     */
    public finishTaskList(listId: string): Observable<ITaskList> {
        return this.http.patch<ITaskList>(`${this.url}/finish/${listId}`, this.httpOptions);
    }

    /**
     * Alterna o campo failed da atividade da lista
     * @param taskListId - Identificação da lista de atividades
     * @param taskId - Identificação da atividade na lista de atividades
     * @returns se a mudança foi bem sucedida
     */
    public toggleTaskListItem(taskListId: string, taskId: string): Observable<ITaskList> {
        return this.http.patch<ITaskList>(`${this.url}/toggle/${taskListId}/${taskId}`, this.httpOptions);
    }
}
