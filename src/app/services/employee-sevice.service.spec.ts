import { TestBed } from '@angular/core/testing';

import { EmployeeSeviceService } from './employee-sevice.service';

describe('EmployeeSeviceService', () => {
  let service: EmployeeSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
