import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get('/assets/resume/skills.json');
  }

  getCareerHistory(): Observable<any> {
    return this.http.get('/assets/resume/career_history.json');
  }
}
