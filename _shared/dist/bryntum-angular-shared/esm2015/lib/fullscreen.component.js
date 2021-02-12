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
export class FullscreenComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.elementRef = element;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
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
            ({ pressed }) => {
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
        () => {
            this.button['pressed'] = Fullscreen.isFullscreen;
        }));
    }
    /**
     * Destroys component
     * @return {?}
     */
    ngOnDestroy() {
        if (this.button) {
            this.button.destroy();
        }
    }
}
FullscreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-fullscreen',
                template: ''
            }] }
];
/** @nocollapse */
FullscreenComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2Z1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3pFLE9BQU8sRUFBVSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPM0YsTUFBTSxPQUFPLG1CQUFtQjs7OztJQU01QixZQUFZLE9BQW1CO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBS0QsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQUEsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFJLEVBQVMsUUFBUTtZQUNyQixRQUFRLEVBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQzFDLElBQUksRUFBUywwQkFBMEI7WUFDdkMsT0FBTyxFQUFNLFlBQVk7WUFDekIsVUFBVSxFQUFHLElBQUk7WUFDakIsR0FBRyxFQUFVLGlCQUFpQjtZQUM5QixRQUFROzs7O1lBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksT0FBTyxFQUFFO29CQUNULFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDSCxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0wsQ0FBQyxDQUFBO1NBQ0osQ0FBQyxFQUFVLENBQUM7UUFFYixVQUFVLENBQUMsa0JBQWtCOzs7UUFBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3JELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFLRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7OztZQW5ESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFHLGdCQUFnQjtnQkFDM0IsUUFBUSxFQUFHLEVBQUU7YUFDaEI7Ozs7WUFSc0MsVUFBVTs7Ozs7OztJQWE3Qyx5Q0FBK0I7Ozs7O0lBQy9CLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEZ1bGxzY3JlZW4gYnV0dG9uXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBGdWxsc2NyZWVuLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktZnVsbHNjcmVlbicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyBjbGFzcyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCFGdWxsc2NyZWVuLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBpY29uICAgICAgIDogJ2ItaWNvbiBiLWljb24tZnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b29sdGlwICAgIDogJ0Z1bGxzY3JlZW4nLFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBjbHMgICAgICAgIDogJ2ItYmx1ZSBiLXJhaXNlZCcsXG4gICAgICAgICAgICBvblRvZ2dsZSAgIDogKHsgcHJlc3NlZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5leGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBhcyBCdXR0b247XG5cbiAgICAgICAgRnVsbHNjcmVlbi5vbkZ1bGxzY3JlZW5DaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25bJ3ByZXNzZWQnXSA9IEZ1bGxzY3JlZW4uaXNGdWxsc2NyZWVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=