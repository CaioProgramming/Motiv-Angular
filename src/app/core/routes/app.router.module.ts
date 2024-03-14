import { NgModule } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { UserComponent } from '../../pages/user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from '../../pages/politics/privacy.policy/privacy.policy.component';

const routes: Routes = [
    { path: '',
    component: HomeComponent,
    pathMatch: 'full',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
    }, // Default route
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'user',
        component: UserComponent,
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule)
    },
    {
        path: 'policy',
        component: PrivacyPolicyComponent,
        loadChildren: () => import('../../pages/politics/privacy.policy/privacy.module').then(m => m.PrivacyPolicyModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }