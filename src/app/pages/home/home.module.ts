import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { TuiCardModule } from "@taiga-ui/experimental";
import { CommonModule } from "@angular/common";
import { QuoteCardComponent } from "../../quotes/component/quote.card.component.component";
import { TuiProgressModule } from "@taiga-ui/kit";


@NgModule({ 
    imports: [ CommonModule, TuiCardModule, TuiProgressModule],
    declarations: [HomeComponent, QuoteCardComponent],
    providers: [],
})

export class HomeModule { }