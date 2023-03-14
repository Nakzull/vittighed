import { TestBed } from '@angular/core/testing';

import { PunchlineService } from './punchline.service';

describe('PunchlineService', () => {
  let service: PunchlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
