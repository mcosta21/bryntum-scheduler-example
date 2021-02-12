/**
 *- Setup locales
 */
// basic scheduler locales
//import EnLocale from 'bryntum-scheduler/locales/scheduler.locale.En.js';
import EnLocale from '../../locales/scheduler.locale.En.js';
import SvSELocale from '../../locales/scheduler.locale.SvSE.js';
import RuLocale from '../../locales/scheduler.locale.Ru.js';
import NlLocale from '../../locales/scheduler.locale.Nl.js';
import PtLocale from '../../locales/scheduler.locale.Pt.js';

// example locales (grid column names, etc)
//import SvSELocaleExamples from 'bryntum-resources/locales/examples.locale.SvSE.umd.js';
//import RuLocaleExamples from 'bryntum-resources/locales/examples.locale.Ru.umd.js';

// LocaleManager
// We import scheduler.lite.umd for IE11 compatibility.
import { LocaleManager } from 'bryntum-scheduler/scheduler.lite.umd.js';

// register locales
LocaleManager.registerLocale('En', { locale : EnLocale });
LocaleManager.registerLocale('SvSE', { locale : SvSELocale });
LocaleManager.registerLocale('Ru', { locale : RuLocale });
LocaleManager.registerLocale('Nl', { locale : NlLocale });
LocaleManager.registerLocale('Pt', { locale : PtLocale });

// extend locales
//LocaleManager.extendLocale('SvSE', SvSELocaleExamples);
//LocaleManager.extendLocale('Ru', RuLocaleExamples);

// eof
