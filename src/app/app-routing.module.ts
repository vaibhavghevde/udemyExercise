import { HttpComponent } from './http/http.component';
import { PipesComponent } from './pipesTest/pipes-component/pipes.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdFormComponent } from './td-form/td-form.component';
import { ObservablesComponent } from './observables/observables.component';
import { SuccessAlertComponent } from './successAlert/success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { MainComponent } from './game-controller/main/main.component';
import { ServiceMainComponent } from './service-assignment/service-main/service-main.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'assignment5', component: ServiceMainComponent },
      { path: 'assignment4', component: MainComponent },
      { path: 'assignment3', component: DirectivesComponent },
      { path: 'assignment2', component: DataBindingComponent },
      { path: 'assignment1', component: SuccessAlertComponent },
      { path: 'observables', component: ObservablesComponent },
      { path: 'tdform', component: TdFormComponent },
      { path: 'reactiveform', component: ReactiveFormsComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'http', component: HttpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
