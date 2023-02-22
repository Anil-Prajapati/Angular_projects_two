import { TestBed } from '@angular/core/testing';

import { MpviesService } from './mpvies.service';

describe('MpviesService', () => {
  let service: MpviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
