import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DashboardModule
  ]
})
export class AppModule { }
