import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOwnersComponent } from './manage-owners.component';

describe('ManageOwnersComponent', () => {
  let component: ManageOwnersComponent;
  let fixture: ComponentFixture<ManageOwnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageOwnersComponent]
    });
    fixture = TestBed.createComponent(ManageOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
