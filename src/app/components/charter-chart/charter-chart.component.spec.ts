import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterChartComponent } from './charter-chart.component';

describe('CharterChartComponent', () => {
  let component: CharterChartComponent;
  let fixture: ComponentFixture<CharterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharterChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
