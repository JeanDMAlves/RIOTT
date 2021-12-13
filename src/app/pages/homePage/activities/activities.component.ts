import { Component } from '@angular/core';
import { Idata, Ibutton } from 'src/app/@theme/components/list-activity-card/list-activity-card.component';
//import { ActivityService } from 'src/app/@core/services/activity.service';
@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
	tittle:string = 'Atividades';
	button: string= 'Cadastrar nova atividade';
	// constructor(private activities: ActivityService){}
	// ngOnInit(): void {
	// 	this.activities.getActivities(1, 10, 1, 'ASC')
	// 	.subscribe((dados) => {
	// 		console.log(dados);
	// 	}
	// 	);
	// }
	dataTeste:Idata[] = [
		{
		title: 'Descrição da atividade',
		value:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac curabitur ante lectus.'
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
	]
}