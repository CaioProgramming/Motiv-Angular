import { NgModule } from "@angular/core";
import { PrivacyPolicyComponent } from "./privacy.policy.component";
import { CommonModule } from "@angular/common";
import { TuiCardModule } from "@taiga-ui/experimental";
import { PolicyCardComponent } from "./card/policy.card/policy.card.component";

@NgModule({ 
    imports: [CommonModule, TuiCardModule],
    declarations: [PrivacyPolicyComponent, PolicyCardComponent],
    providers: [],
})

export class PrivacyPolicyModule { }