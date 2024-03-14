import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { UserComponent } from '../../pages/user/user.component';

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
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'user',
        component: UserComponent,
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule)
    }
];
