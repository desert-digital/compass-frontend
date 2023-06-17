import { TestBed } from '@angular/core/testing';

import { WorkflowModelsService } from './workflow-models.service';

describe('WorkflowModelsService', () => {
  let service: WorkflowModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
