import { NgModule } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',
    component: HomeComponent,
    pathMatch: 'full',
    loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
    }, // Default route
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

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }