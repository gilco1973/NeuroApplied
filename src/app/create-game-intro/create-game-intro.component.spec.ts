import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameIntroComponent } from './create-game-intro.component';

describe('CreateGameIntroComponent', () => {
  let component: CreateGameIntroComponent;
  let fixture: ComponentFixture<CreateGameIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGameIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
