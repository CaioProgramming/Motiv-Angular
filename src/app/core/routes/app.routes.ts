import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'user',
        component: UserComponent,
        loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
    }
];
