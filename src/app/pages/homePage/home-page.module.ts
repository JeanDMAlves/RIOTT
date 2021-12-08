import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';
import { NavegationHeaderComponent } from './navegation-header/navegation-header.component';
import { ListsComponent } from './lists/lists.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomePageComponent } from './home-page.component';
import { ListMemberItemComponent } from './lists/list-member-item/list-member-item.component';
import { ManageButtonComponent } from './lists/manage-button/manage-button.component';
import { ListMemberActivitiesComponent } from './lists/list-member-activities/list-member-activities.component';
import { ListMemberAbsencesComponent } from './lists/list-member-absences/list-member-absences.component';
import { HomePageRoutingModule } from "./home-page-routing.module";


@NgModule({
  declarations: [
    NavegationHeaderComponent,
    ListsComponent,
    ActivitiesComponent,
    HomePageComponent,
    ListMemberItemComponent,
    ManageButtonComponent,
    ListMemberActivitiesComponent,
    ListMemberAbsencesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
