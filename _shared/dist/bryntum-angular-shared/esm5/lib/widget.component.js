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
var WidgetComponent = /** @class */ (function () {
    function WidgetComponent(element) {
        this.onWidgetEvents = new EventEmitter();
        this.elementRef = element;
    }
    /**
     * Create and append the underlying widget
     */
    /**
     * Create and append the underlying widget
     * @return {?}
     */
    WidgetComponent.prototype.ngOnInit = /**
     * Create and append the underlying widget
     * @return {?}
     */
    function () {
        /** @type {?} */
        var me = this;
        Object.assign(me.config, {
            appendTo: me.elementRef.nativeElement,
            listeners: me.config.listeners || {
                catchAll: /**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    me.onWidgetEvents.emit(event);
                },
                thisObj: me
            }
        });
        // make the widget publicly available
        me.widget = (/** @type {?} */ (WidgetHelper.createWidget(me.config)));
    };
    /**
     * Destroy the component
     */
    /**
     * Destroy the component
     * @return {?}
     */
    WidgetComponent.prototype.ngOnDestroy = /**
     * Destroy the component
     * @return {?}
     */
    function () {
        /** @type {?} */
        var me = this;
        if (me.widget && me.widget.destroy) {
            me.widget.destroy();
        }
    };
    WidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-widget',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    WidgetComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WidgetComponent.propDecorators = {
        config: [{ type: Input }],
        onWidgetEvents: [{ type: Output }]
    };
    return WidgetComponent;
}());
export { WidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd0RyxPQUFPLEVBQVUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFL0U7SUFVSSx5QkFBWSxPQUFtQjtRQUtyQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFKbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUtEOztPQUVHOzs7OztJQUNILGtDQUFROzs7O0lBQVI7O1lBQ1UsRUFBRSxHQUFHLElBQUk7UUFFZixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDckIsUUFBUSxFQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN2QyxTQUFTLEVBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUk7Z0JBQy9CLFFBQVE7Ozs7MEJBQUMsS0FBVTtvQkFDZixFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxPQUFPLEVBQUcsRUFBRTthQUNmO1NBQ0osQ0FBQyxDQUFDO1FBRUgscUNBQXFDO1FBQ3JDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsbUJBQUEsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQVUsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscUNBQVc7Ozs7SUFBWDs7WUFDVSxFQUFFLEdBQUcsSUFBSTtRQUNmLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUcsWUFBWTtvQkFDdkIsUUFBUSxFQUFHLEVBQUU7aUJBQ2hCOzs7O2dCQVJzQyxVQUFVOzs7eUJBbUI1QyxLQUFLO2lDQUNMLE1BQU07O0lBZ0NYLHNCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1ksZUFBZTs7Ozs7O0lBRXhCLHFDQUErQjs7SUFDL0IsaUNBQXNCOztJQU10QixpQ0FBcUI7O0lBQ3JCLHlDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIFdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgV2lkZ2V0LCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyB3aWRnZXQ6IFdpZGdldDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgICBAT3V0cHV0KCkgb25XaWRnZXRFdmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSB1bmRlcmx5aW5nIHdpZGdldFxuICAgICAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZS5jb25maWcsIHtcbiAgICAgICAgICAgIGFwcGVuZFRvICA6IG1lLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IG1lLmNvbmZpZy5saXN0ZW5lcnMgfHwge1xuICAgICAgICAgICAgICAgIGNhdGNoQWxsKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUub25XaWRnZXRFdmVudHMuZW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzT2JqIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgd2lkZ2V0IHB1YmxpY2x5IGF2YWlsYWJsZVxuICAgICAgICBtZS53aWRnZXQgPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KG1lLmNvbmZpZykgYXMgV2lkZ2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIGlmIChtZS53aWRnZXQgJiYgbWUud2lkZ2V0LmRlc3Ryb3kpIHtcbiAgICAgICAgICAgIG1lLndpZGdldC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==