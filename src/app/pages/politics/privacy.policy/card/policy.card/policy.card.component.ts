import { Component, Input } from '@angular/core';
import { PolicyDetails } from '../../../data/model/policy.details';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy.card.component.html',
  styleUrl: './policy.card.component.css'
})
export class PolicyCardComponent {

  @Input() policyData: PolicyDetails | undefined;
}
