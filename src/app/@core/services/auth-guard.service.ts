import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class AuthGuardService implements CanActivateChild {
    constructor(
        private localStorage: LocalStorageService,
        private router: Router
    ) {}

    /**
     * Verifica se as rotas poderão ser acessadas 
     * @returns true se puder acessar e false caso contrário
     */
    public canActivateChild(): boolean {
        if (localStorage.readToken()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
