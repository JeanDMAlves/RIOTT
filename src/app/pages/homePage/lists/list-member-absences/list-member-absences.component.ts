import { Component, Input } from "@angular/core";

@Component({
    selector: "app-list-member-absences",
    templateUrl: "./list-member-absences.component.html",
    styleUrls: ["./list-member-absences.component.css"],
})
export class ListMemberAbsencesComponent {
    @Input() allowance: number = 0;
    @Input() discounts: number = 0;
    /**
     * Reaaliza o cálculo do total a ser recebido pelas tarefas
     * @returns o total menos o desconto
     */
    public getTotalPaid(): number {
        return this.allowance - this.discounts;
    }
}
