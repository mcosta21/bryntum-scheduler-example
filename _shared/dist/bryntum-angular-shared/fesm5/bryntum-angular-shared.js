import { __read } from 'tslib';
import { Component, ElementRef, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { WidgetHelper, Fullscreen, Scheduler } from 'bryntum-scheduler/scheduler.lite.umd.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                var _b = __read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                var _b = __read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderComponent = /** @class */ (function () {
    /**
     * Saves element to have container to render the button to
     */
    function SliderComponent(element) {
        this.max = 100;
        this.min = 0;
        this.step = 5;
        this.text = 'Slider';
        this.value = 0;
        this.elementRef = element;
    }
    /**
     * Initializes component
     */
    /**
     * Initializes component
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * Initializes component
     * @return {?}
     */
    function () {
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
    };
    /**
     * Destroys component
     */
    /**
     * Destroys component
     * @return {?}
     */
    SliderComponent.prototype.ngOnDestroy = /**
     * Destroys component
     * @return {?}
     */
    function () {
        if (this.slider) {
            this.slider.destroy();
        }
    };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-slider',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BryntumAngularSharedModule = /** @class */ (function () {
    function BryntumAngularSharedModule() {
    }
    BryntumAngularSharedModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return BryntumAngularSharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BryntumAngularSharedModule, ButtonComponent, FullscreenComponent, SchedulerComponent, SliderComponent, WidgetComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiLCJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL3NjaGVkdWxlci5jb21wb25lbnQudHMiLCJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL3NsaWRlci5jb21wb25lbnQudHMiLCJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL3dpZGdldC5jb21wb25lbnQudHMiLCJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL2JyeW50dW0tYW5ndWxhci1zaGFyZWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEJ1dHRvbiB3aWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIEBJbnB1dCgpIGNsczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnYi1vcmFuZ2UgYi1yYWlzZWQnO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBwcmVzc2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b2dnbGVhYmxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvZ2dsZUdyb3VwOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBvbkFjdGlvbiA9ICgpID0+IHt9OyAvLyBlbXB0eSBmbiBieSBkZWZhdWx0LCBmaXhlcyAjNDM2XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGNscyAgICAgICAgIDogdGhpcy5jbHMsXG4gICAgICAgICAgICBjb2xvciAgICAgICA6IHRoaXMuY29sb3IsXG4gICAgICAgICAgICBpY29uICAgICAgICA6IHRoaXMuaWNvbixcbiAgICAgICAgICAgIG9uQWN0aW9uICAgIDogdGhpcy5vbkFjdGlvbixcbiAgICAgICAgICAgIG9uQ2xpY2sgICAgIDogKGV2ZW50OiBhbnkpID0+IHRoaXMuY2xpY2suZW1pdChldmVudCksXG4gICAgICAgICAgICBwcmVzc2VkICAgICA6IHRoaXMucHJlc3NlZCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSAgOiB0aGlzLnRvZ2dsZWFibGUsXG4gICAgICAgICAgICB0b2dnbGVHcm91cCA6IHRoaXMudG9nZ2xlR3JvdXAsXG4gICAgICAgICAgICB0b29sdGlwICAgICA6IHRoaXMudG9vbHRpcCxcbiAgICAgICAgICAgIGRpc2FibGVkICAgIDogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KSBhcyBCdXR0b247XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEZ1bGxzY3JlZW4gYnV0dG9uXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBGdWxsc2NyZWVuLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktZnVsbHNjcmVlbicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyBjbGFzcyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCFGdWxsc2NyZWVuLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBpY29uICAgICAgIDogJ2ItaWNvbiBiLWljb24tZnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b29sdGlwICAgIDogJ0Z1bGxzY3JlZW4nLFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBjbHMgICAgICAgIDogJ2ItYmx1ZSBiLXJhaXNlZCcsXG4gICAgICAgICAgICBvblRvZ2dsZSAgIDogKHsgcHJlc3NlZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5leGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBhcyBCdXR0b247XG5cbiAgICAgICAgRnVsbHNjcmVlbi5vbkZ1bGxzY3JlZW5DaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25bJ3ByZXNzZWQnXSA9IEZ1bGxzY3JlZW4uaXNGdWxsc2NyZWVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiFcbiAqXG4gKiBCcnludHVtIFNjaGVkdWxlciA0LjAuOCAoVFJJQUwgVkVSU0lPTilcbiAqXG4gKiBDb3B5cmlnaHQoYykgMjAyMSBCcnludHVtIEFCXG4gKiBodHRwczovL2JyeW50dW0uY29tL2NvbnRhY3RcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vbGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgU2NoZWR1bGVyLCBBc3NpZ25tZW50TW9kZWwsIEFzc2lnbm1lbnRTdG9yZSwgRXZlbnRNb2RlbCwgU2NoZWR1bGVyQ29uZmlnIH0gZnJvbSAnYnJ5bnR1bS1zY2hlZHVsZXIvc2NoZWR1bGVyLmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXNjaGVkdWxlcicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgc2NoZWR1bGVySW5zdGFuY2U6IFNjaGVkdWxlcjtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHNjaGVkdWxlckluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldCBzY2hlZHVsZXJFbmdpbmUoKSA6IFNjaGVkdWxlciB7XG4gICAgICAgIGNvbnNvbGUud2Fybignc2NoZWR1bGVyRW5naW5lIGlzIGRlcHJlY2F0ZWQuIFVzZSBzY2hlZHVsZXJJbnN0YW5jZSBpbnN0ZWFkLicpXG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlckluc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmVhdHVyZVJlOiBSZWdFeHAgPSAvRmVhdHVyZSQvO1xuXG4gICAgLyogI3JlZ2lvbiBmZWF0dXJlcyAqL1xuICAgIHByaXZhdGUgZmVhdHVyZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnY2VsbEVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ2NlbGxNZW51RmVhdHVyZScsXG4gICAgICAgICdjZWxsVG9vbHRpcEZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uRHJhZ1Rvb2xiYXJGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtbkxpbmVzRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5QaWNrZXJGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtblJlb3JkZXJGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtblJlc2l6ZUZlYXR1cmUnLFxuICAgICAgICAnZGVwZW5kZW5jaWVzRmVhdHVyZScsXG4gICAgICAgICdkZXBlbmRlbmN5RWRpdEZlYXR1cmUnLFxuICAgICAgICAnZXZlbnREcmFnQ3JlYXRlRmVhdHVyZScsXG4gICAgICAgICdldmVudERyYWdGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RHJhZ1NlbGVjdEZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRFZGl0RmVhdHVyZScsXG4gICAgICAgICdldmVudEZpbHRlckZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRNZW51RmVhdHVyZScsXG4gICAgICAgICdldmVudFJlc2l6ZUZlYXR1cmUnLFxuICAgICAgICAnZXZlbnRUb29sdGlwRmVhdHVyZScsXG4gICAgICAgICdmaWx0ZXJCYXJGZWF0dXJlJyxcbiAgICAgICAgJ2ZpbHRlckZlYXR1cmUnLFxuICAgICAgICAnZ3JvdXBGZWF0dXJlJyxcbiAgICAgICAgJ2dyb3VwU3VtbWFyeUZlYXR1cmUnLFxuICAgICAgICAnaGVhZGVyTWVudUZlYXR1cmUnLFxuICAgICAgICAnaGVhZGVyWm9vbUZlYXR1cmUnLFxuICAgICAgICAnbGFiZWxzRmVhdHVyZScsXG4gICAgICAgICdub25Xb3JraW5nVGltZUZlYXR1cmUnLFxuICAgICAgICAncGFuRmVhdHVyZScsXG4gICAgICAgICdwZGZFeHBvcnRGZWF0dXJlJyxcbiAgICAgICAgJ3F1aWNrRmluZEZlYXR1cmUnLFxuICAgICAgICAncmVnaW9uUmVzaXplRmVhdHVyZScsXG4gICAgICAgICdyZXNvdXJjZVRpbWVSYW5nZXNGZWF0dXJlJyxcbiAgICAgICAgJ3Jvd1Jlb3JkZXJGZWF0dXJlJyxcbiAgICAgICAgJ3NjaGVkdWxlTWVudUZlYXR1cmUnLFxuICAgICAgICAnc2NoZWR1bGVUb29sdGlwRmVhdHVyZScsXG4gICAgICAgICdzZWFyY2hGZWF0dXJlJyxcbiAgICAgICAgJ3NpbXBsZUV2ZW50RWRpdEZlYXR1cmUnLFxuICAgICAgICAnc29ydEZlYXR1cmUnLFxuICAgICAgICAnc3RyaXBlRmVhdHVyZScsXG4gICAgICAgICdzdW1tYXJ5RmVhdHVyZScsXG4gICAgICAgICd0aW1lQXhpc0hlYWRlck1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ3RpbWVSYW5nZXNGZWF0dXJlJyxcbiAgICAgICAgJ3RyZWVGZWF0dXJlJ1xuICAgIF07XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBjb25maWdzICovXG4gICAgcHJpdmF0ZSBjb25maWdzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ2FsbG93T3ZlcmxhcCcsXG4gICAgICAgICdhbmltYXRlUmVtb3ZpbmdSb3dzJyxcbiAgICAgICAgJ2Fzc2lnbm1lbnRzJyxcbiAgICAgICAgJ2Fzc2lnbm1lbnRTdG9yZScsXG4gICAgICAgICdhdXRvQWRqdXN0VGltZUF4aXMnLFxuICAgICAgICAnYXV0b0hlaWdodCcsXG4gICAgICAgICdiYXJNYXJnaW4nLFxuICAgICAgICAnY29sdW1uTGluZXMnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjb250ZXh0TWVudVRyaWdnZXJFdmVudCcsXG4gICAgICAgICdjcmVhdGVFdmVudE9uRGJsQ2xpY2snLFxuICAgICAgICAnY3J1ZE1hbmFnZXInLFxuICAgICAgICAnZGVmYXVsdFJlc291cmNlSW1hZ2VOYW1lJyxcbiAgICAgICAgJ2RlcGVuZGVuY3lTdG9yZScsXG4gICAgICAgICdkaXNhYmxlR3JpZFJvd01vZGVsV2FybmluZycsXG4gICAgICAgICdkaXNwbGF5RGF0ZUZvcm1hdCcsXG4gICAgICAgICdlbXB0eVRleHQnLFxuICAgICAgICAnZW5hYmxlRGVsZXRlS2V5JyxcbiAgICAgICAgJ2VuYWJsZUV2ZW50QW5pbWF0aW9ucycsXG4gICAgICAgICdlbmFibGVSZWN1cnJpbmdFdmVudHMnLFxuICAgICAgICAnZW5hYmxlVGV4dFNlbGVjdGlvbicsXG4gICAgICAgICdlbmREYXRlJyxcbiAgICAgICAgJ2VuZFBhcmFtTmFtZScsXG4gICAgICAgICdldmVudEJhclRleHRGaWVsZCcsXG4gICAgICAgICdldmVudEJvZHlUZW1wbGF0ZScsXG4gICAgICAgICdldmVudENvbG9yJyxcbiAgICAgICAgJ2V2ZW50TGF5b3V0JyxcbiAgICAgICAgJ2V2ZW50UmVuZGVyZXInLFxuICAgICAgICAnZXZlbnRzJyxcbiAgICAgICAgJ2V2ZW50U2VsZWN0aW9uRGlzYWJsZWQnLFxuICAgICAgICAnZXZlbnRTdG9yZScsXG4gICAgICAgICdldmVudFN0eWxlJyxcbiAgICAgICAgJ2ZpbGxMYXN0Q29sdW1uJyxcbiAgICAgICAgJ2ZpbGxUaWNrcycsXG4gICAgICAgICdmdWxsUm93UmVmcmVzaCcsXG4gICAgICAgICdnZXRSb3dIZWlnaHQnLFxuICAgICAgICAnaGFzVmlzaWJsZUV2ZW50cycsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnaGlkZUhlYWRlcnMnLFxuICAgICAgICAnaG9yaXpvbnRhbEV2ZW50U29ydGVyRm4nLFxuICAgICAgICAnbG9hZE1hc2snLFxuICAgICAgICAnbG9uZ1ByZXNzVGltZScsXG4gICAgICAgICdtYWludGFpblNlbGVjdGlvbk9uRGF0YXNldENoYW5nZScsXG4gICAgICAgICdtYW5hZ2VkRXZlbnRTaXppbmcnLFxuICAgICAgICAnbWF4SGVpZ2h0JyxcbiAgICAgICAgJ21heFdpZHRoJyxcbiAgICAgICAgJ21heFpvb21MZXZlbCcsXG4gICAgICAgICdtaWxlc3RvbmVBbGlnbicsXG4gICAgICAgICdtaWxlc3RvbmVDaGFyV2lkdGgnLFxuICAgICAgICAnbWlsZXN0b25lTGF5b3V0TW9kZScsXG4gICAgICAgICdtaW5IZWlnaHQnLFxuICAgICAgICAnbWluV2lkdGgnLFxuICAgICAgICAnbWluWm9vbUxldmVsJyxcbiAgICAgICAgJ21vZGUnLFxuICAgICAgICAnbXVsdGlFdmVudFNlbGVjdCcsXG4gICAgICAgICdwYXJ0bmVyJyxcbiAgICAgICAgJ3Bhc3NTdGFydEVuZFBhcmFtZXRlcnMnLFxuICAgICAgICAncHJlc2V0cycsXG4gICAgICAgICdyZWFkT25seScsXG4gICAgICAgICdyZW1vdmVVbmFzc2lnbmVkRXZlbnQnLFxuICAgICAgICAncmVzaXplVG9GaXRJbmNsdWRlc0hlYWRlcicsXG4gICAgICAgICdyZXNvdXJjZUNvbHVtbnMnLFxuICAgICAgICAncmVzb3VyY2VJbWFnZVBhdGgnLFxuICAgICAgICAncmVzb3VyY2VNYXJnaW4nLFxuICAgICAgICAncmVzb3VyY2VzJyxcbiAgICAgICAgJ3Jlc291cmNlU3RvcmUnLFxuICAgICAgICAncmVzb3VyY2VUaW1lUmFuZ2VzJyxcbiAgICAgICAgJ3Jlc3BvbnNpdmVMZXZlbHMnLFxuICAgICAgICAncm93SGVpZ2h0JyxcbiAgICAgICAgJ3Njcm9sbExlZnQnLFxuICAgICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICAgJ3NlbGVjdGVkRXZlbnRzJyxcbiAgICAgICAgJ3NlbGVjdGlvbk1vZGUnLFxuICAgICAgICAnc2hvd0RpcnR5JyxcbiAgICAgICAgJ3NuYXAnLFxuICAgICAgICAnc25hcFJlbGF0aXZlVG9FdmVudFN0YXJ0RGF0ZScsXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICAnc3RhcnRQYXJhbU5hbWUnLFxuICAgICAgICAnc3ViR3JpZENvbmZpZ3MnLFxuICAgICAgICAndGlja1dpZHRoJyxcbiAgICAgICAgJ3RpbWVSYW5nZXMnLFxuICAgICAgICAndGltZVJlc29sdXRpb24nLFxuICAgICAgICAndHJpZ2dlclNlbGVjdGlvbkNoYW5nZU9uUmVtb3ZlJyxcbiAgICAgICAgJ3VzZUluaXRpYWxBbmltYXRpb24nLFxuICAgICAgICAndmlld3BvcnRDZW50ZXJEYXRlJyxcbiAgICAgICAgJ3ZpZXdQcmVzZXQnLFxuICAgICAgICAnd2Vla1N0YXJ0RGF5JyxcbiAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgJ3dvcmtpbmdUaW1lJyxcbiAgICAgICAgJ3pvb21MZXZlbCcsXG4gICAgICAgICd6b29tT25Nb3VzZVdoZWVsJyxcbiAgICAgICAgJ3pvb21PblRpbWVBeGlzRG91YmxlQ2xpY2snLFxuXG4gICAgICAgIC8vIHNjaGVkdWxlcklkIG1hcHMgdG8gaWQgb2YgdGhlIHVuZGVybHlpbmcgc2NoZWR1bGVyXG4gICAgICAgICdzY2hlZHVsZXJJZCcsXG5cbiAgICAgICAgLy8gb25seSBmb3IgZXhhbXBsZXMsIGRlbGV0ZSBpZiB5b3UgZG9uJ3QgbmVlZCB0aGVtXG4gICAgICAgICd0cmFuc2l0aW9uRHVyYXRpb24nXG4gICAgXTtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvKiAjcmVnaW9uIENvbmZpZ3MgKi9cbiAgICAvLyBzY2hlZHVsZXJJZCB0cmFuc2xhdGVzIHRvIGlkIGZvciB0aGUgc2NoZWR1bGVyIGVuZ2luZVxuICAgIEBJbnB1dCgpIHNjaGVkdWxlcklkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhbGxvd092ZXJsYXA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGFuaW1hdGVSZW1vdmluZ1Jvd3M6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXNzaWdubWVudHM6IEFzc2lnbm1lbnRNb2RlbFtdIHwgb2JqZWN0W107XG4gICAgQElucHV0KCkgYXNzaWdubWVudFN0b3JlOiBBc3NpZ25tZW50U3RvcmUgfCBvYmplY3Q7XG4gICAgQElucHV0KCkgYXV0b0FkanVzdFRpbWVBeGlzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhdXRvSGVpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYmFyTWFyZ2luOiBudW1iZXIgPSA1O1xuICAgIEBJbnB1dCgpIGNvbHVtbkxpbmVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBjb250ZXh0TWVudVRyaWdnZXJFdmVudDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNyZWF0ZUV2ZW50T25EYmxDbGljazogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY3J1ZE1hbmFnZXI6IG9iamVjdDtcbiAgICBASW5wdXQoKSBkZWZhdWx0UmVzb3VyY2VJbWFnZU5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBkZXBlbmRlbmN5U3RvcmU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBkaXNhYmxlR3JpZFJvd01vZGVsV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlEYXRlRm9ybWF0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW1wdHlUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW5hYmxlRGVsZXRlS2V5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBlbmFibGVFdmVudEFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGVuYWJsZVJlY3VycmluZ0V2ZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGVuYWJsZVRleHRTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBlbmREYXRlOiBhbnk7XG4gICAgQElucHV0KCkgZW5kUGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXZlbnRCYXJUZXh0RmllbGQ6IHN0cmluZyA9ICduYW1lJztcbiAgICBASW5wdXQoKSBldmVudEJvZHlUZW1wbGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIGV2ZW50Q29sb3I6IHN0cmluZyA9ICdncmVlbic7XG4gICAgQElucHV0KCkgZXZlbnRMYXlvdXQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBldmVudFJlbmRlcmVyOiBhbnk7XG4gICAgQElucHV0KCkgZXZlbnRzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBldmVudFNlbGVjdGlvbkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXZlbnRTdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGV2ZW50U3R5bGU6IHN0cmluZyA9ICdwbGFpbic7XG4gICAgQElucHV0KCkgZmlsbExhc3RDb2x1bW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGZpbGxUaWNrczogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBmdWxsUm93UmVmcmVzaDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZ2V0Um93SGVpZ2h0OiBhbnk7XG4gICAgQElucHV0KCkgaGFzVmlzaWJsZUV2ZW50czogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBoaWRlSGVhZGVyczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhvcml6b250YWxFdmVudFNvcnRlckZuOiBhbnk7XG4gICAgQElucHV0KCkgbG9hZE1hc2s6IHN0cmluZyA9ICdMb2FkaW5nLi4uJztcbiAgICBASW5wdXQoKSBsb25nUHJlc3NUaW1lOiBudW1iZXIgPSA0MDA7XG4gICAgQElucHV0KCkgbWFpbnRhaW5TZWxlY3Rpb25PbkRhdGFzZXRDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1hbmFnZWRFdmVudFNpemluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgbWF4SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWF4V2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXhab29tTGV2ZWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtaWxlc3RvbmVBbGlnbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1pbGVzdG9uZUNoYXJXaWR0aDogbnVtYmVyID0gMTA7XG4gICAgQElucHV0KCkgbWlsZXN0b25lTGF5b3V0TW9kZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xuICAgIEBJbnB1dCgpIG1pbkhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluWm9vbUxldmVsOiBudW1iZXI7XG4gICAgQElucHV0KCkgbW9kZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG11bHRpRXZlbnRTZWxlY3Q6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcGFydG5lcjogYW55O1xuICAgIEBJbnB1dCgpIHBhc3NTdGFydEVuZFBhcmFtZXRlcnM6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcHJlc2V0czogb2JqZWN0W107XG4gICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSByZW1vdmVVbmFzc2lnbmVkRXZlbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHJlc2l6ZVRvRml0SW5jbHVkZXNIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHJlc291cmNlQ29sdW1uczogYW55O1xuICAgIEBJbnB1dCgpIHJlc291cmNlSW1hZ2VQYXRoOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmVzb3VyY2VNYXJnaW46IG51bWJlcjtcbiAgICBASW5wdXQoKSByZXNvdXJjZXM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHJlc291cmNlU3RvcmU6IG9iamVjdDtcbiAgICBASW5wdXQoKSByZXNvdXJjZVRpbWVSYW5nZXM6IG9iamVjdDtcbiAgICBASW5wdXQoKSByZXNwb25zaXZlTGV2ZWxzOiBhbnk7XG4gICAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgPSA1MDtcbiAgICBASW5wdXQoKSBzY3JvbGxMZWZ0OiBudW1iZXI7XG4gICAgQElucHV0KCkgc2Nyb2xsVG9wOiBudW1iZXI7XG4gICAgQElucHV0KCkgc2VsZWN0ZWRFdmVudHM6IEV2ZW50TW9kZWxbXTtcbiAgICBASW5wdXQoKSBzZWxlY3Rpb25Nb2RlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgc2hvd0RpcnR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc25hcDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzbmFwUmVsYXRpdmVUb0V2ZW50U3RhcnREYXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc3RhcnREYXRlOiBhbnk7XG4gICAgQElucHV0KCkgc3RhcnRQYXJhbU5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdWJHcmlkQ29uZmlnczogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRpY2tXaWR0aDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHRpbWVSYW5nZXM6IG9iamVjdCB8IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGltZVJlc29sdXRpb246IG9iamVjdDtcbiAgICBASW5wdXQoKSB0cmlnZ2VyU2VsZWN0aW9uQ2hhbmdlT25SZW1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB1c2VJbml0aWFsQW5pbWF0aW9uOiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB2aWV3cG9ydENlbnRlckRhdGU6IGFueTtcbiAgICBASW5wdXQoKSB2aWV3UHJlc2V0OiBvYmplY3QgfCBzdHJpbmcgPSAnaG91ckFuZERheSc7XG4gICAgQElucHV0KCkgd2Vla1N0YXJ0RGF5OiBudW1iZXI7XG4gICAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSB3b3JraW5nVGltZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHpvb21MZXZlbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHpvb21Pbk1vdXNlV2hlZWw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHpvb21PblRpbWVBeGlzRG91YmxlQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gRmVhdHVyZXMsIG9ubHkgdXNlZCBmb3IgaW5pdGlhbGl6YXRpb24gKi9cbiAgICBASW5wdXQoKSBjZWxsRWRpdEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNlbGxNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjZWxsVG9vbHRpcEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtbkRyYWdUb29sYmFyRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uTGluZXNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5QaWNrZXJGZWF0dXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5SZW9yZGVyRmVhdHVyZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uUmVzaXplRmVhdHVyZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jaWVzRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY3lFZGl0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGV2ZW50RHJhZ0NyZWF0ZUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50RHJhZ0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50RHJhZ1NlbGVjdEZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZXZlbnRFZGl0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRGaWx0ZXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudE1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudFJlc2l6ZUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50VG9vbHRpcEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGZpbHRlckJhckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgZmlsdGVyRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBncm91cEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgfCBzdHJpbmcgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGdyb3VwU3VtbWFyeUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgaGVhZGVyTWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgaGVhZGVyWm9vbUZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbGFiZWxzRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBub25Xb3JraW5nVGltZUZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcGFuRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBwZGZFeHBvcnRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHF1aWNrRmluZEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVnaW9uUmVzaXplRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByZXNvdXJjZVRpbWVSYW5nZXNGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJvd1Jlb3JkZXJGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNjaGVkdWxlTWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNjaGVkdWxlVG9vbHRpcEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNlYXJjaEZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2ltcGxlRXZlbnRFZGl0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNvcnRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0IHwgc3RyaW5nID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzdHJpcGVGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN1bW1hcnlGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRpbWVBeGlzSGVhZGVyTWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGltZVJhbmdlc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3RbXSA9IHRydWU7XG4gICAgQElucHV0KCkgdHJlZUZlYXR1cmU6IGJvb2xlYW47XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLy8gZm9yIGV4YW1wbGVzIG9ubHksIGRlbGV0ZVxuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgIEBPdXRwdXQoKSBzZWxlY3RlZEV2ZW50OiBzdHJpbmcgPSAnJztcbiAgICBAT3V0cHV0KCkgb25TY2hlZHVsZXJFdmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgLy8gTmVlZGVkIGxhdGVyLCB1c2VkIGFzIHRhcmdldCB3aGVuIHJlbmRlcmluZyBCcnludHVtIFNjaGVkdWxlclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIC8vIFJlbmRlciBzY2hlZHVsZXIgdG8gY29tcG9uZW50cyBlbGVtZW50XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8gOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcblxuICAgICAgICAgICAgICAgIC8vIExpc3RlbmVycywgd2lsbCByZWxheSBldmVudHNcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoQWxsKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2V2ZW50c2VsZWN0aW9uY2hhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFdmVudCA9IGV2ZW50LnNlbGVjdGVkLmxlbmd0aCA/IGV2ZW50LnNlbGVjdGVkWzBdLm5hbWUgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNjaGVkdWxlckV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB0aGlzT2JqIDogdGhpc1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmZWF0dXJlcyA6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIDtcblxuICAgICAgICAvLyByZWxheSBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgbWF0Y2hpbmcgdGhpcy5mZWF0dXJlUmUgdG8gZmVhdHVyZXNcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmVOYW1lID0+IHtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlTmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmZlYXR1cmVzW2ZlYXR1cmVOYW1lLnJlcGxhY2UodGhpcy5mZWF0dXJlUmUsICcnKV0gPSB0aGlzW2ZlYXR1cmVOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUGFzcyBjb25maWdzIG9uIHRvIHNjaGVkdWxlclxuICAgICAgICB0aGlzLmNvbmZpZ3MuZm9yRWFjaChjb25maWdOYW1lID0+IHtcbiAgICAgICAgICAgIGlmIChjb25maWdOYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiBtYXkgd2FudCB0byBwYXNzIGlkIGZvciB0aGUgZW5naW5lIGlzIHNjaGVkdWxlcklkXG4gICAgICAgICAgICAgICAgaWYgKCdzY2hlZHVsZXJJZCcgPT09IGNvbmZpZ05hbWUgJiYgdGhpc1tjb25maWdOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWdbJ2lkJ10gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1tjb25maWdOYW1lXSA9IHRoaXNbY29uZmlnTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGUgYXBwbGljYXRpb24gbWF5IGhhdmUgcGFzc2VkIHN0cmluZyBpZCBvZiB0aGUgcGFydG5lciBzb1xuICAgICAgICAvLyB3ZSBhdHRlbXB0IHRvIGZpbmQgdGhlIHJlYWwgaW5zdGFuY2Ugb2YgdGhlIHNjaGVkdWxlciB3aXRoIHRoYXQgaWRcbiAgICAgICAgaWYgKGNvbmZpZ1sncGFydG5lciddICYmICdzdHJpbmcnID09PSB0eXBlb2YgKGNvbmZpZ1sncGFydG5lciddKSkge1xuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICBicnludHVtID0gd2luZG93WydicnludHVtJ10sXG4gICAgICAgICAgICAgICAgcGFydG5lciA9IGJyeW50dW0gJiYgYnJ5bnR1bS5nZXQgJiYgYnJ5bnR1bS5nZXQoY29uZmlnWydwYXJ0bmVyJ10pO1xuICAgICAgICAgICAgY29uZmlnWydwYXJ0bmVyJ10gPSBwYXJ0bmVyIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBBbmd1bGFyIDExIGFwcGxpY2F0aW9uIHdoZW4gY29tcGlsZWQgZm9yIHByb2R1Y3Rpb24gd2l0aCBidWlsZE9wdGltaXplcjogdHJ1ZVxuICAgICAgICAvLyBmYWlscyBvbiBzY2hlZHVsZXIgcmUtY3JlYXRpb24gaWYgYW55IG9mIHRoaXMgZGF0YSBzZXRzIGlzIGJvdW5kIGluIHRlbXBsYXRlLiBJdCBtYXlcbiAgICAgICAgLy8gaGF2ZSBzb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgQW5ndWxhciBidWlsZCBvcHRpbWl6YXRpb24gcHJvY2Vzcy4gQXNzaWduaW5nIHRoZVxuICAgICAgICAvLyBkYXRhIGFmdGVyIHRoZSBzY2hlZHVsZXIgaGFzIGJlZW4gY3JlYXRlZCByZXNvbHZlcyB0aGUgaXNzdWUuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9icnludHVtL3N1cHBvcnQvaXNzdWVzLzIxNTdcbiAgICAgICAgY29uc3Qgc3RvcmVzID0ge307XG4gICAgICAgIFtcbiAgICAgICAgICAgICdyZXNvdXJjZXMnLFxuICAgICAgICAgICAgJ2V2ZW50cycsXG4gICAgICAgICAgICAnYXNzaWdubWVudHMnLFxuICAgICAgICAgICAgJ2RlcGVuZGVuY2llcycsXG4gICAgICAgICAgICAndGltZVJhbmdlcycsXG4gICAgICAgICAgICAncmVzb3VyY2VUaW1lUmFuZ2VzJ1xuICAgICAgICBdLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChjb25maWdbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzdG9yZXNbbmFtZV0gPSBjb25maWdbbmFtZV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZ1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZXJJbnN0YW5jZSA9IG5ldyBTY2hlZHVsZXIoY29uZmlnKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc2NoZWR1bGVySW5zdGFuY2UsIHN0b3Jlcyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2NoZWR1bGVySW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgY2hhbmdlc1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykuZm9yRWFjaCgoW25hbWUsIHsgY3VycmVudFZhbHVlIH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgY2hhbmdlcyB0aGF0IG1hdGNoIGNvbmZpZ3MgdG8gZ3JpZFxuICAgICAgICAgICAgICAgIGlmIChtZS5jb25maWdzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNjaGVkdWxlckluc3RhbmNlW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZS5mZWF0dXJlcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5zY2hlZHVsZXJJbnN0YW5jZVtuYW1lLnJlcGxhY2UodGhpcy5mZWF0dXJlUmUsICcnKV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXJJbnN0YW5jZTtcbiAgICAgICAgc2NoZWR1bGVyLmV2ZW50U3RvcmUucmVtb3ZlKHNjaGVkdWxlci5zZWxlY3RlZEV2ZW50cyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFdmVudCA9ICcnO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXJJbnN0YW5jZSxcbiAgICAgICAgICAgIGV2ZW50ID0gbmV3IHNjaGVkdWxlci5ldmVudFN0b3JlLm1vZGVsQ2xhc3Moe1xuICAgICAgICAgICAgICAgIHJlc291cmNlSWQgICA6IHNjaGVkdWxlci5yZXNvdXJjZVN0b3JlLmZpcnN0LmlkLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSAgICA6IHNjaGVkdWxlci5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gICAgIDogMSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvblVuaXQgOiAnaCcsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICAgIDogJ05ldyB0YXNrJyxcbiAgICAgICAgICAgICAgICBldmVudFR5cGUgICAgOiAnTWVldGluZydcbiAgICAgICAgICAgIH0pIGFzIEV2ZW50TW9kZWw7XG5cbiAgICAgICAgc2NoZWR1bGVyLmVkaXRFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNjaGVkdWxlckluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBTbGlkZXIgd2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNsaWRlciwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1zY2hlZHVsZXIvc2NoZWR1bGVyLmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXNsaWRlcicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGVsZW1lbnQgdG8gaGF2ZSBjb250YWluZXIgdG8gcmVuZGVyIHRoZSBidXR0b24gdG9cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzbGlkZXI6IFNsaWRlcjtcblxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBvbkNoYW5nZTogKCkgPT4ge307XG4gICAgQElucHV0KCkgc2hvd1Rvb2x0aXA6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd1ZhbHVlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDU7XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ1NsaWRlcic7XG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ3NsaWRlcicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgbWF4ICAgICAgICAgOiB0aGlzLm1heCxcbiAgICAgICAgICAgIG1pbiAgICAgICAgIDogdGhpcy5taW4sXG4gICAgICAgICAgICBvbkNoYW5nZSAgICA6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICBzaG93VG9vbHRpcCA6IHRoaXMuc2hvd1Rvb2x0aXAsXG4gICAgICAgICAgICBzaG93VmFsdWUgICA6IHRoaXMuc2hvd1ZhbHVlLFxuICAgICAgICAgICAgc3RlcCAgICAgICAgOiB0aGlzLnN0ZXAsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICA6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlICAgICAgIDogdGhpcy52YWx1ZVxuICAgICAgICB9KSBhcyBTbGlkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuIiwiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gV2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBXaWRnZXQsIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS13aWRnZXQnLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHdpZGdldDogV2lkZ2V0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICAgIEBPdXRwdXQoKSBvbldpZGdldEV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHVuZGVybHlpbmcgd2lkZ2V0XG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLmNvbmZpZywge1xuICAgICAgICAgICAgYXBwZW5kVG8gIDogbWUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgbGlzdGVuZXJzIDogbWUuY29uZmlnLmxpc3RlbmVycyB8fCB7XG4gICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5vbldpZGdldEV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNPYmogOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYWtlIHRoZSB3aWRnZXQgcHVibGljbHkgYXZhaWxhYmxlXG4gICAgICAgIG1lLndpZGdldCA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQobWUuY29uZmlnKSBhcyBXaWRnZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLndpZGdldCAmJiBtZS53aWRnZXQuZGVzdHJveSkge1xuICAgICAgICAgICAgbWUud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLyoqXG4gKiBCcnludHVtIEFuZ3VsYXIgc2hhcmVkIG1vZHVsZVxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bGxzY3JlZW5Db21wb25lbnQgfSBmcm9tICcuL2Z1bGxzY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVkdWxlckNvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnMgOiBbXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgRnVsbHNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgU2NoZWR1bGVyQ29tcG9uZW50LFxuICAgICAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgICAgIFdpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0cyAgICAgIDogW10sXG4gICAgZXhwb3J0cyAgICAgIDogW1xuICAgICAgICBCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEZ1bGxzY3JlZW5Db21wb25lbnQsXG4gICAgICAgIFNjaGVkdWxlckNvbXBvbmVudCxcbiAgICAgICAgU2xpZGVyQ29tcG9uZW50LFxuICAgICAgICBXaWRnZXRDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQnJ5bnR1bUFuZ3VsYXJTaGFyZWRNb2R1bGUge31cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBK0JJLHlCQUFZLE9BQW1CO1FBWnRCLFVBQUssR0FBVyxtQkFBbUIsQ0FBQztRQVNuQyxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsYUFBUTs7O1FBQUcsZUFBUSxFQUFDO1FBR3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0tBQzdCOzs7Ozs7OztJQUtELGtDQUFROzs7O0lBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsTUFBTSxzQkFBRyxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksRUFBVSxRQUFRO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0MsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLEtBQUssRUFBUyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsUUFBUSxFQUFNLElBQUksQ0FBQyxRQUFRO1lBQzNCLE9BQU87Ozs7WUFBTyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUE7WUFDcEQsT0FBTyxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQzFCLElBQUksRUFBVSxJQUFJLENBQUMsSUFBSTtZQUN2QixVQUFVLEVBQUksSUFBSSxDQUFDLFVBQVU7WUFDN0IsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBTyxJQUFJLENBQUMsT0FBTztZQUMxQixRQUFRLEVBQU0sSUFBSSxDQUFDLFFBQVE7U0FDOUIsQ0FBQyxFQUFVLENBQUM7S0FDaEI7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxV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