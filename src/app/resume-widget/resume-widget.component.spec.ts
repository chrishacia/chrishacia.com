import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWidgetComponent } from './resume-widget.component';

describe('ResumeWidgetComponent', () => {
  let component: ResumeWidgetComponent;
  let fixture: ComponentFixture<ResumeWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeWidgetComponent]
    });
    fixture = TestBed.createComponent(ResumeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
