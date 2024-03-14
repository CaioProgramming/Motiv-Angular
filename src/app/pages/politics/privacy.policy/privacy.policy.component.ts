import { Component } from '@angular/core';
import { appSettings } from '../../../core/app.settings';
import { appPolicies } from '../data/infos/app.politics';

@Component({
  selector: 'app-privacy.policy',
  templateUrl: './privacy.policy.component.html',
  styleUrl: './privacy.policy.component.css'
})
export class PrivacyPolicyComponent {

  appName = appSettings.name;
  launchYear = appSettings.launch;
  policies = appPolicies;
}
