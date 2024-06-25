import { Routes } from '@angular/router';
import { MainComponent } from './modules/dashboard/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', loadChildren:()=> import('./modules/dashboard/dashboard.module').then(m=> m.DashboardModule)}
    ],
  },
];
