import { Component, ElementRef, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { WidgetHelper, Fullscreen, Scheduler } from 'bryntum-scheduler/scheduler.lite.umd.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
class ButtonComponent {
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
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["bry-button"]], inputs: { color: "color", onAction: "onAction", cls: "cls", disabled: "disabled", icon: "icon", pressed: "pressed", text: "text", toggleable: "toggleable", toggleGroup: "toggleGroup", tooltip: "tooltip" }, outputs: { click: "click" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function ButtonComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'bry-button',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { color: [{
            type: Input
        }], click: [{
            type: Output
        }], onAction: [{
            type: Input
        }], cls: [{
            type: Input
        }], disabled: [{
            type: Input
        }], icon: [{
            type: Input
        }], pressed: [{
            type: Input
        }], text: [{
            type: Input
        }], toggleable: [{
            type: Input
        }], toggleGroup: [{
            type: Input
        }], tooltip: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullscreenComponent {
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
FullscreenComponent.ɵfac = function FullscreenComponent_Factory(t) { return new (t || FullscreenComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FullscreenComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FullscreenComponent, selectors: [["bry-fullscreen"]], decls: 0, vars: 0, template: function FullscreenComponent_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
FullscreenComponent.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FullscreenComponent, [{
        type: Component,
        args: [{
                selector: 'bry-fullscreen',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchedulerComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.featureRe = /Feature$/;
        /* #region features */
        this.features = [
            'cellEditFeature',
            'cellMenuFeature',
            'cellTooltipFeature',
            'columnDragToolbarFeature',
            'columnLinesFeature',
            'columnPickerFeature',
            'columnReorderFeature',
            'columnResizeFeature',
            'dependenciesFeature',
            'dependencyEditFeature',
            'eventDragCreateFeature',
            'eventDragFeature',
            'eventDragSelectFeature',
            'eventEditFeature',
            'eventFilterFeature',
            'eventMenuFeature',
            'eventResizeFeature',
            'eventTooltipFeature',
            'filterBarFeature',
            'filterFeature',
            'groupFeature',
            'groupSummaryFeature',
            'headerMenuFeature',
            'headerZoomFeature',
            'labelsFeature',
            'nonWorkingTimeFeature',
            'panFeature',
            'pdfExportFeature',
            'quickFindFeature',
            'regionResizeFeature',
            'resourceTimeRangesFeature',
            'rowReorderFeature',
            'scheduleMenuFeature',
            'scheduleTooltipFeature',
            'searchFeature',
            'simpleEventEditFeature',
            'sortFeature',
            'stripeFeature',
            'summaryFeature',
            'timeAxisHeaderMenuFeature',
            'timeRangesFeature',
            'treeFeature'
        ];
        /* #endregion */
        /* #region configs */
        this.configs = [
            'allowOverlap',
            'animateRemovingRows',
            'assignments',
            'assignmentStore',
            'autoAdjustTimeAxis',
            'autoHeight',
            'barMargin',
            'columnLines',
            'columns',
            'contextMenuTriggerEvent',
            'createEventOnDblClick',
            'crudManager',
            'defaultResourceImageName',
            'dependencyStore',
            'disableGridRowModelWarning',
            'displayDateFormat',
            'emptyText',
            'enableDeleteKey',
            'enableEventAnimations',
            'enableRecurringEvents',
            'enableTextSelection',
            'endDate',
            'endParamName',
            'eventBarTextField',
            'eventBodyTemplate',
            'eventColor',
            'eventLayout',
            'eventRenderer',
            'events',
            'eventSelectionDisabled',
            'eventStore',
            'eventStyle',
            'fillLastColumn',
            'fillTicks',
            'fullRowRefresh',
            'getRowHeight',
            'hasVisibleEvents',
            'height',
            'hideHeaders',
            'horizontalEventSorterFn',
            'loadMask',
            'longPressTime',
            'maintainSelectionOnDatasetChange',
            'managedEventSizing',
            'maxHeight',
            'maxWidth',
            'maxZoomLevel',
            'milestoneAlign',
            'milestoneCharWidth',
            'milestoneLayoutMode',
            'minHeight',
            'minWidth',
            'minZoomLevel',
            'mode',
            'multiEventSelect',
            'partner',
            'passStartEndParameters',
            'presets',
            'readOnly',
            'removeUnassignedEvent',
            'resizeToFitIncludesHeader',
            'resourceColumns',
            'resourceImagePath',
            'resourceMargin',
            'resources',
            'resourceStore',
            'resourceTimeRanges',
            'responsiveLevels',
            'rowHeight',
            'scrollLeft',
            'scrollTop',
            'selectedEvents',
            'selectionMode',
            'showDirty',
            'snap',
            'snapRelativeToEventStartDate',
            'startDate',
            'startParamName',
            'subGridConfigs',
            'tickWidth',
            'timeRanges',
            'timeResolution',
            'triggerSelectionChangeOnRemove',
            'useInitialAnimation',
            'viewportCenterDate',
            'viewPreset',
            'weekStartDay',
            'width',
            'workingTime',
            'zoomLevel',
            'zoomOnMouseWheel',
            'zoomOnTimeAxisDoubleClick',
            // schedulerId maps to id of the underlying scheduler
            'schedulerId',
            // only for examples, delete if you don't need them
            'transitionDuration'
        ];
        this.allowOverlap = true;
        this.autoAdjustTimeAxis = true;
        this.autoHeight = false;
        this.barMargin = 5;
        this.columnLines = true;
        this.createEventOnDblClick = true;
        this.disableGridRowModelWarning = false;
        this.enableDeleteKey = true;
        this.enableEventAnimations = true;
        this.enableRecurringEvents = false;
        this.enableTextSelection = false;
        this.eventBarTextField = 'name';
        this.eventColor = 'green';
        this.eventSelectionDisabled = false;
        this.eventStyle = 'plain';
        this.fillLastColumn = true;
        this.fullRowRefresh = true;
        this.hideHeaders = false;
        this.loadMask = 'Loading...';
        this.longPressTime = 400;
        this.maintainSelectionOnDatasetChange = true;
        this.managedEventSizing = true;
        this.milestoneCharWidth = 10;
        this.milestoneLayoutMode = 'default';
        this.readOnly = false;
        this.removeUnassignedEvent = true;
        this.resizeToFitIncludesHeader = true;
        this.rowHeight = 50;
        this.showDirty = false;
        this.snapRelativeToEventStartDate = false;
        this.triggerSelectionChangeOnRemove = false;
        this.useInitialAnimation = true;
        this.viewPreset = 'hourAndDay';
        this.zoomOnMouseWheel = true;
        this.zoomOnTimeAxisDoubleClick = true;
        /* #endregion */
        /* #region Features, only used for initialization */
        this.cellEditFeature = true;
        this.cellTooltipFeature = true;
        this.columnDragToolbarFeature = true;
        this.columnLinesFeature = true;
        this.columnPickerFeature = true;
        this.columnReorderFeature = true;
        this.columnResizeFeature = true;
        this.dependenciesFeature = false;
        this.dependencyEditFeature = false;
        this.eventDragCreateFeature = true;
        this.eventDragFeature = true;
        this.eventEditFeature = true;
        this.eventFilterFeature = true;
        this.eventMenuFeature = true;
        this.eventResizeFeature = true;
        this.eventTooltipFeature = true;
        this.groupFeature = true;
        this.scheduleMenuFeature = true;
        this.scheduleTooltipFeature = true;
        this.sortFeature = true;
        this.timeRangesFeature = true;
        this.selectedEvent = '';
        this.onSchedulerEvents = new EventEmitter();
        // Needed later, used as target when rendering Bryntum Scheduler
        this.elementRef = element;
    }
    /**
     * @deprecated in favor of schedulerInstance
     * @return {?}
     */
    get schedulerEngine() {
        console.warn('schedulerEngine is deprecated. Use schedulerInstance instead.');
        return this.schedulerInstance;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const config = {
            // Render scheduler to components element
            appendTo: this.elementRef.nativeElement,
            // Listeners, will relay events
            listeners: {
                /**
                 * @param {?} event
                 * @return {?}
                 */
                catchAll(event) {
                    if (event.type === 'eventselectionchange') {
                        this.selectedEvent = event.selected.length ? event.selected[0].name : '';
                    }
                    this.onSchedulerEvents.emit(event);
                },
                thisObj: this
            },
            features: {}
        };
        // relay properties with names matching this.featureRe to features
        this.features.forEach((/**
         * @param {?} featureName
         * @return {?}
         */
        featureName => {
            if (featureName in this) {
                config.features[featureName.replace(this.featureRe, '')] = this[featureName];
            }
        }));
        // Pass configs on to scheduler
        this.configs.forEach((/**
         * @param {?} configName
         * @return {?}
         */
        configName => {
            if (configName in this) {
                // application may want to pass id for the engine is schedulerId
                if ('schedulerId' === configName && this[configName]) {
                    config['id'] = this[configName];
                }
                else {
                    config[configName] = this[configName];
                }
            }
        }));
        // The application may have passed string id of the partner so
        // we attempt to find the real instance of the scheduler with that id
        if (config['partner'] && 'string' === typeof (config['partner'])) {
            /** @type {?} */
            const bryntum = window['bryntum'];
            /** @type {?} */
            const partner = bryntum && bryntum.get && bryntum.get(config['partner']);
            config['partner'] = partner || undefined;
        }
        // The Angular 11 application when compiled for production with buildOptimizer: true
        // fails on scheduler re-creation if any of this data sets is bound in template. It may
        // have something to do with the Angular build optimization process. Assigning the
        // data after the scheduler has been created resolves the issue.
        // https://github.com/bryntum/support/issues/2157
        /** @type {?} */
        const stores = {};
        [
            'resources',
            'events',
            'assignments',
            'dependencies',
            'timeRanges',
            'resourceTimeRanges'
        ].forEach((/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (config[name]) {
                stores[name] = config[name];
                delete config[name];
            }
        }));
        this.schedulerInstance = new Scheduler(config);
        Object.assign(this.schedulerInstance, stores);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const me = this;
        if (me.schedulerInstance) {
            // Iterate over all changes
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([name, { currentValue }]) => {
                // Apply changes that match configs to grid
                if (me.configs.includes(name)) {
                    me.schedulerInstance[name] = currentValue;
                }
                if (me.features.includes(name)) {
                    me.schedulerInstance[name.replace(this.featureRe, '')] = currentValue;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    removeEvent() {
        /** @type {?} */
        const scheduler = this.schedulerInstance;
        scheduler.eventStore.remove(scheduler.selectedEvents);
        this.selectedEvent = '';
    }
    /**
     * @return {?}
     */
    addEvent() {
        /** @type {?} */
        const scheduler = this.schedulerInstance;
        /** @type {?} */
        const event = (/** @type {?} */ (new scheduler.eventStore.modelClass({
            resourceId: scheduler.resourceStore.first.id,
            startDate: scheduler.startDate,
            duration: 1,
            durationUnit: 'h',
            name: 'New task',
            eventType: 'Meeting'
        })));
        scheduler.editEvent(event);
    }
    /**
     * Destroys component
     * @return {?}
     */
    ngOnDestroy() {
        if (this.schedulerInstance) {
            this.schedulerInstance.destroy();
        }
    }
}
SchedulerComponent.ɵfac = function SchedulerComponent_Factory(t) { return new (t || SchedulerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SchedulerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SchedulerComponent, selectors: [["bry-scheduler"]], inputs: { allowOverlap: "allowOverlap", autoAdjustTimeAxis: "autoAdjustTimeAxis", autoHeight: "autoHeight", barMargin: "barMargin", columnLines: "columnLines", createEventOnDblClick: "createEventOnDblClick", disableGridRowModelWarning: "disableGridRowModelWarning", enableDeleteKey: "enableDeleteKey", enableEventAnimations: "enableEventAnimations", enableRecurringEvents: "enableRecurringEvents", enableTextSelection: "enableTextSelection", eventBarTextField: "eventBarTextField", eventColor: "eventColor", eventSelectionDisabled: "eventSelectionDisabled", eventStyle: "eventStyle", fillLastColumn: "fillLastColumn", fullRowRefresh: "fullRowRefresh", hideHeaders: "hideHeaders", loadMask: "loadMask", longPressTime: "longPressTime", maintainSelectionOnDatasetChange: "maintainSelectionOnDatasetChange", managedEventSizing: "managedEventSizing", milestoneCharWidth: "milestoneCharWidth", milestoneLayoutMode: "milestoneLayoutMode", readOnly: "readOnly", removeUnassignedEvent: "removeUnassignedEvent", resizeToFitIncludesHeader: "resizeToFitIncludesHeader", rowHeight: "rowHeight", showDirty: "showDirty", snapRelativeToEventStartDate: "snapRelativeToEventStartDate", triggerSelectionChangeOnRemove: "triggerSelectionChangeOnRemove", useInitialAnimation: "useInitialAnimation", viewPreset: "viewPreset", zoomOnMouseWheel: "zoomOnMouseWheel", zoomOnTimeAxisDoubleClick: "zoomOnTimeAxisDoubleClick", cellEditFeature: "cellEditFeature", cellTooltipFeature: "cellTooltipFeature", columnDragToolbarFeature: "columnDragToolbarFeature", columnLinesFeature: "columnLinesFeature", columnPickerFeature: "columnPickerFeature", columnReorderFeature: "columnReorderFeature", columnResizeFeature: "columnResizeFeature", dependenciesFeature: "dependenciesFeature", dependencyEditFeature: "dependencyEditFeature", eventDragCreateFeature: "eventDragCreateFeature", eventDragFeature: "eventDragFeature", eventEditFeature: "eventEditFeature", eventFilterFeature: "eventFilterFeature", eventMenuFeature: "eventMenuFeature", eventResizeFeature: "eventResizeFeature", eventTooltipFeature: "eventTooltipFeature", groupFeature: "groupFeature", scheduleMenuFeature: "scheduleMenuFeature", scheduleTooltipFeature: "scheduleTooltipFeature", sortFeature: "sortFeature", timeRangesFeature: "timeRangesFeature", schedulerId: "schedulerId", animateRemovingRows: "animateRemovingRows", assignments: "assignments", assignmentStore: "assignmentStore", columns: "columns", contextMenuTriggerEvent: "contextMenuTriggerEvent", crudManager: "crudManager", defaultResourceImageName: "defaultResourceImageName", dependencyStore: "dependencyStore", displayDateFormat: "displayDateFormat", emptyText: "emptyText", endDate: "endDate", endParamName: "endParamName", eventBodyTemplate: "eventBodyTemplate", eventLayout: "eventLayout", eventRenderer: "eventRenderer", events: "events", eventStore: "eventStore", fillTicks: "fillTicks", getRowHeight: "getRowHeight", hasVisibleEvents: "hasVisibleEvents", height: "height", horizontalEventSorterFn: "horizontalEventSorterFn", maxHeight: "maxHeight", maxWidth: "maxWidth", maxZoomLevel: "maxZoomLevel", milestoneAlign: "milestoneAlign", minHeight: "minHeight", minWidth: "minWidth", minZoomLevel: "minZoomLevel", mode: "mode", multiEventSelect: "multiEventSelect", partner: "partner", passStartEndParameters: "passStartEndParameters", presets: "presets", resourceColumns: "resourceColumns", resourceImagePath: "resourceImagePath", resourceMargin: "resourceMargin", resources: "resources", resourceStore: "resourceStore", resourceTimeRanges: "resourceTimeRanges", responsiveLevels: "responsiveLevels", scrollLeft: "scrollLeft", scrollTop: "scrollTop", selectedEvents: "selectedEvents", selectionMode: "selectionMode", snap: "snap", startDate: "startDate", startParamName: "startParamName", subGridConfigs: "subGridConfigs", tickWidth: "tickWidth", timeRanges: "timeRanges", timeResolution: "timeResolution", viewportCenterDate: "viewportCenterDate", weekStartDay: "weekStartDay", width: "width", workingTime: "workingTime", zoomLevel: "zoomLevel", cellMenuFeature: "cellMenuFeature", eventDragSelectFeature: "eventDragSelectFeature", filterBarFeature: "filterBarFeature", filterFeature: "filterFeature", groupSummaryFeature: "groupSummaryFeature", headerMenuFeature: "headerMenuFeature", headerZoomFeature: "headerZoomFeature", labelsFeature: "labelsFeature", nonWorkingTimeFeature: "nonWorkingTimeFeature", panFeature: "panFeature", pdfExportFeature: "pdfExportFeature", quickFindFeature: "quickFindFeature", regionResizeFeature: "regionResizeFeature", resourceTimeRangesFeature: "resourceTimeRangesFeature", rowReorderFeature: "rowReorderFeature", searchFeature: "searchFeature", simpleEventEdit: "simpleEventEdit", stripeFeature: "stripeFeature", summaryFeature: "summaryFeature", timeAxisHeaderMenuFeature: "timeAxisHeaderMenuFeature", treeFeature: "treeFeature", transitionDuration: "transitionDuration" }, outputs: { selectedEvent: "selectedEvent", onSchedulerEvents: "onSchedulerEvents" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function SchedulerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
SchedulerComponent.ctorParameters = () => [
    { type: ElementRef }
];
SchedulerComponent.propDecorators = {
    schedulerId: [{ type: Input }],
    allowOverlap: [{ type: Input }],
    animateRemovingRows: [{ type: Input }],
    assignments: [{ type: Input }],
    assignmentStore: [{ type: Input }],
    autoAdjustTimeAxis: [{ type: Input }],
    autoHeight: [{ type: Input }],
    barMargin: [{ type: Input }],
    columnLines: [{ type: Input }],
    columns: [{ type: Input }],
    contextMenuTriggerEvent: [{ type: Input }],
    createEventOnDblClick: [{ type: Input }],
    crudManager: [{ type: Input }],
    defaultResourceImageName: [{ type: Input }],
    dependencyStore: [{ type: Input }],
    disableGridRowModelWarning: [{ type: Input }],
    displayDateFormat: [{ type: Input }],
    emptyText: [{ type: Input }],
    enableDeleteKey: [{ type: Input }],
    enableEventAnimations: [{ type: Input }],
    enableRecurringEvents: [{ type: Input }],
    enableTextSelection: [{ type: Input }],
    endDate: [{ type: Input }],
    endParamName: [{ type: Input }],
    eventBarTextField: [{ type: Input }],
    eventBodyTemplate: [{ type: Input }],
    eventColor: [{ type: Input }],
    eventLayout: [{ type: Input }],
    eventRenderer: [{ type: Input }],
    events: [{ type: Input }],
    eventSelectionDisabled: [{ type: Input }],
    eventStore: [{ type: Input }],
    eventStyle: [{ type: Input }],
    fillLastColumn: [{ type: Input }],
    fillTicks: [{ type: Input }],
    fullRowRefresh: [{ type: Input }],
    getRowHeight: [{ type: Input }],
    hasVisibleEvents: [{ type: Input }],
    height: [{ type: Input }],
    hideHeaders: [{ type: Input }],
    horizontalEventSorterFn: [{ type: Input }],
    loadMask: [{ type: Input }],
    longPressTime: [{ type: Input }],
    maintainSelectionOnDatasetChange: [{ type: Input }],
    managedEventSizing: [{ type: Input }],
    maxHeight: [{ type: Input }],
    maxWidth: [{ type: Input }],
    maxZoomLevel: [{ type: Input }],
    milestoneAlign: [{ type: Input }],
    milestoneCharWidth: [{ type: Input }],
    milestoneLayoutMode: [{ type: Input }],
    minHeight: [{ type: Input }],
    minWidth: [{ type: Input }],
    minZoomLevel: [{ type: Input }],
    mode: [{ type: Input }],
    multiEventSelect: [{ type: Input }],
    partner: [{ type: Input }],
    passStartEndParameters: [{ type: Input }],
    presets: [{ type: Input }],
    readOnly: [{ type: Input }],
    removeUnassignedEvent: [{ type: Input }],
    resizeToFitIncludesHeader: [{ type: Input }],
    resourceColumns: [{ type: Input }],
    resourceImagePath: [{ type: Input }],
    resourceMargin: [{ type: Input }],
    resources: [{ type: Input }],
    resourceStore: [{ type: Input }],
    resourceTimeRanges: [{ type: Input }],
    responsiveLevels: [{ type: Input }],
    rowHeight: [{ type: Input }],
    scrollLeft: [{ type: Input }],
    scrollTop: [{ type: Input }],
    selectedEvents: [{ type: Input }],
    selectionMode: [{ type: Input }],
    showDirty: [{ type: Input }],
    snap: [{ type: Input }],
    snapRelativeToEventStartDate: [{ type: Input }],
    startDate: [{ type: Input }],
    startParamName: [{ type: Input }],
    subGridConfigs: [{ type: Input }],
    tickWidth: [{ type: Input }],
    timeRanges: [{ type: Input }],
    timeResolution: [{ type: Input }],
    triggerSelectionChangeOnRemove: [{ type: Input }],
    useInitialAnimation: [{ type: Input }],
    viewportCenterDate: [{ type: Input }],
    viewPreset: [{ type: Input }],
    weekStartDay: [{ type: Input }],
    width: [{ type: Input }],
    workingTime: [{ type: Input }],
    zoomLevel: [{ type: Input }],
    zoomOnMouseWheel: [{ type: Input }],
    zoomOnTimeAxisDoubleClick: [{ type: Input }],
    cellEditFeature: [{ type: Input }],
    cellMenuFeature: [{ type: Input }],
    cellTooltipFeature: [{ type: Input }],
    columnDragToolbarFeature: [{ type: Input }],
    columnLinesFeature: [{ type: Input }],
    columnPickerFeature: [{ type: Input }],
    columnReorderFeature: [{ type: Input }],
    columnResizeFeature: [{ type: Input }],
    dependenciesFeature: [{ type: Input }],
    dependencyEditFeature: [{ type: Input }],
    eventDragCreateFeature: [{ type: Input }],
    eventDragFeature: [{ type: Input }],
    eventDragSelectFeature: [{ type: Input }],
    eventEditFeature: [{ type: Input }],
    eventFilterFeature: [{ type: Input }],
    eventMenuFeature: [{ type: Input }],
    eventResizeFeature: [{ type: Input }],
    eventTooltipFeature: [{ type: Input }],
    filterBarFeature: [{ type: Input }],
    filterFeature: [{ type: Input }],
    groupFeature: [{ type: Input }],
    groupSummaryFeature: [{ type: Input }],
    headerMenuFeature: [{ type: Input }],
    headerZoomFeature: [{ type: Input }],
    labelsFeature: [{ type: Input }],
    nonWorkingTimeFeature: [{ type: Input }],
    panFeature: [{ type: Input }],
    pdfExportFeature: [{ type: Input }],
    quickFindFeature: [{ type: Input }],
    regionResizeFeature: [{ type: Input }],
    resourceTimeRangesFeature: [{ type: Input }],
    rowReorderFeature: [{ type: Input }],
    scheduleMenuFeature: [{ type: Input }],
    scheduleTooltipFeature: [{ type: Input }],
    searchFeature: [{ type: Input }],
    simpleEventEdit: [{ type: Input }],
    sortFeature: [{ type: Input }],
    stripeFeature: [{ type: Input }],
    summaryFeature: [{ type: Input }],
    timeAxisHeaderMenuFeature: [{ type: Input }],
    timeRangesFeature: [{ type: Input }],
    treeFeature: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    selectedEvent: [{ type: Output }],
    onSchedulerEvents: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SchedulerComponent, [{
        type: Component,
        args: [{
                selector: 'bry-scheduler',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { allowOverlap: [{
            type: Input
        }], autoAdjustTimeAxis: [{
            type: Input
        }], autoHeight: [{
            type: Input
        }], barMargin: [{
            type: Input
        }], columnLines: [{
            type: Input
        }], createEventOnDblClick: [{
            type: Input
        }], disableGridRowModelWarning: [{
            type: Input
        }], enableDeleteKey: [{
            type: Input
        }], enableEventAnimations: [{
            type: Input
        }], enableRecurringEvents: [{
            type: Input
        }], enableTextSelection: [{
            type: Input
        }], eventBarTextField: [{
            type: Input
        }], eventColor: [{
            type: Input
        }], eventSelectionDisabled: [{
            type: Input
        }], eventStyle: [{
            type: Input
        }], fillLastColumn: [{
            type: Input
        }], fullRowRefresh: [{
            type: Input
        }], hideHeaders: [{
            type: Input
        }], loadMask: [{
            type: Input
        }], longPressTime: [{
            type: Input
        }], maintainSelectionOnDatasetChange: [{
            type: Input
        }], managedEventSizing: [{
            type: Input
        }], milestoneCharWidth: [{
            type: Input
        }], milestoneLayoutMode: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], removeUnassignedEvent: [{
            type: Input
        }], resizeToFitIncludesHeader: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], showDirty: [{
            type: Input
        }], snapRelativeToEventStartDate: [{
            type: Input
        }], triggerSelectionChangeOnRemove: [{
            type: Input
        }], useInitialAnimation: [{
            type: Input
        }], viewPreset: [{
            type: Input
        }], zoomOnMouseWheel: [{
            type: Input
        }], zoomOnTimeAxisDoubleClick: [{
            type: Input
        }], cellEditFeature: [{
            type: Input
        }], cellTooltipFeature: [{
            type: Input
        }], columnDragToolbarFeature: [{
            type: Input
        }], columnLinesFeature: [{
            type: Input
        }], columnPickerFeature: [{
            type: Input
        }], columnReorderFeature: [{
            type: Input
        }], columnResizeFeature: [{
            type: Input
        }], dependenciesFeature: [{
            type: Input
        }], dependencyEditFeature: [{
            type: Input
        }], eventDragCreateFeature: [{
            type: Input
        }], eventDragFeature: [{
            type: Input
        }], eventEditFeature: [{
            type: Input
        }], eventFilterFeature: [{
            type: Input
        }], eventMenuFeature: [{
            type: Input
        }], eventResizeFeature: [{
            type: Input
        }], eventTooltipFeature: [{
            type: Input
        }], groupFeature: [{
            type: Input
        }], scheduleMenuFeature: [{
            type: Input
        }], scheduleTooltipFeature: [{
            type: Input
        }], sortFeature: [{
            type: Input
        }], timeRangesFeature: [{
            type: Input
        }], selectedEvent: [{
            type: Output
        }], onSchedulerEvents: [{
            type: Output
        }], schedulerId: [{
            type: Input
        }], animateRemovingRows: [{
            type: Input
        }], assignments: [{
            type: Input
        }], assignmentStore: [{
            type: Input
        }], columns: [{
            type: Input
        }], contextMenuTriggerEvent: [{
            type: Input
        }], crudManager: [{
            type: Input
        }], defaultResourceImageName: [{
            type: Input
        }], dependencyStore: [{
            type: Input
        }], displayDateFormat: [{
            type: Input
        }], emptyText: [{
            type: Input
        }], endDate: [{
            type: Input
        }], endParamName: [{
            type: Input
        }], eventBodyTemplate: [{
            type: Input
        }], eventLayout: [{
            type: Input
        }], eventRenderer: [{
            type: Input
        }], events: [{
            type: Input
        }], eventStore: [{
            type: Input
        }], fillTicks: [{
            type: Input
        }], getRowHeight: [{
            type: Input
        }], hasVisibleEvents: [{
            type: Input
        }], height: [{
            type: Input
        }], horizontalEventSorterFn: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], maxZoomLevel: [{
            type: Input
        }], milestoneAlign: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], minZoomLevel: [{
            type: Input
        }], mode: [{
            type: Input
        }], multiEventSelect: [{
            type: Input
        }], partner: [{
            type: Input
        }], passStartEndParameters: [{
            type: Input
        }], presets: [{
            type: Input
        }], resourceColumns: [{
            type: Input
        }], resourceImagePath: [{
            type: Input
        }], resourceMargin: [{
            type: Input
        }], resources: [{
            type: Input
        }], resourceStore: [{
            type: Input
        }], resourceTimeRanges: [{
            type: Input
        }], responsiveLevels: [{
            type: Input
        }], scrollLeft: [{
            type: Input
        }], scrollTop: [{
            type: Input
        }], selectedEvents: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], snap: [{
            type: Input
        }], startDate: [{
            type: Input
        }], startParamName: [{
            type: Input
        }], subGridConfigs: [{
            type: Input
        }], tickWidth: [{
            type: Input
        }], timeRanges: [{
            type: Input
        }], timeResolution: [{
            type: Input
        }], viewportCenterDate: [{
            type: Input
        }], weekStartDay: [{
            type: Input
        }], width: [{
            type: Input
        }], workingTime: [{
            type: Input
        }], zoomLevel: [{
            type: Input
        }], cellMenuFeature: [{
            type: Input
        }], eventDragSelectFeature: [{
            type: Input
        }], filterBarFeature: [{
            type: Input
        }], filterFeature: [{
            type: Input
        }], groupSummaryFeature: [{
            type: Input
        }], headerMenuFeature: [{
            type: Input
        }], headerZoomFeature: [{
            type: Input
        }], labelsFeature: [{
            type: Input
        }], nonWorkingTimeFeature: [{
            type: Input
        }], panFeature: [{
            type: Input
        }], pdfExportFeature: [{
            type: Input
        }], quickFindFeature: [{
            type: Input
        }], regionResizeFeature: [{
            type: Input
        }], resourceTimeRangesFeature: [{
            type: Input
        }], rowReorderFeature: [{
            type: Input
        }], searchFeature: [{
            type: Input
        }], simpleEventEdit: [{
            type: Input
        }], stripeFeature: [{
            type: Input
        }], summaryFeature: [{
            type: Input
        }], timeAxisHeaderMenuFeature: [{
            type: Input
        }], treeFeature: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SliderComponent {
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
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["bry-slider"]], inputs: { max: "max", min: "min", step: "step", text: "text", value: "value", onChange: "onChange", showTooltip: "showTooltip", showValue: "showValue" }, decls: 0, vars: 0, template: function SliderComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: 'bry-slider',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { max: [{
            type: Input
        }], min: [{
            type: Input
        }], step: [{
            type: Input
        }], text: [{
            type: Input
        }], value: [{
            type: Input
        }], onChange: [{
            type: Input
        }], showTooltip: [{
            type: Input
        }], showValue: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetComponent {
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
WidgetComponent.ɵfac = function WidgetComponent_Factory(t) { return new (t || WidgetComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
WidgetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WidgetComponent, selectors: [["bry-widget"]], inputs: { config: "config" }, outputs: { onWidgetEvents: "onWidgetEvents" }, decls: 0, vars: 0, template: function WidgetComponent_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
WidgetComponent.ctorParameters = () => [
    { type: ElementRef }
];
WidgetComponent.propDecorators = {
    config: [{ type: Input }],
    onWidgetEvents: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WidgetComponent, [{
        type: Component,
        args: [{
                selector: 'bry-widget',
                template: ''
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onWidgetEvents: [{
            type: Output
        }], config: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BryntumAngularSharedModule {
}
BryntumAngularSharedModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BryntumAngularSharedModule });
BryntumAngularSharedModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BryntumAngularSharedModule_Factory(t) { return new (t || BryntumAngularSharedModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BryntumAngularSharedModule, { declarations: [ButtonComponent, FullscreenComponent, SchedulerComponent, SliderComponent, WidgetComponent], exports: [ButtonComponent, FullscreenComponent, SchedulerComponent, SliderComponent, WidgetComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BryntumAngularSharedModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ButtonComponent,
                    FullscreenComponent,
                    SchedulerComponent,
                    SliderComponent,
                    WidgetComponent
                ],
                imports: [],
                exports: [
                    ButtonComponent,
                    FullscreenComponent,
                    SchedulerComponent,
                    SliderComponent,
                    WidgetComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BryntumAngularSharedModule, ButtonComponent, FullscreenComponent, SchedulerComponent, SliderComponent, WidgetComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC5qcyIsInNvdXJjZXMiOlsiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvYnV0dG9uLmNvbXBvbmVudC50cyIsImJyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL2Z1bGxzY3JlZW4uY29tcG9uZW50LnRzIiwiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvc2NoZWR1bGVyLmNvbXBvbmVudC50cyIsImJyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL3NsaWRlci5jb21wb25lbnQudHMiLCJicnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi93aWRnZXQuY29tcG9uZW50LnRzIiwiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7TUFhYSxlQUFlO0FBQUk7QUFFaEM7QUFBUztBQUNUO0FBQVMsSUFlTCxZQUFZLE9BQW1CO0FBQ2xDLFFBYlksVUFBSyxHQUFXLG1CQUFtQixDQUFDO0FBQ2hELFFBUWEsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQVksYUFBUTtBQUFTO0FBQXdCO0FBQWEsUUFBM0MsU0FBUSxFQUFDO0FBRWpDLFFBQ1EsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFDakMsS0FBSTtBQUVMO0FBQ0M7QUFDQztBQUNZO0FBQ1IsSUFERixRQUFRO0FBQ1gsUUFBTyxJQUFJLENBQUMsTUFBTSxzQkFBRyxZQUFZLENBQUMsWUFBWSxDQUFDO0FBQy9DLFlBQVcsSUFBSSxFQUFVLFFBQVE7QUFDakMsWUFBVyxRQUFRLEVBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO0FBQ3RELFlBQVcsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO0FBQ2pDLFlBQVcsS0FBSyxFQUFTLElBQUksQ0FBQyxLQUFLO0FBQ25DLFlBQVcsSUFBSSxFQUFVLElBQUksQ0FBQyxJQUFJO0FB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QUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBL0RBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQVJBLEFBQUEsQUFlQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQ2hCQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBbkRBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQVJBLEFBQUEsQUNlQSxBQUFBLEFBeVRBLEFBQUEsQUFBQSxBQTVTQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBUUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBcFRBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXNUQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFLQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFoY0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBUkEsQUFBQSxBQWdMQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUM1VEEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBYkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQWlCQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQW5EQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFSQSxBQUFBLEFBc0JBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFDbkJBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUpBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFRQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUE3Q0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBUkEsQUFBQSxBQW1CQSxBQUFBLEFBQ0EsQUFBQSxBQ0tBLEFBQUEsQUFsQkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gQnV0dG9uIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1idXR0b24nLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgQElucHV0KCkgY2xzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdiLW9yYW5nZSBiLXJhaXNlZCc7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByZXNzZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvZ2dsZWFibGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9nZ2xlR3JvdXA6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIG9uQWN0aW9uID0gKCkgPT4ge307IC8vIGVtcHR5IGZuIGJ5IGRlZmF1bHQsIGZpeGVzICM0MzZcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgY2xzICAgICAgICAgOiB0aGlzLmNscyxcbiAgICAgICAgICAgIGNvbG9yICAgICAgIDogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIGljb24gICAgICAgIDogdGhpcy5pY29uLFxuICAgICAgICAgICAgb25BY3Rpb24gICAgOiB0aGlzLm9uQWN0aW9uLFxuICAgICAgICAgICAgb25DbGljayAgICAgOiAoZXZlbnQ6IGFueSkgPT4gdGhpcy5jbGljay5lbWl0KGV2ZW50KSxcbiAgICAgICAgICAgIHByZXNzZWQgICAgIDogdGhpcy5wcmVzc2VkLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB0b2dnbGVhYmxlICA6IHRoaXMudG9nZ2xlYWJsZSxcbiAgICAgICAgICAgIHRvZ2dsZUdyb3VwIDogdGhpcy50b2dnbGVHcm91cCxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgIDogdGhpcy50b29sdGlwLFxuICAgICAgICAgICAgZGlzYWJsZWQgICAgOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykuZm9yRWFjaCgoW25hbWUsIHsgY3VycmVudFZhbHVlIH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25bbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gRnVsbHNjcmVlbiBidXR0b25cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIEZ1bGxzY3JlZW4sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1mdWxsc2NyZWVuJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8vIGNsYXNzIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIUZ1bGxzY3JlZW4uZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGljb24gICAgICAgOiAnYi1pY29uIGItaWNvbi1mdWxsc2NyZWVuJyxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgOiAnRnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b2dnbGVhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGNscyAgICAgICAgOiAnYi1ibHVlIGItcmFpc2VkJyxcbiAgICAgICAgICAgIG9uVG9nZ2xlICAgOiAoeyBwcmVzc2VkIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLnJlcXVlc3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLmV4aXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcblxuICAgICAgICBGdWxsc2NyZWVuLm9uRnVsbHNjcmVlbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblsncHJlc3NlZCddID0gRnVsbHNjcmVlbi5pc0Z1bGxzY3JlZW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIVxuICpcbiAqIEJyeW50dW0gU2NoZWR1bGVyIDQuMC44IChUUklBTCBWRVJTSU9OKVxuICpcbiAqIENvcHlyaWdodChjKSAyMDIxIEJyeW50dW0gQUJcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vY29udGFjdFxuICogaHR0cHM6Ly9icnludHVtLmNvbS9saWNlbnNlXG4gKlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBTY2hlZHVsZXIsIEFzc2lnbm1lbnRNb2RlbCwgQXNzaWdubWVudFN0b3JlLCBFdmVudE1vZGVsLCBTY2hlZHVsZXJDb25maWcgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktc2NoZWR1bGVyJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzY2hlZHVsZXJJbnN0YW5jZTogU2NoZWR1bGVyO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygc2NoZWR1bGVySW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNjaGVkdWxlckVuZ2luZSgpIDogU2NoZWR1bGVyIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdzY2hlZHVsZXJFbmdpbmUgaXMgZGVwcmVjYXRlZC4gVXNlIHNjaGVkdWxlckluc3RhbmNlIGluc3RlYWQuJylcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVySW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZWF0dXJlUmU6IFJlZ0V4cCA9IC9GZWF0dXJlJC87XG5cbiAgICAvKiAjcmVnaW9uIGZlYXR1cmVzICovXG4gICAgcHJpdmF0ZSBmZWF0dXJlczogc3RyaW5nW10gPSBbXG4gICAgICAgICdjZWxsRWRpdEZlYXR1cmUnLFxuICAgICAgICAnY2VsbE1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ2NlbGxUb29sdGlwRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5EcmFnVG9vbGJhckZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uTGluZXNGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtblBpY2tlckZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uUmVvcmRlckZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uUmVzaXplRmVhdHVyZScsXG4gICAgICAgICdkZXBlbmRlbmNpZXNGZWF0dXJlJyxcbiAgICAgICAgJ2RlcGVuZGVuY3lFZGl0RmVhdHVyZScsXG4gICAgICAgICdldmVudERyYWdDcmVhdGVGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RHJhZ0ZlYXR1cmUnLFxuICAgICAgICAnZXZlbnREcmFnU2VsZWN0RmVhdHVyZScsXG4gICAgICAgICdldmVudEVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RmlsdGVyRmVhdHVyZScsXG4gICAgICAgICdldmVudE1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50UmVzaXplRmVhdHVyZScsXG4gICAgICAgICdldmVudFRvb2x0aXBGZWF0dXJlJyxcbiAgICAgICAgJ2ZpbHRlckJhckZlYXR1cmUnLFxuICAgICAgICAnZmlsdGVyRmVhdHVyZScsXG4gICAgICAgICdncm91cEZlYXR1cmUnLFxuICAgICAgICAnZ3JvdXBTdW1tYXJ5RmVhdHVyZScsXG4gICAgICAgICdoZWFkZXJNZW51RmVhdHVyZScsXG4gICAgICAgICdoZWFkZXJab29tRmVhdHVyZScsXG4gICAgICAgICdsYWJlbHNGZWF0dXJlJyxcbiAgICAgICAgJ25vbldvcmtpbmdUaW1lRmVhdHVyZScsXG4gICAgICAgICdwYW5GZWF0dXJlJyxcbiAgICAgICAgJ3BkZkV4cG9ydEZlYXR1cmUnLFxuICAgICAgICAncXVpY2tGaW5kRmVhdHVyZScsXG4gICAgICAgICdyZWdpb25SZXNpemVGZWF0dXJlJyxcbiAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlc0ZlYXR1cmUnLFxuICAgICAgICAncm93UmVvcmRlckZlYXR1cmUnLFxuICAgICAgICAnc2NoZWR1bGVNZW51RmVhdHVyZScsXG4gICAgICAgICdzY2hlZHVsZVRvb2x0aXBGZWF0dXJlJyxcbiAgICAgICAgJ3NlYXJjaEZlYXR1cmUnLFxuICAgICAgICAnc2ltcGxlRXZlbnRFZGl0RmVhdHVyZScsXG4gICAgICAgICdzb3J0RmVhdHVyZScsXG4gICAgICAgICdzdHJpcGVGZWF0dXJlJyxcbiAgICAgICAgJ3N1bW1hcnlGZWF0dXJlJyxcbiAgICAgICAgJ3RpbWVBeGlzSGVhZGVyTWVudUZlYXR1cmUnLFxuICAgICAgICAndGltZVJhbmdlc0ZlYXR1cmUnLFxuICAgICAgICAndHJlZUZlYXR1cmUnXG4gICAgXTtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvKiAjcmVnaW9uIGNvbmZpZ3MgKi9cbiAgICBwcml2YXRlIGNvbmZpZ3M6IHN0cmluZ1tdID0gW1xuICAgICAgICAnYWxsb3dPdmVybGFwJyxcbiAgICAgICAgJ2FuaW1hdGVSZW1vdmluZ1Jvd3MnLFxuICAgICAgICAnYXNzaWdubWVudHMnLFxuICAgICAgICAnYXNzaWdubWVudFN0b3JlJyxcbiAgICAgICAgJ2F1dG9BZGp1c3RUaW1lQXhpcycsXG4gICAgICAgICdhdXRvSGVpZ2h0JyxcbiAgICAgICAgJ2Jhck1hcmdpbicsXG4gICAgICAgICdjb2x1bW5MaW5lcycsXG4gICAgICAgICdjb2x1bW5zJyxcbiAgICAgICAgJ2NvbnRleHRNZW51VHJpZ2dlckV2ZW50JyxcbiAgICAgICAgJ2NyZWF0ZUV2ZW50T25EYmxDbGljaycsXG4gICAgICAgICdjcnVkTWFuYWdlcicsXG4gICAgICAgICdkZWZhdWx0UmVzb3VyY2VJbWFnZU5hbWUnLFxuICAgICAgICAnZGVwZW5kZW5jeVN0b3JlJyxcbiAgICAgICAgJ2Rpc2FibGVHcmlkUm93TW9kZWxXYXJuaW5nJyxcbiAgICAgICAgJ2Rpc3BsYXlEYXRlRm9ybWF0JyxcbiAgICAgICAgJ2VtcHR5VGV4dCcsXG4gICAgICAgICdlbmFibGVEZWxldGVLZXknLFxuICAgICAgICAnZW5hYmxlRXZlbnRBbmltYXRpb25zJyxcbiAgICAgICAgJ2VuYWJsZVJlY3VycmluZ0V2ZW50cycsXG4gICAgICAgICdlbmFibGVUZXh0U2VsZWN0aW9uJyxcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICAnZW5kUGFyYW1OYW1lJyxcbiAgICAgICAgJ2V2ZW50QmFyVGV4dEZpZWxkJyxcbiAgICAgICAgJ2V2ZW50Qm9keVRlbXBsYXRlJyxcbiAgICAgICAgJ2V2ZW50Q29sb3InLFxuICAgICAgICAnZXZlbnRMYXlvdXQnLFxuICAgICAgICAnZXZlbnRSZW5kZXJlcicsXG4gICAgICAgICdldmVudHMnLFxuICAgICAgICAnZXZlbnRTZWxlY3Rpb25EaXNhYmxlZCcsXG4gICAgICAgICdldmVudFN0b3JlJyxcbiAgICAgICAgJ2V2ZW50U3R5bGUnLFxuICAgICAgICAnZmlsbExhc3RDb2x1bW4nLFxuICAgICAgICAnZmlsbFRpY2tzJyxcbiAgICAgICAgJ2Z1bGxSb3dSZWZyZXNoJyxcbiAgICAgICAgJ2dldFJvd0hlaWdodCcsXG4gICAgICAgICdoYXNWaXNpYmxlRXZlbnRzJyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdoaWRlSGVhZGVycycsXG4gICAgICAgICdob3Jpem9udGFsRXZlbnRTb3J0ZXJGbicsXG4gICAgICAgICdsb2FkTWFzaycsXG4gICAgICAgICdsb25nUHJlc3NUaW1lJyxcbiAgICAgICAgJ21haW50YWluU2VsZWN0aW9uT25EYXRhc2V0Q2hhbmdlJyxcbiAgICAgICAgJ21hbmFnZWRFdmVudFNpemluZycsXG4gICAgICAgICdtYXhIZWlnaHQnLFxuICAgICAgICAnbWF4V2lkdGgnLFxuICAgICAgICAnbWF4Wm9vbUxldmVsJyxcbiAgICAgICAgJ21pbGVzdG9uZUFsaWduJyxcbiAgICAgICAgJ21pbGVzdG9uZUNoYXJXaWR0aCcsXG4gICAgICAgICdtaWxlc3RvbmVMYXlvdXRNb2RlJyxcbiAgICAgICAgJ21pbkhlaWdodCcsXG4gICAgICAgICdtaW5XaWR0aCcsXG4gICAgICAgICdtaW5ab29tTGV2ZWwnLFxuICAgICAgICAnbW9kZScsXG4gICAgICAgICdtdWx0aUV2ZW50U2VsZWN0JyxcbiAgICAgICAgJ3BhcnRuZXInLFxuICAgICAgICAncGFzc1N0YXJ0RW5kUGFyYW1ldGVycycsXG4gICAgICAgICdwcmVzZXRzJyxcbiAgICAgICAgJ3JlYWRPbmx5JyxcbiAgICAgICAgJ3JlbW92ZVVuYXNzaWduZWRFdmVudCcsXG4gICAgICAgICdyZXNpemVUb0ZpdEluY2x1ZGVzSGVhZGVyJyxcbiAgICAgICAgJ3Jlc291cmNlQ29sdW1ucycsXG4gICAgICAgICdyZXNvdXJjZUltYWdlUGF0aCcsXG4gICAgICAgICdyZXNvdXJjZU1hcmdpbicsXG4gICAgICAgICdyZXNvdXJjZXMnLFxuICAgICAgICAncmVzb3VyY2VTdG9yZScsXG4gICAgICAgICdyZXNvdXJjZVRpbWVSYW5nZXMnLFxuICAgICAgICAncmVzcG9uc2l2ZUxldmVscycsXG4gICAgICAgICdyb3dIZWlnaHQnLFxuICAgICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgICAnc2VsZWN0ZWRFdmVudHMnLFxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXG4gICAgICAgICdzaG93RGlydHknLFxuICAgICAgICAnc25hcCcsXG4gICAgICAgICdzbmFwUmVsYXRpdmVUb0V2ZW50U3RhcnREYXRlJyxcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgICdzdGFydFBhcmFtTmFtZScsXG4gICAgICAgICdzdWJHcmlkQ29uZmlncycsXG4gICAgICAgICd0aWNrV2lkdGgnLFxuICAgICAgICAndGltZVJhbmdlcycsXG4gICAgICAgICd0aW1lUmVzb2x1dGlvbicsXG4gICAgICAgICd0cmlnZ2VyU2VsZWN0aW9uQ2hhbmdlT25SZW1vdmUnLFxuICAgICAgICAndXNlSW5pdGlhbEFuaW1hdGlvbicsXG4gICAgICAgICd2aWV3cG9ydENlbnRlckRhdGUnLFxuICAgICAgICAndmlld1ByZXNldCcsXG4gICAgICAgICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnd29ya2luZ1RpbWUnLFxuICAgICAgICAnem9vbUxldmVsJyxcbiAgICAgICAgJ3pvb21Pbk1vdXNlV2hlZWwnLFxuICAgICAgICAnem9vbU9uVGltZUF4aXNEb3VibGVDbGljaycsXG5cbiAgICAgICAgLy8gc2NoZWR1bGVySWQgbWFwcyB0byBpZCBvZiB0aGUgdW5kZXJseWluZyBzY2hlZHVsZXJcbiAgICAgICAgJ3NjaGVkdWxlcklkJyxcblxuICAgICAgICAvLyBvbmx5IGZvciBleGFtcGxlcywgZGVsZXRlIGlmIHlvdSBkb24ndCBuZWVkIHRoZW1cbiAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbidcbiAgICBdO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gQ29uZmlncyAqL1xuICAgIC8vIHNjaGVkdWxlcklkIHRyYW5zbGF0ZXMgdG8gaWQgZm9yIHRoZSBzY2hlZHVsZXIgZW5naW5lXG4gICAgQElucHV0KCkgc2NoZWR1bGVySWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFsbG93T3ZlcmxhcDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgYW5pbWF0ZVJlbW92aW5nUm93czogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhc3NpZ25tZW50czogQXNzaWdubWVudE1vZGVsW10gfCBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBhc3NpZ25tZW50U3RvcmU6IEFzc2lnbm1lbnRTdG9yZSB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBhdXRvQWRqdXN0VGltZUF4aXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGF1dG9IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBiYXJNYXJnaW46IG51bWJlciA9IDU7XG4gICAgQElucHV0KCkgY29sdW1uTGluZXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtbnM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGNvbnRleHRNZW51VHJpZ2dlckV2ZW50OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3JlYXRlRXZlbnRPbkRibENsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjcnVkTWFuYWdlcjogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRlZmF1bHRSZXNvdXJjZUltYWdlTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY3lTdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRpc2FibGVHcmlkUm93TW9kZWxXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzcGxheURhdGVGb3JtYXQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbXB0eVRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmFibGVEZWxldGVLZXk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGVuYWJsZUV2ZW50QW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZW5hYmxlUmVjdXJyaW5nRXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZW5hYmxlVGV4dFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGVuZERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBlbmRQYXJhbU5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBldmVudEJhclRleHRGaWVsZDogc3RyaW5nID0gJ25hbWUnO1xuICAgIEBJbnB1dCgpIGV2ZW50Qm9keVRlbXBsYXRlOiBhbnk7XG4gICAgQElucHV0KCkgZXZlbnRDb2xvcjogc3RyaW5nID0gJ2dyZWVuJztcbiAgICBASW5wdXQoKSBldmVudExheW91dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGV2ZW50UmVuZGVyZXI6IGFueTtcbiAgICBASW5wdXQoKSBldmVudHM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGV2ZW50U2VsZWN0aW9uRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBldmVudFN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZXZlbnRTdHlsZTogc3RyaW5nID0gJ3BsYWluJztcbiAgICBASW5wdXQoKSBmaWxsTGFzdENvbHVtbjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZmlsbFRpY2tzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGZ1bGxSb3dSZWZyZXNoOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBnZXRSb3dIZWlnaHQ6IGFueTtcbiAgICBASW5wdXQoKSBoYXNWaXNpYmxlRXZlbnRzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhpZGVIZWFkZXJzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbEV2ZW50U29ydGVyRm46IGFueTtcbiAgICBASW5wdXQoKSBsb2FkTWFzazogc3RyaW5nID0gJ0xvYWRpbmcuLi4nO1xuICAgIEBJbnB1dCgpIGxvbmdQcmVzc1RpbWU6IG51bWJlciA9IDQwMDtcbiAgICBASW5wdXQoKSBtYWludGFpblNlbGVjdGlvbk9uRGF0YXNldENoYW5nZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgbWFuYWdlZEV2ZW50U2l6aW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBtYXhIZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1heFpvb21MZXZlbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1pbGVzdG9uZUFsaWduOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWlsZXN0b25lQ2hhcldpZHRoOiBudW1iZXIgPSAxMDtcbiAgICBASW5wdXQoKSBtaWxlc3RvbmVMYXlvdXRNb2RlOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5ab29tTGV2ZWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbXVsdGlFdmVudFNlbGVjdDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwYXJ0bmVyOiBhbnk7XG4gICAgQElucHV0KCkgcGFzc1N0YXJ0RW5kUGFyYW1ldGVyczogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwcmVzZXRzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlbW92ZVVuYXNzaWduZWRFdmVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcmVzaXplVG9GaXRJbmNsdWRlc0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcmVzb3VyY2VDb2x1bW5zOiBhbnk7XG4gICAgQElucHV0KCkgcmVzb3VyY2VJbWFnZVBhdGg6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXNvdXJjZU1hcmdpbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHJlc291cmNlczogb2JqZWN0W107XG4gICAgQElucHV0KCkgcmVzb3VyY2VTdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlc291cmNlVGltZVJhbmdlczogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmVMZXZlbHM6IGFueTtcbiAgICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciA9IDUwO1xuICAgIEBJbnB1dCgpIHNjcm9sbExlZnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzY3JvbGxUb3A6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzZWxlY3RlZEV2ZW50czogRXZlbnRNb2RlbFtdO1xuICAgIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBzaG93RGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzbmFwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNuYXBSZWxhdGl2ZVRvRXZlbnRTdGFydERhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzdGFydERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBzdGFydFBhcmFtTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN1YkdyaWRDb25maWdzOiBvYmplY3Q7XG4gICAgQElucHV0KCkgdGlja1dpZHRoOiBudW1iZXI7XG4gICAgQElucHV0KCkgdGltZVJhbmdlczogb2JqZWN0IHwgYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0aW1lUmVzb2x1dGlvbjogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRyaWdnZXJTZWxlY3Rpb25DaGFuZ2VPblJlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHVzZUluaXRpYWxBbmltYXRpb246IGJvb2xlYW4gfCBzdHJpbmcgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHZpZXdwb3J0Q2VudGVyRGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIHZpZXdQcmVzZXQ6IG9iamVjdCB8IHN0cmluZyA9ICdob3VyQW5kRGF5JztcbiAgICBASW5wdXQoKSB3ZWVrU3RhcnREYXk6IG51bWJlcjtcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHdvcmtpbmdUaW1lOiBvYmplY3Q7XG4gICAgQElucHV0KCkgem9vbUxldmVsOiBudW1iZXI7XG4gICAgQElucHV0KCkgem9vbU9uTW91c2VXaGVlbDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgem9vbU9uVGltZUF4aXNEb3VibGVDbGljazogYm9vbGVhbiA9IHRydWU7XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBGZWF0dXJlcywgb25seSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiAqL1xuICAgIEBJbnB1dCgpIGNlbGxFZGl0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY2VsbE1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGNlbGxUb29sdGlwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uRHJhZ1Rvb2xiYXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5MaW5lc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtblBpY2tlckZlYXR1cmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtblJlb3JkZXJGZWF0dXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5SZXNpemVGZWF0dXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBkZXBlbmRlbmNpZXNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jeUVkaXRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXZlbnREcmFnQ3JlYXRlRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnREcmFnRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnREcmFnU2VsZWN0RmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBldmVudEVkaXRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudEZpbHRlckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50TWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50UmVzaXplRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRUb29sdGlwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZmlsdGVyQmFyRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBmaWx0ZXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGdyb3VwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCB8IHN0cmluZyA9IHRydWU7XG4gICAgQElucHV0KCkgZ3JvdXBTdW1tYXJ5RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBoZWFkZXJNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBoZWFkZXJab29tRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBsYWJlbHNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIG5vbldvcmtpbmdUaW1lRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwYW5GZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHBkZkV4cG9ydEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcXVpY2tGaW5kRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByZWdpb25SZXNpemVGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJlc291cmNlVGltZVJhbmdlc0ZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcm93UmVvcmRlckZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2NoZWR1bGVNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgc2NoZWR1bGVUb29sdGlwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgc2VhcmNoRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaW1wbGVFdmVudEVkaXQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgc29ydEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgfCBzdHJpbmcgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHN0cmlwZUZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3VtbWFyeUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGltZUF4aXNIZWFkZXJNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lUmFuZ2VzRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdFtdID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB0cmVlRmVhdHVyZTogYm9vbGVhbjtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvLyBmb3IgZXhhbXBsZXMgb25seSwgZGVsZXRlXG4gICAgQElucHV0KCkgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkRXZlbnQ6IHN0cmluZyA9ICcnO1xuICAgIEBPdXRwdXQoKSBvblNjaGVkdWxlckV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICAvLyBOZWVkZWQgbGF0ZXIsIHVzZWQgYXMgdGFyZ2V0IHdoZW4gcmVuZGVyaW5nIEJyeW50dW0gU2NoZWR1bGVyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIHNjaGVkdWxlciB0byBjb21wb25lbnRzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBhcHBlbmRUbyA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuZXJzLCB3aWxsIHJlbGF5IGV2ZW50c1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnZXZlbnRzZWxlY3Rpb25jaGFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50ID0gZXZlbnQuc2VsZWN0ZWQubGVuZ3RoID8gZXZlbnQuc2VsZWN0ZWRbMF0ubmFtZSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2NoZWR1bGVyRXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXNPYmogOiB0aGlzXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGZlYXR1cmVzIDoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgO1xuXG4gICAgICAgIC8vIHJlbGF5IHByb3BlcnRpZXMgd2l0aCBuYW1lcyBtYXRjaGluZyB0aGlzLmZlYXR1cmVSZSB0byBmZWF0dXJlc1xuICAgICAgICB0aGlzLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZU5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVOYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuZmVhdHVyZXNbZmVhdHVyZU5hbWUucmVwbGFjZSh0aGlzLmZlYXR1cmVSZSwgJycpXSA9IHRoaXNbZmVhdHVyZU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQYXNzIGNvbmZpZ3Mgb24gdG8gc2NoZWR1bGVyXG4gICAgICAgIHRoaXMuY29uZmlncy5mb3JFYWNoKGNvbmZpZ05hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ05hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSB3YW50IHRvIHBhc3MgaWQgZm9yIHRoZSBlbmdpbmUgaXMgc2NoZWR1bGVySWRcbiAgICAgICAgICAgICAgICBpZiAoJ3NjaGVkdWxlcklkJyA9PT0gY29uZmlnTmFtZSAmJiB0aGlzW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1snaWQnXSA9IHRoaXNbY29uZmlnTmFtZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnW2NvbmZpZ05hbWVdID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoZSBhcHBsaWNhdGlvbiBtYXkgaGF2ZSBwYXNzZWQgc3RyaW5nIGlkIG9mIHRoZSBwYXJ0bmVyIHNvXG4gICAgICAgIC8vIHdlIGF0dGVtcHQgdG8gZmluZCB0aGUgcmVhbCBpbnN0YW5jZSBvZiB0aGUgc2NoZWR1bGVyIHdpdGggdGhhdCBpZFxuICAgICAgICBpZiAoY29uZmlnWydwYXJ0bmVyJ10gJiYgJ3N0cmluZycgPT09IHR5cGVvZiAoY29uZmlnWydwYXJ0bmVyJ10pKSB7XG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGJyeW50dW0gPSB3aW5kb3dbJ2JyeW50dW0nXSxcbiAgICAgICAgICAgICAgICBwYXJ0bmVyID0gYnJ5bnR1bSAmJiBicnludHVtLmdldCAmJiBicnludHVtLmdldChjb25maWdbJ3BhcnRuZXInXSk7XG4gICAgICAgICAgICBjb25maWdbJ3BhcnRuZXInXSA9IHBhcnRuZXIgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIEFuZ3VsYXIgMTEgYXBwbGljYXRpb24gd2hlbiBjb21waWxlZCBmb3IgcHJvZHVjdGlvbiB3aXRoIGJ1aWxkT3B0aW1pemVyOiB0cnVlXG4gICAgICAgIC8vIGZhaWxzIG9uIHNjaGVkdWxlciByZS1jcmVhdGlvbiBpZiBhbnkgb2YgdGhpcyBkYXRhIHNldHMgaXMgYm91bmQgaW4gdGVtcGxhdGUuIEl0IG1heVxuICAgICAgICAvLyBoYXZlIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBBbmd1bGFyIGJ1aWxkIG9wdGltaXphdGlvbiBwcm9jZXNzLiBBc3NpZ25pbmcgdGhlXG4gICAgICAgIC8vIGRhdGEgYWZ0ZXIgdGhlIHNjaGVkdWxlciBoYXMgYmVlbiBjcmVhdGVkIHJlc29sdmVzIHRoZSBpc3N1ZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JyeW50dW0vc3VwcG9ydC9pc3N1ZXMvMjE1N1xuICAgICAgICBjb25zdCBzdG9yZXMgPSB7fTtcbiAgICAgICAgW1xuICAgICAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICAgICAnZXZlbnRzJyxcbiAgICAgICAgICAgICdhc3NpZ25tZW50cycsXG4gICAgICAgICAgICAnZGVwZW5kZW5jaWVzJyxcbiAgICAgICAgICAgICd0aW1lUmFuZ2VzJyxcbiAgICAgICAgICAgICdyZXNvdXJjZVRpbWVSYW5nZXMnXG4gICAgICAgIF0uZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHN0b3Jlc1tuYW1lXSA9IGNvbmZpZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlckluc3RhbmNlID0gbmV3IFNjaGVkdWxlcihjb25maWcpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zY2hlZHVsZXJJbnN0YW5jZSwgc3RvcmVzKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zY2hlZHVsZXJJbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBjaGFuZ2VzXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaGFuZ2VzKS5mb3JFYWNoKChbbmFtZSwgeyBjdXJyZW50VmFsdWUgfV0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBjaGFuZ2VzIHRoYXQgbWF0Y2ggY29uZmlncyB0byBncmlkXG4gICAgICAgICAgICAgICAgaWYgKG1lLmNvbmZpZ3MuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2NoZWR1bGVySW5zdGFuY2VbbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lLmZlYXR1cmVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNjaGVkdWxlckluc3RhbmNlW25hbWUucmVwbGFjZSh0aGlzLmZlYXR1cmVSZSwgJycpXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlckluc3RhbmNlO1xuICAgICAgICBzY2hlZHVsZXIuZXZlbnRTdG9yZS5yZW1vdmUoc2NoZWR1bGVyLnNlbGVjdGVkRXZlbnRzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlckluc3RhbmNlLFxuICAgICAgICAgICAgZXZlbnQgPSBuZXcgc2NoZWR1bGVyLmV2ZW50U3RvcmUubW9kZWxDbGFzcyh7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VJZCAgIDogc2NoZWR1bGVyLnJlc291cmNlU3RvcmUuZmlyc3QuaWQsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlICAgIDogc2NoZWR1bGVyLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiAgICAgOiAxLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uVW5pdCA6ICdoJyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgICAgOiAnTmV3IHRhc2snLFxuICAgICAgICAgICAgICAgIGV2ZW50VHlwZSAgICA6ICdNZWV0aW5nJ1xuICAgICAgICAgICAgfSkgYXMgRXZlbnRNb2RlbDtcblxuICAgICAgICBzY2hlZHVsZXIuZWRpdEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2NoZWR1bGVySW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBTbGlkZXIgd2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNsaWRlciwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1zY2hlZHVsZXIvc2NoZWR1bGVyLmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXNsaWRlcicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGVsZW1lbnQgdG8gaGF2ZSBjb250YWluZXIgdG8gcmVuZGVyIHRoZSBidXR0b24gdG9cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzbGlkZXI6IFNsaWRlcjtcblxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBvbkNoYW5nZTogKCkgPT4ge307XG4gICAgQElucHV0KCkgc2hvd1Rvb2x0aXA6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd1ZhbHVlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDU7XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ1NsaWRlcic7XG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ3NsaWRlcicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgbWF4ICAgICAgICAgOiB0aGlzLm1heCxcbiAgICAgICAgICAgIG1pbiAgICAgICAgIDogdGhpcy5taW4sXG4gICAgICAgICAgICBvbkNoYW5nZSAgICA6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICBzaG93VG9vbHRpcCA6IHRoaXMuc2hvd1Rvb2x0aXAsXG4gICAgICAgICAgICBzaG93VmFsdWUgICA6IHRoaXMuc2hvd1ZhbHVlLFxuICAgICAgICAgICAgc3RlcCAgICAgICAgOiB0aGlzLnN0ZXAsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICA6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlICAgICAgIDogdGhpcy52YWx1ZVxuICAgICAgICB9KSBhcyBTbGlkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIFdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgV2lkZ2V0LCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyB3aWRnZXQ6IFdpZGdldDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgICBAT3V0cHV0KCkgb25XaWRnZXRFdmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSB1bmRlcmx5aW5nIHdpZGdldFxuICAgICAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZS5jb25maWcsIHtcbiAgICAgICAgICAgIGFwcGVuZFRvICA6IG1lLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IG1lLmNvbmZpZy5saXN0ZW5lcnMgfHwge1xuICAgICAgICAgICAgICAgIGNhdGNoQWxsKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUub25XaWRnZXRFdmVudHMuZW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzT2JqIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgd2lkZ2V0IHB1YmxpY2x5IGF2YWlsYWJsZVxuICAgICAgICBtZS53aWRnZXQgPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KG1lLmNvbmZpZykgYXMgV2lkZ2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIGlmIChtZS53aWRnZXQgJiYgbWUud2lkZ2V0LmRlc3Ryb3kpIHtcbiAgICAgICAgICAgIG1lLndpZGdldC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQnJ5bnR1bSBBbmd1bGFyIHNoYXJlZCBtb2R1bGVcbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi9mdWxsc2NyZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlZHVsZXJDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zIDogW1xuICAgICAgICBCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEZ1bGxzY3JlZW5Db21wb25lbnQsXG4gICAgICAgIFNjaGVkdWxlckNvbXBvbmVudCxcbiAgICAgICAgU2xpZGVyQ29tcG9uZW50LFxuICAgICAgICBXaWRnZXRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHMgICAgICA6IFtdLFxuICAgIGV4cG9ydHMgICAgICA6IFtcbiAgICAgICAgQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBGdWxsc2NyZWVuQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZXJDb21wb25lbnQsXG4gICAgICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICAgICAgV2lkZ2V0Q29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEJyeW50dW1Bbmd1bGFyU2hhcmVkTW9kdWxlIHt9XG5cbiJdfQ==