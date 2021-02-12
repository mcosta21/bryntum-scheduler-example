/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Angular wrapper for Bryntum Button widget
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-scheduler/scheduler.lite.umd.js';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(element) {
        this.color = 'b-orange b-raised';
        this.click = new EventEmitter();
        this.onAction = (/**
         * @return {?}
         */
        function () { }); // empty fn by default, fixes #436
        this.elementRef = element;
    }
    /**
     * Initializes component
     */
    /**
     * Initializes component
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * Initializes component
     * @return {?}
     */
    function () {
        var _this = this;
        this.button = (/** @type {?} */ (WidgetHelper.createWidget({
            type: 'button',
            appendTo: this.elementRef.nativeElement,
            cls: this.cls,
            color: this.color,
            icon: this.icon,
            onAction: this.onAction,
            onClick: (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.click.emit(event); }),
            pressed: this.pressed,
            text: this.text,
            toggleable: this.toggleable,
            toggleGroup: this.toggleGroup,
            tooltip: this.tooltip,
            disabled: this.disabled
        })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.button) {
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
                _this.button[name] = currentValue;
            }));
        }
    };
    /**
     * Destroys component
     */
    /**
     * Destroys component
     * @return {?}
     */
    ButtonComponent.prototype.ngOnDestroy = /**
     * Destroys component
     * @return {?}
     */
    function () {
        if (this.button) {
            this.button.destroy();
        }
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-button',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ButtonComponent.propDecorators = {
        cls: [{ type: Input }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        icon: [{ type: Input }],
        pressed: [{ type: Input }],
        text: [{ type: Input }],
        toggleable: [{ type: Input }],
        toggleGroup: [{ type: Input }],
        tooltip: [{ type: Input }],
        click: [{ type: Output }],
        onAction: [{ type: Input }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.button;
    /** @type {?} */
    ButtonComponent.prototype.cls;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.pressed;
    /** @type {?} */
    ButtonComponent.prototype.text;
    /** @type {?} */
    ButtonComponent.prototype.toggleable;
    /** @type {?} */
    ButtonComponent.prototype.toggleGroup;
    /** @type {?} */
    ButtonComponent.prototype.tooltip;
    /** @type {?} */
    ButtonComponent.prototype.click;
    /** @type {?} */
    ButtonComponent.prototype.onAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR2hJLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUvRTtJQXVCSSx5QkFBWSxPQUFtQjtRQVp0QixVQUFLLEdBQVcsbUJBQW1CLENBQUM7UUFTbkMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGFBQVE7OztRQUFHLGNBQU8sQ0FBQyxFQUFDLENBQUMsa0NBQWtDO1FBRzVELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrQ0FBUTs7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksRUFBVSxRQUFRO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0MsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLEtBQUssRUFBUyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsUUFBUSxFQUFNLElBQUksQ0FBQyxRQUFRO1lBQzNCLE9BQU87Ozs7WUFBTyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFBO1lBQ3BELE9BQU8sRUFBTyxJQUFJLENBQUMsT0FBTztZQUMxQixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsVUFBVSxFQUFJLElBQUksQ0FBQyxVQUFVO1lBQzdCLFdBQVcsRUFBRyxJQUFJLENBQUMsV0FBVztZQUM5QixPQUFPLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDMUIsUUFBUSxFQUFNLElBQUksQ0FBQyxRQUFRO1NBQzlCLENBQUMsRUFBVSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQU1DO1FBTEcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUF3QjtvQkFBeEIsMEJBQXdCLEVBQXZCLFlBQUksRUFBSSxpQ0FBWTtnQkFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDckMsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxQ0FBVzs7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQS9ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFHLFlBQVk7b0JBQ3ZCLFFBQVEsRUFBRyxFQUFFO2lCQUNoQjs7OztnQkFSbUIsVUFBVTs7O3NCQWV6QixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFFTCxNQUFNOzJCQUNOLEtBQUs7O0lBNENWLHNCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0E1RFksZUFBZTs7Ozs7O0lBRXhCLHFDQUErQjs7Ozs7SUFDL0IsaUNBQXVCOztJQUV2Qiw4QkFBcUI7O0lBQ3JCLGdDQUE2Qzs7SUFDN0MsbUNBQTJCOztJQUMzQiwrQkFBc0I7O0lBQ3RCLGtDQUEwQjs7SUFDMUIsK0JBQXNCOztJQUN0QixxQ0FBNkI7O0lBQzdCLHNDQUE2Qjs7SUFDN0Isa0NBQXlCOztJQUV6QixnQ0FBd0Q7O0lBQ3hELG1DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEJ1dHRvbiB3aWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIEBJbnB1dCgpIGNsczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnYi1vcmFuZ2UgYi1yYWlzZWQnO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBwcmVzc2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b2dnbGVhYmxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvZ2dsZUdyb3VwOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBvbkFjdGlvbiA9ICgpID0+IHt9OyAvLyBlbXB0eSBmbiBieSBkZWZhdWx0LCBmaXhlcyAjNDM2XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGNscyAgICAgICAgIDogdGhpcy5jbHMsXG4gICAgICAgICAgICBjb2xvciAgICAgICA6IHRoaXMuY29sb3IsXG4gICAgICAgICAgICBpY29uICAgICAgICA6IHRoaXMuaWNvbixcbiAgICAgICAgICAgIG9uQWN0aW9uICAgIDogdGhpcy5vbkFjdGlvbixcbiAgICAgICAgICAgIG9uQ2xpY2sgICAgIDogKGV2ZW50OiBhbnkpID0+IHRoaXMuY2xpY2suZW1pdChldmVudCksXG4gICAgICAgICAgICBwcmVzc2VkICAgICA6IHRoaXMucHJlc3NlZCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSAgOiB0aGlzLnRvZ2dsZWFibGUsXG4gICAgICAgICAgICB0b2dnbGVHcm91cCA6IHRoaXMudG9nZ2xlR3JvdXAsXG4gICAgICAgICAgICB0b29sdGlwICAgICA6IHRoaXMudG9vbHRpcCxcbiAgICAgICAgICAgIGRpc2FibGVkICAgIDogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KSBhcyBCdXR0b247XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==