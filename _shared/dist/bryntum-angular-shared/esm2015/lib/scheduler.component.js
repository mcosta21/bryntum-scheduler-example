/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 *
 * Bryntum Scheduler 4.0.8 (TRIAL VERSION)
 *
 * Copyright(c) 2021 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { Scheduler } from 'bryntum-scheduler/scheduler.lite.umd.js';
export class SchedulerComponent {
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
SchedulerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-scheduler',
                template: ''
            }] }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchedulerComponent.prototype.elementRef;
    /** @type {?} */
    SchedulerComponent.prototype.schedulerInstance;
    /**
     * @type {?}
     * @private
     */
    SchedulerComponent.prototype.featureRe;
    /**
     * @type {?}
     * @private
     */
    SchedulerComponent.prototype.features;
    /**
     * @type {?}
     * @private
     */
    SchedulerComponent.prototype.configs;
    /** @type {?} */
    SchedulerComponent.prototype.schedulerId;
    /** @type {?} */
    SchedulerComponent.prototype.allowOverlap;
    /** @type {?} */
    SchedulerComponent.prototype.animateRemovingRows;
    /** @type {?} */
    SchedulerComponent.prototype.assignments;
    /** @type {?} */
    SchedulerComponent.prototype.assignmentStore;
    /** @type {?} */
    SchedulerComponent.prototype.autoAdjustTimeAxis;
    /** @type {?} */
    SchedulerComponent.prototype.autoHeight;
    /** @type {?} */
    SchedulerComponent.prototype.barMargin;
    /** @type {?} */
    SchedulerComponent.prototype.columnLines;
    /** @type {?} */
    SchedulerComponent.prototype.columns;
    /** @type {?} */
    SchedulerComponent.prototype.contextMenuTriggerEvent;
    /** @type {?} */
    SchedulerComponent.prototype.createEventOnDblClick;
    /** @type {?} */
    SchedulerComponent.prototype.crudManager;
    /** @type {?} */
    SchedulerComponent.prototype.defaultResourceImageName;
    /** @type {?} */
    SchedulerComponent.prototype.dependencyStore;
    /** @type {?} */
    SchedulerComponent.prototype.disableGridRowModelWarning;
    /** @type {?} */
    SchedulerComponent.prototype.displayDateFormat;
    /** @type {?} */
    SchedulerComponent.prototype.emptyText;
    /** @type {?} */
    SchedulerComponent.prototype.enableDeleteKey;
    /** @type {?} */
    SchedulerComponent.prototype.enableEventAnimations;
    /** @type {?} */
    SchedulerComponent.prototype.enableRecurringEvents;
    /** @type {?} */
    SchedulerComponent.prototype.enableTextSelection;
    /** @type {?} */
    SchedulerComponent.prototype.endDate;
    /** @type {?} */
    SchedulerComponent.prototype.endParamName;
    /** @type {?} */
    SchedulerComponent.prototype.eventBarTextField;
    /** @type {?} */
    SchedulerComponent.prototype.eventBodyTemplate;
    /** @type {?} */
    SchedulerComponent.prototype.eventColor;
    /** @type {?} */
    SchedulerComponent.prototype.eventLayout;
    /** @type {?} */
    SchedulerComponent.prototype.eventRenderer;
    /** @type {?} */
    SchedulerComponent.prototype.events;
    /** @type {?} */
    SchedulerComponent.prototype.eventSelectionDisabled;
    /** @type {?} */
    SchedulerComponent.prototype.eventStore;
    /** @type {?} */
    SchedulerComponent.prototype.eventStyle;
    /** @type {?} */
    SchedulerComponent.prototype.fillLastColumn;
    /** @type {?} */
    SchedulerComponent.prototype.fillTicks;
    /** @type {?} */
    SchedulerComponent.prototype.fullRowRefresh;
    /** @type {?} */
    SchedulerComponent.prototype.getRowHeight;
    /** @type {?} */
    SchedulerComponent.prototype.hasVisibleEvents;
    /** @type {?} */
    SchedulerComponent.prototype.height;
    /** @type {?} */
    SchedulerComponent.prototype.hideHeaders;
    /** @type {?} */
    SchedulerComponent.prototype.horizontalEventSorterFn;
    /** @type {?} */
    SchedulerComponent.prototype.loadMask;
    /** @type {?} */
    SchedulerComponent.prototype.longPressTime;
    /** @type {?} */
    SchedulerComponent.prototype.maintainSelectionOnDatasetChange;
    /** @type {?} */
    SchedulerComponent.prototype.managedEventSizing;
    /** @type {?} */
    SchedulerComponent.prototype.maxHeight;
    /** @type {?} */
    SchedulerComponent.prototype.maxWidth;
    /** @type {?} */
    SchedulerComponent.prototype.maxZoomLevel;
    /** @type {?} */
    SchedulerComponent.prototype.milestoneAlign;
    /** @type {?} */
    SchedulerComponent.prototype.milestoneCharWidth;
    /** @type {?} */
    SchedulerComponent.prototype.milestoneLayoutMode;
    /** @type {?} */
    SchedulerComponent.prototype.minHeight;
    /** @type {?} */
    SchedulerComponent.prototype.minWidth;
    /** @type {?} */
    SchedulerComponent.prototype.minZoomLevel;
    /** @type {?} */
    SchedulerComponent.prototype.mode;
    /** @type {?} */
    SchedulerComponent.prototype.multiEventSelect;
    /** @type {?} */
    SchedulerComponent.prototype.partner;
    /** @type {?} */
    SchedulerComponent.prototype.passStartEndParameters;
    /** @type {?} */
    SchedulerComponent.prototype.presets;
    /** @type {?} */
    SchedulerComponent.prototype.readOnly;
    /** @type {?} */
    SchedulerComponent.prototype.removeUnassignedEvent;
    /** @type {?} */
    SchedulerComponent.prototype.resizeToFitIncludesHeader;
    /** @type {?} */
    SchedulerComponent.prototype.resourceColumns;
    /** @type {?} */
    SchedulerComponent.prototype.resourceImagePath;
    /** @type {?} */
    SchedulerComponent.prototype.resourceMargin;
    /** @type {?} */
    SchedulerComponent.prototype.resources;
    /** @type {?} */
    SchedulerComponent.prototype.resourceStore;
    /** @type {?} */
    SchedulerComponent.prototype.resourceTimeRanges;
    /** @type {?} */
    SchedulerComponent.prototype.responsiveLevels;
    /** @type {?} */
    SchedulerComponent.prototype.rowHeight;
    /** @type {?} */
    SchedulerComponent.prototype.scrollLeft;
    /** @type {?} */
    SchedulerComponent.prototype.scrollTop;
    /** @type {?} */
    SchedulerComponent.prototype.selectedEvents;
    /** @type {?} */
    SchedulerComponent.prototype.selectionMode;
    /** @type {?} */
    SchedulerComponent.prototype.showDirty;
    /** @type {?} */
    SchedulerComponent.prototype.snap;
    /** @type {?} */
    SchedulerComponent.prototype.snapRelativeToEventStartDate;
    /** @type {?} */
    SchedulerComponent.prototype.startDate;
    /** @type {?} */
    SchedulerComponent.prototype.startParamName;
    /** @type {?} */
    SchedulerComponent.prototype.subGridConfigs;
    /** @type {?} */
    SchedulerComponent.prototype.tickWidth;
    /** @type {?} */
    SchedulerComponent.prototype.timeRanges;
    /** @type {?} */
    SchedulerComponent.prototype.timeResolution;
    /** @type {?} */
    SchedulerComponent.prototype.triggerSelectionChangeOnRemove;
    /** @type {?} */
    SchedulerComponent.prototype.useInitialAnimation;
    /** @type {?} */
    SchedulerComponent.prototype.viewportCenterDate;
    /** @type {?} */
    SchedulerComponent.prototype.viewPreset;
    /** @type {?} */
    SchedulerComponent.prototype.weekStartDay;
    /** @type {?} */
    SchedulerComponent.prototype.width;
    /** @type {?} */
    SchedulerComponent.prototype.workingTime;
    /** @type {?} */
    SchedulerComponent.prototype.zoomLevel;
    /** @type {?} */
    SchedulerComponent.prototype.zoomOnMouseWheel;
    /** @type {?} */
    SchedulerComponent.prototype.zoomOnTimeAxisDoubleClick;
    /** @type {?} */
    SchedulerComponent.prototype.cellEditFeature;
    /** @type {?} */
    SchedulerComponent.prototype.cellMenuFeature;
    /** @type {?} */
    SchedulerComponent.prototype.cellTooltipFeature;
    /** @type {?} */
    SchedulerComponent.prototype.columnDragToolbarFeature;
    /** @type {?} */
    SchedulerComponent.prototype.columnLinesFeature;
    /** @type {?} */
    SchedulerComponent.prototype.columnPickerFeature;
    /** @type {?} */
    SchedulerComponent.prototype.columnReorderFeature;
    /** @type {?} */
    SchedulerComponent.prototype.columnResizeFeature;
    /** @type {?} */
    SchedulerComponent.prototype.dependenciesFeature;
    /** @type {?} */
    SchedulerComponent.prototype.dependencyEditFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventDragCreateFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventDragFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventDragSelectFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventEditFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventFilterFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventMenuFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventResizeFeature;
    /** @type {?} */
    SchedulerComponent.prototype.eventTooltipFeature;
    /** @type {?} */
    SchedulerComponent.prototype.filterBarFeature;
    /** @type {?} */
    SchedulerComponent.prototype.filterFeature;
    /** @type {?} */
    SchedulerComponent.prototype.groupFeature;
    /** @type {?} */
    SchedulerComponent.prototype.groupSummaryFeature;
    /** @type {?} */
    SchedulerComponent.prototype.headerMenuFeature;
    /** @type {?} */
    SchedulerComponent.prototype.headerZoomFeature;
    /** @type {?} */
    SchedulerComponent.prototype.labelsFeature;
    /** @type {?} */
    SchedulerComponent.prototype.nonWorkingTimeFeature;
    /** @type {?} */
    SchedulerComponent.prototype.panFeature;
    /** @type {?} */
    SchedulerComponent.prototype.pdfExportFeature;
    /** @type {?} */
    SchedulerComponent.prototype.quickFindFeature;
    /** @type {?} */
    SchedulerComponent.prototype.regionResizeFeature;
    /** @type {?} */
    SchedulerComponent.prototype.resourceTimeRangesFeature;
    /** @type {?} */
    SchedulerComponent.prototype.rowReorderFeature;
    /** @type {?} */
    SchedulerComponent.prototype.scheduleMenuFeature;
    /** @type {?} */
    SchedulerComponent.prototype.scheduleTooltipFeature;
    /** @type {?} */
    SchedulerComponent.prototype.searchFeature;
    /** @type {?} */
    SchedulerComponent.prototype.simpleEventEdit;
    /** @type {?} */
    SchedulerComponent.prototype.sortFeature;
    /** @type {?} */
    SchedulerComponent.prototype.stripeFeature;
    /** @type {?} */
    SchedulerComponent.prototype.summaryFeature;
    /** @type {?} */
    SchedulerComponent.prototype.timeAxisHeaderMenuFeature;
    /** @type {?} */
    SchedulerComponent.prototype.timeRangesFeature;
    /** @type {?} */
    SchedulerComponent.prototype.treeFeature;
    /** @type {?} */
    SchedulerComponent.prototype.transitionDuration;
    /** @type {?} */
    SchedulerComponent.prototype.selectedEvent;
    /** @type {?} */
    SchedulerComponent.prototype.onSchedulerEvents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFHaEksT0FBTyxFQUFFLFNBQVMsRUFBaUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU1uSSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBeVQzQixZQUFZLE9BQW1CO1FBNVN2QixjQUFTLEdBQVcsVUFBVSxDQUFDOztRQUcvQixhQUFRLEdBQWE7WUFDekIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsMEJBQTBCO1lBQzFCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4QixrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQixh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RCw4Q0FBNEM7O0lBQzVDLDJDQUF5Qzs7SUFDekMsMENBQXdEOztJQUN4RCxpREFBK0M7O0lBQy9DLCtDQUE2Qzs7SUFDN0MsK0NBQW9DOztJQUNwQywyQ0FBeUM7O0lBQ3pDLG1EQUF3Qzs7SUFDeEMsd0NBQXNDOztJQUN0Qyw4Q0FBNEM7O0lBQzVDLDhDQUE0Qzs7SUFDNUMsaURBQXNDOztJQUN0Qyx1REFBNEM7O0lBQzVDLCtDQUFvQzs7SUFDcEMsaURBQXNEOztJQUN0RCxvREFBeUQ7O0lBQ3pELDJDQUFnQzs7SUFDaEMsNkNBQTJDOztJQUMzQyx5Q0FBdUQ7O0lBQ3ZELDJDQUFnQzs7SUFDaEMsNENBQTBDOztJQUMxQyx1REFBcUQ7O0lBQ3JELCtDQUFzRDs7SUFDdEQseUNBQThCOztJQUk5QixnREFBb0M7O0lBQ3BDLDJDQUFxQzs7SUFDckMsK0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKlxuICogQnJ5bnR1bSBTY2hlZHVsZXIgNC4wLjggKFRSSUFMIFZFUlNJT04pXG4gKlxuICogQ29weXJpZ2h0KGMpIDIwMjEgQnJ5bnR1bSBBQlxuICogaHR0cHM6Ly9icnludHVtLmNvbS9jb250YWN0XG4gKiBodHRwczovL2JyeW50dW0uY29tL2xpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNjaGVkdWxlciwgQXNzaWdubWVudE1vZGVsLCBBc3NpZ25tZW50U3RvcmUsIEV2ZW50TW9kZWwsIFNjaGVkdWxlckNvbmZpZyB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1zY2hlZHVsZXInLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHNjaGVkdWxlckluc3RhbmNlOiBTY2hlZHVsZXI7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBzY2hlZHVsZXJJbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2NoZWR1bGVyRW5naW5lKCkgOiBTY2hlZHVsZXIge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3NjaGVkdWxlckVuZ2luZSBpcyBkZXByZWNhdGVkLiBVc2Ugc2NoZWR1bGVySW5zdGFuY2UgaW5zdGVhZC4nKVxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZlYXR1cmVSZTogUmVnRXhwID0gL0ZlYXR1cmUkLztcblxuICAgIC8qICNyZWdpb24gZmVhdHVyZXMgKi9cbiAgICBwcml2YXRlIGZlYXR1cmVzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ2NlbGxFZGl0RmVhdHVyZScsXG4gICAgICAgICdjZWxsTWVudUZlYXR1cmUnLFxuICAgICAgICAnY2VsbFRvb2x0aXBGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtbkRyYWdUb29sYmFyRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5MaW5lc0ZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uUGlja2VyRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5SZW9yZGVyRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5SZXNpemVGZWF0dXJlJyxcbiAgICAgICAgJ2RlcGVuZGVuY2llc0ZlYXR1cmUnLFxuICAgICAgICAnZGVwZW5kZW5jeUVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RHJhZ0NyZWF0ZUZlYXR1cmUnLFxuICAgICAgICAnZXZlbnREcmFnRmVhdHVyZScsXG4gICAgICAgICdldmVudERyYWdTZWxlY3RGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RWRpdEZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRGaWx0ZXJGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50TWVudUZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRSZXNpemVGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50VG9vbHRpcEZlYXR1cmUnLFxuICAgICAgICAnZmlsdGVyQmFyRmVhdHVyZScsXG4gICAgICAgICdmaWx0ZXJGZWF0dXJlJyxcbiAgICAgICAgJ2dyb3VwRmVhdHVyZScsXG4gICAgICAgICdncm91cFN1bW1hcnlGZWF0dXJlJyxcbiAgICAgICAgJ2hlYWRlck1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ2hlYWRlclpvb21GZWF0dXJlJyxcbiAgICAgICAgJ2xhYmVsc0ZlYXR1cmUnLFxuICAgICAgICAnbm9uV29ya2luZ1RpbWVGZWF0dXJlJyxcbiAgICAgICAgJ3BhbkZlYXR1cmUnLFxuICAgICAgICAncGRmRXhwb3J0RmVhdHVyZScsXG4gICAgICAgICdxdWlja0ZpbmRGZWF0dXJlJyxcbiAgICAgICAgJ3JlZ2lvblJlc2l6ZUZlYXR1cmUnLFxuICAgICAgICAncmVzb3VyY2VUaW1lUmFuZ2VzRmVhdHVyZScsXG4gICAgICAgICdyb3dSZW9yZGVyRmVhdHVyZScsXG4gICAgICAgICdzY2hlZHVsZU1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ3NjaGVkdWxlVG9vbHRpcEZlYXR1cmUnLFxuICAgICAgICAnc2VhcmNoRmVhdHVyZScsXG4gICAgICAgICdzaW1wbGVFdmVudEVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ3NvcnRGZWF0dXJlJyxcbiAgICAgICAgJ3N0cmlwZUZlYXR1cmUnLFxuICAgICAgICAnc3VtbWFyeUZlYXR1cmUnLFxuICAgICAgICAndGltZUF4aXNIZWFkZXJNZW51RmVhdHVyZScsXG4gICAgICAgICd0aW1lUmFuZ2VzRmVhdHVyZScsXG4gICAgICAgICd0cmVlRmVhdHVyZSdcbiAgICBdO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gY29uZmlncyAqL1xuICAgIHByaXZhdGUgY29uZmlnczogc3RyaW5nW10gPSBbXG4gICAgICAgICdhbGxvd092ZXJsYXAnLFxuICAgICAgICAnYW5pbWF0ZVJlbW92aW5nUm93cycsXG4gICAgICAgICdhc3NpZ25tZW50cycsXG4gICAgICAgICdhc3NpZ25tZW50U3RvcmUnLFxuICAgICAgICAnYXV0b0FkanVzdFRpbWVBeGlzJyxcbiAgICAgICAgJ2F1dG9IZWlnaHQnLFxuICAgICAgICAnYmFyTWFyZ2luJyxcbiAgICAgICAgJ2NvbHVtbkxpbmVzJyxcbiAgICAgICAgJ2NvbHVtbnMnLFxuICAgICAgICAnY29udGV4dE1lbnVUcmlnZ2VyRXZlbnQnLFxuICAgICAgICAnY3JlYXRlRXZlbnRPbkRibENsaWNrJyxcbiAgICAgICAgJ2NydWRNYW5hZ2VyJyxcbiAgICAgICAgJ2RlZmF1bHRSZXNvdXJjZUltYWdlTmFtZScsXG4gICAgICAgICdkZXBlbmRlbmN5U3RvcmUnLFxuICAgICAgICAnZGlzYWJsZUdyaWRSb3dNb2RlbFdhcm5pbmcnLFxuICAgICAgICAnZGlzcGxheURhdGVGb3JtYXQnLFxuICAgICAgICAnZW1wdHlUZXh0JyxcbiAgICAgICAgJ2VuYWJsZURlbGV0ZUtleScsXG4gICAgICAgICdlbmFibGVFdmVudEFuaW1hdGlvbnMnLFxuICAgICAgICAnZW5hYmxlUmVjdXJyaW5nRXZlbnRzJyxcbiAgICAgICAgJ2VuYWJsZVRleHRTZWxlY3Rpb24nLFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgICdlbmRQYXJhbU5hbWUnLFxuICAgICAgICAnZXZlbnRCYXJUZXh0RmllbGQnLFxuICAgICAgICAnZXZlbnRCb2R5VGVtcGxhdGUnLFxuICAgICAgICAnZXZlbnRDb2xvcicsXG4gICAgICAgICdldmVudExheW91dCcsXG4gICAgICAgICdldmVudFJlbmRlcmVyJyxcbiAgICAgICAgJ2V2ZW50cycsXG4gICAgICAgICdldmVudFNlbGVjdGlvbkRpc2FibGVkJyxcbiAgICAgICAgJ2V2ZW50U3RvcmUnLFxuICAgICAgICAnZXZlbnRTdHlsZScsXG4gICAgICAgICdmaWxsTGFzdENvbHVtbicsXG4gICAgICAgICdmaWxsVGlja3MnLFxuICAgICAgICAnZnVsbFJvd1JlZnJlc2gnLFxuICAgICAgICAnZ2V0Um93SGVpZ2h0JyxcbiAgICAgICAgJ2hhc1Zpc2libGVFdmVudHMnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ2hpZGVIZWFkZXJzJyxcbiAgICAgICAgJ2hvcml6b250YWxFdmVudFNvcnRlckZuJyxcbiAgICAgICAgJ2xvYWRNYXNrJyxcbiAgICAgICAgJ2xvbmdQcmVzc1RpbWUnLFxuICAgICAgICAnbWFpbnRhaW5TZWxlY3Rpb25PbkRhdGFzZXRDaGFuZ2UnLFxuICAgICAgICAnbWFuYWdlZEV2ZW50U2l6aW5nJyxcbiAgICAgICAgJ21heEhlaWdodCcsXG4gICAgICAgICdtYXhXaWR0aCcsXG4gICAgICAgICdtYXhab29tTGV2ZWwnLFxuICAgICAgICAnbWlsZXN0b25lQWxpZ24nLFxuICAgICAgICAnbWlsZXN0b25lQ2hhcldpZHRoJyxcbiAgICAgICAgJ21pbGVzdG9uZUxheW91dE1vZGUnLFxuICAgICAgICAnbWluSGVpZ2h0JyxcbiAgICAgICAgJ21pbldpZHRoJyxcbiAgICAgICAgJ21pblpvb21MZXZlbCcsXG4gICAgICAgICdtb2RlJyxcbiAgICAgICAgJ211bHRpRXZlbnRTZWxlY3QnLFxuICAgICAgICAncGFydG5lcicsXG4gICAgICAgICdwYXNzU3RhcnRFbmRQYXJhbWV0ZXJzJyxcbiAgICAgICAgJ3ByZXNldHMnLFxuICAgICAgICAncmVhZE9ubHknLFxuICAgICAgICAncmVtb3ZlVW5hc3NpZ25lZEV2ZW50JyxcbiAgICAgICAgJ3Jlc2l6ZVRvRml0SW5jbHVkZXNIZWFkZXInLFxuICAgICAgICAncmVzb3VyY2VDb2x1bW5zJyxcbiAgICAgICAgJ3Jlc291cmNlSW1hZ2VQYXRoJyxcbiAgICAgICAgJ3Jlc291cmNlTWFyZ2luJyxcbiAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICdyZXNvdXJjZVN0b3JlJyxcbiAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlcycsXG4gICAgICAgICdyZXNwb25zaXZlTGV2ZWxzJyxcbiAgICAgICAgJ3Jvd0hlaWdodCcsXG4gICAgICAgICdzY3JvbGxMZWZ0JyxcbiAgICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAgICdzZWxlY3RlZEV2ZW50cycsXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcbiAgICAgICAgJ3Nob3dEaXJ0eScsXG4gICAgICAgICdzbmFwJyxcbiAgICAgICAgJ3NuYXBSZWxhdGl2ZVRvRXZlbnRTdGFydERhdGUnLFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgJ3N0YXJ0UGFyYW1OYW1lJyxcbiAgICAgICAgJ3N1YkdyaWRDb25maWdzJyxcbiAgICAgICAgJ3RpY2tXaWR0aCcsXG4gICAgICAgICd0aW1lUmFuZ2VzJyxcbiAgICAgICAgJ3RpbWVSZXNvbHV0aW9uJyxcbiAgICAgICAgJ3RyaWdnZXJTZWxlY3Rpb25DaGFuZ2VPblJlbW92ZScsXG4gICAgICAgICd1c2VJbml0aWFsQW5pbWF0aW9uJyxcbiAgICAgICAgJ3ZpZXdwb3J0Q2VudGVyRGF0ZScsXG4gICAgICAgICd2aWV3UHJlc2V0JyxcbiAgICAgICAgJ3dlZWtTdGFydERheScsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICd3b3JraW5nVGltZScsXG4gICAgICAgICd6b29tTGV2ZWwnLFxuICAgICAgICAnem9vbU9uTW91c2VXaGVlbCcsXG4gICAgICAgICd6b29tT25UaW1lQXhpc0RvdWJsZUNsaWNrJyxcblxuICAgICAgICAvLyBzY2hlZHVsZXJJZCBtYXBzIHRvIGlkIG9mIHRoZSB1bmRlcmx5aW5nIHNjaGVkdWxlclxuICAgICAgICAnc2NoZWR1bGVySWQnLFxuXG4gICAgICAgIC8vIG9ubHkgZm9yIGV4YW1wbGVzLCBkZWxldGUgaWYgeW91IGRvbid0IG5lZWQgdGhlbVxuICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJ1xuICAgIF07XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBDb25maWdzICovXG4gICAgLy8gc2NoZWR1bGVySWQgdHJhbnNsYXRlcyB0byBpZCBmb3IgdGhlIHNjaGVkdWxlciBlbmdpbmVcbiAgICBASW5wdXQoKSBzY2hlZHVsZXJJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYWxsb3dPdmVybGFwOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhbmltYXRlUmVtb3ZpbmdSb3dzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFzc2lnbm1lbnRzOiBBc3NpZ25tZW50TW9kZWxbXSB8IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGFzc2lnbm1lbnRTdG9yZTogQXNzaWdubWVudFN0b3JlIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGF1dG9BZGp1c3RUaW1lQXhpczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgYXV0b0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJhck1hcmdpbjogbnVtYmVyID0gNTtcbiAgICBASW5wdXQoKSBjb2x1bW5MaW5lczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uczogb2JqZWN0W107XG4gICAgQElucHV0KCkgY29udGV4dE1lbnVUcmlnZ2VyRXZlbnQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjcmVhdGVFdmVudE9uRGJsQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNydWRNYW5hZ2VyOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZGVmYXVsdFJlc291cmNlSW1hZ2VOYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jeVN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZGlzYWJsZUdyaWRSb3dNb2RlbFdhcm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RGF0ZUZvcm1hdDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVtcHR5VGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZURlbGV0ZUtleTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZW5hYmxlRXZlbnRBbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBlbmFibGVSZWN1cnJpbmdFdmVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBlbmFibGVUZXh0U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZW5kRGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIGVuZFBhcmFtTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGV2ZW50QmFyVGV4dEZpZWxkOiBzdHJpbmcgPSAnbmFtZSc7XG4gICAgQElucHV0KCkgZXZlbnRCb2R5VGVtcGxhdGU6IGFueTtcbiAgICBASW5wdXQoKSBldmVudENvbG9yOiBzdHJpbmcgPSAnZ3JlZW4nO1xuICAgIEBJbnB1dCgpIGV2ZW50TGF5b3V0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXZlbnRSZW5kZXJlcjogYW55O1xuICAgIEBJbnB1dCgpIGV2ZW50czogb2JqZWN0W107XG4gICAgQElucHV0KCkgZXZlbnRTZWxlY3Rpb25EaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGV2ZW50U3RvcmU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBldmVudFN0eWxlOiBzdHJpbmcgPSAncGxhaW4nO1xuICAgIEBJbnB1dCgpIGZpbGxMYXN0Q29sdW1uOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBmaWxsVGlja3M6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZnVsbFJvd1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGdldFJvd0hlaWdodDogYW55O1xuICAgIEBJbnB1dCgpIGhhc1Zpc2libGVFdmVudHM6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgaGlkZUhlYWRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsRXZlbnRTb3J0ZXJGbjogYW55O1xuICAgIEBJbnB1dCgpIGxvYWRNYXNrOiBzdHJpbmcgPSAnTG9hZGluZy4uLic7XG4gICAgQElucHV0KCkgbG9uZ1ByZXNzVGltZTogbnVtYmVyID0gNDAwO1xuICAgIEBJbnB1dCgpIG1haW50YWluU2VsZWN0aW9uT25EYXRhc2V0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBtYW5hZ2VkRXZlbnRTaXppbmc6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1heEhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWF4Wm9vbUxldmVsOiBudW1iZXI7XG4gICAgQElucHV0KCkgbWlsZXN0b25lQWxpZ246IHN0cmluZztcbiAgICBASW5wdXQoKSBtaWxlc3RvbmVDaGFyV2lkdGg6IG51bWJlciA9IDEwO1xuICAgIEBJbnB1dCgpIG1pbGVzdG9uZUxheW91dE1vZGU6IHN0cmluZyA9ICdkZWZhdWx0JztcbiAgICBASW5wdXQoKSBtaW5IZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1pblpvb21MZXZlbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1vZGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtdWx0aUV2ZW50U2VsZWN0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBhcnRuZXI6IGFueTtcbiAgICBASW5wdXQoKSBwYXNzU3RhcnRFbmRQYXJhbWV0ZXJzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXNldHM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcmVtb3ZlVW5hc3NpZ25lZEV2ZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSByZXNpemVUb0ZpdEluY2x1ZGVzSGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSByZXNvdXJjZUNvbHVtbnM6IGFueTtcbiAgICBASW5wdXQoKSByZXNvdXJjZUltYWdlUGF0aDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJlc291cmNlTWFyZ2luOiBudW1iZXI7XG4gICAgQElucHV0KCkgcmVzb3VyY2VzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSByZXNvdXJjZVN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVzb3VyY2VUaW1lUmFuZ2VzOiBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZUxldmVsczogYW55O1xuICAgIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyID0gNTA7XG4gICAgQElucHV0KCkgc2Nyb2xsTGVmdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNjcm9sbFRvcDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkRXZlbnRzOiBFdmVudE1vZGVsW107XG4gICAgQElucHV0KCkgc2VsZWN0aW9uTW9kZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNob3dEaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNuYXA6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc25hcFJlbGF0aXZlVG9FdmVudFN0YXJ0RGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHN0YXJ0RGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIHN0YXJ0UGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3ViR3JpZENvbmZpZ3M6IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aWNrV2lkdGg6IG51bWJlcjtcbiAgICBASW5wdXQoKSB0aW1lUmFuZ2VzOiBvYmplY3QgfCBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRpbWVSZXNvbHV0aW9uOiBvYmplY3Q7XG4gICAgQElucHV0KCkgdHJpZ2dlclNlbGVjdGlvbkNoYW5nZU9uUmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdXNlSW5pdGlhbEFuaW1hdGlvbjogYm9vbGVhbiB8IHN0cmluZyA9IHRydWU7XG4gICAgQElucHV0KCkgdmlld3BvcnRDZW50ZXJEYXRlOiBhbnk7XG4gICAgQElucHV0KCkgdmlld1ByZXNldDogb2JqZWN0IHwgc3RyaW5nID0gJ2hvdXJBbmREYXknO1xuICAgIEBJbnB1dCgpIHdlZWtTdGFydERheTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgd29ya2luZ1RpbWU6IG9iamVjdDtcbiAgICBASW5wdXQoKSB6b29tTGV2ZWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSB6b29tT25Nb3VzZVdoZWVsOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB6b29tT25UaW1lQXhpc0RvdWJsZUNsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvKiAjcmVnaW9uIEZlYXR1cmVzLCBvbmx5IHVzZWQgZm9yIGluaXRpYWxpemF0aW9uICovXG4gICAgQElucHV0KCkgY2VsbEVkaXRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjZWxsTWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY2VsbFRvb2x0aXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5EcmFnVG9vbGJhckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtbkxpbmVzRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uUGlja2VyRmVhdHVyZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uUmVvcmRlckZlYXR1cmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtblJlc2l6ZUZlYXR1cmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY2llc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkZXBlbmRlbmN5RWRpdEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBldmVudERyYWdDcmVhdGVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudERyYWdGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudERyYWdTZWxlY3RGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGV2ZW50RWRpdEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50RmlsdGVyRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRSZXNpemVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudFRvb2x0aXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBmaWx0ZXJCYXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGZpbHRlckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgZ3JvdXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0IHwgc3RyaW5nID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBncm91cFN1bW1hcnlGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGhlYWRlck1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGhlYWRlclpvb21GZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGxhYmVsc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgbm9uV29ya2luZ1RpbWVGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBhbkZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcGRmRXhwb3J0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBxdWlja0ZpbmRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlZ2lvblJlc2l6ZUZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcmVzb3VyY2VUaW1lUmFuZ2VzRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByb3dSZW9yZGVyRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzY2hlZHVsZU1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzY2hlZHVsZVRvb2x0aXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzZWFyY2hGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNpbXBsZUV2ZW50RWRpdDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBzb3J0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCB8IHN0cmluZyA9IHRydWU7XG4gICAgQElucHV0KCkgc3RyaXBlRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdW1tYXJ5RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lQXhpc0hlYWRlck1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRpbWVSYW5nZXNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0W10gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHRyZWVGZWF0dXJlOiBib29sZWFuO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8vIGZvciBleGFtcGxlcyBvbmx5LCBkZWxldGVcbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRFdmVudDogc3RyaW5nID0gJyc7XG4gICAgQE91dHB1dCgpIG9uU2NoZWR1bGVyRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIC8vIE5lZWRlZCBsYXRlciwgdXNlZCBhcyB0YXJnZXQgd2hlbiByZW5kZXJpbmcgQnJ5bnR1bSBTY2hlZHVsZXJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgc2NoZWR1bGVyIHRvIGNvbXBvbmVudHMgZWxlbWVudFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW5lcnMsIHdpbGwgcmVsYXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdldmVudHNlbGVjdGlvbmNoYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRXZlbnQgPSBldmVudC5zZWxlY3RlZC5sZW5ndGggPyBldmVudC5zZWxlY3RlZFswXS5uYW1lIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TY2hlZHVsZXJFdmVudHMuZW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc09iaiA6IHRoaXNcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZmVhdHVyZXMgOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gcmVsYXkgcHJvcGVydGllcyB3aXRoIG5hbWVzIG1hdGNoaW5nIHRoaXMuZmVhdHVyZVJlIHRvIGZlYXR1cmVzXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZU5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5mZWF0dXJlc1tmZWF0dXJlTmFtZS5yZXBsYWNlKHRoaXMuZmVhdHVyZVJlLCAnJyldID0gdGhpc1tmZWF0dXJlTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhc3MgY29uZmlncyBvbiB0byBzY2hlZHVsZXJcbiAgICAgICAgdGhpcy5jb25maWdzLmZvckVhY2goY29uZmlnTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlnTmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gbWF5IHdhbnQgdG8gcGFzcyBpZCBmb3IgdGhlIGVuZ2luZSBpcyBzY2hlZHVsZXJJZFxuICAgICAgICAgICAgICAgIGlmICgnc2NoZWR1bGVySWQnID09PSBjb25maWdOYW1lICYmIHRoaXNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnWydpZCddID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maWdbY29uZmlnTmFtZV0gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhlIGFwcGxpY2F0aW9uIG1heSBoYXZlIHBhc3NlZCBzdHJpbmcgaWQgb2YgdGhlIHBhcnRuZXIgc29cbiAgICAgICAgLy8gd2UgYXR0ZW1wdCB0byBmaW5kIHRoZSByZWFsIGluc3RhbmNlIG9mIHRoZSBzY2hlZHVsZXIgd2l0aCB0aGF0IGlkXG4gICAgICAgIGlmIChjb25maWdbJ3BhcnRuZXInXSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIChjb25maWdbJ3BhcnRuZXInXSkpIHtcbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgYnJ5bnR1bSA9IHdpbmRvd1snYnJ5bnR1bSddLFxuICAgICAgICAgICAgICAgIHBhcnRuZXIgPSBicnludHVtICYmIGJyeW50dW0uZ2V0ICYmIGJyeW50dW0uZ2V0KGNvbmZpZ1sncGFydG5lciddKTtcbiAgICAgICAgICAgIGNvbmZpZ1sncGFydG5lciddID0gcGFydG5lciB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgQW5ndWxhciAxMSBhcHBsaWNhdGlvbiB3aGVuIGNvbXBpbGVkIGZvciBwcm9kdWN0aW9uIHdpdGggYnVpbGRPcHRpbWl6ZXI6IHRydWVcbiAgICAgICAgLy8gZmFpbHMgb24gc2NoZWR1bGVyIHJlLWNyZWF0aW9uIGlmIGFueSBvZiB0aGlzIGRhdGEgc2V0cyBpcyBib3VuZCBpbiB0ZW1wbGF0ZS4gSXQgbWF5XG4gICAgICAgIC8vIGhhdmUgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIEFuZ3VsYXIgYnVpbGQgb3B0aW1pemF0aW9uIHByb2Nlc3MuIEFzc2lnbmluZyB0aGVcbiAgICAgICAgLy8gZGF0YSBhZnRlciB0aGUgc2NoZWR1bGVyIGhhcyBiZWVuIGNyZWF0ZWQgcmVzb2x2ZXMgdGhlIGlzc3VlLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnJ5bnR1bS9zdXBwb3J0L2lzc3Vlcy8yMTU3XG4gICAgICAgIGNvbnN0IHN0b3JlcyA9IHt9O1xuICAgICAgICBbXG4gICAgICAgICAgICAncmVzb3VyY2VzJyxcbiAgICAgICAgICAgICdldmVudHMnLFxuICAgICAgICAgICAgJ2Fzc2lnbm1lbnRzJyxcbiAgICAgICAgICAgICdkZXBlbmRlbmNpZXMnLFxuICAgICAgICAgICAgJ3RpbWVSYW5nZXMnLFxuICAgICAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlcydcbiAgICAgICAgXS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlnW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVzW25hbWVdID0gY29uZmlnW25hbWVdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWdbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVySW5zdGFuY2UgPSBuZXcgU2NoZWR1bGVyKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnNjaGVkdWxlckluc3RhbmNlLCBzdG9yZXMpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnNjaGVkdWxlckluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGNoYW5nZXNcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGNoYW5nZXMgdGhhdCBtYXRjaCBjb25maWdzIHRvIGdyaWRcbiAgICAgICAgICAgICAgICBpZiAobWUuY29uZmlncy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5zY2hlZHVsZXJJbnN0YW5jZVtuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuZmVhdHVyZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2NoZWR1bGVySW5zdGFuY2VbbmFtZS5yZXBsYWNlKHRoaXMuZmVhdHVyZVJlLCAnJyldID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVySW5zdGFuY2U7XG4gICAgICAgIHNjaGVkdWxlci5ldmVudFN0b3JlLnJlbW92ZShzY2hlZHVsZXIuc2VsZWN0ZWRFdmVudHMpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRXZlbnQgPSAnJztcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVySW5zdGFuY2UsXG4gICAgICAgICAgICBldmVudCA9IG5ldyBzY2hlZHVsZXIuZXZlbnRTdG9yZS5tb2RlbENsYXNzKHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZUlkICAgOiBzY2hlZHVsZXIucmVzb3VyY2VTdG9yZS5maXJzdC5pZCxcbiAgICAgICAgICAgICAgICBzdGFydERhdGUgICAgOiBzY2hlZHVsZXIuc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uICAgICA6IDEsXG4gICAgICAgICAgICAgICAgZHVyYXRpb25Vbml0IDogJ2gnLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICAgICA6ICdOZXcgdGFzaycsXG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlICAgIDogJ01lZXRpbmcnXG4gICAgICAgICAgICB9KSBhcyBFdmVudE1vZGVsO1xuXG4gICAgICAgIHNjaGVkdWxlci5lZGl0RXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zY2hlZHVsZXJJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19