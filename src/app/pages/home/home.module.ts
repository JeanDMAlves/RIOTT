import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from '../../../material.module';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { ListsComponent } from './lists/lists.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomePageComponent } from './home.component';
import { ListMemberItemComponent } from './lists/list-member-item/list-member-item.component';
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    ListsComponent,
    ActivitiesComponent,
    HomePageComponent,
    ListMemberItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
