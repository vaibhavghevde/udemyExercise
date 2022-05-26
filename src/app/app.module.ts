import { UseCustomPipesComponent } from './pipesTest/pipes-component/custompipes/usecustompipes.component';
import { ShortenPipe } from './pipesTest/pipes-component/custompipes/shorten.pipe';
import { KeyValuePipeComponent } from './pipesTest/pipes-component/keyvaluepipe.component';
import { I18nPluralPipeComponent } from './pipesTest/pipes-component/i18npluralpipe.component';
import { PercentPipeComponent } from './pipesTest/pipes-component/percentpipe.component';
import { JsonPipeComponent } from './pipesTest/pipes-component/jsonpipe.component';
import { CurrencyPipeComponent } from './pipesTest/pipes-component/currencypipe.component';
import { CasePipeComponent } from './pipesTest/pipes-component/casepipe.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EvenComponent } from './game-controller/even/even.component';
import { OddComponent } from './game-controller/odd/odd.component';
import { SuccessAlertComponent } from './successAlert/success-alert/success-alert.component';
import { WarningAlertComponent } from './warningAlert/warningalert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GameControlComponent } from './game-controller/game-control/game-control.component';
import { MainComponent } from './game-controller/main/main.component';
import { ActiveUsersComponent } from './service-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './service-assignment/inactive-users/inactive-users.component';
import { ServiceMainComponent } from './service-assignment/service-main/service-main.component';
import { ObservablesComponent } from './observables/observables.component';
import { ConsoleComponent } from './console/console.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipesTest/pipes-component/pipes.component';
import { AsyncPromisePipeComponent } from './pipesTest/pipes-component/async-pipe.component';
import { DatePipeComponent } from './pipesTest/pipes-component/datepipe.component';
import { I18nSelectPipeComponent } from './pipesTest/i18nselectpipe.component';
import { NumberPipeComponent } from './pipesTest/pipes-component/numberpipe.component';
import { FilterPipe } from './pipesTest/pipes-component/custompipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DataBindingComponent,
    DirectivesComponent,
    NavigationComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    MainComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServiceMainComponent,
    ObservablesComponent,
    ConsoleComponent,
    TdFormComponent,
    ReactiveFormsComponent,
    PipesComponent,
    AsyncPromisePipeComponent,
    DatePipeComponent,
    I18nSelectPipeComponent,
    CasePipeComponent,
    CurrencyPipeComponent,
    NumberPipeComponent,
    JsonPipeComponent,
    PercentPipeComponent,
    I18nPluralPipeComponent,
    KeyValuePipeComponent,
    ShortenPipe,
    UseCustomPipesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
