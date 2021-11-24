import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";

@NgModule({
	imports: [
        PagesRoutingModule,
        ThemeModule
	],
	declarations: [
		PagesComponent,
	],
	providers: []
})
export class PagesModule { }
