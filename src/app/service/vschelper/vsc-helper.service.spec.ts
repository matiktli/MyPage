import { TestBed } from '@angular/core/testing';

import { VscHelperService } from './vsc-helper.service';

describe('VscHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VscHelperService = TestBed.get(VscHelperService);
    expect(service).toBeTruthy();
  });
});
