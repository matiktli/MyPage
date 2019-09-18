import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commit, VscType } from './model/commit.dto';

@Injectable({
  providedIn: 'root'
})
export class VscHelperService {

  
  constructor(private http: HttpClient) { }


  getCommitsFromSourceByUser(source: VscType, username: string): Array<Commit> {
    switch(source) {
      case VscType.GITHUB:
        return this.getCommitsFromGitHub(username);
    }
    return null; //TODO
  }

  private getCommitsFromGitHub(username: string): Array<Commit> {
    return this.getReposByUserFromGitHub(username) 
  }

  private getReposByUserFromGitHub(username: string): any {
    let url = "https://api.github.com/users/" + username + "/repos";
    const repoPromise = new Promise( resolveRepos => {
      return this.http.get<any>(url).subscribe(resultRepos => {
        resolveRepos(resultRepos);
      });
    });
    
    repoPromise.then(reposRawData => {
      console.log("User: " + username + " repos:\n", reposRawData);
    });
  }


}
