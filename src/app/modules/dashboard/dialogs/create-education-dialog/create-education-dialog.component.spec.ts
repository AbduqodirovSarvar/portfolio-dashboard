import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEducationDialogComponent } from './create-education-dialog.component';

describe('CreateEducationDialogComponent', () => {
  let component: CreateEducationDialogComponent;
  let fixture: ComponentFixture<CreateEducationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEducationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEducationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
