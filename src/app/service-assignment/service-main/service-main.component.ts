import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/console/console.service';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css'],
  providers: [UsersService],
})
export class ServiceMainComponent implements DoCheck, OnInit {
  activeToInactive: number = 0;
  inacctiveToActive: number = 0;

  constructor(
    private counterService: CounterService,
    private consoleService: ConsoleService
  ) {}

  ngDoCheck(): void {
    this.activeToInactive = this.counterService.activeTolInactive;
    this.inacctiveToActive = this.counterService.inactiveToActive;
  }
  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next(
      'services component activated'
    );
  }
}
