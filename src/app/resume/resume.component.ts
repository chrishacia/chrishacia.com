import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

interface Skills {
  skills: string[];
}

interface CareerHistory {
  "career_history": [
    {
      "company": string,
      "location": string,
      "duration": string,
      "title": string,
      "responsibilities": string[]
    }
  ]
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  skills: string[] = [];
  careerHistory: CareerHistory = {
    career_history: [
      {
        company: '',
        location: '',
        duration: '',
        title: '',
        responsibilities: []
      }
    ]
  };

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getSkills().subscribe((obj: Skills) => {
      this.skills = obj.skills;
    });

    this.resumeService.getCareerHistory().subscribe((obj: CareerHistory) => {
      this.careerHistory = obj;
    });
  }

}
