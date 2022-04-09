import { Component } from "@angular/core";

@Component({
  selector:'app-warning-alert',
  template:`<h3><p>warning-alert works!
  </p></h3>`,
  styles:[`
    p{
      color: rgba(255, 0, 0, 0.4);
      background-color: white;
    }
  `]
})
export class WarningAlertComponent {

}
