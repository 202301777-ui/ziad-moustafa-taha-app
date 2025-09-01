import { TestBed } from '@angular/core/testing';

import { ZiadService } from './ziad.service';

describe('ZiadService', () => {
  let service: ZiadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZiadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
