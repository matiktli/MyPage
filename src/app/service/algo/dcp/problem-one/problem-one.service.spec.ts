import { TestBed } from '@angular/core/testing';

import { ProblemOneService } from './problem-one.service';

describe('ProblemOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemOneService = TestBed.get(ProblemOneService);
    expect(service).toBeTruthy();
  });
});
