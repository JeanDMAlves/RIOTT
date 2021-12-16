import { Observable } from "rxjs";
import { IMember } from "./../../@theme/interfaces/IMember";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
export class MemberService {
    private url: string = `${environment.apiURL}/member`;
    private token: string = this.localStorage.readToken();
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
        }),
    };

    /**
     * Retorna a lista dos membros cadastrados
     * @param page - Número da página
     * @param size - Quantidade de itens
     * @param order - Chave para ordenar
     * @param orderBy - Direção da ordenação
     * @returns Um observable de IMember
     * que listará os membros quando a requisição for concluída
     */
    public getMembers(page: number, size: number, order: number, orderBy: string = "ASC"): Observable<IMember> {
        return this.http.get<IMember>(`${this.url}?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}`, this.httpOptions);
    }

    /**
     * Adiciona um membro na lista de membros
     * @param name - Nome do Membro
     * @param photo - foto do Membro
     * @param birthday - aniversário do Membro
     * @param reward - mesada do Membro
     * @returns se o usuário foi cadastrado com sucesso
     */
    public postMember(name: string, photo: string, birthday: string, reward: number): Observable<IMember> {
        const newMember: IMember = {
            name: name,
            photo: photo,
            birthday: birthday,
            reward: reward,
        };
        return this.http.post<IMember>(this.url, newMember, this.httpOptions);
    }

    /**
     * Altera os dados de um membro através do id
     * @param - id
     * @param - name
     * @param - birthday
     * @param - reward
     * @param - photo
     * @returns um observable que informa se o membro
     * foi alterado com sucesso
     */
    public putMember(id: string, name: string, birthday: string, reward: number, photo: string = ""): Observable<IMember> {
        const alteredMember: IMember = {
            id: id,
            name: name,
            photo: photo,
            birthday: birthday,
            reward: reward,
        };
        return this.http.put<IMember>(this.url, alteredMember, this.httpOptions);
    }

    /**
     * Retorna um membro através de seu id
     * @param id - id do membro
     * @returns Um observable que monitorará a requisição,
     * caso seja bem sucedida retornará o membro
     */
    public getMemberById(id: string): Observable<IMember> {
        return this.http.get<IMember>(this.url + `/${id}`, this.httpOptions);
    }

    /**
     * Deleta um membro a partir do seu id
     * @param id - id do membro
     * @returns Um observable que informa se o membro
     * foi excluído com sucesso
     */
    public deleteMemberById(id: string): Observable<IMember> {
        return this.http.delete<IMember>(this.url + `/${id}`, this.httpOptions);
    }
}
