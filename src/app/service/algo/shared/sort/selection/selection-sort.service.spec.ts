import { TestBed } from '@angular/core/testing';

import { SelectionSortService } from './selection-sort.service';

describe('SelectionSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionSortService = TestBed.get(SelectionSortService);
    expect(service).toBeTruthy();
  });
});
