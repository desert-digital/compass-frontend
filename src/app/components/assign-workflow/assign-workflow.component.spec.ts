import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWorkflowComponent } from './assign-workflow.component';

describe('WorkflowComponent', () => {
  let component: AssignWorkflowComponent;
  let fixture: ComponentFixture<AssignWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
