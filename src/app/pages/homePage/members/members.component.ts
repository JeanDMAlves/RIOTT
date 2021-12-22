import { Component, OnInit } from "@angular/core";
import { MemberService } from "src/app/@core/services/member.service";
import { IButton } from "src/app/@theme/interfaces/IButton";
import { IData } from "src/app/@theme/interfaces/IData";
import { IMember } from "src/app/@theme/interfaces/IMember";
@Component({
    selector: "app-members",
    templateUrl: "./members.component.html",
    styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit {
    public memberList: IMember[] = [];
    public memberHeaderTitle: string = "Membros";
    public memberHeaderButton: IButton = {
        label: "Cadastrar novo membro",
        class: "dark-green-button",
        action: () => {
            console.log(this.memberList);
        },
    };

    constructor(private memberService: MemberService) {}

    dataItem: IData[] = [
        {
            title: "Membro:",
            value: "Luisa Sousa",
        },
        {
            title: "Data de nascimento:",
            value: "Luisa Sousa",
        },
        {
            title: "Valor da mesada:",
            value: "R$ 100,00",
        },
    ];

    memberBoxButtons: IButton[] = [
        {
            label: "Excluir",
            class: "orange-button",
        },
        {
            label: "Editar",
            class: "light-green-button",
        },
        {
            label: "Ver lista",
            class: "dark-green-button",
        },
    ];

    public ngOnInit(): void {
        this.memberService.getMembers(1, 50, 1).subscribe((data) => {
            const members: IMember[] = data["data"]["rows"];
            for (const member of members) {
                this.memberList.push(member);
            }
        });
    }
}
