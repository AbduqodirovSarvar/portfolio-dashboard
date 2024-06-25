import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSocialNetworkDialogComponent } from './create-social-network-dialog.component';

describe('CreateSocialNetworkDialogComponent', () => {
  let component: CreateSocialNetworkDialogComponent;
  let fixture: ComponentFixture<CreateSocialNetworkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSocialNetworkDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSocialNetworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
