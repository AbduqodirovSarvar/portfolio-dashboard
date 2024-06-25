import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocialNetworkDialogComponent } from './update-social-network-dialog.component';

describe('UpdateSocialNetworkDialogComponent', () => {
  let component: UpdateSocialNetworkDialogComponent;
  let fixture: ComponentFixture<UpdateSocialNetworkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSocialNetworkDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSocialNetworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
