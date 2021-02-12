/**
 * Angular wrapper for Bryntum Button widget
 */
import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ButtonComponent implements OnInit, OnChanges, OnDestroy {
    private elementRef;
    private button;
    cls: string;
    color: string;
    disabled: boolean;
    icon: string;
    pressed: boolean;
    text: string;
    toggleable: boolean;
    toggleGroup: string;
    tooltip: string;
    click: EventEmitter<any>;
    onAction: () => void;
    constructor(element: ElementRef);
    /**
     * Initializes component
     */
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Destroys component
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ButtonComponent, "bry-button", never, { "color": "color"; "onAction": "onAction"; "cls": "cls"; "disabled": "disabled"; "icon": "icon"; "pressed": "pressed"; "text": "text"; "toggleable": "toggleable"; "toggleGroup": "toggleGroup"; "tooltip": "tooltip"; }, { "click": "click"; }, never, never>;
}

//# sourceMappingURL=button.component.d.ts.map