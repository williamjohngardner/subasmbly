import { TestBed } from '@angular/core/testing';

import { BestBuyApiService } from './best-buy-api.service';

describe('BestBuyApiService', () => {
  let service: BestBuyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestBuyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
