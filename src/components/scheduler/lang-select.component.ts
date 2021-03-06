/**
 * Language selector script
 */
import { Component, OnInit, Input, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper, Menu } from 'bryntum-scheduler/scheduler.lite.umd.js';

@Component({
    selector : 'bry-lang-select',
    template : ''
})
export class LangSelectComponent implements OnInit, OnDestroy {

    private elementRef: ElementRef;
    public button: any;

    @Input() value: string;
    @Input() locales: any = {
        en : { icon : 'us', name : 'English' },
        se : { icon : 'se', name : 'Svenska' },
        ru : { icon : 'ru', name : 'Русский' },
        nl : { icon : 'nl', name : 'Nederlands' },
        pt : { icon : 'pt', name : 'Português' }
    };

    @Output() change = new EventEmitter<string>();

    /**
     * @param element Reference to element of this component
     */
    constructor(element: ElementRef) {
        this.elementRef = element;
    }

    /**
     * Runs once when this component has been initilized
     */
    ngOnInit(): void {
        const
            locale = this.locales[this.value] || this.locales['en'],
            config = {
                type     : 'button',
                appendTo : this.elementRef.nativeElement,
                color    : 'b-gray b-raised',
                text     : locale.name,
                icon     : this.getIconCls(locale.icon),
                onAction : this.showMenu
            }
        ;

        this.button = WidgetHelper.createWidget(config);
    }

    /**
     * Shows the menu on the button click
     * @param event
     */
    showMenu = (props:any): void => {
        const button = props.source;
        const items = [];

        for (let key in this.locales) {
            const locale = this.locales[key];
            items.push({
                text   : locale.name,
                locale : locale,
                icon   : this.getIconCls(locale.icon),
                onItem : () => this.onSelectLocale({ locale : key, ...locale })
            })
        }

        new Menu({
            forElement  : button.element,
            closeAction : 'destroy',
            width       : button.element.offsetWidth,
            items       : items,
        });
    };

    /**
     * Generates icon classes from the country code
     * @param icon Country code
     * @return The class names
     */
    getIconCls(icon: string): string {
        return `flag-icon flag-icon-${icon}`
    }

    /**
     * Executes the locale change
     * @param locale Object with locale, locale name and icon code
     */
    onSelectLocale(locale: any): void {

        // update this value and emit change event
        this.change.emit(locale.locale);
        this.value = locale.locale;

        // update the button icon and text
        this.button.text = locale.name;
        this.button.icon = this.getIconCls(locale.icon);

    }

    /**
     * Destroys the button instance
     */
    ngOnDestroy() {
        if (this.button) {
            this.button.destroy();
        }
    }

}


