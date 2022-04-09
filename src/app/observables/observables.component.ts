import { filter, map } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Observer } from 'rxjs-compat';

import { ConsoleService } from '../console/console.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  mySubscription: Subscription = new Subscription();
  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {
    this.consoleService.consoleLogEmitter.next(
      'observables component activated'
    );
    const customIntervalObs = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!!!!'));
        }
        count++;
      }, 1000);
    });
    this.mySubscription = customIntervalObs
      .pipe(
        filter((data) => {
          return data % 2 === 0;
        }),
        map((data) => {
          return 'Round: ' + data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Completed!');
        }
      );
    // this.mySubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
