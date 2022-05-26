import { Component } from '@angular/core';

@Component({
  selector: 'number-pipe',
  template: `<div>
    <p>
      No specified formatting:
      {{ pi | number }}
      <!--output: '3.142'-->
    </p>

    <p>
      With digitsInfo parameter specified:
      {{ pi | number: '4.1-5' }}
      <!--output: '0,003.14159'-->
    </p>

    <p>
      With digitsInfo and locale parameters specified:
      {{ pi | number: '4.1-5':'en' }}
      <!--output: '0 003,14159'-->
    </p>
  </div>`,
})
export class NumberPipeComponent {
  pi: number = 3.14159265359;
}
