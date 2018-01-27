import { TestBed, inject } from '@angular/core/testing';

import { B2cprofileService } from './b2cprofile.service';

describe('B2cprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [B2cprofileService]
    });
  });

  it('should be created', inject([B2cprofileService], (service: B2cprofileService) => {
    expect(service).toBeTruthy();
  }));
});
