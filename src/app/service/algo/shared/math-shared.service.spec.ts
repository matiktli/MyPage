import { TestBed } from '@angular/core/testing';

import { MathSharedService } from './math-shared.service';

describe('MathSharedService', () => {
  let service: MathSharedService;
  let TABS: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MathSharedService);
    TABS = { 
      ordered: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100],
      reverted: TABS[0].revert(),
      sorted: TABS[0].sort()  
    };

  });

  it('should find min in array', () => {
    let minFound = service.findMinInArray(TABS.sorted);
    expect(minFound).toBe(-1);
  });

  it('should find max in array', () => {
    let maxFound = service.findMaxInArray(TABS.sorted);
    expect(maxFound).toBe(100);
  });
});
