import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main-page/main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateContentComponent } from './contents/certificate-content/certificate-content.component';
import { SideBarComponent } from './main-page/side-bar/side-bar.component';
import { ContentHeaderComponent } from './main-page/content-header/content-header.component';
import { ContentBodyComponent } from './main-page/content-body/content-body.component';

@NgModule({
  declarations: [MainComponent,CertificateContentComponent, SideBarComponent, ContentHeaderComponent, ContentBodyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DashboardRoutingModule,
    FormsModule
  ],
  exports: [MainComponent, CertificateContentComponent, SideBarComponent, ContentHeaderComponent, ContentBodyComponent]
})
export class DashboardModule { }
