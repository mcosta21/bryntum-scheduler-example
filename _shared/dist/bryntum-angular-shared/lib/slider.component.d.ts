/**
 * Angular wrapper for Bryntum Slider widget
 */
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Slider } from 'bryntum-scheduler/scheduler.lite.umd.js';
import * as ɵngcc0 from '@angular/core';
export declare class SliderComponent implements OnInit, OnDestroy {
    /**
     * Saves element to have container to render the button to
     */
    constructor(element: ElementRef);
    private elementRef;
    slider: Slider;
    max: number;
    min: number;
    onChange: () => {};
    showTooltip: boolean;
    showValue: boolean;
    step: number;
    text: string;
    value: number;
    /**
     * Initializes component
     */
    ngOnInit(): void;
    /**
     * Destroys component
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SliderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SliderComponent, "bry-slider", never, { "max": "max"; "min": "min"; "step": "step"; "text": "text"; "value": "value"; "onChange": "onChange"; "showTooltip": "showTooltip"; "showValue": "showValue"; }, {}, never, never>;
}

//# sourceMappingURL=slider.component.d.ts.map