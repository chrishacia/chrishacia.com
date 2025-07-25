import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  imageSrc: string;
  alt: string;
  text: string;
  githubLink?: string;
  liveLink?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private url = 'assets/screens/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }
}
