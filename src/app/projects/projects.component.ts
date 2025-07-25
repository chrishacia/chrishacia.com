import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading = true;
  error: any = null;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: data => {
        this.projects = data;
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load projects.json', err);
        this.error = err;
        this.loading = false;
      }
    });
  }
}
