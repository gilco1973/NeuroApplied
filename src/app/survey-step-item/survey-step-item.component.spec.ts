import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStepItemComponent } from './survey-step-item.component';

describe('SurveyStepItemComponent', () => {
  let component: SurveyStepItemComponent;
  let fixture: ComponentFixture<SurveyStepItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyStepItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyStepItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
