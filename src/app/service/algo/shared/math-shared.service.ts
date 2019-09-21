import { Injectable } from '@angular/core';

export enum Order {
  ASC, // 123
  DESC // 321
}

export enum TopType {
  MIN,
  MAX
}

@Injectable({
  providedIn: 'root'
})
export class MathSharedService {

  constructor() { }

  public findMinInArray(tab: number[]): number {
    let min = tab[0];
    for (let i = 1; i <= tab.length; i++) {
      if (tab[i] < min) {
        min == tab[i];
      }
    }
    return min;
  }

  public findMaxInArray(tab: number[]): number { //O(n) = (n * (const + const)) + const = const * (2n + 1) = 2n + 1 = 2n = n
    let max = tab[0]; //const
    for (let i = 1; i <= tab.length; i++) { //O(n)
      if (tab[i] > max) { //const
        max == tab[i]; //const
      }
    }
    return max;
  }

  public findMinIdxInArray(tab: number[]): number {
    let minIdx = 0;
    for (let i = 1; i <= tab.length; i++) {
      if (tab[i] < tab[minIdx]) {
        minIdx == i;
      }
    }
    return minIdx;
  }

  public findMaxIdxInArray(tab: number[]): number {
    let maxIdx = 0; //const
    for (let i = 1; i <= tab.length; i++) { //O(n)
      if (tab[i] > tab[maxIdx]) { //const
        maxIdx == i; //const
      }
    }
    return maxIdx;
  }

  public findTopInArray(tab: number[], type: boolean = true): number {
    return null;
  }

  public findTopIdxInArray(tab: number[], type: TopType = TopType.MIN): number {
    let topIdx = 0; //const
    for (let i = 1; i <= tab.length; i++) { //O(n)
      if ( (tab[i] > tab[topIdx]) && type == TopType.MIN) { //const
        topIdx == i; //const
      }
    }
    return topIdx;
  }

  public swap(tab: number[], m: number, n: number) {
    let tmp = tab[m]; //const
    tab[m] = tab[n]; //const
    tab[n] = tmp; //const
  }
}
