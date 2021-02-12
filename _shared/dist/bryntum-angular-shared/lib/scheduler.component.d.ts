/*!
 *
 * Bryntum Scheduler 4.0.8 (TRIAL VERSION)
 *
 * Copyright(c) 2021 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
import { OnInit, OnChanges, ElementRef, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { Scheduler, AssignmentModel, AssignmentStore, EventModel } from 'bryntum-scheduler/scheduler.lite.umd.js';
import * as ɵngcc0 from '@angular/core';
export declare class SchedulerComponent implements OnInit, OnChanges, OnDestroy {
    private elementRef;
    schedulerInstance: Scheduler;
    /**
     * @deprecated in favor of schedulerInstance
     */
    readonly schedulerEngine: Scheduler;
    private featureRe;
    private features;
    private configs;
    schedulerId: string;
    allowOverlap: boolean;
    animateRemovingRows: boolean;
    assignments: AssignmentModel[] | object[];
    assignmentStore: AssignmentStore | object;
    autoAdjustTimeAxis: boolean;
    autoHeight: boolean;
    barMargin: number;
    columnLines: boolean;
    columns: object[];
    contextMenuTriggerEvent: string;
    createEventOnDblClick: boolean;
    crudManager: object;
    defaultResourceImageName: string;
    dependencyStore: object;
    disableGridRowModelWarning: boolean;
    displayDateFormat: string;
    emptyText: string;
    enableDeleteKey: boolean;
    enableEventAnimations: boolean;
    enableRecurringEvents: boolean;
    enableTextSelection: boolean;
    endDate: any;
    endParamName: string;
    eventBarTextField: string;
    eventBodyTemplate: any;
    eventColor: string;
    eventLayout: string;
    eventRenderer: any;
    events: object[];
    eventSelectionDisabled: boolean;
    eventStore: object;
    eventStyle: string;
    fillLastColumn: boolean;
    fillTicks: boolean;
    fullRowRefresh: boolean;
    getRowHeight: any;
    hasVisibleEvents: boolean;
    height: number | string;
    hideHeaders: boolean;
    horizontalEventSorterFn: any;
    loadMask: string;
    longPressTime: number;
    maintainSelectionOnDatasetChange: boolean;
    managedEventSizing: boolean;
    maxHeight: number | string;
    maxWidth: number | string;
    maxZoomLevel: number;
    milestoneAlign: string;
    milestoneCharWidth: number;
    milestoneLayoutMode: string;
    minHeight: number | string;
    minWidth: number | string;
    minZoomLevel: number;
    mode: string;
    multiEventSelect: boolean;
    partner: any;
    passStartEndParameters: boolean;
    presets: object[];
    readOnly: boolean;
    removeUnassignedEvent: boolean;
    resizeToFitIncludesHeader: boolean;
    resourceColumns: any;
    resourceImagePath: string;
    resourceMargin: number;
    resources: object[];
    resourceStore: object;
    resourceTimeRanges: object;
    responsiveLevels: any;
    rowHeight: number;
    scrollLeft: number;
    scrollTop: number;
    selectedEvents: EventModel[];
    selectionMode: object;
    showDirty: boolean;
    snap: boolean;
    snapRelativeToEventStartDate: boolean;
    startDate: any;
    startParamName: string;
    subGridConfigs: object;
    tickWidth: number;
    timeRanges: object | boolean;
    timeResolution: object;
    triggerSelectionChangeOnRemove: boolean;
    useInitialAnimation: boolean | string;
    viewportCenterDate: any;
    viewPreset: object | string;
    weekStartDay: number;
    width: number | string;
    workingTime: object;
    zoomLevel: number;
    zoomOnMouseWheel: boolean;
    zoomOnTimeAxisDoubleClick: boolean;
    cellEditFeature: boolean | object;
    cellMenuFeature: boolean | object;
    cellTooltipFeature: boolean | object;
    columnDragToolbarFeature: boolean | object;
    columnLinesFeature: boolean | object;
    columnPickerFeature: boolean;
    columnReorderFeature: boolean;
    columnResizeFeature: boolean;
    dependenciesFeature: boolean | object;
    dependencyEditFeature: boolean | object;
    eventDragCreateFeature: boolean | object;
    eventDragFeature: boolean | object;
    eventDragSelectFeature: boolean;
    eventEditFeature: boolean | object;
    eventFilterFeature: boolean | object;
    eventMenuFeature: boolean | object;
    eventResizeFeature: boolean | object;
    eventTooltipFeature: boolean | object;
    filterBarFeature: boolean | object;
    filterFeature: boolean | object;
    groupFeature: boolean | object | string;
    groupSummaryFeature: boolean | object;
    headerMenuFeature: boolean | object;
    headerZoomFeature: boolean;
    labelsFeature: boolean | object;
    nonWorkingTimeFeature: boolean;
    panFeature: boolean | object;
    pdfExportFeature: boolean | object;
    quickFindFeature: boolean | object;
    regionResizeFeature: boolean;
    resourceTimeRangesFeature: boolean;
    rowReorderFeature: boolean;
    scheduleMenuFeature: boolean | object;
    scheduleTooltipFeature: boolean | object;
    searchFeature: boolean;
    simpleEventEdit: boolean | object;
    sortFeature: boolean | object | string;
    stripeFeature: boolean;
    summaryFeature: boolean | object;
    timeAxisHeaderMenuFeature: boolean | object;
    timeRangesFeature: boolean | object[];
    treeFeature: boolean;
    transitionDuration: number;
    selectedEvent: string;
    onSchedulerEvents: EventEmitter<object>;
    constructor(element: ElementRef);
    /**
     * Initializes component
     */
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    removeEvent(): void;
    addEvent(): void;
    /**
     * Destroys component
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SchedulerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SchedulerComponent, "bry-scheduler", never, { "allowOverlap": "allowOverlap"; "autoAdjustTimeAxis": "autoAdjustTimeAxis"; "autoHeight": "autoHeight"; "barMargin": "barMargin"; "columnLines": "columnLines"; "createEventOnDblClick": "createEventOnDblClick"; "disableGridRowModelWarning": "disableGridRowModelWarning"; "enableDeleteKey": "enableDeleteKey"; "enableEventAnimations": "enableEventAnimations"; "enableRecurringEvents": "enableRecurringEvents"; "enableTextSelection": "enableTextSelection"; "eventBarTextField": "eventBarTextField"; "eventColor": "eventColor"; "eventSelectionDisabled": "eventSelectionDisabled"; "eventStyle": "eventStyle"; "fillLastColumn": "fillLastColumn"; "fullRowRefresh": "fullRowRefresh"; "hideHeaders": "hideHeaders"; "loadMask": "loadMask"; "longPressTime": "longPressTime"; "maintainSelectionOnDatasetChange": "maintainSelectionOnDatasetChange"; "managedEventSizing": "managedEventSizing"; "milestoneCharWidth": "milestoneCharWidth"; "milestoneLayoutMode": "milestoneLayoutMode"; "readOnly": "readOnly"; "removeUnassignedEvent": "removeUnassignedEvent"; "resizeToFitIncludesHeader": "resizeToFitIncludesHeader"; "rowHeight": "rowHeight"; "showDirty": "showDirty"; "snapRelativeToEventStartDate": "snapRelativeToEventStartDate"; "triggerSelectionChangeOnRemove": "triggerSelectionChangeOnRemove"; "useInitialAnimation": "useInitialAnimation"; "viewPreset": "viewPreset"; "zoomOnMouseWheel": "zoomOnMouseWheel"; "zoomOnTimeAxisDoubleClick": "zoomOnTimeAxisDoubleClick"; "cellEditFeature": "cellEditFeature"; "cellTooltipFeature": "cellTooltipFeature"; "columnDragToolbarFeature": "columnDragToolbarFeature"; "columnLinesFeature": "columnLinesFeature"; "columnPickerFeature": "columnPickerFeature"; "columnReorderFeature": "columnReorderFeature"; "columnResizeFeature": "columnResizeFeature"; "dependenciesFeature": "dependenciesFeature"; "dependencyEditFeature": "dependencyEditFeature"; "eventDragCreateFeature": "eventDragCreateFeature"; "eventDragFeature": "eventDragFeature"; "eventEditFeature": "eventEditFeature"; "eventFilterFeature": "eventFilterFeature"; "eventMenuFeature": "eventMenuFeature"; "eventResizeFeature": "eventResizeFeature"; "eventTooltipFeature": "eventTooltipFeature"; "groupFeature": "groupFeature"; "scheduleMenuFeature": "scheduleMenuFeature"; "scheduleTooltipFeature": "scheduleTooltipFeature"; "sortFeature": "sortFeature"; "timeRangesFeature": "timeRangesFeature"; "schedulerId": "schedulerId"; "animateRemovingRows": "animateRemovingRows"; "assignments": "assignments"; "assignmentStore": "assignmentStore"; "columns": "columns"; "contextMenuTriggerEvent": "contextMenuTriggerEvent"; "crudManager": "crudManager"; "defaultResourceImageName": "defaultResourceImageName"; "dependencyStore": "dependencyStore"; "displayDateFormat": "displayDateFormat"; "emptyText": "emptyText"; "endDate": "endDate"; "endParamName": "endParamName"; "eventBodyTemplate": "eventBodyTemplate"; "eventLayout": "eventLayout"; "eventRenderer": "eventRenderer"; "events": "events"; "eventStore": "eventStore"; "fillTicks": "fillTicks"; "getRowHeight": "getRowHeight"; "hasVisibleEvents": "hasVisibleEvents"; "height": "height"; "horizontalEventSorterFn": "horizontalEventSorterFn"; "maxHeight": "maxHeight"; "maxWidth": "maxWidth"; "maxZoomLevel": "maxZoomLevel"; "milestoneAlign": "milestoneAlign"; "minHeight": "minHeight"; "minWidth": "minWidth"; "minZoomLevel": "minZoomLevel"; "mode": "mode"; "multiEventSelect": "multiEventSelect"; "partner": "partner"; "passStartEndParameters": "passStartEndParameters"; "presets": "presets"; "resourceColumns": "resourceColumns"; "resourceImagePath": "resourceImagePath"; "resourceMargin": "resourceMargin"; "resources": "resources"; "resourceStore": "resourceStore"; "resourceTimeRanges": "resourceTimeRanges"; "responsiveLevels": "responsiveLevels"; "scrollLeft": "scrollLeft"; "scrollTop": "scrollTop"; "selectedEvents": "selectedEvents"; "selectionMode": "selectionMode"; "snap": "snap"; "startDate": "startDate"; "startParamName": "startParamName"; "subGridConfigs": "subGridConfigs"; "tickWidth": "tickWidth"; "timeRanges": "timeRanges"; "timeResolution": "timeResolution"; "viewportCenterDate": "viewportCenterDate"; "weekStartDay": "weekStartDay"; "width": "width"; "workingTime": "workingTime"; "zoomLevel": "zoomLevel"; "cellMenuFeature": "cellMenuFeature"; "eventDragSelectFeature": "eventDragSelectFeature"; "filterBarFeature": "filterBarFeature"; "filterFeature": "filterFeature"; "groupSummaryFeature": "groupSummaryFeature"; "headerMenuFeature": "headerMenuFeature"; "headerZoomFeature": "headerZoomFeature"; "labelsFeature": "labelsFeature"; "nonWorkingTimeFeature": "nonWorkingTimeFeature"; "panFeature": "panFeature"; "pdfExportFeature": "pdfExportFeature"; "quickFindFeature": "quickFindFeature"; "regionResizeFeature": "regionResizeFeature"; "resourceTimeRangesFeature": "resourceTimeRangesFeature"; "rowReorderFeature": "rowReorderFeature"; "searchFeature": "searchFeature"; "simpleEventEdit": "simpleEventEdit"; "stripeFeature": "stripeFeature"; "summaryFeature": "summaryFeature"; "timeAxisHeaderMenuFeature": "timeAxisHeaderMenuFeature"; "treeFeature": "treeFeature"; "transitionDuration": "transitionDuration"; }, { "selectedEvent": "selectedEvent"; "onSchedulerEvents": "onSchedulerEvents"; }, never, never>;
}

//# sourceMappingURL=scheduler.component.d.ts.map