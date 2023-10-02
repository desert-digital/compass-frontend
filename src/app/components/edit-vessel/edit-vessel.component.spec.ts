import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVesselComponent } from './edit-vessel.component';

describe('EditVesselComponent', () => {
  let component: EditVesselComponent;
  let fixture: ComponentFixture<EditVesselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVesselComponent]
    });
    fixture = TestBed.createComponent(EditVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
