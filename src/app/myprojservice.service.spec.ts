import { TestBed } from '@angular/core/testing';

import { MyprojserviceService } from './myprojservice.service';

describe('MyprojserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyprojserviceService = TestBed.get(MyprojserviceService);
    expect(service).toBeTruthy();
  });
});
