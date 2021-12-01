import { NgModule, NgModuleFactory, Type } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { LoginScreenComponent } from './login/login-screen/login-screen.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
        children: [
			{
				path: 'login',
				component: LoginScreenComponent,
			},
			{
				path: 'home',
                loadChildren: (): Promise<NgModuleFactory<any> | Type<any> | any> => import('./home/home.module').then(module => module.HomeModule),
			}
        ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
