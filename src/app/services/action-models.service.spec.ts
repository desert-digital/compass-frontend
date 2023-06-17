import { TestBed } from '@angular/core/testing';

import { ActionModelsService } from './action-models.service';

describe('ActionModelsService', () => {
  let service: ActionModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
