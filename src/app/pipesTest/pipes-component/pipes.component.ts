import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  strReverse: string = '';
  strWord: string = '';
  sorted: string[] = [];
  unsorted: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  onAddWord() {
    this.sorted.push(this.strWord);
    this.unsorted.push(this.strWord);
    this.strWord = '';
  }
}
