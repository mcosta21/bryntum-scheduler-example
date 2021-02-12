/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent(element) {
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
    Object.defineProperty(SchedulerComponent.prototype, "schedulerEngine", {
        /**
         * @deprecated in favor of schedulerInstance
         */
        get: /**
         * @deprecated in favor of schedulerInstance
         * @return {?}
         */
        function () {
            console.warn('schedulerEngine is deprecated. Use schedulerInstance instead.');
            return this.schedulerInstance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes component
     */
    /**
     * Initializes component
     * @return {?}
     */
    SchedulerComponent.prototype.ngOnInit = /**
     * Initializes component
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var config = {
            // Render scheduler to components element
            appendTo: this.elementRef.nativeElement,
            // Listeners, will relay events
            listeners: {
                catchAll: /**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
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
        function (featureName) {
            if (featureName in _this) {
                config.features[featureName.replace(_this.featureRe, '')] = _this[featureName];
            }
        }));
        // Pass configs on to scheduler
        this.configs.forEach((/**
         * @param {?} configName
         * @return {?}
         */
        function (configName) {
            if (configName in _this) {
                // application may want to pass id for the engine is schedulerId
                if ('schedulerId' === configName && _this[configName]) {
                    config['id'] = _this[configName];
                }
                else {
                    config[configName] = _this[configName];
                }
            }
        }));
        // The application may have passed string id of the partner so
        // we attempt to find the real instance of the scheduler with that id
        if (config['partner'] && 'string' === typeof (config['partner'])) {
            /** @type {?} */
            var bryntum = window['bryntum'];
            /** @type {?} */
            var partner = bryntum && bryntum.get && bryntum.get(config['partner']);
            config['partner'] = partner || undefined;
        }
        // The Angular 11 application when compiled for production with buildOptimizer: true
        // fails on scheduler re-creation if any of this data sets is bound in template. It may
        // have something to do with the Angular build optimization process. Assigning the
        // data after the scheduler has been created resolves the issue.
        // https://github.com/bryntum/support/issues/2157
        /** @type {?} */
        var stores = {};
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
        function (name) {
            if (config[name]) {
                stores[name] = config[name];
                delete config[name];
            }
        }));
        this.schedulerInstance = new Scheduler(config);
        Object.assign(this.schedulerInstance, stores);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SchedulerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var me = this;
        if (me.schedulerInstance) {
            // Iterate over all changes
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
                // Apply changes that match configs to grid
                if (me.configs.includes(name)) {
                    me.schedulerInstance[name] = currentValue;
                }
                if (me.features.includes(name)) {
                    me.schedulerInstance[name.replace(_this.featureRe, '')] = currentValue;
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    SchedulerComponent.prototype.removeEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scheduler = this.schedulerInstance;
        scheduler.eventStore.remove(scheduler.selectedEvents);
        this.selectedEvent = '';
    };
    /**
     * @return {?}
     */
    SchedulerComponent.prototype.addEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scheduler = this.schedulerInstance;
        /** @type {?} */
        var event = (/** @type {?} */ (new scheduler.eventStore.modelClass({
            resourceId: scheduler.resourceStore.first.id,
            startDate: scheduler.startDate,
            duration: 1,
            durationUnit: 'h',
            name: 'New task',
            eventType: 'Meeting'
        })));
        scheduler.editEvent(event);
    };
    /**
     * Destroys component
     */
    /**
     * Destroys component
     * @return {?}
     */
    SchedulerComponent.prototype.ngOnDestroy = /**
     * Destroys component
     * @return {?}
     */
    function () {
        if (this.schedulerInstance) {
            this.schedulerInstance.destroy();
        }
    };
    SchedulerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-scheduler',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SchedulerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SchedulerComponent;
}());
export { SchedulerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBR2hJLE9BQU8sRUFBRSxTQUFTLEVBQWlFLE1BQU0seUNBQXlDLENBQUM7QUFFbkk7SUE2VEksNEJBQVksT0FBbUI7UUE1U3ZCLGNBQVMsR0FBVyxVQUFVLENBQUM7O1FBRy9CLGFBQVEsR0FBYTtZQUN6QixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQiwwQkFBMEI7WUFDMUIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLGtCQUFrQjtZQUNsQix3QkFBd0I7WUFDeEIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLHdCQUF3QjtZQUN4QixhQUFhO1lBQ2IsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQiwyQkFBMkI7WUFDM0IsbUJBQW1CO1lBQ25CLGFBQWE7U0FDaEIsQ0FBQzs7O1FB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O0lBQ3pELG9EQUF5RDs7SUFDekQsOENBQW1EOztJQUNuRCxvREFBeUM7O0lBQ3pDLDhDQUFtRDs7SUFDbkQsZ0RBQXFEOztJQUNyRCw4Q0FBbUQ7O0lBQ25ELGdEQUFxRDs7SUFDckQsaURBQXNEOztJQUN0RCw4Q0FBNEM7O0lBQzVDLDJDQUF5Qzs7SUFDekMsMENBQXdEOztJQUN4RCxpREFBK0M7O0lBQy9DLCtDQUE2Qzs7SUFDN0MsK0NBQW9DOztJQUNwQywyQ0FBeUM7O0lBQ3pDLG1EQUF3Qzs7SUFDeEMsd0NBQXNDOztJQUN0Qyw4Q0FBNEM7O0lBQzVDLDhDQUE0Qzs7SUFDNUMsaURBQXNDOztJQUN0Qyx1REFBNEM7O0lBQzVDLCtDQUFvQzs7SUFDcEMsaURBQXNEOztJQUN0RCxvREFBeUQ7O0lBQ3pELDJDQUFnQzs7SUFDaEMsNkNBQTJDOztJQUMzQyx5Q0FBdUQ7O0lBQ3ZELDJDQUFnQzs7SUFDaEMsNENBQTBDOztJQUMxQyx1REFBcUQ7O0lBQ3JELCtDQUFzRDs7SUFDdEQseUNBQThCOztJQUk5QixnREFBb0M7O0lBQ3BDLDJDQUFxQzs7SUFDckMsK0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKlxuICogQnJ5bnR1bSBTY2hlZHVsZXIgNC4wLjggKFRSSUFMIFZFUlNJT04pXG4gKlxuICogQ29weXJpZ2h0KGMpIDIwMjEgQnJ5bnR1bSBBQlxuICogaHR0cHM6Ly9icnludHVtLmNvbS9jb250YWN0XG4gKiBodHRwczovL2JyeW50dW0uY29tL2xpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNjaGVkdWxlciwgQXNzaWdubWVudE1vZGVsLCBBc3NpZ25tZW50U3RvcmUsIEV2ZW50TW9kZWwsIFNjaGVkdWxlckNvbmZpZyB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1zY2hlZHVsZXInLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHNjaGVkdWxlckluc3RhbmNlOiBTY2hlZHVsZXI7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBzY2hlZHVsZXJJbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2NoZWR1bGVyRW5naW5lKCkgOiBTY2hlZHVsZXIge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3NjaGVkdWxlckVuZ2luZSBpcyBkZXByZWNhdGVkLiBVc2Ugc2NoZWR1bGVySW5zdGFuY2UgaW5zdGVhZC4nKVxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZlYXR1cmVSZTogUmVnRXhwID0gL0ZlYXR1cmUkLztcblxuICAgIC8qICNyZWdpb24gZmVhdHVyZXMgKi9cbiAgICBwcml2YXRlIGZlYXR1cmVzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ2NlbGxFZGl0RmVhdHVyZScsXG4gICAgICAgICdjZWxsTWVudUZlYXR1cmUnLFxuICAgICAgICAnY2VsbFRvb2x0aXBGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtbkRyYWdUb29sYmFyRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5MaW5lc0ZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uUGlja2VyRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5SZW9yZGVyRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5SZXNpemVGZWF0dXJlJyxcbiAgICAgICAgJ2RlcGVuZGVuY2llc0ZlYXR1cmUnLFxuICAgICAgICAnZGVwZW5kZW5jeUVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RHJhZ0NyZWF0ZUZlYXR1cmUnLFxuICAgICAgICAnZXZlbnREcmFnRmVhdHVyZScsXG4gICAgICAgICdldmVudERyYWdTZWxlY3RGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RWRpdEZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRGaWx0ZXJGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50TWVudUZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRSZXNpemVGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50VG9vbHRpcEZlYXR1cmUnLFxuICAgICAgICAnZmlsdGVyQmFyRmVhdHVyZScsXG4gICAgICAgICdmaWx0ZXJGZWF0dXJlJyxcbiAgICAgICAgJ2dyb3VwRmVhdHVyZScsXG4gICAgICAgICdncm91cFN1bW1hcnlGZWF0dXJlJyxcbiAgICAgICAgJ2hlYWRlck1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ2hlYWRlclpvb21GZWF0dXJlJyxcbiAgICAgICAgJ2xhYmVsc0ZlYXR1cmUnLFxuICAgICAgICAnbm9uV29ya2luZ1RpbWVGZWF0dXJlJyxcbiAgICAgICAgJ3BhbkZlYXR1cmUnLFxuICAgICAgICAncGRmRXhwb3J0RmVhdHVyZScsXG4gICAgICAgICdxdWlja0ZpbmRGZWF0dXJlJyxcbiAgICAgICAgJ3JlZ2lvblJlc2l6ZUZlYXR1cmUnLFxuICAgICAgICAncmVzb3VyY2VUaW1lUmFuZ2VzRmVhdHVyZScsXG4gICAgICAgICdyb3dSZW9yZGVyRmVhdHVyZScsXG4gICAgICAgICdzY2hlZHVsZU1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ3NjaGVkdWxlVG9vbHRpcEZlYXR1cmUnLFxuICAgICAgICAnc2VhcmNoRmVhdHVyZScsXG4gICAgICAgICdzaW1wbGVFdmVudEVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ3NvcnRGZWF0dXJlJyxcbiAgICAgICAgJ3N0cmlwZUZlYXR1cmUnLFxuICAgICAgICAnc3VtbWFyeUZlYXR1cmUnLFxuICAgICAgICAndGltZUF4aXNIZWFkZXJNZW51RmVhdHVyZScsXG4gICAgICAgICd0aW1lUmFuZ2VzRmVhdHVyZScsXG4gICAgICAgICd0cmVlRmVhdHVyZSdcbiAgICBdO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gY29uZmlncyAqL1xuICAgIHByaXZhdGUgY29uZmlnczogc3RyaW5nW10gPSBbXG4gICAgICAgICdhbGxvd092ZXJsYXAnLFxuICAgICAgICAnYW5pbWF0ZVJlbW92aW5nUm93cycsXG4gICAgICAgICdhc3NpZ25tZW50cycsXG4gICAgICAgICdhc3NpZ25tZW50U3RvcmUnLFxuICAgICAgICAnYXV0b0FkanVzdFRpbWVBeGlzJyxcbiAgICAgICAgJ2F1dG9IZWlnaHQnLFxuICAgICAgICAnYmFyTWFyZ2luJyxcbiAgICAgICAgJ2NvbHVtbkxpbmVzJyxcbiAgICAgICAgJ2NvbHVtbnMnLFxuICAgICAgICAnY29udGV4dE1lbnVUcmlnZ2VyRXZlbnQnLFxuICAgICAgICAnY3JlYXRlRXZlbnRPbkRibENsaWNrJyxcbiAgICAgICAgJ2NydWRNYW5hZ2VyJyxcbiAgICAgICAgJ2RlZmF1bHRSZXNvdXJjZUltYWdlTmFtZScsXG4gICAgICAgICdkZXBlbmRlbmN5U3RvcmUnLFxuICAgICAgICAnZGlzYWJsZUdyaWRSb3dNb2RlbFdhcm5pbmcnLFxuICAgICAgICAnZGlzcGxheURhdGVGb3JtYXQnLFxuICAgICAgICAnZW1wdHlUZXh0JyxcbiAgICAgICAgJ2VuYWJsZURlbGV0ZUtleScsXG4gICAgICAgICdlbmFibGVFdmVudEFuaW1hdGlvbnMnLFxuICAgICAgICAnZW5hYmxlUmVjdXJyaW5nRXZlbnRzJyxcbiAgICAgICAgJ2VuYWJsZVRleHRTZWxlY3Rpb24nLFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgICdlbmRQYXJhbU5hbWUnLFxuICAgICAgICAnZXZlbnRCYXJUZXh0RmllbGQnLFxuICAgICAgICAnZXZlbnRCb2R5VGVtcGxhdGUnLFxuICAgICAgICAnZXZlbnRDb2xvcicsXG4gICAgICAgICdldmVudExheW91dCcsXG4gICAgICAgICdldmVudFJlbmRlcmVyJyxcbiAgICAgICAgJ2V2ZW50cycsXG4gICAgICAgICdldmVudFNlbGVjdGlvbkRpc2FibGVkJyxcbiAgICAgICAgJ2V2ZW50U3RvcmUnLFxuICAgICAgICAnZXZlbnRTdHlsZScsXG4gICAgICAgICdmaWxsTGFzdENvbHVtbicsXG4gICAgICAgICdmaWxsVGlja3MnLFxuICAgICAgICAnZnVsbFJvd1JlZnJlc2gnLFxuICAgICAgICAnZ2V0Um93SGVpZ2h0JyxcbiAgICAgICAgJ2hhc1Zpc2libGVFdmVudHMnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ2hpZGVIZWFkZXJzJyxcbiAgICAgICAgJ2hvcml6b250YWxFdmVudFNvcnRlckZuJyxcbiAgICAgICAgJ2xvYWRNYXNrJyxcbiAgICAgICAgJ2xvbmdQcmVzc1RpbWUnLFxuICAgICAgICAnbWFpbnRhaW5TZWxlY3Rpb25PbkRhdGFzZXRDaGFuZ2UnLFxuICAgICAgICAnbWFuYWdlZEV2ZW50U2l6aW5nJyxcbiAgICAgICAgJ21heEhlaWdodCcsXG4gICAgICAgICdtYXhXaWR0aCcsXG4gICAgICAgICdtYXhab29tTGV2ZWwnLFxuICAgICAgICAnbWlsZXN0b25lQWxpZ24nLFxuICAgICAgICAnbWlsZXN0b25lQ2hhcldpZHRoJyxcbiAgICAgICAgJ21pbGVzdG9uZUxheW91dE1vZGUnLFxuICAgICAgICAnbWluSGVpZ2h0JyxcbiAgICAgICAgJ21pbldpZHRoJyxcbiAgICAgICAgJ21pblpvb21MZXZlbCcsXG4gICAgICAgICdtb2RlJyxcbiAgICAgICAgJ211bHRpRXZlbnRTZWxlY3QnLFxuICAgICAgICAncGFydG5lcicsXG4gICAgICAgICdwYXNzU3RhcnRFbmRQYXJhbWV0ZXJzJyxcbiAgICAgICAgJ3ByZXNldHMnLFxuICAgICAgICAncmVhZE9ubHknLFxuICAgICAgICAncmVtb3ZlVW5hc3NpZ25lZEV2ZW50JyxcbiAgICAgICAgJ3Jlc2l6ZVRvRml0SW5jbHVkZXNIZWFkZXInLFxuICAgICAgICAncmVzb3VyY2VDb2x1bW5zJyxcbiAgICAgICAgJ3Jlc291cmNlSW1hZ2VQYXRoJyxcbiAgICAgICAgJ3Jlc291cmNlTWFyZ2luJyxcbiAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICdyZXNvdXJjZVN0b3JlJyxcbiAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlcycsXG4gICAgICAgICdyZXNwb25zaXZlTGV2ZWxzJyxcbiAgICAgICAgJ3Jvd0hlaWdodCcsXG4gICAgICAgICdzY3JvbGxMZWZ0JyxcbiAgICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAgICdzZWxlY3RlZEV2ZW50cycsXG4gICAgICAgICdzZWxlY3Rpb25Nb2RlJyxcbiAgICAgICAgJ3Nob3dEaXJ0eScsXG4gICAgICAgICdzbmFwJyxcbiAgICAgICAgJ3NuYXBSZWxhdGl2ZVRvRXZlbnRTdGFydERhdGUnLFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgJ3N0YXJ0UGFyYW1OYW1lJyxcbiAgICAgICAgJ3N1YkdyaWRDb25maWdzJyxcbiAgICAgICAgJ3RpY2tXaWR0aCcsXG4gICAgICAgICd0aW1lUmFuZ2VzJyxcbiAgICAgICAgJ3RpbWVSZXNvbHV0aW9uJyxcbiAgICAgICAgJ3RyaWdnZXJTZWxlY3Rpb25DaGFuZ2VPblJlbW92ZScsXG4gICAgICAgICd1c2VJbml0aWFsQW5pbWF0aW9uJyxcbiAgICAgICAgJ3ZpZXdwb3J0Q2VudGVyRGF0ZScsXG4gICAgICAgICd2aWV3UHJlc2V0JyxcbiAgICAgICAgJ3dlZWtTdGFydERheScsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICd3b3JraW5nVGltZScsXG4gICAgICAgICd6b29tTGV2ZWwnLFxuICAgICAgICAnem9vbU9uTW91c2VXaGVlbCcsXG4gICAgICAgICd6b29tT25UaW1lQXhpc0RvdWJsZUNsaWNrJyxcblxuICAgICAgICAvLyBzY2hlZHVsZXJJZCBtYXBzIHRvIGlkIG9mIHRoZSB1bmRlcmx5aW5nIHNjaGVkdWxlclxuICAgICAgICAnc2NoZWR1bGVySWQnLFxuXG4gICAgICAgIC8vIG9ubHkgZm9yIGV4YW1wbGVzLCBkZWxldGUgaWYgeW91IGRvbid0IG5lZWQgdGhlbVxuICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJ1xuICAgIF07XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBDb25maWdzICovXG4gICAgLy8gc2NoZWR1bGVySWQgdHJhbnNsYXRlcyB0byBpZCBmb3IgdGhlIHNjaGVkdWxlciBlbmdpbmVcbiAgICBASW5wdXQoKSBzY2hlZHVsZXJJZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYWxsb3dPdmVybGFwOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhbmltYXRlUmVtb3ZpbmdSb3dzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFzc2lnbm1lbnRzOiBBc3NpZ25tZW50TW9kZWxbXSB8IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGFzc2lnbm1lbnRTdG9yZTogQXNzaWdubWVudFN0b3JlIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGF1dG9BZGp1c3RUaW1lQXhpczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgYXV0b0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJhck1hcmdpbjogbnVtYmVyID0gNTtcbiAgICBASW5wdXQoKSBjb2x1bW5MaW5lczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uczogb2JqZWN0W107XG4gICAgQElucHV0KCkgY29udGV4dE1lbnVUcmlnZ2VyRXZlbnQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjcmVhdGVFdmVudE9uRGJsQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNydWRNYW5hZ2VyOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZGVmYXVsdFJlc291cmNlSW1hZ2VOYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jeVN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZGlzYWJsZUdyaWRSb3dNb2RlbFdhcm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNwbGF5RGF0ZUZvcm1hdDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVtcHR5VGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZURlbGV0ZUtleTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZW5hYmxlRXZlbnRBbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBlbmFibGVSZWN1cnJpbmdFdmVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBlbmFibGVUZXh0U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZW5kRGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIGVuZFBhcmFtTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGV2ZW50QmFyVGV4dEZpZWxkOiBzdHJpbmcgPSAnbmFtZSc7XG4gICAgQElucHV0KCkgZXZlbnRCb2R5VGVtcGxhdGU6IGFueTtcbiAgICBASW5wdXQoKSBldmVudENvbG9yOiBzdHJpbmcgPSAnZ3JlZW4nO1xuICAgIEBJbnB1dCgpIGV2ZW50TGF5b3V0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXZlbnRSZW5kZXJlcjogYW55O1xuICAgIEBJbnB1dCgpIGV2ZW50czogb2JqZWN0W107XG4gICAgQElucHV0KCkgZXZlbnRTZWxlY3Rpb25EaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGV2ZW50U3RvcmU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBldmVudFN0eWxlOiBzdHJpbmcgPSAncGxhaW4nO1xuICAgIEBJbnB1dCgpIGZpbGxMYXN0Q29sdW1uOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBmaWxsVGlja3M6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZnVsbFJvd1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGdldFJvd0hlaWdodDogYW55O1xuICAgIEBJbnB1dCgpIGhhc1Zpc2libGVFdmVudHM6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgaGlkZUhlYWRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBob3Jpem9udGFsRXZlbnRTb3J0ZXJGbjogYW55O1xuICAgIEBJbnB1dCgpIGxvYWRNYXNrOiBzdHJpbmcgPSAnTG9hZGluZy4uLic7XG4gICAgQElucHV0KCkgbG9uZ1ByZXNzVGltZTogbnVtYmVyID0gNDAwO1xuICAgIEBJbnB1dCgpIG1haW50YWluU2VsZWN0aW9uT25EYXRhc2V0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBtYW5hZ2VkRXZlbnRTaXppbmc6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1heEhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWF4Wm9vbUxldmVsOiBudW1iZXI7XG4gICAgQElucHV0KCkgbWlsZXN0b25lQWxpZ246IHN0cmluZztcbiAgICBASW5wdXQoKSBtaWxlc3RvbmVDaGFyV2lkdGg6IG51bWJlciA9IDEwO1xuICAgIEBJbnB1dCgpIG1pbGVzdG9uZUxheW91dE1vZGU6IHN0cmluZyA9ICdkZWZhdWx0JztcbiAgICBASW5wdXQoKSBtaW5IZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1pblpvb21MZXZlbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1vZGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtdWx0aUV2ZW50U2VsZWN0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBhcnRuZXI6IGFueTtcbiAgICBASW5wdXQoKSBwYXNzU3RhcnRFbmRQYXJhbWV0ZXJzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXNldHM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcmVtb3ZlVW5hc3NpZ25lZEV2ZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSByZXNpemVUb0ZpdEluY2x1ZGVzSGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSByZXNvdXJjZUNvbHVtbnM6IGFueTtcbiAgICBASW5wdXQoKSByZXNvdXJjZUltYWdlUGF0aDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJlc291cmNlTWFyZ2luOiBudW1iZXI7XG4gICAgQElucHV0KCkgcmVzb3VyY2VzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSByZXNvdXJjZVN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVzb3VyY2VUaW1lUmFuZ2VzOiBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZUxldmVsczogYW55O1xuICAgIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyID0gNTA7XG4gICAgQElucHV0KCkgc2Nyb2xsTGVmdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNjcm9sbFRvcDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkRXZlbnRzOiBFdmVudE1vZGVsW107XG4gICAgQElucHV0KCkgc2VsZWN0aW9uTW9kZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNob3dEaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNuYXA6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc25hcFJlbGF0aXZlVG9FdmVudFN0YXJ0RGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHN0YXJ0RGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIHN0YXJ0UGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3ViR3JpZENvbmZpZ3M6IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aWNrV2lkdGg6IG51bWJlcjtcbiAgICBASW5wdXQoKSB0aW1lUmFuZ2VzOiBvYmplY3QgfCBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRpbWVSZXNvbHV0aW9uOiBvYmplY3Q7XG4gICAgQElucHV0KCkgdHJpZ2dlclNlbGVjdGlvbkNoYW5nZU9uUmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdXNlSW5pdGlhbEFuaW1hdGlvbjogYm9vbGVhbiB8IHN0cmluZyA9IHRydWU7XG4gICAgQElucHV0KCkgdmlld3BvcnRDZW50ZXJEYXRlOiBhbnk7XG4gICAgQElucHV0KCkgdmlld1ByZXNldDogb2JqZWN0IHwgc3RyaW5nID0gJ2hvdXJBbmREYXknO1xuICAgIEBJbnB1dCgpIHdlZWtTdGFydERheTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgd29ya2luZ1RpbWU6IG9iamVjdDtcbiAgICBASW5wdXQoKSB6b29tTGV2ZWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSB6b29tT25Nb3VzZVdoZWVsOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB6b29tT25UaW1lQXhpc0RvdWJsZUNsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvKiAjcmVnaW9uIEZlYXR1cmVzLCBvbmx5IHVzZWQgZm9yIGluaXRpYWxpemF0aW9uICovXG4gICAgQElucHV0KCkgY2VsbEVkaXRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjZWxsTWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY2VsbFRvb2x0aXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5EcmFnVG9vbGJhckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtbkxpbmVzRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uUGlja2VyRmVhdHVyZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uUmVvcmRlckZlYXR1cmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtblJlc2l6ZUZlYXR1cmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY2llc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkZXBlbmRlbmN5RWRpdEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBldmVudERyYWdDcmVhdGVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudERyYWdGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudERyYWdTZWxlY3RGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGV2ZW50RWRpdEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50RmlsdGVyRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRSZXNpemVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudFRvb2x0aXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBmaWx0ZXJCYXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGZpbHRlckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgZ3JvdXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0IHwgc3RyaW5nID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBncm91cFN1bW1hcnlGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGhlYWRlck1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGhlYWRlclpvb21GZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGxhYmVsc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgbm9uV29ya2luZ1RpbWVGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBhbkZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcGRmRXhwb3J0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBxdWlja0ZpbmRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlZ2lvblJlc2l6ZUZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcmVzb3VyY2VUaW1lUmFuZ2VzRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByb3dSZW9yZGVyRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzY2hlZHVsZU1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzY2hlZHVsZVRvb2x0aXBGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzZWFyY2hGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNpbXBsZUV2ZW50RWRpdDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBzb3J0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCB8IHN0cmluZyA9IHRydWU7XG4gICAgQElucHV0KCkgc3RyaXBlRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdW1tYXJ5RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lQXhpc0hlYWRlck1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRpbWVSYW5nZXNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0W10gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHRyZWVGZWF0dXJlOiBib29sZWFuO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8vIGZvciBleGFtcGxlcyBvbmx5LCBkZWxldGVcbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRFdmVudDogc3RyaW5nID0gJyc7XG4gICAgQE91dHB1dCgpIG9uU2NoZWR1bGVyRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIC8vIE5lZWRlZCBsYXRlciwgdXNlZCBhcyB0YXJnZXQgd2hlbiByZW5kZXJpbmcgQnJ5bnR1bSBTY2hlZHVsZXJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgc2NoZWR1bGVyIHRvIGNvbXBvbmVudHMgZWxlbWVudFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG5cbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW5lcnMsIHdpbGwgcmVsYXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdldmVudHNlbGVjdGlvbmNoYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRXZlbnQgPSBldmVudC5zZWxlY3RlZC5sZW5ndGggPyBldmVudC5zZWxlY3RlZFswXS5uYW1lIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TY2hlZHVsZXJFdmVudHMuZW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc09iaiA6IHRoaXNcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZmVhdHVyZXMgOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gcmVsYXkgcHJvcGVydGllcyB3aXRoIG5hbWVzIG1hdGNoaW5nIHRoaXMuZmVhdHVyZVJlIHRvIGZlYXR1cmVzXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZU5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5mZWF0dXJlc1tmZWF0dXJlTmFtZS5yZXBsYWNlKHRoaXMuZmVhdHVyZVJlLCAnJyldID0gdGhpc1tmZWF0dXJlTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhc3MgY29uZmlncyBvbiB0byBzY2hlZHVsZXJcbiAgICAgICAgdGhpcy5jb25maWdzLmZvckVhY2goY29uZmlnTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlnTmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gbWF5IHdhbnQgdG8gcGFzcyBpZCBmb3IgdGhlIGVuZ2luZSBpcyBzY2hlZHVsZXJJZFxuICAgICAgICAgICAgICAgIGlmICgnc2NoZWR1bGVySWQnID09PSBjb25maWdOYW1lICYmIHRoaXNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnWydpZCddID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maWdbY29uZmlnTmFtZV0gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhlIGFwcGxpY2F0aW9uIG1heSBoYXZlIHBhc3NlZCBzdHJpbmcgaWQgb2YgdGhlIHBhcnRuZXIgc29cbiAgICAgICAgLy8gd2UgYXR0ZW1wdCB0byBmaW5kIHRoZSByZWFsIGluc3RhbmNlIG9mIHRoZSBzY2hlZHVsZXIgd2l0aCB0aGF0IGlkXG4gICAgICAgIGlmIChjb25maWdbJ3BhcnRuZXInXSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIChjb25maWdbJ3BhcnRuZXInXSkpIHtcbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgYnJ5bnR1bSA9IHdpbmRvd1snYnJ5bnR1bSddLFxuICAgICAgICAgICAgICAgIHBhcnRuZXIgPSBicnludHVtICYmIGJyeW50dW0uZ2V0ICYmIGJyeW50dW0uZ2V0KGNvbmZpZ1sncGFydG5lciddKTtcbiAgICAgICAgICAgIGNvbmZpZ1sncGFydG5lciddID0gcGFydG5lciB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgQW5ndWxhciAxMSBhcHBsaWNhdGlvbiB3aGVuIGNvbXBpbGVkIGZvciBwcm9kdWN0aW9uIHdpdGggYnVpbGRPcHRpbWl6ZXI6IHRydWVcbiAgICAgICAgLy8gZmFpbHMgb24gc2NoZWR1bGVyIHJlLWNyZWF0aW9uIGlmIGFueSBvZiB0aGlzIGRhdGEgc2V0cyBpcyBib3VuZCBpbiB0ZW1wbGF0ZS4gSXQgbWF5XG4gICAgICAgIC8vIGhhdmUgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIEFuZ3VsYXIgYnVpbGQgb3B0aW1pemF0aW9uIHByb2Nlc3MuIEFzc2lnbmluZyB0aGVcbiAgICAgICAgLy8gZGF0YSBhZnRlciB0aGUgc2NoZWR1bGVyIGhhcyBiZWVuIGNyZWF0ZWQgcmVzb2x2ZXMgdGhlIGlzc3VlLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnJ5bnR1bS9zdXBwb3J0L2lzc3Vlcy8yMTU3XG4gICAgICAgIGNvbnN0IHN0b3JlcyA9IHt9O1xuICAgICAgICBbXG4gICAgICAgICAgICAncmVzb3VyY2VzJyxcbiAgICAgICAgICAgICdldmVudHMnLFxuICAgICAgICAgICAgJ2Fzc2lnbm1lbnRzJyxcbiAgICAgICAgICAgICdkZXBlbmRlbmNpZXMnLFxuICAgICAgICAgICAgJ3RpbWVSYW5nZXMnLFxuICAgICAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlcydcbiAgICAgICAgXS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlnW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVzW25hbWVdID0gY29uZmlnW25hbWVdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWdbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVySW5zdGFuY2UgPSBuZXcgU2NoZWR1bGVyKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnNjaGVkdWxlckluc3RhbmNlLCBzdG9yZXMpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnNjaGVkdWxlckluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGNoYW5nZXNcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGNoYW5nZXMgdGhhdCBtYXRjaCBjb25maWdzIHRvIGdyaWRcbiAgICAgICAgICAgICAgICBpZiAobWUuY29uZmlncy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5zY2hlZHVsZXJJbnN0YW5jZVtuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuZmVhdHVyZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2NoZWR1bGVySW5zdGFuY2VbbmFtZS5yZXBsYWNlKHRoaXMuZmVhdHVyZVJlLCAnJyldID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVySW5zdGFuY2U7XG4gICAgICAgIHNjaGVkdWxlci5ldmVudFN0b3JlLnJlbW92ZShzY2hlZHVsZXIuc2VsZWN0ZWRFdmVudHMpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRXZlbnQgPSAnJztcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVySW5zdGFuY2UsXG4gICAgICAgICAgICBldmVudCA9IG5ldyBzY2hlZHVsZXIuZXZlbnRTdG9yZS5tb2RlbENsYXNzKHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZUlkICAgOiBzY2hlZHVsZXIucmVzb3VyY2VTdG9yZS5maXJzdC5pZCxcbiAgICAgICAgICAgICAgICBzdGFydERhdGUgICAgOiBzY2hlZHVsZXIuc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uICAgICA6IDEsXG4gICAgICAgICAgICAgICAgZHVyYXRpb25Vbml0IDogJ2gnLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICAgICA6ICdOZXcgdGFzaycsXG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlICAgIDogJ01lZXRpbmcnXG4gICAgICAgICAgICB9KSBhcyBFdmVudE1vZGVsO1xuXG4gICAgICAgIHNjaGVkdWxlci5lZGl0RXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zY2hlZHVsZXJJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19