import { LoggedComponent } from './logged.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from '../../../material.module';
import { NavegationHeaderComponent } from './navegation-header/navegation-header.component';
import { ListsComponent } from './lists/lists.component';
import { ActivitiesComponent } from './activities/activities.component';


@NgModule({
  declarations: [
    LoggedComponent,
    NavegationHeaderComponent,
    ListsComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoggedModule { }
