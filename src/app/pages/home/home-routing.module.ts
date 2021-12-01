import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivitiesComponent } from "./activities/activities.component";
import { HomePageComponent } from "./home.component";
import { ListsComponent } from "./lists/lists.component";

const homeRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            { path: 'first', component: ListsComponent },
            { path: 'second', component: ActivitiesComponent },
        ]
    }
];

@NgModule({
	imports: [RouterModule.forChild(homeRoutes)],
	exports: [RouterModule],
})
export class HomeRoutingModule { }
