
import { 
  Component, 
  Inject, 
  ViewChild, 
  HostListener,
  ElementRef,
  Renderer2 } from '@angular/core';

import { SchedulerComponent as BryntumScheduler } from 'bryntum-angular-shared';
import schedulerConfig from './schedulerConfig';
import './schedulerLocales';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { LocaleManager } from 'bryntum-scheduler/scheduler.lite.umd.js';
import { Resource } from 'src/models/Resource';

@Component({
  selector: 'app-scheduler',
  templateUrl: 'scheduler.component.html',
  styleUrls: ['scheduler.component.css']
})
export class SchedulerComponent {
  schedulerConfig: any = schedulerConfig;
  currentLanguage: string = 'pt';
  translate: any;

  @ViewChild(BryntumScheduler, { static : false }) scheduler: BryntumScheduler;

  constructor(
        private el: ElementRef, 
        @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
        ) {
    this.translate = i18NextService.t;
  }

  /**
   * Set the current language
  */
  ngOnInit(): void {
    this.i18NextService.events.initialized.subscribe((e) => {
        if (e) {
            this.currentLanguage = this.i18NextService.language;
        }
    });
  }

  /**
   * Set the scheduler language after it is initialized
   */
  ngAfterViewInit(): void {
    this.applySchedulerLocale(this.i18NextService.language);

    /*
    this.el.nativeElement.querySelectorAll('app-worker-resource').forEach((x:any) => 
      x.addEventListener('cardClicked', (event:CustomEvent) => { 
          console.log(event)
          alert('event: ' + event.detail); 
      }));
      */
  }

  /**
   * Changes the language of the application
   * @param lang language name
   */
  changeLanguage(lang: string): void {
    const schedulerConfig = this;
    schedulerConfig.applySchedulerLocale(lang);

    if (lang !== schedulerConfig.i18NextService.language) {
        schedulerConfig.i18NextService.changeLanguage(lang).then(x => {
            schedulerConfig.currentLanguage = lang;
        });
    }
  }

  /**
   * @param schedulerLocale
   * Applies scheduler locale. Called always when
   * locale changes by SettingContext setLocale
   */
  applySchedulerLocale = (schedulerLocale: string): void => {
      switch (schedulerLocale) {
          case 'se':
              LocaleManager.locale = 'SvSE';
              break;

          case 'ru':
              LocaleManager.locale = 'Ru';
              break;

          case 'nl':
            LocaleManager.locale = 'Nl';
            break;

          case 'pt':
              LocaleManager.locale = 'Pt';
              break;

          default:
              LocaleManager.locale = 'En';
              break;
      }
  }

  onAddEventClick() {
    this.scheduler.addEvent();
  }

  // remove event button click handled here
  onRemoveEventClick() {
      this.scheduler.removeEvent();
  }

  // Uncomment the code in this method to start "logging" events
  onSchedulerEvents(event: any) {
      // catch scheduler events here, for example when dropping an event:
      if (event.type === 'eventdrop') {
           console.log('Drop: ', event);
      }

      // or when editing one:
      if (event.type === 'eventschange') {
           console.log('EventStore: ', event);
      }

      // or when editing a resource:
      if (event.type === 'resourceschange') {
           console.log('ResourceStore: ', event);
      }
  }
  
}
