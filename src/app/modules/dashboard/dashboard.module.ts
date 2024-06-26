import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main-page/main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateContentComponent } from './contents/certificate-content/certificate-content.component';
import { SideBarComponent } from './main-page/side-bar/side-bar.component';
import { ContentHeaderComponent } from './main-page/content-header/content-header.component';
import { LanguageContentComponent } from './contents/language-content/language-content.component';

@NgModule({
  declarations: [MainComponent,CertificateContentComponent, SideBarComponent, ContentHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DashboardRoutingModule,
    // ReactiveFormsModule,
    FormsModule,
    LanguageContentComponent
  ],
  exports: [MainComponent, CertificateContentComponent, SideBarComponent, ContentHeaderComponent]
})
export class DashboardModule { }
