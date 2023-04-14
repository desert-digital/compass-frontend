import { TestBed } from '@angular/core/testing';

import { FleetServiceService } from './fleet-service.service';

describe('FleetServiceService', () => {
  let service: FleetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
