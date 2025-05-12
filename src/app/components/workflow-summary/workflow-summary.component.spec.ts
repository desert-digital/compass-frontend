import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSummaryComponent } from './workflow-summary.component';

describe('WorkflowSummaryComponent', () => {
  let component: WorkflowSummaryComponent;
  let fixture: ComponentFixture<WorkflowSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
