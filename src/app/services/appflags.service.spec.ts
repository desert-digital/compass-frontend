import { TestBed } from '@angular/core/testing';

import { AppflagsService } from './appflags.service';

describe('AppflagsService', () => {
  let service: AppflagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppflagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
