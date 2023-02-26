import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrdersChartComponent } from './service-orders-chart.component';

describe('ServiceOrdersChartComponent', () => {
  let component: ServiceOrdersChartComponent;
  let fixture: ComponentFixture<ServiceOrdersChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrdersChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOrdersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
