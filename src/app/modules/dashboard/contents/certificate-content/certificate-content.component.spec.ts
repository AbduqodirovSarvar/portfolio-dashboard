import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateContentComponent } from './certificate-content.component';

describe('CertificateContentComponent', () => {
  let component: CertificateContentComponent;
  let fixture: ComponentFixture<CertificateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
