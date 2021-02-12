(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('bryntum-scheduler/scheduler.lite.umd.js')) :
    typeof define === 'function' && define.amd ? define('bryntum-angular-shared', ['exports', '@angular/core', 'bryntum-scheduler/scheduler.lite.umd.js'], factory) :
    (factory((global['bryntum-angular-shared'] = {}),global.ng.core,global.scheduler.lite.umd.js));
}(this, (function (exports,core,scheduler_lite_umd_js) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(element) {
            this.color = 'b-orange b-raised';
            this.click = new core.EventEmitter();
            this.onAction = ( /**
             * @return {?}
             */function () { }); // empty fn by default, fixes #436
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
                this.button = ( /** @type {?} */(scheduler_lite_umd_js.WidgetHelper.createWidget({
                    type: 'button',
                    appendTo: this.elementRef.nativeElement,
                    cls: this.cls,
                    color: this.color,
                    icon: this.icon,
                    onAction: this.onAction,
                    onClick: ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) { return _this.click.emit(event); }),
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
                    Object.entries(changes).forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
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
            { type: core.Component, args: [{
                        selector: 'bry-button',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        ButtonComponent.propDecorators = {
            cls: [{ type: core.Input }],
            color: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            pressed: [{ type: core.Input }],
            text: [{ type: core.Input }],
            toggleable: [{ type: core.Input }],
            toggleGroup: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            click: [{ type: core.Output }],
            onAction: [{ type: core.Input }]
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
                if (!scheduler_lite_umd_js.Fullscreen.enabled) {
                    return;
                }
                this.button = ( /** @type {?} */(scheduler_lite_umd_js.WidgetHelper.createWidget({
                    type: 'button',
                    appendTo: this.elementRef.nativeElement,
                    icon: 'b-icon b-icon-fullscreen',
                    tooltip: 'Fullscreen',
                    toggleable: true,
                    cls: 'b-blue b-raised',
                    onToggle: ( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var pressed = _a.pressed;
                        if (pressed) {
                            scheduler_lite_umd_js.Fullscreen.request(document.documentElement);
                        }
                        else {
                            scheduler_lite_umd_js.Fullscreen.exit();
                        }
                    })
                })));
                scheduler_lite_umd_js.Fullscreen.onFullscreenChange(( /**
                 * @return {?}
                 */function () {
                    _this.button['pressed'] = scheduler_lite_umd_js.Fullscreen.isFullscreen;
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
            { type: core.Component, args: [{
                        selector: 'bry-fullscreen',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        FullscreenComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
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
            this.onSchedulerEvents = new core.EventEmitter();
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
             */ function () {
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
                         */ function (event) {
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
                this.features.forEach(( /**
                 * @param {?} featureName
                 * @return {?}
                 */function (featureName) {
                    if (featureName in _this) {
                        config.features[featureName.replace(_this.featureRe, '')] = _this[featureName];
                    }
                }));
                // Pass configs on to scheduler
                this.configs.forEach(( /**
                 * @param {?} configName
                 * @return {?}
                 */function (configName) {
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
                ].forEach(( /**
                 * @param {?} name
                 * @return {?}
                 */function (name) {
                    if (config[name]) {
                        stores[name] = config[name];
                        delete config[name];
                    }
                }));
                this.schedulerInstance = new scheduler_lite_umd_js.Scheduler(config);
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
                    Object.entries(changes).forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
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
                var event = ( /** @type {?} */(new scheduler.eventStore.modelClass({
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
            { type: core.Component, args: [{
                        selector: 'bry-scheduler',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        SchedulerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        SchedulerComponent.propDecorators = {
            schedulerId: [{ type: core.Input }],
            allowOverlap: [{ type: core.Input }],
            animateRemovingRows: [{ type: core.Input }],
            assignments: [{ type: core.Input }],
            assignmentStore: [{ type: core.Input }],
            autoAdjustTimeAxis: [{ type: core.Input }],
            autoHeight: [{ type: core.Input }],
            barMargin: [{ type: core.Input }],
            columnLines: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            contextMenuTriggerEvent: [{ type: core.Input }],
            createEventOnDblClick: [{ type: core.Input }],
            crudManager: [{ type: core.Input }],
            defaultResourceImageName: [{ type: core.Input }],
            dependencyStore: [{ type: core.Input }],
            disableGridRowModelWarning: [{ type: core.Input }],
            displayDateFormat: [{ type: core.Input }],
            emptyText: [{ type: core.Input }],
            enableDeleteKey: [{ type: core.Input }],
            enableEventAnimations: [{ type: core.Input }],
            enableRecurringEvents: [{ type: core.Input }],
            enableTextSelection: [{ type: core.Input }],
            endDate: [{ type: core.Input }],
            endParamName: [{ type: core.Input }],
            eventBarTextField: [{ type: core.Input }],
            eventBodyTemplate: [{ type: core.Input }],
            eventColor: [{ type: core.Input }],
            eventLayout: [{ type: core.Input }],
            eventRenderer: [{ type: core.Input }],
            events: [{ type: core.Input }],
            eventSelectionDisabled: [{ type: core.Input }],
            eventStore: [{ type: core.Input }],
            eventStyle: [{ type: core.Input }],
            fillLastColumn: [{ type: core.Input }],
            fillTicks: [{ type: core.Input }],
            fullRowRefresh: [{ type: core.Input }],
            getRowHeight: [{ type: core.Input }],
            hasVisibleEvents: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hideHeaders: [{ type: core.Input }],
            horizontalEventSorterFn: [{ type: core.Input }],
            loadMask: [{ type: core.Input }],
            longPressTime: [{ type: core.Input }],
            maintainSelectionOnDatasetChange: [{ type: core.Input }],
            managedEventSizing: [{ type: core.Input }],
            maxHeight: [{ type: core.Input }],
            maxWidth: [{ type: core.Input }],
            maxZoomLevel: [{ type: core.Input }],
            milestoneAlign: [{ type: core.Input }],
            milestoneCharWidth: [{ type: core.Input }],
            milestoneLayoutMode: [{ type: core.Input }],
            minHeight: [{ type: core.Input }],
            minWidth: [{ type: core.Input }],
            minZoomLevel: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            multiEventSelect: [{ type: core.Input }],
            partner: [{ type: core.Input }],
            passStartEndParameters: [{ type: core.Input }],
            presets: [{ type: core.Input }],
            readOnly: [{ type: core.Input }],
            removeUnassignedEvent: [{ type: core.Input }],
            resizeToFitIncludesHeader: [{ type: core.Input }],
            resourceColumns: [{ type: core.Input }],
            resourceImagePath: [{ type: core.Input }],
            resourceMargin: [{ type: core.Input }],
            resources: [{ type: core.Input }],
            resourceStore: [{ type: core.Input }],
            resourceTimeRanges: [{ type: core.Input }],
            responsiveLevels: [{ type: core.Input }],
            rowHeight: [{ type: core.Input }],
            scrollLeft: [{ type: core.Input }],
            scrollTop: [{ type: core.Input }],
            selectedEvents: [{ type: core.Input }],
            selectionMode: [{ type: core.Input }],
            showDirty: [{ type: core.Input }],
            snap: [{ type: core.Input }],
            snapRelativeToEventStartDate: [{ type: core.Input }],
            startDate: [{ type: core.Input }],
            startParamName: [{ type: core.Input }],
            subGridConfigs: [{ type: core.Input }],
            tickWidth: [{ type: core.Input }],
            timeRanges: [{ type: core.Input }],
            timeResolution: [{ type: core.Input }],
            triggerSelectionChangeOnRemove: [{ type: core.Input }],
            useInitialAnimation: [{ type: core.Input }],
            viewportCenterDate: [{ type: core.Input }],
            viewPreset: [{ type: core.Input }],
            weekStartDay: [{ type: core.Input }],
            width: [{ type: core.Input }],
            workingTime: [{ type: core.Input }],
            zoomLevel: [{ type: core.Input }],
            zoomOnMouseWheel: [{ type: core.Input }],
            zoomOnTimeAxisDoubleClick: [{ type: core.Input }],
            cellEditFeature: [{ type: core.Input }],
            cellMenuFeature: [{ type: core.Input }],
            cellTooltipFeature: [{ type: core.Input }],
            columnDragToolbarFeature: [{ type: core.Input }],
            columnLinesFeature: [{ type: core.Input }],
            columnPickerFeature: [{ type: core.Input }],
            columnReorderFeature: [{ type: core.Input }],
            columnResizeFeature: [{ type: core.Input }],
            dependenciesFeature: [{ type: core.Input }],
            dependencyEditFeature: [{ type: core.Input }],
            eventDragCreateFeature: [{ type: core.Input }],
            eventDragFeature: [{ type: core.Input }],
            eventDragSelectFeature: [{ type: core.Input }],
            eventEditFeature: [{ type: core.Input }],
            eventFilterFeature: [{ type: core.Input }],
            eventMenuFeature: [{ type: core.Input }],
            eventResizeFeature: [{ type: core.Input }],
            eventTooltipFeature: [{ type: core.Input }],
            filterBarFeature: [{ type: core.Input }],
            filterFeature: [{ type: core.Input }],
            groupFeature: [{ type: core.Input }],
            groupSummaryFeature: [{ type: core.Input }],
            headerMenuFeature: [{ type: core.Input }],
            headerZoomFeature: [{ type: core.Input }],
            labelsFeature: [{ type: core.Input }],
            nonWorkingTimeFeature: [{ type: core.Input }],
            panFeature: [{ type: core.Input }],
            pdfExportFeature: [{ type: core.Input }],
            quickFindFeature: [{ type: core.Input }],
            regionResizeFeature: [{ type: core.Input }],
            resourceTimeRangesFeature: [{ type: core.Input }],
            rowReorderFeature: [{ type: core.Input }],
            scheduleMenuFeature: [{ type: core.Input }],
            scheduleTooltipFeature: [{ type: core.Input }],
            searchFeature: [{ type: core.Input }],
            simpleEventEdit: [{ type: core.Input }],
            sortFeature: [{ type: core.Input }],
            stripeFeature: [{ type: core.Input }],
            summaryFeature: [{ type: core.Input }],
            timeAxisHeaderMenuFeature: [{ type: core.Input }],
            timeRangesFeature: [{ type: core.Input }],
            treeFeature: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            selectedEvent: [{ type: core.Output }],
            onSchedulerEvents: [{ type: core.Output }]
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
                this.slider = ( /** @type {?} */(scheduler_lite_umd_js.WidgetHelper.createWidget({
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
            { type: core.Component, args: [{
                        selector: 'bry-slider',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        SliderComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        SliderComponent.propDecorators = {
            max: [{ type: core.Input }],
            min: [{ type: core.Input }],
            onChange: [{ type: core.Input }],
            showTooltip: [{ type: core.Input }],
            showValue: [{ type: core.Input }],
            step: [{ type: core.Input }],
            text: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return SliderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetComponent = /** @class */ (function () {
        function WidgetComponent(element) {
            this.onWidgetEvents = new core.EventEmitter();
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
                         */ function (event) {
                            me.onWidgetEvents.emit(event);
                        },
                        thisObj: me
                    }
                });
                // make the widget publicly available
                me.widget = ( /** @type {?} */(scheduler_lite_umd_js.WidgetHelper.createWidget(me.config)));
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
            { type: core.Component, args: [{
                        selector: 'bry-widget',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        WidgetComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        WidgetComponent.propDecorators = {
            config: [{ type: core.Input }],
            onWidgetEvents: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
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

    exports.BryntumAngularSharedModule = BryntumAngularSharedModule;
    exports.ButtonComponent = ButtonComponent;
    exports.FullscreenComponent = FullscreenComponent;
    exports.SchedulerComponent = SchedulerComponent;
    exports.SliderComponent = SliderComponent;
    exports.WidgetComponent = WidgetComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi9mdWxsc2NyZWVuLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvc2NoZWR1bGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gQnV0dG9uIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1idXR0b24nLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgQElucHV0KCkgY2xzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdiLW9yYW5nZSBiLXJhaXNlZCc7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByZXNzZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvZ2dsZWFibGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9nZ2xlR3JvdXA6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIG9uQWN0aW9uID0gKCkgPT4ge307IC8vIGVtcHR5IGZuIGJ5IGRlZmF1bHQsIGZpeGVzICM0MzZcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgY2xzICAgICAgICAgOiB0aGlzLmNscyxcbiAgICAgICAgICAgIGNvbG9yICAgICAgIDogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIGljb24gICAgICAgIDogdGhpcy5pY29uLFxuICAgICAgICAgICAgb25BY3Rpb24gICAgOiB0aGlzLm9uQWN0aW9uLFxuICAgICAgICAgICAgb25DbGljayAgICAgOiAoZXZlbnQ6IGFueSkgPT4gdGhpcy5jbGljay5lbWl0KGV2ZW50KSxcbiAgICAgICAgICAgIHByZXNzZWQgICAgIDogdGhpcy5wcmVzc2VkLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB0b2dnbGVhYmxlICA6IHRoaXMudG9nZ2xlYWJsZSxcbiAgICAgICAgICAgIHRvZ2dsZUdyb3VwIDogdGhpcy50b2dnbGVHcm91cCxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgIDogdGhpcy50b29sdGlwLFxuICAgICAgICAgICAgZGlzYWJsZWQgICAgOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykuZm9yRWFjaCgoW25hbWUsIHsgY3VycmVudFZhbHVlIH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25bbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gRnVsbHNjcmVlbiBidXR0b25cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIEZ1bGxzY3JlZW4sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tc2NoZWR1bGVyL3NjaGVkdWxlci5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1mdWxsc2NyZWVuJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8vIGNsYXNzIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIUZ1bGxzY3JlZW4uZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGljb24gICAgICAgOiAnYi1pY29uIGItaWNvbi1mdWxsc2NyZWVuJyxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgOiAnRnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b2dnbGVhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGNscyAgICAgICAgOiAnYi1ibHVlIGItcmFpc2VkJyxcbiAgICAgICAgICAgIG9uVG9nZ2xlICAgOiAoeyBwcmVzc2VkIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLnJlcXVlc3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLmV4aXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcblxuICAgICAgICBGdWxsc2NyZWVuLm9uRnVsbHNjcmVlbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblsncHJlc3NlZCddID0gRnVsbHNjcmVlbi5pc0Z1bGxzY3JlZW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIVxuICpcbiAqIEJyeW50dW0gU2NoZWR1bGVyIDQuMC44IChUUklBTCBWRVJTSU9OKVxuICpcbiAqIENvcHlyaWdodChjKSAyMDIxIEJyeW50dW0gQUJcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vY29udGFjdFxuICogaHR0cHM6Ly9icnludHVtLmNvbS9saWNlbnNlXG4gKlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBTY2hlZHVsZXIsIEFzc2lnbm1lbnRNb2RlbCwgQXNzaWdubWVudFN0b3JlLCBFdmVudE1vZGVsLCBTY2hlZHVsZXJDb25maWcgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktc2NoZWR1bGVyJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyBzY2hlZHVsZXJJbnN0YW5jZTogU2NoZWR1bGVyO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygc2NoZWR1bGVySW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNjaGVkdWxlckVuZ2luZSgpIDogU2NoZWR1bGVyIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdzY2hlZHVsZXJFbmdpbmUgaXMgZGVwcmVjYXRlZC4gVXNlIHNjaGVkdWxlckluc3RhbmNlIGluc3RlYWQuJylcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVySW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZWF0dXJlUmU6IFJlZ0V4cCA9IC9GZWF0dXJlJC87XG5cbiAgICAvKiAjcmVnaW9uIGZlYXR1cmVzICovXG4gICAgcHJpdmF0ZSBmZWF0dXJlczogc3RyaW5nW10gPSBbXG4gICAgICAgICdjZWxsRWRpdEZlYXR1cmUnLFxuICAgICAgICAnY2VsbE1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ2NlbGxUb29sdGlwRmVhdHVyZScsXG4gICAgICAgICdjb2x1bW5EcmFnVG9vbGJhckZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uTGluZXNGZWF0dXJlJyxcbiAgICAgICAgJ2NvbHVtblBpY2tlckZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uUmVvcmRlckZlYXR1cmUnLFxuICAgICAgICAnY29sdW1uUmVzaXplRmVhdHVyZScsXG4gICAgICAgICdkZXBlbmRlbmNpZXNGZWF0dXJlJyxcbiAgICAgICAgJ2RlcGVuZGVuY3lFZGl0RmVhdHVyZScsXG4gICAgICAgICdldmVudERyYWdDcmVhdGVGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RHJhZ0ZlYXR1cmUnLFxuICAgICAgICAnZXZlbnREcmFnU2VsZWN0RmVhdHVyZScsXG4gICAgICAgICdldmVudEVkaXRGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50RmlsdGVyRmVhdHVyZScsXG4gICAgICAgICdldmVudE1lbnVGZWF0dXJlJyxcbiAgICAgICAgJ2V2ZW50UmVzaXplRmVhdHVyZScsXG4gICAgICAgICdldmVudFRvb2x0aXBGZWF0dXJlJyxcbiAgICAgICAgJ2ZpbHRlckJhckZlYXR1cmUnLFxuICAgICAgICAnZmlsdGVyRmVhdHVyZScsXG4gICAgICAgICdncm91cEZlYXR1cmUnLFxuICAgICAgICAnZ3JvdXBTdW1tYXJ5RmVhdHVyZScsXG4gICAgICAgICdoZWFkZXJNZW51RmVhdHVyZScsXG4gICAgICAgICdoZWFkZXJab29tRmVhdHVyZScsXG4gICAgICAgICdsYWJlbHNGZWF0dXJlJyxcbiAgICAgICAgJ25vbldvcmtpbmdUaW1lRmVhdHVyZScsXG4gICAgICAgICdwYW5GZWF0dXJlJyxcbiAgICAgICAgJ3BkZkV4cG9ydEZlYXR1cmUnLFxuICAgICAgICAncXVpY2tGaW5kRmVhdHVyZScsXG4gICAgICAgICdyZWdpb25SZXNpemVGZWF0dXJlJyxcbiAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlc0ZlYXR1cmUnLFxuICAgICAgICAncm93UmVvcmRlckZlYXR1cmUnLFxuICAgICAgICAnc2NoZWR1bGVNZW51RmVhdHVyZScsXG4gICAgICAgICdzY2hlZHVsZVRvb2x0aXBGZWF0dXJlJyxcbiAgICAgICAgJ3NlYXJjaEZlYXR1cmUnLFxuICAgICAgICAnc2ltcGxlRXZlbnRFZGl0RmVhdHVyZScsXG4gICAgICAgICdzb3J0RmVhdHVyZScsXG4gICAgICAgICdzdHJpcGVGZWF0dXJlJyxcbiAgICAgICAgJ3N1bW1hcnlGZWF0dXJlJyxcbiAgICAgICAgJ3RpbWVBeGlzSGVhZGVyTWVudUZlYXR1cmUnLFxuICAgICAgICAndGltZVJhbmdlc0ZlYXR1cmUnLFxuICAgICAgICAndHJlZUZlYXR1cmUnXG4gICAgXTtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvKiAjcmVnaW9uIGNvbmZpZ3MgKi9cbiAgICBwcml2YXRlIGNvbmZpZ3M6IHN0cmluZ1tdID0gW1xuICAgICAgICAnYWxsb3dPdmVybGFwJyxcbiAgICAgICAgJ2FuaW1hdGVSZW1vdmluZ1Jvd3MnLFxuICAgICAgICAnYXNzaWdubWVudHMnLFxuICAgICAgICAnYXNzaWdubWVudFN0b3JlJyxcbiAgICAgICAgJ2F1dG9BZGp1c3RUaW1lQXhpcycsXG4gICAgICAgICdhdXRvSGVpZ2h0JyxcbiAgICAgICAgJ2Jhck1hcmdpbicsXG4gICAgICAgICdjb2x1bW5MaW5lcycsXG4gICAgICAgICdjb2x1bW5zJyxcbiAgICAgICAgJ2NvbnRleHRNZW51VHJpZ2dlckV2ZW50JyxcbiAgICAgICAgJ2NyZWF0ZUV2ZW50T25EYmxDbGljaycsXG4gICAgICAgICdjcnVkTWFuYWdlcicsXG4gICAgICAgICdkZWZhdWx0UmVzb3VyY2VJbWFnZU5hbWUnLFxuICAgICAgICAnZGVwZW5kZW5jeVN0b3JlJyxcbiAgICAgICAgJ2Rpc2FibGVHcmlkUm93TW9kZWxXYXJuaW5nJyxcbiAgICAgICAgJ2Rpc3BsYXlEYXRlRm9ybWF0JyxcbiAgICAgICAgJ2VtcHR5VGV4dCcsXG4gICAgICAgICdlbmFibGVEZWxldGVLZXknLFxuICAgICAgICAnZW5hYmxlRXZlbnRBbmltYXRpb25zJyxcbiAgICAgICAgJ2VuYWJsZVJlY3VycmluZ0V2ZW50cycsXG4gICAgICAgICdlbmFibGVUZXh0U2VsZWN0aW9uJyxcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICAnZW5kUGFyYW1OYW1lJyxcbiAgICAgICAgJ2V2ZW50QmFyVGV4dEZpZWxkJyxcbiAgICAgICAgJ2V2ZW50Qm9keVRlbXBsYXRlJyxcbiAgICAgICAgJ2V2ZW50Q29sb3InLFxuICAgICAgICAnZXZlbnRMYXlvdXQnLFxuICAgICAgICAnZXZlbnRSZW5kZXJlcicsXG4gICAgICAgICdldmVudHMnLFxuICAgICAgICAnZXZlbnRTZWxlY3Rpb25EaXNhYmxlZCcsXG4gICAgICAgICdldmVudFN0b3JlJyxcbiAgICAgICAgJ2V2ZW50U3R5bGUnLFxuICAgICAgICAnZmlsbExhc3RDb2x1bW4nLFxuICAgICAgICAnZmlsbFRpY2tzJyxcbiAgICAgICAgJ2Z1bGxSb3dSZWZyZXNoJyxcbiAgICAgICAgJ2dldFJvd0hlaWdodCcsXG4gICAgICAgICdoYXNWaXNpYmxlRXZlbnRzJyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdoaWRlSGVhZGVycycsXG4gICAgICAgICdob3Jpem9udGFsRXZlbnRTb3J0ZXJGbicsXG4gICAgICAgICdsb2FkTWFzaycsXG4gICAgICAgICdsb25nUHJlc3NUaW1lJyxcbiAgICAgICAgJ21haW50YWluU2VsZWN0aW9uT25EYXRhc2V0Q2hhbmdlJyxcbiAgICAgICAgJ21hbmFnZWRFdmVudFNpemluZycsXG4gICAgICAgICdtYXhIZWlnaHQnLFxuICAgICAgICAnbWF4V2lkdGgnLFxuICAgICAgICAnbWF4Wm9vbUxldmVsJyxcbiAgICAgICAgJ21pbGVzdG9uZUFsaWduJyxcbiAgICAgICAgJ21pbGVzdG9uZUNoYXJXaWR0aCcsXG4gICAgICAgICdtaWxlc3RvbmVMYXlvdXRNb2RlJyxcbiAgICAgICAgJ21pbkhlaWdodCcsXG4gICAgICAgICdtaW5XaWR0aCcsXG4gICAgICAgICdtaW5ab29tTGV2ZWwnLFxuICAgICAgICAnbW9kZScsXG4gICAgICAgICdtdWx0aUV2ZW50U2VsZWN0JyxcbiAgICAgICAgJ3BhcnRuZXInLFxuICAgICAgICAncGFzc1N0YXJ0RW5kUGFyYW1ldGVycycsXG4gICAgICAgICdwcmVzZXRzJyxcbiAgICAgICAgJ3JlYWRPbmx5JyxcbiAgICAgICAgJ3JlbW92ZVVuYXNzaWduZWRFdmVudCcsXG4gICAgICAgICdyZXNpemVUb0ZpdEluY2x1ZGVzSGVhZGVyJyxcbiAgICAgICAgJ3Jlc291cmNlQ29sdW1ucycsXG4gICAgICAgICdyZXNvdXJjZUltYWdlUGF0aCcsXG4gICAgICAgICdyZXNvdXJjZU1hcmdpbicsXG4gICAgICAgICdyZXNvdXJjZXMnLFxuICAgICAgICAncmVzb3VyY2VTdG9yZScsXG4gICAgICAgICdyZXNvdXJjZVRpbWVSYW5nZXMnLFxuICAgICAgICAncmVzcG9uc2l2ZUxldmVscycsXG4gICAgICAgICdyb3dIZWlnaHQnLFxuICAgICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgICAnc2VsZWN0ZWRFdmVudHMnLFxuICAgICAgICAnc2VsZWN0aW9uTW9kZScsXG4gICAgICAgICdzaG93RGlydHknLFxuICAgICAgICAnc25hcCcsXG4gICAgICAgICdzbmFwUmVsYXRpdmVUb0V2ZW50U3RhcnREYXRlJyxcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXG4gICAgICAgICdzdGFydFBhcmFtTmFtZScsXG4gICAgICAgICdzdWJHcmlkQ29uZmlncycsXG4gICAgICAgICd0aWNrV2lkdGgnLFxuICAgICAgICAndGltZVJhbmdlcycsXG4gICAgICAgICd0aW1lUmVzb2x1dGlvbicsXG4gICAgICAgICd0cmlnZ2VyU2VsZWN0aW9uQ2hhbmdlT25SZW1vdmUnLFxuICAgICAgICAndXNlSW5pdGlhbEFuaW1hdGlvbicsXG4gICAgICAgICd2aWV3cG9ydENlbnRlckRhdGUnLFxuICAgICAgICAndmlld1ByZXNldCcsXG4gICAgICAgICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnd29ya2luZ1RpbWUnLFxuICAgICAgICAnem9vbUxldmVsJyxcbiAgICAgICAgJ3pvb21Pbk1vdXNlV2hlZWwnLFxuICAgICAgICAnem9vbU9uVGltZUF4aXNEb3VibGVDbGljaycsXG5cbiAgICAgICAgLy8gc2NoZWR1bGVySWQgbWFwcyB0byBpZCBvZiB0aGUgdW5kZXJseWluZyBzY2hlZHVsZXJcbiAgICAgICAgJ3NjaGVkdWxlcklkJyxcblxuICAgICAgICAvLyBvbmx5IGZvciBleGFtcGxlcywgZGVsZXRlIGlmIHlvdSBkb24ndCBuZWVkIHRoZW1cbiAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbidcbiAgICBdO1xuICAgIC8qICNlbmRyZWdpb24gKi9cblxuICAgIC8qICNyZWdpb24gQ29uZmlncyAqL1xuICAgIC8vIHNjaGVkdWxlcklkIHRyYW5zbGF0ZXMgdG8gaWQgZm9yIHRoZSBzY2hlZHVsZXIgZW5naW5lXG4gICAgQElucHV0KCkgc2NoZWR1bGVySWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFsbG93T3ZlcmxhcDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgYW5pbWF0ZVJlbW92aW5nUm93czogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhc3NpZ25tZW50czogQXNzaWdubWVudE1vZGVsW10gfCBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBhc3NpZ25tZW50U3RvcmU6IEFzc2lnbm1lbnRTdG9yZSB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBhdXRvQWRqdXN0VGltZUF4aXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGF1dG9IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBiYXJNYXJnaW46IG51bWJlciA9IDU7XG4gICAgQElucHV0KCkgY29sdW1uTGluZXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtbnM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGNvbnRleHRNZW51VHJpZ2dlckV2ZW50OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3JlYXRlRXZlbnRPbkRibENsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjcnVkTWFuYWdlcjogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRlZmF1bHRSZXNvdXJjZUltYWdlTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY3lTdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRpc2FibGVHcmlkUm93TW9kZWxXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzcGxheURhdGVGb3JtYXQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbXB0eVRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmFibGVEZWxldGVLZXk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGVuYWJsZUV2ZW50QW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZW5hYmxlUmVjdXJyaW5nRXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZW5hYmxlVGV4dFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGVuZERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBlbmRQYXJhbU5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBldmVudEJhclRleHRGaWVsZDogc3RyaW5nID0gJ25hbWUnO1xuICAgIEBJbnB1dCgpIGV2ZW50Qm9keVRlbXBsYXRlOiBhbnk7XG4gICAgQElucHV0KCkgZXZlbnRDb2xvcjogc3RyaW5nID0gJ2dyZWVuJztcbiAgICBASW5wdXQoKSBldmVudExheW91dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGV2ZW50UmVuZGVyZXI6IGFueTtcbiAgICBASW5wdXQoKSBldmVudHM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGV2ZW50U2VsZWN0aW9uRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBldmVudFN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZXZlbnRTdHlsZTogc3RyaW5nID0gJ3BsYWluJztcbiAgICBASW5wdXQoKSBmaWxsTGFzdENvbHVtbjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZmlsbFRpY2tzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGZ1bGxSb3dSZWZyZXNoOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBnZXRSb3dIZWlnaHQ6IGFueTtcbiAgICBASW5wdXQoKSBoYXNWaXNpYmxlRXZlbnRzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhpZGVIZWFkZXJzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaG9yaXpvbnRhbEV2ZW50U29ydGVyRm46IGFueTtcbiAgICBASW5wdXQoKSBsb2FkTWFzazogc3RyaW5nID0gJ0xvYWRpbmcuLi4nO1xuICAgIEBJbnB1dCgpIGxvbmdQcmVzc1RpbWU6IG51bWJlciA9IDQwMDtcbiAgICBASW5wdXQoKSBtYWludGFpblNlbGVjdGlvbk9uRGF0YXNldENoYW5nZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgbWFuYWdlZEV2ZW50U2l6aW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBtYXhIZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1heFpvb21MZXZlbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG1pbGVzdG9uZUFsaWduOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWlsZXN0b25lQ2hhcldpZHRoOiBudW1iZXIgPSAxMDtcbiAgICBASW5wdXQoKSBtaWxlc3RvbmVMYXlvdXRNb2RlOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5ab29tTGV2ZWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbXVsdGlFdmVudFNlbGVjdDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwYXJ0bmVyOiBhbnk7XG4gICAgQElucHV0KCkgcGFzc1N0YXJ0RW5kUGFyYW1ldGVyczogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwcmVzZXRzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlbW92ZVVuYXNzaWduZWRFdmVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcmVzaXplVG9GaXRJbmNsdWRlc0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcmVzb3VyY2VDb2x1bW5zOiBhbnk7XG4gICAgQElucHV0KCkgcmVzb3VyY2VJbWFnZVBhdGg6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXNvdXJjZU1hcmdpbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHJlc291cmNlczogb2JqZWN0W107XG4gICAgQElucHV0KCkgcmVzb3VyY2VTdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlc291cmNlVGltZVJhbmdlczogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmVMZXZlbHM6IGFueTtcbiAgICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciA9IDUwO1xuICAgIEBJbnB1dCgpIHNjcm9sbExlZnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzY3JvbGxUb3A6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzZWxlY3RlZEV2ZW50czogRXZlbnRNb2RlbFtdO1xuICAgIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBzaG93RGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzbmFwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNuYXBSZWxhdGl2ZVRvRXZlbnRTdGFydERhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzdGFydERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBzdGFydFBhcmFtTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN1YkdyaWRDb25maWdzOiBvYmplY3Q7XG4gICAgQElucHV0KCkgdGlja1dpZHRoOiBudW1iZXI7XG4gICAgQElucHV0KCkgdGltZVJhbmdlczogb2JqZWN0IHwgYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0aW1lUmVzb2x1dGlvbjogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRyaWdnZXJTZWxlY3Rpb25DaGFuZ2VPblJlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHVzZUluaXRpYWxBbmltYXRpb246IGJvb2xlYW4gfCBzdHJpbmcgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHZpZXdwb3J0Q2VudGVyRGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIHZpZXdQcmVzZXQ6IG9iamVjdCB8IHN0cmluZyA9ICdob3VyQW5kRGF5JztcbiAgICBASW5wdXQoKSB3ZWVrU3RhcnREYXk6IG51bWJlcjtcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHdvcmtpbmdUaW1lOiBvYmplY3Q7XG4gICAgQElucHV0KCkgem9vbUxldmVsOiBudW1iZXI7XG4gICAgQElucHV0KCkgem9vbU9uTW91c2VXaGVlbDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgem9vbU9uVGltZUF4aXNEb3VibGVDbGljazogYm9vbGVhbiA9IHRydWU7XG4gICAgLyogI2VuZHJlZ2lvbiAqL1xuXG4gICAgLyogI3JlZ2lvbiBGZWF0dXJlcywgb25seSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiAqL1xuICAgIEBJbnB1dCgpIGNlbGxFZGl0RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY2VsbE1lbnVGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGNlbGxUb29sdGlwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgY29sdW1uRHJhZ1Rvb2xiYXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5MaW5lc0ZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtblBpY2tlckZlYXR1cmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGNvbHVtblJlb3JkZXJGZWF0dXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjb2x1bW5SZXNpemVGZWF0dXJlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBkZXBlbmRlbmNpZXNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jeUVkaXRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXZlbnREcmFnQ3JlYXRlRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnREcmFnRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnREcmFnU2VsZWN0RmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBldmVudEVkaXRGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBldmVudEZpbHRlckZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50TWVudUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGV2ZW50UmVzaXplRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZXZlbnRUb29sdGlwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgZmlsdGVyQmFyRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBmaWx0ZXJGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGdyb3VwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCB8IHN0cmluZyA9IHRydWU7XG4gICAgQElucHV0KCkgZ3JvdXBTdW1tYXJ5RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBoZWFkZXJNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBoZWFkZXJab29tRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBsYWJlbHNGZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIG5vbldvcmtpbmdUaW1lRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwYW5GZWF0dXJlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHBkZkV4cG9ydEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcXVpY2tGaW5kRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByZWdpb25SZXNpemVGZWF0dXJlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJlc291cmNlVGltZVJhbmdlc0ZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcm93UmVvcmRlckZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2NoZWR1bGVNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgc2NoZWR1bGVUb29sdGlwRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgc2VhcmNoRmVhdHVyZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaW1wbGVFdmVudEVkaXQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgc29ydEZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3QgfCBzdHJpbmcgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHN0cmlwZUZlYXR1cmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3VtbWFyeUZlYXR1cmU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGltZUF4aXNIZWFkZXJNZW51RmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lUmFuZ2VzRmVhdHVyZTogYm9vbGVhbiB8IG9iamVjdFtdID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB0cmVlRmVhdHVyZTogYm9vbGVhbjtcbiAgICAvKiAjZW5kcmVnaW9uICovXG5cbiAgICAvLyBmb3IgZXhhbXBsZXMgb25seSwgZGVsZXRlXG4gICAgQElucHV0KCkgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkRXZlbnQ6IHN0cmluZyA9ICcnO1xuICAgIEBPdXRwdXQoKSBvblNjaGVkdWxlckV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICAvLyBOZWVkZWQgbGF0ZXIsIHVzZWQgYXMgdGFyZ2V0IHdoZW4gcmVuZGVyaW5nIEJyeW50dW0gU2NoZWR1bGVyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIHNjaGVkdWxlciB0byBjb21wb25lbnRzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBhcHBlbmRUbyA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuZXJzLCB3aWxsIHJlbGF5IGV2ZW50c1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnZXZlbnRzZWxlY3Rpb25jaGFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50ID0gZXZlbnQuc2VsZWN0ZWQubGVuZ3RoID8gZXZlbnQuc2VsZWN0ZWRbMF0ubmFtZSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2NoZWR1bGVyRXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXNPYmogOiB0aGlzXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGZlYXR1cmVzIDoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgO1xuXG4gICAgICAgIC8vIHJlbGF5IHByb3BlcnRpZXMgd2l0aCBuYW1lcyBtYXRjaGluZyB0aGlzLmZlYXR1cmVSZSB0byBmZWF0dXJlc1xuICAgICAgICB0aGlzLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZU5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVOYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuZmVhdHVyZXNbZmVhdHVyZU5hbWUucmVwbGFjZSh0aGlzLmZlYXR1cmVSZSwgJycpXSA9IHRoaXNbZmVhdHVyZU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQYXNzIGNvbmZpZ3Mgb24gdG8gc2NoZWR1bGVyXG4gICAgICAgIHRoaXMuY29uZmlncy5mb3JFYWNoKGNvbmZpZ05hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ05hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSB3YW50IHRvIHBhc3MgaWQgZm9yIHRoZSBlbmdpbmUgaXMgc2NoZWR1bGVySWRcbiAgICAgICAgICAgICAgICBpZiAoJ3NjaGVkdWxlcklkJyA9PT0gY29uZmlnTmFtZSAmJiB0aGlzW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1snaWQnXSA9IHRoaXNbY29uZmlnTmFtZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnW2NvbmZpZ05hbWVdID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoZSBhcHBsaWNhdGlvbiBtYXkgaGF2ZSBwYXNzZWQgc3RyaW5nIGlkIG9mIHRoZSBwYXJ0bmVyIHNvXG4gICAgICAgIC8vIHdlIGF0dGVtcHQgdG8gZmluZCB0aGUgcmVhbCBpbnN0YW5jZSBvZiB0aGUgc2NoZWR1bGVyIHdpdGggdGhhdCBpZFxuICAgICAgICBpZiAoY29uZmlnWydwYXJ0bmVyJ10gJiYgJ3N0cmluZycgPT09IHR5cGVvZiAoY29uZmlnWydwYXJ0bmVyJ10pKSB7XG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGJyeW50dW0gPSB3aW5kb3dbJ2JyeW50dW0nXSxcbiAgICAgICAgICAgICAgICBwYXJ0bmVyID0gYnJ5bnR1bSAmJiBicnludHVtLmdldCAmJiBicnludHVtLmdldChjb25maWdbJ3BhcnRuZXInXSk7XG4gICAgICAgICAgICBjb25maWdbJ3BhcnRuZXInXSA9IHBhcnRuZXIgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIEFuZ3VsYXIgMTEgYXBwbGljYXRpb24gd2hlbiBjb21waWxlZCBmb3IgcHJvZHVjdGlvbiB3aXRoIGJ1aWxkT3B0aW1pemVyOiB0cnVlXG4gICAgICAgIC8vIGZhaWxzIG9uIHNjaGVkdWxlciByZS1jcmVhdGlvbiBpZiBhbnkgb2YgdGhpcyBkYXRhIHNldHMgaXMgYm91bmQgaW4gdGVtcGxhdGUuIEl0IG1heVxuICAgICAgICAvLyBoYXZlIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBBbmd1bGFyIGJ1aWxkIG9wdGltaXphdGlvbiBwcm9jZXNzLiBBc3NpZ25pbmcgdGhlXG4gICAgICAgIC8vIGRhdGEgYWZ0ZXIgdGhlIHNjaGVkdWxlciBoYXMgYmVlbiBjcmVhdGVkIHJlc29sdmVzIHRoZSBpc3N1ZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JyeW50dW0vc3VwcG9ydC9pc3N1ZXMvMjE1N1xuICAgICAgICBjb25zdCBzdG9yZXMgPSB7fTtcbiAgICAgICAgW1xuICAgICAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICAgICAnZXZlbnRzJyxcbiAgICAgICAgICAgICdhc3NpZ25tZW50cycsXG4gICAgICAgICAgICAnZGVwZW5kZW5jaWVzJyxcbiAgICAgICAgICAgICd0aW1lUmFuZ2VzJyxcbiAgICAgICAgICAgICdyZXNvdXJjZVRpbWVSYW5nZXMnXG4gICAgICAgIF0uZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHN0b3Jlc1tuYW1lXSA9IGNvbmZpZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlckluc3RhbmNlID0gbmV3IFNjaGVkdWxlcihjb25maWcpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zY2hlZHVsZXJJbnN0YW5jZSwgc3RvcmVzKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zY2hlZHVsZXJJbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBjaGFuZ2VzXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaGFuZ2VzKS5mb3JFYWNoKChbbmFtZSwgeyBjdXJyZW50VmFsdWUgfV0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBjaGFuZ2VzIHRoYXQgbWF0Y2ggY29uZmlncyB0byBncmlkXG4gICAgICAgICAgICAgICAgaWYgKG1lLmNvbmZpZ3MuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2NoZWR1bGVySW5zdGFuY2VbbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lLmZlYXR1cmVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNjaGVkdWxlckluc3RhbmNlW25hbWUucmVwbGFjZSh0aGlzLmZlYXR1cmVSZSwgJycpXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlckluc3RhbmNlO1xuICAgICAgICBzY2hlZHVsZXIuZXZlbnRTdG9yZS5yZW1vdmUoc2NoZWR1bGVyLnNlbGVjdGVkRXZlbnRzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlckluc3RhbmNlLFxuICAgICAgICAgICAgZXZlbnQgPSBuZXcgc2NoZWR1bGVyLmV2ZW50U3RvcmUubW9kZWxDbGFzcyh7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VJZCAgIDogc2NoZWR1bGVyLnJlc291cmNlU3RvcmUuZmlyc3QuaWQsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlICAgIDogc2NoZWR1bGVyLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiAgICAgOiAxLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uVW5pdCA6ICdoJyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgICAgOiAnTmV3IHRhc2snLFxuICAgICAgICAgICAgICAgIGV2ZW50VHlwZSAgICA6ICdNZWV0aW5nJ1xuICAgICAgICAgICAgfSkgYXMgRXZlbnRNb2RlbDtcblxuICAgICAgICBzY2hlZHVsZXIuZWRpdEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2NoZWR1bGVySW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIFNsaWRlciB3aWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgU2xpZGVyLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLXNjaGVkdWxlci9zY2hlZHVsZXIubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgZWxlbWVudCB0byBoYXZlIGNvbnRhaW5lciB0byByZW5kZXIgdGhlIGJ1dHRvbiB0b1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHNsaWRlcjogU2xpZGVyO1xuXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgbWluOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG9uQ2hhbmdlOiAoKSA9PiB7fTtcbiAgICBASW5wdXQoKSBzaG93VG9vbHRpcDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93VmFsdWU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gNTtcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnU2xpZGVyJztcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQoe1xuICAgICAgICAgICAgdHlwZSAgICAgICAgOiAnc2xpZGVyJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBtYXggICAgICAgICA6IHRoaXMubWF4LFxuICAgICAgICAgICAgbWluICAgICAgICAgOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG9uQ2hhbmdlICAgIDogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgIHNob3dUb29sdGlwIDogdGhpcy5zaG93VG9vbHRpcCxcbiAgICAgICAgICAgIHNob3dWYWx1ZSAgIDogdGhpcy5zaG93VmFsdWUsXG4gICAgICAgICAgICBzdGVwICAgICAgICA6IHRoaXMuc3RlcCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdmFsdWUgICAgICAgOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pIGFzIFNsaWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4iLCIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBXaWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFdpZGdldCwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1zY2hlZHVsZXIvc2NoZWR1bGVyLmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXdpZGdldCcsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgd2lkZ2V0OiBXaWRnZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gICAgQE91dHB1dCgpIG9uV2lkZ2V0RXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgdW5kZXJseWluZyB3aWRnZXRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWUuY29uZmlnLCB7XG4gICAgICAgICAgICBhcHBlbmRUbyAgOiBtZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiBtZS5jb25maWcubGlzdGVuZXJzIHx8IHtcbiAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uV2lkZ2V0RXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc09iaiA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIHdpZGdldCBwdWJsaWNseSBhdmFpbGFibGVcbiAgICAgICAgbWUud2lkZ2V0ID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldChtZS5jb25maWcpIGFzIFdpZGdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUud2lkZ2V0ICYmIG1lLndpZGdldC5kZXN0cm95KSB7XG4gICAgICAgICAgICBtZS53aWRnZXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEJyeW50dW0gQW5ndWxhciBzaGFyZWQgbW9kdWxlXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVsbHNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4vZnVsbHNjcmVlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NoZWR1bGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zY2hlZHVsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9ucyA6IFtcbiAgICAgICAgQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBGdWxsc2NyZWVuQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZXJDb21wb25lbnQsXG4gICAgICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICAgICAgV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzICAgICAgOiBbXSxcbiAgICBleHBvcnRzICAgICAgOiBbXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgRnVsbHNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgU2NoZWR1bGVyQ29tcG9uZW50LFxuICAgICAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgICAgIFdpZGdldENvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBCcnludHVtQW5ndWxhclNoYXJlZE1vZHVsZSB7fVxuXG5cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJXaWRnZXRIZWxwZXIiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJGdWxsc2NyZWVuIiwiU2NoZWR1bGVyIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLGFBeUdnQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxR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O2tDQUNMQSxVQUFLOzhCQUNMQSxVQUFLOzhDQUNMQSxVQUFLOzRDQUNMQSxVQUFLO2tDQUNMQSxVQUFLOytDQUNMQSxVQUFLO3NDQUNMQSxVQUFLO2lEQUNMQSxVQUFLO3dDQUNMQSxVQUFLO2dDQUNMQSxVQUFLO3NDQUNMQSxVQUFLOzRDQUNMQSxVQUFLOzRDQUNMQSxVQUFLOzBDQUNMQSxVQUFLOzhCQUNMQSxVQUFLO21DQUNMQSxVQUFLO3dDQUNMQSxVQUFLO3dDQUNMQSxVQUFLO2lDQUNMQSxVQUFLO2tDQUNMQSxVQUFLO29DQUNMQSxVQUFLOzZCQUNMQSxVQUFLOzZDQUNMQSxVQUFLO2lDQUNMQSxVQUFLO2lDQUNMQSxVQUFLO3FDQUNMQSxVQUFLO2dDQUNMQSxVQUFLO3FDQUNMQSxVQUFLO21DQUNMQSxVQUFLO3VDQUNMQSxVQUFLOzZCQUNMQSxVQUFLO2tDQUNMQSxVQUFLOzhDQUNMQSxVQUFLOytCQUNMQSxVQUFLO29DQUNMQSxVQUFLO3VEQUNMQSxVQUFLO3lDQUNMQSxVQUFLO2dDQUNMQSxVQUFLOytCQUNMQSxVQUFLO21DQUNMQSxVQUFLO3FDQUNMQSxVQUFLO3lDQUNMQSxVQUFLOzBDQUNMQSxVQUFLO2dDQUNMQSxVQUFLOytCQUNMQSxVQUFLO21DQUNMQSxVQUFLOzJCQUNMQSxVQUFLO3VDQUNMQSxVQUFLOzhCQUNMQSxVQUFLOzZDQUNMQSxVQUFLOzhCQUNMQSxVQUFLOytCQUNMQSxVQUFLOzRDQUNMQSxVQUFLO2dEQUNMQSxVQUFLO3NDQUNMQSxVQUFLO3dDQUNMQSxVQUFLO3FDQUNMQSxVQUFLO2dDQUNMQSxVQUFLO29DQUNMQSxVQUFLO3lDQUNMQSxVQUFLO3VDQUNMQSxVQUFLO2dDQUNMQSxVQUFLO2lDQUNMQSxVQUFLO2dDQUNMQSxVQUFLO3FDQUNMQSxVQUFLO29DQUNMQSxVQUFLO2dDQUNMQSxVQUFLOzJCQUNMQSxVQUFLO21EQUNMQSxVQUFLO2dDQUNMQSxVQUFLO3FDQUNMQSxVQUFLO3FDQUNMQSxVQUFLO2dDQUNMQSxVQUFLO2lDQUNMQSxVQUFLO3FDQUNMQSxVQUFL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