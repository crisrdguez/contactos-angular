import { TestBed } from '@angular/core/testing';

import { RandomContactService } from './random-contact.service';

describe('RandomContactService', () => {
  let service: RandomContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
