import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

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

interface CurrentJob {
  "company": string,
  "location": string,
  "duration": string,
  "title": string,
  "responsibilities": string[]
}

@Component({
  selector: 'app-resume-widget',
  templateUrl: './resume-widget.component.html',
  styleUrls: ['./resume-widget.component.scss']
})
export class ResumeWidgetComponent implements OnInit {
  currentJob: CurrentJob = {
    company: '',
    location: '',
    duration: '',
    title: '',
    responsibilities: []
  };

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getCareerHistory().subscribe((obj: CareerHistory) => {
      this.currentJob = obj.career_history[0];
    });
  }

}
