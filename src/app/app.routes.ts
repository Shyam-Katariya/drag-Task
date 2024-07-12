import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo:'dashboard'
    }, {
        path: 'dashboard',
        loadComponent:() => import('./dashbord/dashbord.component').then((e)=>e.DashbordComponent)
    },
    {
        path: '**',
        redirectTo:'dashboard'
    }
];
