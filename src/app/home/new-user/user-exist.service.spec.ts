import { TestBed } from '@angular/core/testing';

import { UserExistService } from './user-exist.service';

describe('UserExistService', () => {
  let service: UserExistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
