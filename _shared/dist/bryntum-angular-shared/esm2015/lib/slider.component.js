/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Slider widget
 */
import { Component, ElementRef, Input } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-scheduler/scheduler.lite.umd.js';
export class SliderComponent {
    /**
     * Saves element to have container to render the button to
     * @param {?} element
     */
    constructor(element) {
        this.max = 100;
        this.min = 0;
        this.step = 5;
        this.text = 'Slider';
        this.value = 0;
        this.elementRef = element;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
        this.slider = (/** @type {?} */ (WidgetHelper.createWidget({
            type: 'slider',
            appendTo: this.elementRef.nativeElement,
            max: this.max,
            min: this.min,
            onChange: this.onChange,
            showTooltip: this.showTooltip,
            showValue: this.showValue,
            step: this.step,
            text: this.text,
            value: this.value
        })));
    }
    /**
     * Destroys component
     * @return {?}
     */
    ngOnDestroy() {
        if (this.slider) {
            this.slider.destroy();
        }
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-slider',
                template: ''
            }] }
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderComponent.propDecorators = {
    max: [{ type: Input }],
    min: [{ type: Input }],
    onChange: [{ type: Input }],
    showTooltip: [{ type: Input }],
    showValue: [{ type: Input }],
    step: [{ type: Input }],
    text: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SliderComponent.prototype.elementRef;
    /** @type {?} */
    SliderComponent.prototype.slider;
    /** @type {?} */
    SliderComponent.prototype.max;
    /** @type {?} */
    SliderComponent.prototype.min;
    /** @type {?} */
    SliderComponent.prototype.onChange;
    /** @type {?} */
    SliderComponent.prototype.showTooltip;
    /** @type {?} */
    SliderComponent.prototype.showValue;
    /** @type {?} */
    SliderComponent.prototype.step;
    /** @type {?} */
    SliderComponent.prototype.text;
    /** @type {?} */
    SliderComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEYsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTy9FLE1BQU0sT0FBTyxlQUFlOzs7OztJQUt4QixZQUFZLE9BQW1CO1FBT3RCLFFBQUcsR0FBVyxHQUFHLENBQUM7UUFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUloQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQWJ2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDOzs7OztJQWlCRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksRUFBVSxRQUFRO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0MsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLEdBQUcsRUFBVyxJQUFJLENBQUMsR0FBRztZQUN0QixRQUFRLEVBQU0sSUFBSSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBSyxJQUFJLENBQUMsU0FBUztZQUM1QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsSUFBSSxFQUFVLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLEtBQUssRUFBUyxJQUFJLENBQUMsS0FBSztTQUMzQixDQUFDLEVBQVUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUtELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQzs7O1lBbkRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUcsWUFBWTtnQkFDdkIsUUFBUSxFQUFHLEVBQUU7YUFDaEI7Ozs7WUFSbUIsVUFBVTs7O2tCQXNCekIsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7Ozs7O0lBVk4scUNBQStCOztJQUMvQixpQ0FBc0I7O0lBRXRCLDhCQUEyQjs7SUFDM0IsOEJBQXlCOztJQUN6QixtQ0FBNEI7O0lBQzVCLHNDQUE4Qjs7SUFDOUIsb0NBQTRCOztJQUM1QiwrQkFBMEI7O0lBQzFCLCtCQUFpQzs7SUFDakMsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gU2xpZGVyIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBTbGlkZXIsIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1zbGlkZXInLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyBlbGVtZW50IHRvIGhhdmUgY29udGFpbmVyIHRvIHJlbmRlciB0aGUgYnV0dG9uIHRvXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgc2xpZGVyOiBTbGlkZXI7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBtaW46IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgb25DaGFuZ2U6ICgpID0+IHt9O1xuICAgIEBJbnB1dCgpIHNob3dUb29sdGlwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNob3dWYWx1ZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdGVwOiBudW1iZXIgPSA1O1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICdTbGlkZXInO1xuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdzbGlkZXInLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIG1heCAgICAgICAgIDogdGhpcy5tYXgsXG4gICAgICAgICAgICBtaW4gICAgICAgICA6IHRoaXMubWluLFxuICAgICAgICAgICAgb25DaGFuZ2UgICAgOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgc2hvd1Rvb2x0aXAgOiB0aGlzLnNob3dUb29sdGlwLFxuICAgICAgICAgICAgc2hvd1ZhbHVlICAgOiB0aGlzLnNob3dWYWx1ZSxcbiAgICAgICAgICAgIHN0ZXAgICAgICAgIDogdGhpcy5zdGVwLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB2YWx1ZSAgICAgICA6IHRoaXMudmFsdWVcbiAgICAgICAgfSkgYXMgU2xpZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==