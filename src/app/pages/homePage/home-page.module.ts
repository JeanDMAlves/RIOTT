import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from '../../../material.module';
import { NavegationHeaderComponent } from './navegation-header/navegation-header.component';
import { ListsComponent } from './lists/lists.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    NavegationHeaderComponent,
    ListsComponent,
    ActivitiesComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoggedModule { }
