/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Fullscreen button
 */
import { Component, ElementRef } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { Fullscreen, WidgetHelper } from 'bryntum-scheduler/scheduler.lite.umd.js';
var FullscreenComponent = /** @class */ (function () {
    function FullscreenComponent(element) {
        this.elementRef = element;
    }
    /**
     * Initializes component
     */
    /**
     * Initializes component
     * @return {?}
     */
    FullscreenComponent.prototype.ngOnInit = /**
     * Initializes component
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Fullscreen.enabled) {
            return;
        }
        this.button = (/** @type {?} */ (WidgetHelper.createWidget({
            type: 'button',
            appendTo: this.elementRef.nativeElement,
            icon: 'b-icon b-icon-fullscreen',
            tooltip: 'Fullscreen',
            toggleable: true,
            cls: 'b-blue b-raised',
            onToggle: (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var pressed = _a.pressed;
                if (pressed) {
                    Fullscreen.request(document.documentElement);
                }
                else {
                    Fullscreen.exit();
                }
            })
        })));
        Fullscreen.onFullscreenChange((/**
         * @return {?}
         */
        function () {
            _this.button['pressed'] = Fullscreen.isFullscreen;
        }));
    };
    /**
     * Destroys component
     */
    /**
     * Destroys component
     * @return {?}
     */
    FullscreenComponent.prototype.ngOnDestroy = /**
     * Destroys component
     * @return {?}
     */
    function () {
        if (this.button) {
            this.button.destroy();
        }
    };
    FullscreenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-fullscreen',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    FullscreenComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return FullscreenComponent;
}());
export { FullscreenComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullscreenComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FullscreenComponent.prototype.button;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2Z1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3pFLE9BQU8sRUFBVSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0Y7SUFXSSw2QkFBWSxPQUFtQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsc0NBQVE7Ozs7SUFBUjtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFTLFFBQVE7WUFDckIsUUFBUSxFQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUMxQyxJQUFJLEVBQVMsMEJBQTBCO1lBQ3ZDLE9BQU8sRUFBTSxZQUFZO1lBQ3pCLFVBQVUsRUFBRyxJQUFJO1lBQ2pCLEdBQUcsRUFBVSxpQkFBaUI7WUFDOUIsUUFBUTs7OztZQUFLLFVBQUMsRUFBVztvQkFBVCxvQkFBTztnQkFDbkIsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNO29CQUNILFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDckI7WUFDTCxDQUFDLENBQUE7U0FDSixDQUFDLEVBQVUsQ0FBQztRQUViLFVBQVUsQ0FBQyxrQkFBa0I7OztRQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBVzs7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQW5ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFHLGdCQUFnQjtvQkFDM0IsUUFBUSxFQUFHLEVBQUU7aUJBQ2hCOzs7O2dCQVJzQyxVQUFVOztJQXlEakQsMEJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQS9DWSxtQkFBbUI7Ozs7OztJQUc1Qix5Q0FBK0I7Ozs7O0lBQy9CLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEZ1bGxzY3JlZW4gYnV0dG9uXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBGdWxsc2NyZWVuLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktZnVsbHNjcmVlbicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyBjbGFzcyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCFGdWxsc2NyZWVuLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBpY29uICAgICAgIDogJ2ItaWNvbiBiLWljb24tZnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b29sdGlwICAgIDogJ0Z1bGxzY3JlZW4nLFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBjbHMgICAgICAgIDogJ2ItYmx1ZSBiLXJhaXNlZCcsXG4gICAgICAgICAgICBvblRvZ2dsZSAgIDogKHsgcHJlc3NlZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5leGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBhcyBCdXR0b247XG5cbiAgICAgICAgRnVsbHNjcmVlbi5vbkZ1bGxzY3JlZW5DaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25bJ3ByZXNzZWQnXSA9IEZ1bGxzY3JlZW4uaXNGdWxsc2NyZWVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=