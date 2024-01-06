import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username = 'chrishacia'; // Example username, you can make this dynamic
  repos: any[] = [];
  selectRepos: any[] = [
    'domainsvalut', 'domainsvault-be', 'slapjs.com', 'slapjs-react-uploader', 'chrishacia.com'
  ];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    return;
    this.githubService.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
      this.repos.forEach(repo => {
        if (repo.fork || !this.selectRepos.includes(repo.name)) {
          return;
        }
        this.githubService.getCommits(this.username, repo.name).subscribe(commits => {
          repo.commits = commits;
        });
      });
    });
  }
}
