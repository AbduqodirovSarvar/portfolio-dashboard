import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageContentComponent } from './language-content.component';

describe('LanguageContentComponent', () => {
  let component: LanguageContentComponent;
  let fixture: ComponentFixture<LanguageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
