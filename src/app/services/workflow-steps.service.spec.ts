import { TestBed } from '@angular/core/testing';

import { WorkflowStepsService } from './workflow-steps.service';

describe('WorkflowStepsService', () => {
  let service: WorkflowStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
