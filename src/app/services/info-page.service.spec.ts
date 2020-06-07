import { TestBed } from '@angular/core/testing';

import { InfoPageService } from './info-page.service';

describe('InfoPageService', () => {
  let service: InfoPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
