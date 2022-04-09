import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() newNumberCreated = new EventEmitter();
  @Output() gameStopped = new EventEmitter();
  myNumber: number = 0;
  myInterval: any;
  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.myInterval = setInterval(() => {
      this.myNumber += 1;
      this.newNumberCreated.emit(this.myNumber.toString());
    }, 1000);
  }

  stopGame() {
    clearInterval(this.myInterval);
    this.myNumber = 0;
    this.gameStopped.emit(true);
  }
}
