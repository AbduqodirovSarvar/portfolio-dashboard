import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillDialogComponent } from './create-skill-dialog.component';

describe('CreateSkillDialogComponent', () => {
  let component: CreateSkillDialogComponent;
  let fixture: ComponentFixture<CreateSkillDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSkillDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSkillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
