import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  pacificTime: string = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  pacificTimeDate: Date = new Date(this.pacificTime);
  currentYear: number = this.pacificTimeDate.getFullYear();
}
