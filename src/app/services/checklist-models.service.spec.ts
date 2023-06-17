import { TestBed } from '@angular/core/testing';

import { ChecklistModelsService } from './checklist-models.service';

describe('ChecklistModelsService', () => {
  let service: ChecklistModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
