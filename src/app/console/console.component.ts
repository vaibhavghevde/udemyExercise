import { Subscription } from 'rxjs';
import { ConsoleService } from './console.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
})
export class ConsoleComponent implements OnInit, OnDestroy {
  log: string = '';
  consoleSub = new Subscription();
  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoleSub = this.consoleService.consoleLogEmitter.subscribe(
      (data) => {
        this.log = data + '<br />' + this.log;
      }
    );
  }

  ngOnDestroy(): void {
    this.consoleSub.unsubscribe();
  }
}
