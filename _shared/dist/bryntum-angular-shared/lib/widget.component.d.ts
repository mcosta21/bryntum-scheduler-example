/**
 * Angular wrapper for Bryntum Widget
 */
import { OnInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Widget } from 'bryntum-scheduler/scheduler.lite.umd.js';
import * as ɵngcc0 from '@angular/core';
export declare class WidgetComponent implements OnInit, OnDestroy {
    private elementRef;
    widget: Widget;
    constructor(element: ElementRef);
    config: any;
    onWidgetEvents: EventEmitter<object>;
    /**
     * Create and append the underlying widget
     */
    ngOnInit(): void;
    /**
     * Destroy the component
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WidgetComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<WidgetComponent, "bry-widget", never, { "config": "config"; }, { "onWidgetEvents": "onWidgetEvents"; }, never, never>;
}

//# sourceMappingURL=widget.component.d.ts.map