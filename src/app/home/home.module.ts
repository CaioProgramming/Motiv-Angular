import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home.component";
import { TuiCardModule } from "@taiga-ui/experimental";
import { TuiTilesModule } from "@taiga-ui/kit";

@NgModule({ 
    imports: [BrowserModule, TuiCardModule, TuiTilesModule],
    declarations: [HomeComponent],
    providers: [],
})

export class HomeModule { }