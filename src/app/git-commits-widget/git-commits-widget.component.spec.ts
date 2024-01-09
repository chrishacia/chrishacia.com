import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCommitsWidgetComponent } from './git-commits-widget.component';

describe('GitCommitsWidgetComponent', () => {
  let component: GitCommitsWidgetComponent;
  let fixture: ComponentFixture<GitCommitsWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitCommitsWidgetComponent]
    });
    fixture = TestBed.createComponent(GitCommitsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
