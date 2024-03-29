import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { pageComponents, routes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GitCommitsWidgetComponent } from './git-commits-widget/git-commits-widget.component';
import { ResumeWidgetComponent } from './resume-widget/resume-widget.component';

@NgModule({
  declarations: [
    ...pageComponents,
    AppComponent,
    SidebarComponent,
    GitCommitsWidgetComponent,
    ResumeWidgetComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
