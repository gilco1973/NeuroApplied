import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStepComponent } from './survey-step.component';

describe('SurveyStepComponent', () => {
  let component: SurveyStepComponent;
  let fixture: ComponentFixture<SurveyStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
