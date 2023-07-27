import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVesselComponent } from './add-vessel.component';

describe('AddVesselComponent', () => {
  let component: AddVesselComponent;
  let fixture: ComponentFixture<AddVesselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVesselComponent]
    });
    fixture = TestBed.createComponent(AddVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
