import { Component, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/console/console.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  evens: number[] = [];
  odds: number[] = [];
  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next(
      'game controller component activated'
    );
  }

  getNewNumber(data: number) {
    data % 2 == 0 ? this.evens.push(data) : this.odds.push(data);
  }

  isGameStopped(isGameStopped: boolean) {
    if (isGameStopped) {
      this.evens = [];
      this.odds = [];
    }
  }
}
