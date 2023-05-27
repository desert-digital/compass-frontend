import { TestBed } from '@angular/core/testing';

import { ChecklistStepsService } from './checklist-steps.service';

describe('ChecklistStepsService', () => {
  let service: ChecklistStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
