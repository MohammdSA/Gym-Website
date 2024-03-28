import { TestBed } from '@angular/core/testing';

import { UpcomingClassService } from './upcoming-class.service';

describe('UpcomingClassService', () => {
  let service: UpcomingClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
