import { TestBed } from '@angular/core/testing';

import { FeedservicService } from './feedservic.service';

describe('FeedservicService', () => {
  let service: FeedservicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedservicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
