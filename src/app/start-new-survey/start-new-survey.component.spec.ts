import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewSurveyComponent } from './start-new-survey.component';

describe('StartNewSurveyComponent', () => {
  let component: StartNewSurveyComponent;
  let fixture: ComponentFixture<StartNewSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartNewSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNewSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
