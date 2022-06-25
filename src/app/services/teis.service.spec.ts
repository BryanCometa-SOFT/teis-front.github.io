import { TestBed } from '@angular/core/testing';

import { TeisService } from './teis.service';

describe('TeisService', () => {
  let service: TeisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
