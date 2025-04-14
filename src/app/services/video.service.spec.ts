import { TestBed } from '@angular/core/testing';

import { VidepService } from './videp.service';

describe('VidepService', () => {
  let service: VidepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VidepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
