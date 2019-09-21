import { Injectable } from '@angular/core';
import { MathSharedService } from '../../math-shared.service';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {

  constructor(private mathUtil: MathSharedService) { }


  /**
   * Bubble sort ASC O(n^2)
   * @param tab 
   */
  public bubbleSort(tab: number[]) {
    let n = tab.length;
    for (let i = 0;i < n-1; i++) {
      for (let j = 0;j < n - i - 1; j++) {
        if (tab[j] > tab[j+1]) {
          this.mathUtil.swap(tab, j, j+1);
        }
      }
    }
  }

  /**
   * Bubble sort DESC O(n^2)
   * @param tab 
   */
  public bubbleSortReverted(tab: number[]) {
    let n = tab.length;
    for (let i = 0;i < n-1; i++) {
      for (let j = 0;j < n - i - 1; j++) {
        if (tab[j] < tab[j+1]) {
          this.mathUtil.swap(tab, j, j+1);
        }
      }
    }
  }
  
}
