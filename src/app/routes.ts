import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';


export const
pageComponents = [
  AboutComponent,
  BlogComponent,
  BlogPostComponent,
  BlogPostListComponent,
  CollaborationsComponent,
  ContactComponent,
  HomeComponent,
  PageNotFoundComponent,
  ProjectsComponent,
  ResumeComponent
];

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-list', component: BlogPostListComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'collaborations', component: CollaborationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', component: PageNotFoundComponent }
];
