import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServiceOrdersComponent } from './manage-service-orders.component';

describe('ManageServiceOrdersComponent', () => {
  let component: ManageServiceOrdersComponent;
  let fixture: ComponentFixture<ManageServiceOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageServiceOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageServiceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
