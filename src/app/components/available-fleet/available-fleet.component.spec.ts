import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFleetComponent } from './available-fleet.component';

describe('AvailableFleetComponent', () => {
  let component: AvailableFleetComponent;
  let fixture: ComponentFixture<AvailableFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableFleetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
