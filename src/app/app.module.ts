import { WorkerResourceComponent } from './../components/worker-resource/worker-resource.component';
import { MatSpinner } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector } from '@angular/core';
import { AppErrorHandler } from '../components/scheduler/error.handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../pages/home/home.component';
import { SchedulerComponent } from '../components/scheduler/scheduler.component';

import { BryntumAngularSharedModule } from 'bryntum-angular-shared';
import { I18NextModule } from 'angular-i18next';
import { I18N_PROVIDERS } from '../components/scheduler/i18next';
import { LangSelectComponent } from '../components/scheduler/lang-select.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerResourceComponent,
    SchedulerComponent,
    LangSelectComponent,
  ],
  entryComponents: [
    WorkerResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BryntumAngularSharedModule,
    I18NextModule.forRoot()
  ],
  providers: [
    I18N_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // convert Angular Component to Custom Element and register it with browser
    customElements.define('app-worker-resource', createCustomElement(WorkerResourceComponent, {injector}));
  }
 }
