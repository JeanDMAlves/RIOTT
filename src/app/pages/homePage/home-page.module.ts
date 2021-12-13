import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NavegationHeaderComponent } from './navegation-header/navegation-header.component';
import { ListsComponent } from './lists/lists.component';
import { HomePageComponent } from './home-page.component';
import { ListMemberItemComponent } from './lists/list-member-item/list-member-item.component';
import { ManageButtonComponent } from './lists/manage-button/manage-button.component';
import { ListMemberActivitiesComponent } from './lists/list-member-activities/list-member-activities.component';
import { ListMemberAbsencesComponent } from './lists/list-member-absences/list-member-absences.component';
import { HomePageRoutingModule } from "./home-page-routing.module";
import { ThemeModule } from "src/app/@theme/theme.module";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    NavegationHeaderComponent,
    ListsComponent,
    HomePageComponent,
    ListMemberItemComponent,
    ManageButtonComponent,
    ListMemberActivitiesComponent,
    ListMemberAbsencesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomePageRoutingModule,
    ThemeModule,
    RouterModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class HomePageModule { }
