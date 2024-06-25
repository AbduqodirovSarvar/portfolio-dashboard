import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLanguageDialogComponent } from './create-language-dialog.component';

describe('CreateLanguageDialogComponent', () => {
  let component: CreateLanguageDialogComponent;
  let fixture: ComponentFixture<CreateLanguageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLanguageDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLanguageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
