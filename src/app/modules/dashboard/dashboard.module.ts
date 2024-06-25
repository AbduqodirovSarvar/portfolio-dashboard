import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateContentComponent } from './contents/certificate-content/certificate-content.component';

@NgModule({
  declarations: [MainComponent,CertificateContentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DashboardRoutingModule,
    // ReactiveFormsModule,
    FormsModule
  ],
  exports: [MainComponent, CertificateContentComponent]
})
export class DashboardModule { }
