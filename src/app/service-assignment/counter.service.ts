import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeTolInactive: number = 0;
  inactiveToActive: number = 0;

  CountActions(action: string) {
    if (action == 'active') {
      this.inactiveToActive++;
      console.log('inactiveToActive : ' + this.inactiveToActive);
    } else {
      this.activeTolInactive++;
      console.log('activeTolInactive : ' + this.activeTolInactive);
    }
  }
}
