import { Component, OnInit } from '@angular/core';

import { ConsoleService } from '../console/console.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  username = '';

  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next(
      'data binding component activated'
    );
  }

  emptyInput() {
    this.username = '';
  }
}
