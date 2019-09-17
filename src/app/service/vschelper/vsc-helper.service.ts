import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VscHelperService {

  constructor(private http: HttpClient) { }


  getCommitsByUser(): Array<String> {
    return
  }


}
