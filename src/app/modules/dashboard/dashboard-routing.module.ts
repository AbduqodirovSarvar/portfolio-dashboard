import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateContentComponent } from './contents/certificate-content/certificate-content.component';

const routes: Routes = [
  {
    path: "",component: CertificateContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
