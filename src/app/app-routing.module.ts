import { ListsComponent } from "./pages/homePage/lists/lists.component";
import { HomePageComponent } from "./pages/homePage/home-page.component";
import { NgModule, NgModuleFactory, Type } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginScreenComponent } from "./pages/login/login-screen/login-screen.component";
import { HistoricComponent } from "./pages/homePage/historic/historic.component";

const routes: Routes = [
    {
        path: "pages",
        loadChildren: (): Promise<NgModuleFactory<any> | Type<any> | any> => import("./pages/pages.module").then((module) => module.PagesModule),
    },
    {
        path: "login",
        component: LoginScreenComponent,
    },
    {
        path: "Home",
        component: HomePageComponent,
        children: [
            { path: "Listas", component: ListsComponent },
            { path: "Histórico", component: HistoricComponent },
            // { path: 'Atividades', component: ActivitiesComponent },
            // { path: 'Membros', component: MembersComponent },
        ],
    },
    { path: "**", redirectTo: "login" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
