import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducationDialogComponent } from './update-education-dialog.component';

describe('UpdateEducationDialogComponent', () => {
  let component: UpdateEducationDialogComponent;
  let fixture: ComponentFixture<UpdateEducationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEducationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEducationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
