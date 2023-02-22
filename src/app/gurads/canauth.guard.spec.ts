import { TestBed } from '@angular/core/testing';

import { CanauthGuard } from './canauth.guard';

describe('CanauthGuard', () => {
  let guard: CanauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
