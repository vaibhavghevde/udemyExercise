import { Component } from '@angular/core';

@Component({
  selector: 'async-promise-pipe',
  template: `<div>
    <code>promise|async</code>:
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span>Wait for it... {{ greeting | async }}</span>
  </div>`,
})
export class AsyncPromisePipeComponent {
  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;
  message: any;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      clearInterval(this.message);
      this.reset();
    } else {
      this.arrived = true;
       this.message = setInterval(() => {
        this.greeting = new Promise<string>((resolve, reject) => {
          const num = Math.random();
          resolve(num.toString());
        });
      }, 1000);
    }
  }
}
