import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-game-intro',
  templateUrl: './create-game-intro.component.html',
  styleUrls: ['./create-game-intro.component.scss']
})
export class CreateGameIntroComponent implements OnInit {
  user: { firstName: string };
  constructor() { }

  ngOnInit() {
    this.user = {
      firstName: 'Gil'
    };
  }
  createGame() {

  }
}
