import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'login',
  loadComponent: () => import('./login/login.component').then(component => component.LoginComponent),
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];
