import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../console/console.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  isDisplayed = true;
  clickLog: string[] = [];
  logNum = 0;
  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next(
      'directives component activated'
    );
  }

  logClick() {
    this.isDisplayed = !this.isDisplayed;
    this.logNum += 1;
    this.clickLog.push(`Detail display toggled and content is ${
      this.isDisplayed ? 'displayed' : 'hidden'
    }
    and button clicked ${this.logNum} time(s)`);
  }
}
