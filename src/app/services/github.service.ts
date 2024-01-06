import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getRepos(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/repos`)
      .pipe(catchError(this.handleError));
  }

  getCommits(owner: string, repo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/repos/${owner}/${repo}/commits`)
    .pipe(
      map(commits => commits.slice(0, 5)), // Get only the last 5 commits
      catchError(this.handleError) // then handle the error
    );
  }
}
