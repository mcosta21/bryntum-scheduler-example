/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Widget
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-scheduler/scheduler.lite.umd.js';
export class WidgetComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onWidgetEvents = new EventEmitter();
        this.elementRef = element;
    }
    /**
     * Create and append the underlying widget
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const me = this;
        Object.assign(me.config, {
            appendTo: me.elementRef.nativeElement,
            listeners: me.config.listeners || {
                /**
                 * @param {?} event
                 * @return {?}
                 */
                catchAll(event) {
                    me.onWidgetEvents.emit(event);
                },
                thisObj: me
            }
        });
        // make the widget publicly available
        me.widget = (/** @type {?} */ (WidgetHelper.createWidget(me.config)));
    }
    /**
     * Destroy the component
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const me = this;
        if (me.widget && me.widget.destroy) {
            me.widget.destroy();
        }
    }
}
WidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-widget',
                template: ''
            }] }
];
/** @nocollapse */
WidgetComponent.ctorParameters = () => [
    { type: ElementRef }
];
WidgetComponent.propDecorators = {
    config: [{ type: Input }],
    onWidgetEvents: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetComponent.prototype.elementRef;
    /** @type {?} */
    WidgetComponent.prototype.widget;
    /** @type {?} */
    WidgetComponent.prototype.config;
    /** @type {?} */
    WidgetComponent.prototype.onWidgetEvents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd0RyxPQUFPLEVBQVUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPL0UsTUFBTSxPQUFPLGVBQWU7Ozs7SUFLeEIsWUFBWSxPQUFtQjtRQUtyQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFKbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFRRCxRQUFROztjQUNFLEVBQUUsR0FBRyxJQUFJO1FBRWYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3JCLFFBQVEsRUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDdkMsU0FBUyxFQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJOzs7OztnQkFDL0IsUUFBUSxDQUFDLEtBQVU7b0JBQ2YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsT0FBTyxFQUFHLEVBQUU7YUFDZjtTQUNKLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxFQUFFLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFVLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFLRCxXQUFXOztjQUNELEVBQUUsR0FBRyxJQUFJO1FBQ2YsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRyxZQUFZO2dCQUN2QixRQUFRLEVBQUcsRUFBRTthQUNoQjs7OztZQVJzQyxVQUFVOzs7cUJBbUI1QyxLQUFLOzZCQUNMLE1BQU07Ozs7Ozs7SUFSUCxxQ0FBK0I7O0lBQy9CLGlDQUFzQjs7SUFNdEIsaUNBQXFCOztJQUNyQix5Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBXaWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFdpZGdldCwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1zY2hlZHVsZXIvc2NoZWR1bGVyLmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXdpZGdldCcsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgd2lkZ2V0OiBXaWRnZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gICAgQE91dHB1dCgpIG9uV2lkZ2V0RXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgdW5kZXJseWluZyB3aWRnZXRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWUuY29uZmlnLCB7XG4gICAgICAgICAgICBhcHBlbmRUbyAgOiBtZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiBtZS5jb25maWcubGlzdGVuZXJzIHx8IHtcbiAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uV2lkZ2V0RXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc09iaiA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIHdpZGdldCBwdWJsaWNseSBhdmFpbGFibGVcbiAgICAgICAgbWUud2lkZ2V0ID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldChtZS5jb25maWcpIGFzIFdpZGdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUud2lkZ2V0ICYmIG1lLndpZGdldC5kZXN0cm95KSB7XG4gICAgICAgICAgICBtZS53aWRnZXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=