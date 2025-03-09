import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: "full"
},{
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
},{
path: 'login',
  loadChildren: () => loadRemoteModule('mfe-remote', './Routes').then((m) => m.routes)
}];
