import { Component, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/console/console.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent implements OnInit {
  constructor(private consoleService: ConsoleService) {}
  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next(
      'successAlert component activated'
    );
  }
}
