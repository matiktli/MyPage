import { Injectable } from '@angular/core';
import { MathSharedService } from '../../math-shared.service';

/**
 * Selection sort implementations
 */
@Injectable({
  providedIn: 'root'
})
export class SelectionSortService {

  
  constructor(private mathUtil: MathSharedService) { }

  /**
   * Selection sort ASC O(n^2)
   * @param tab 
   */
  public selectionSort(tab: number[]) { // O(n^2)
    let n = tab.length; //const
    for (let i = 0; i <= n-1; i++) { //O(n)
      let smallerArray = tab.slice(i+1, n);
      let minIdx = this.mathUtil.findMinIdxInArray(smallerArray); //O(n)
      this.mathUtil.swap(tab, 0, minIdx); 
    }
  };

  /**
   * Selection sort DESC O(n^2)
   * @param tab 
   */
  public selectionSortReverted(tab: number[]) {
    let n = tab.length;
    for (let i = 0; i <= n-1; i++) {
      let smallerArray = tab.slice(i+1, n);
      let maxIdx = this.mathUtil.findMaxIdxInArray(smallerArray);
      this.mathUtil.swap(tab, 0, maxIdx);
    }
  }
}
