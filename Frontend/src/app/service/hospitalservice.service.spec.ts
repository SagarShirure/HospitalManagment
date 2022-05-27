import { TestBed } from '@angular/core/testing';

import { HospitalserviceService } from './hospitalservice.service';

describe('HospitalserviceService', () => {
  let service: HospitalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
