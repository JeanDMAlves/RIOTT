import { HomePageComponent } from './homePage/home-page.component';
import { NgModule } from "@angular/core";
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
				component: HomePageComponent,
			}
        ],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
