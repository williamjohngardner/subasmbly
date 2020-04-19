import { TestBed } from '@angular/core/testing';

import { AdafruitApiService } from './adafruit-api.service';

describe('AdafruitApiService', () => {
  let service: AdafruitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdafruitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
