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
                loadChildren: (): Promise<NgModuleFactory<any> | Type<any> | any> => import('./homePage/home-page.module').then(module => module.HomePageModule),
			}
        ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
