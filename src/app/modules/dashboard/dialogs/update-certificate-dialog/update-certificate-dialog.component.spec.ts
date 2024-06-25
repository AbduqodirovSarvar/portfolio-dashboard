import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCertificateDialogComponent } from './update-certificate-dialog.component';

describe('UpdateCertificateDialogComponent', () => {
  let component: UpdateCertificateDialogComponent;
  let fixture: ComponentFixture<UpdateCertificateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCertificateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCertificateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
