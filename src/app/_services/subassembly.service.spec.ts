import { TestBed } from '@angular/core/testing';

import { SubassemblyService } from './subassembly.service';

describe('SubassemblyService', () => {
  let service: SubassemblyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubassemblyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
