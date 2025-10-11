import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomeComponent),
  },
  {
    path: '',
    loadChildren: () => import('./modules/doctors/doctor.route').then(m => m.DrRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./modules/patients/patients.route').then(m => m.PtRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./home/home.page').then((m) => m.HomeComponent),
  },

];
