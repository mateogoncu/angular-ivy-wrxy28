import { TestBed } from '@angular/core/testing';

import { ObserverPostingService } from './observer-posting.service';

describe('ObserverPostingService', () => {
  let service: ObserverPostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverPostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
