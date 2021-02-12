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
var SliderComponent = /** @class */ (function () {
    /**
     * Saves element to have container to render the button to
     */
    function SliderComponent(element) {
        this.max = 100;
        this.min = 0;
        this.step = 5;
        this.text = 'Slider';
        this.value = 0;
        this.elementRef = element;
    }
    /**
     * Initializes component
     */
    /**
     * Initializes component
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * Initializes component
     * @return {?}
     */
    function () {
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
    };
    /**
     * Destroys component
     */
    /**
     * Destroys component
     * @return {?}
     */
    SliderComponent.prototype.ngOnDestroy = /**
     * Destroys component
     * @return {?}
     */
    function () {
        if (this.slider) {
            this.slider.destroy();
        }
    };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-slider',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SliderComponent;
}());
export { SliderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEYsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRS9FO0lBT0k7O09BRUc7SUFDSCx5QkFBWSxPQUFtQjtRQU90QixRQUFHLEdBQVcsR0FBRyxDQUFDO1FBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFJaEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFidkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQWNEOztPQUVHOzs7OztJQUNILGtDQUFROzs7O0lBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFVLFFBQVE7WUFDdEIsUUFBUSxFQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUMzQyxHQUFHLEVBQVcsSUFBSSxDQUFDLEdBQUc7WUFDdEIsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTO1lBQzVCLElBQUksRUFBVSxJQUFJLENBQUMsSUFBSTtZQUN2QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsS0FBSyxFQUFTLElBQUksQ0FBQyxLQUFLO1NBQzNCLENBQUMsRUFBVSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxQ0FBVzs7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQW5ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFHLFlBQVk7b0JBQ3ZCLFFBQVEsRUFBRyxFQUFFO2lCQUNoQjs7OztnQkFSbUIsVUFBVTs7O3NCQXNCekIsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQTZCVixzQkFBQztDQUFBLEFBckRELElBcURDO1NBaERZLGVBQWU7Ozs7OztJQVN4QixxQ0FBK0I7O0lBQy9CLGlDQUFzQjs7SUFFdEIsOEJBQTJCOztJQUMzQiw4QkFBeUI7O0lBQ3pCLG1DQUE0Qjs7SUFDNUIsc0NBQThCOztJQUM5QixvQ0FBNEI7O0lBQzVCLCtCQUEwQjs7SUFDMUIsK0JBQWlDOztJQUNqQyxnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBTbGlkZXIgd2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNsaWRlciwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1zY2hlZHVsZXIvc2NoZWR1bGVyLmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXNsaWRlcicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGVsZW1lbnQgdG8gaGF2ZSBjb250YWluZXIgdG8gcmVuZGVyIHRoZSBidXR0b24gdG9cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzbGlkZXI6IFNsaWRlcjtcblxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBvbkNoYW5nZTogKCkgPT4ge307XG4gICAgQElucHV0KCkgc2hvd1Rvb2x0aXA6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd1ZhbHVlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDU7XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ1NsaWRlcic7XG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ3NsaWRlcicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgbWF4ICAgICAgICAgOiB0aGlzLm1heCxcbiAgICAgICAgICAgIG1pbiAgICAgICAgIDogdGhpcy5taW4sXG4gICAgICAgICAgICBvbkNoYW5nZSAgICA6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICBzaG93VG9vbHRpcCA6IHRoaXMuc2hvd1Rvb2x0aXAsXG4gICAgICAgICAgICBzaG93VmFsdWUgICA6IHRoaXMuc2hvd1ZhbHVlLFxuICAgICAgICAgICAgc3RlcCAgICAgICAgOiB0aGlzLnN0ZXAsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICA6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlICAgICAgIDogdGhpcy52YWx1ZVxuICAgICAgICB9KSBhcyBTbGlkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuIl19