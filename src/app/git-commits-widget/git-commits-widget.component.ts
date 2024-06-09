import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

interface GitDescription { [key: string]: string; };

@Component({
  selector: 'app-git-commits-widget',
  templateUrl: './git-commits-widget.component.html',
  styleUrls: ['./git-commits-widget.component.scss']
})
export class GitCommitsWidgetComponent {
  username = 'chrishacia'; // Example username, you can make this dynamic
  repos: any[] = [];
  selectRepos: any[] = [
    'blankpage.org', 'chrishacia.com', 'domainsvault', 'slapjs.com',
  ];
  gitDescriptions: GitDescription =
    {
      'blankpage.org': 'BlankPage.org: A collaborative real-time text editor. Written with Node.js, Express.js, it features Socket.io, MySQL, Bootstrap, and more.',
      'chrishacia.com': 'My personal website. Written with Angular and Bootstrap',
      'domainsvault': 'A very basic domain parking and reselling page. Written with Angular, ExpressJS, and MySQL',
      'slapjs.com': 'SlapJS.com: Accelerate web development with this Node.js, Express.js, and React.js boilerplate. Featuring MySQL, Bootstrap, SASS, and more, it streamlines building dynamic sites and services, focusing on rapid innovation and user experience.',
    };

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getGitRepoCommits();
  }

  /**
   * @returns boolean - Whether the data in localStorage is less than 24 hours old
   */
  isDataOlderThan24Hours(): boolean {
    const hours24 = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const storedData = localStorage.getItem('repos-fetched');

    // If there's no data in localStorage, return true
    if (!storedData) {
        return true;
    }

    const storedDate = new Date(storedData).getTime();
    const now = new Date().getTime();

    // Check if the stored date is more than 24 hours older than the current time
    return (now - storedDate) > hours24;
  }

  /**
   * Get the repositories and commits from the Github API and store them in localStorage
   * Thus saving the API calls for the next 24 hours from the same IP address, helps with rate limiting
   * @returns void - The repositories and commits are stored in the class property
   */
   getGitRepoCommits: any = async () => {
    const storedRepos = localStorage.getItem('repos');

    if (storedRepos && !this.isDataOlderThan24Hours()) {
      this.repos = JSON.parse(storedRepos);
      return;
    }

    this.repos = await Promise.all(this.selectRepos.map(async repo => {
      try {
        const commits = await this.githubService.getCommits(this.username, repo);
        return { name: repo, accordianId: `ch_accordian_${repo.replace(/\W|_/g, '')}`, desc: this.gitDescriptions[repo], repo, commits };
      } catch (error) {
        console.error('Error in fetching commits:', error);
        return { name: repo, accordianId: `ch_accordian_0`, repo, commits: [] }; // Handle error case
      }
    }));

    localStorage.setItem('repos', JSON.stringify(this.repos));
    localStorage.setItem('repos-fetched', new Date().toISOString());
  }
}
