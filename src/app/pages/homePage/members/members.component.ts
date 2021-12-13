import { Component } from '@angular/core';
import { Ibutton, Idata } from 'src/app/@theme/components/list-activity-card/list-activity-card.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
	tittle: string = 'Membros'
	button: string = 'Cadastrar novo membro'

  dataTeste:Idata[] = [
		{
		title: 'Membro:',
		value:'Luisa Sousa'
		},
    {
      title: 'Data de nascimento:',
      value:'Luisa Sousa'
    },
    {
      title: 'Valor da mesada:',
      value:'R$ 100,00'
    },
	]

  buttonTeste: Ibutton[] = [
		{
			label: 'Excluir',
			class: 'orange-button',
		},
		{
			label: 'Editar',
			class: 'light-green-button',
		},
		{
			label: 'Ver lista',
			class: 'dark-green-button',
		},
	]
}
