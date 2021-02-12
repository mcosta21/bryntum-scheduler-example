/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Button widget
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-scheduler/scheduler.lite.umd.js';
export class ButtonComponent {
    // empty fn by default, fixes #436
    /**
     * @param {?} element
     */
    constructor(element) {
        this.color = 'b-orange b-raised';
        this.click = new EventEmitter();
        this.onAction = (/**
         * @return {?}
         */
        () => { }); // empty fn by default, fixes #436
        this.elementRef = element;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
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
            (event) => this.click.emit(event)),
            pressed: this.pressed,
            text: this.text,
            toggleable: this.toggleable,
            toggleGroup: this.toggleGroup,
            tooltip: this.tooltip,
            disabled: this.disabled
        })));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.button) {
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([name, { currentValue }]) => {
                this.button[name] = currentValue;
            }));
        }
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
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-button',
                template: ''
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEksT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTy9FLE1BQU0sT0FBTyxlQUFlOzs7OztJQWtCeEIsWUFBWSxPQUFtQjtRQVp0QixVQUFLLEdBQVcsbUJBQW1CLENBQUM7UUFTbkMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGFBQVE7OztRQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQyxDQUFDLGtDQUFrQztRQUc1RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDOzs7OztJQUtELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFVLFFBQVE7WUFDdEIsUUFBUSxFQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUMzQyxHQUFHLEVBQVcsSUFBSSxDQUFDLEdBQUc7WUFDdEIsS0FBSyxFQUFTLElBQUksQ0FBQyxLQUFLO1lBQ3hCLElBQUksRUFBVSxJQUFJLENBQUMsSUFBSTtZQUN2QixRQUFRLEVBQU0sSUFBSSxDQUFDLFFBQVE7WUFDM0IsT0FBTzs7OztZQUFPLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwRCxPQUFPLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDMUIsSUFBSSxFQUFVLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLFVBQVUsRUFBSSxJQUFJLENBQUMsVUFBVTtZQUM3QixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQzFCLFFBQVEsRUFBTSxJQUFJLENBQUMsUUFBUTtTQUM5QixDQUFDLEVBQVUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNyQyxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7Ozs7SUFLRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7OztZQS9ESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFHLFlBQVk7Z0JBQ3ZCLFFBQVEsRUFBRyxFQUFFO2FBQ2hCOzs7O1lBUm1CLFVBQVU7OztrQkFlekIsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBRUwsTUFBTTt1QkFDTixLQUFLOzs7Ozs7O0lBZE4scUNBQStCOzs7OztJQUMvQixpQ0FBdUI7O0lBRXZCLDhCQUFxQjs7SUFDckIsZ0NBQTZDOztJQUM3QyxtQ0FBMkI7O0lBQzNCLCtCQUFzQjs7SUFDdEIsa0NBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLHFDQUE2Qjs7SUFDN0Isc0NBQTZCOztJQUM3QixrQ0FBeUI7O0lBRXpCLGdDQUF3RDs7SUFDeEQsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gQnV0dG9uIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1idXR0b24nLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgQElucHV0KCkgY2xzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdiLW9yYW5nZSBiLXJhaXNlZCc7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByZXNzZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvZ2dsZWFibGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9nZ2xlR3JvdXA6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIG9uQWN0aW9uID0gKCkgPT4ge307IC8vIGVtcHR5IGZuIGJ5IGRlZmF1bHQsIGZpeGVzICM0MzZcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgY2xzICAgICAgICAgOiB0aGlzLmNscyxcbiAgICAgICAgICAgIGNvbG9yICAgICAgIDogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIGljb24gICAgICAgIDogdGhpcy5pY29uLFxuICAgICAgICAgICAgb25BY3Rpb24gICAgOiB0aGlzLm9uQWN0aW9uLFxuICAgICAgICAgICAgb25DbGljayAgICAgOiAoZXZlbnQ6IGFueSkgPT4gdGhpcy5jbGljay5lbWl0KGV2ZW50KSxcbiAgICAgICAgICAgIHByZXNzZWQgICAgIDogdGhpcy5wcmVzc2VkLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB0b2dnbGVhYmxlICA6IHRoaXMudG9nZ2xlYWJsZSxcbiAgICAgICAgICAgIHRvZ2dsZUdyb3VwIDogdGhpcy50b2dnbGVHcm91cCxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgIDogdGhpcy50b29sdGlwLFxuICAgICAgICAgICAgZGlzYWJsZWQgICAgOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykuZm9yRWFjaCgoW25hbWUsIHsgY3VycmVudFZhbHVlIH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25bbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19