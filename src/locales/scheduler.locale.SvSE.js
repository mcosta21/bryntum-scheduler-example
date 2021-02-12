/*!
 *
 * Bryntum Scheduler 4.0.8 (TRIAL VERSION)
 * LANGUAGE: SVENSKA / SWEDISH / SUECO
 *
 * Copyright(c) 2021 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define("SvSE", [], t)
        : "object" == typeof exports
        ? (exports.SvSE = t())
        : ((e.bryntum = e.bryntum || {}), (e.bryntum.locales = e.bryntum.locales || {}), (e.bryntum.locales.SvSE = t()));
})(window, function () {
    return (function (e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var a = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
        }
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var a in e)
                        r.d(
                            n,
                            a,
                            function (t) {
                                return e[t];
                            }.bind(null, a)
                        );
                return n;
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 4))
        );
    })([
        function (e, t, r) {
            "use strict";
            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? n(Object(r), !0).forEach(function (t) {
                              o(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : n(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function o(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            r.d(t, "a", function () {
                return s;
            });
            var s = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, r, n;
                return (
                    (t = e),
                    (n = [
                        {
                            key: "mergeLocales",
                            value: function () {
                                for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                return (
                                    r.forEach(function (t) {
                                        Object.keys(t).forEach(function (r) {
                                            "object" === i(t[r]) ? (e[r] = a(a({}, e[r]), t[r])) : (e[r] = t[r]);
                                        });
                                    }),
                                    e
                                );
                            },
                        },
                        {
                            key: "trimLocale",
                            value: function (e, t) {
                                var r = function (t, r) {
                                    if (!e[t]) throw new Error('Key "'.concat(t, "\" doesn't exist in locale"));
                                    if (r) {
                                        if (!e[t][r]) throw new Error('SubKey "'.concat(t, ".").concat(r, "\" doesn't exist in locale"));
                                        delete e[t][r];
                                    } else delete e[t];
                                };
                                Object.keys(t).forEach(function (e) {
                                    Array.isArray(t[e])
                                        ? t[e].forEach(function (t) {
                                              return r(e, t);
                                          })
                                        : r(e);
                                });
                            },
                        },
                        {
                            key: "publishLocale",
                            value: function (e, t) {
                                var r = (window.bryntum = window.bryntum || {}),
                                    n = (r.locales = r.locales || {});
                                n[e] = n[e] ? this.mergeLocales(n[e], t) : t;
                            },
                        },
                    ]),
                    (r = null) && l(t.prototype, r),
                    n && l(t, n),
                    e
                );
            })();
        },
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var n = {
                    localeName: "SvSE",
                    localeDesc: "Svenska",
                    Object: { Yes: "Ja", No: "Nej", Cancel: "Avbryt" },
                    Combo: { noResults: "Inga resultat" },
                    FilePicker: { file: "Fil" },
                    Field: {
                        badInput: "Ogiltigt värde",
                        patternMismatch: "Värdet ska matcha ett specifikt mönster",
                        rangeOverflow: function (e) {
                            return "Värdet måste vara mindre än eller lika med ".concat(e.max);
                        },
                        rangeUnderflow: function (e) {
                            return "Värdet måste vara större än eller lika med ".concat(e.min);
                        },
                        stepMismatch: "Värdet bör passa steget",
                        tooLong: "Värdet för långt",
                        tooShort: "Värdet för kort",
                        typeMismatch: "Värdet är inte i förväntat format",
                        valueMissing: "Detta fält är obligatoriskt",
                        invalidValue: "Ogiltigt värde",
                        minimumValueViolation: "För lågt värde",
                        maximumValueViolation: "För högt värde",
                        fieldRequired: "Detta fält är obligatoriskt",
                        validateFilter: "Värdet måste väljas från listan",
                    },
                    DateField: { invalidDate: "Ogiltigt datum" },
                    NumberFormat: { locale: "sv-SE", currency: "SEK" },
                    DurationField: { invalidUnit: "Ogiltig enhet" },
                    TimeField: { invalidTime: "Ogiltig tid" },
                    List: { loading: "Laddar..." },
                    PagingToolbar: {
                        firstPage: "Gå till första sidan",
                        prevPage: "Gå till föregående sida",
                        page: "Sida",
                        nextPage: "Gå till nästa sida",
                        lastPage: "Gå till sista sidan",
                        reload: "Ladda om den aktuella sidan",
                        noRecords: "Inga rader att visa",
                        pageCountTemplate: function (e) {
                            return "av ".concat(e.lastPage);
                        },
                        summaryTemplate: function (e) {
                            return "Visar poster ".concat(e.start, " - ").concat(e.end, " av ").concat(e.allCount);
                        },
                    },
                    DateHelper: {
                        locale: "sv-SE",
                        weekStartDay: 1,
                        unitNames: [
                            { single: "millisekund", plural: "millisekunder", abbrev: "ms" },
                            { single: "sekund", plural: "sekunder", abbrev: "s" },
                            { single: "minut", plural: "minuter", abbrev: "min" },
                            { single: "timme", plural: "timmar", abbrev: "tim" },
                            { single: "dag", plural: "dagar", abbrev: "d" },
                            { single: "vecka", plural: "vecka", abbrev: "v" },
                            { single: "månad", plural: "månader", abbrev: "mån" },
                            { single: "kvartal", plural: "kvartal", abbrev: "kv" },
                            { single: "år", plural: "år", abbrev: "år" },
                        ],
                        unitAbbreviations: [["ms", "mil"], ["s", "sek"], ["m", "min"], ["t", "tim", "h"], ["d"], ["v", "ve"], ["må", "mån"], ["kv", "kva"], []],
                        ordinalSuffix: function (e) {
                            var t = e[e.length - 1];
                            return e + ("11" === e || "12" === e || ("1" !== t && "2" !== t) ? "e" : "a");
                        },
                        parsers: { L: "YYYY-MM-DD", LT: "HH:mm" },
                    },
                },
                a = r(0),
                o = a.a.mergeLocales(n, {
                    ColumnPicker: { column: "Kolumn", columnsMenu: "Kolumner", hideColumn: "Dölj kolumn", hideColumnShort: "Dölj" },
                    Filter: {
                        applyFilter: "Använd filter",
                        editFilter: "Redigera filter",
                        filter: "Filter",
                        on: "På",
                        before: "Före",
                        after: "Efter",
                        equals: "Lika med",
                        lessThan: "Mindre än",
                        moreThan: "Större än",
                        removeFilter: "Ta bort filter",
                    },
                    FilterBar: { enableFilterBar: "Visa filterrad", disableFilterBar: "Dölj filterrad" },
                    Group: {
                        group: "Gruppera",
                        groupAscending: "Gruppera stigande",
                        groupDescending: "Gruppera fallande",
                        groupAscendingShort: "Stigande",
                        groupDescendingShort: "Fallande",
                        stopGrouping: "Sluta gruppera",
                        stopGroupingShort: "Sluta",
                    },
                    Search: { searchForValue: "Sök efter värde" },
                    Sort: {
                        sort: "Sortera",
                        sortAscending: "Sortera stigande",
                        sortDescending: "Sortera fallande",
                        multiSort: "Multisortering",
                        addSortAscending: "Lägg till stigande",
                        addSortDescending: "Lägg till fallande",
                        toggleSortAscending: "Ändra till stigande",
                        toggleSortDescending: "Ändra till fallande",
                        removeSorter: "Ta bort sorterare",
                        sortAscendingShort: "Stigande",
                        sortDescendingShort: "Fallande",
                        removeSorterShort: "Ta bort",
                        addSortAscendingShort: "+ Stigande",
                        addSortDescendingShort: "+ Fallande",
                    },
                    GridBase: {
                        loadFailedMessage: "Ett fel har uppstått, vänligen försök igen!",
                        syncFailedMessage: "Datasynkronisering misslyckades!",
                        unspecifiedFailure: "Ospecificerat fel",
                        networkFailure: "Nätverksfel",
                        parseFailure: "Det gick inte att bearbeta serversvaret",
                        loadMask: "Laddar...",
                        syncMask: "Sparar ändringar, vänligen vänta...",
                        noRows: "Inga rader att visa",
                        removeRow: "Ta bort rad",
                        removeRows: "Ta bort rader",
                        moveColumnLeft: "Flytta till vänstra sektionen",
                        moveColumnRight: "Flytta till högra sektionen",
                        moveColumnTo: function (e) {
                            return "Flytta kolumn till ".concat(e);
                        },
                    },
                    CellMenu: { removeRow: "Ta bort rad", removeRows: "Ta bort rader" },
                    PdfExport: { "Waiting for response from server": "Väntar på svar från servern...", "Export failed": "Export misslyckades", "Server error": "Serverfel", "Generating pages": "Genererar sidor..." },
                    ExportDialog: {
                        width: "40em",
                        labelWidth: "13em",
                        exportSettings: "Exportera inställningar",
                        export: "Exportera",
                        exporterType: "Styra sidbrytningarna",
                        cancel: "Avbryt",
                        fileFormat: "Filformat",
                        rows: "Кader",
                        alignRows: "Anpassa raderna",
                        columns: "Kolumner",
                        paperFormat: "Pappersformat",
                        orientation: "Orientering",
                        repeatHeader: "Upprepa rubriken",
                    },
                    ExportRowsCombo: { all: "Alla rader", visible: "Synliga rader" },
                    ExportOrientationCombo: { portrait: "Stående", landscape: "Liggande" },
                    SinglePageExporter: { singlepage: "En sida" },
                    MultiPageExporter: {
                        multipage: "Flera sidor",
                        exportingPage: function (e) {
                            var t = e.currentPage,
                                r = e.totalPages;
                            return "Exporterar sidan ".concat(t, "/").concat(r);
                        },
                    },
                    MultiPageVerticalExporter: {
                        multipagevertical: "Flera sidor (lodrätt)",
                        exportingPage: function (e) {
                            var t = e.currentPage,
                                r = e.totalPages;
                            return "Exporterar sidan ".concat(t, "/").concat(r);
                        },
                    },
                }),
                i = a.a.mergeLocales(o, {
                    ResourceInfoColumn: {
                        eventCountText: function (e) {
                            return e + " händelse" + (1 !== e ? "r" : "");
                        },
                    },
                    Dependencies: { from: "Från", to: "Till", valid: "Giltig", invalid: "Ogiltig" },
                    DependencyType: {
                        SS: "SS",
                        SF: "SA",
                        FS: "AS",
                        FF: "AA",
                        StartToStart: "Start-Till-Start",
                        StartToEnd: "Start-Till-Avslut",
                        EndToStart: "Avslut-Till-Start",
                        EndToEnd: "Avslut-Till-Avslut",
                        short: ["SS", "SA", "AS", "AA"],
                        long: ["Start-Till-Start", "Start-Till-Avslut", "Avslut-Till-Start", "Avslut-Till-Avslut"],
                    },
                    EventEdit: { Name: "Namn", Resource: "Resurs", Start: "Start", End: "Slut", Save: "Spara", Delete: "Ta bort", Cancel: "Avbryt", "Edit event": "Redigera bokning", Repeat: "Upprepa" },
                    DependencyEdit: {
                        From: "Från",
                        To: "Till",
                        Type: "Typ",
                        Lag: "Fördröjning",
                        "Edit dependency": "Ändra beroende",
                        Save: "Spara",
                        Delete: "Ta bort",
                        Cancel: "Avbryt",
                        StartToStart: "Start till Start",
                        StartToEnd: "Start till Slut",
                        EndToStart: "Slut till Start",
                        EndToEnd: "Slut till Slut",
                    },
                    EventDrag: { eventOverlapsExisting: "Överlappar befintlig händelse för den här resursen", noDropOutsideTimeline: "Händelsen kan inte släppas utanför tidsaxeln" },
                    SchedulerBase: { "Add event": "Lägg till bokning", "Delete event": "Ta bort bokning", "Unassign event": "Ta bort resurskoppling" },
                    HeaderContextMenu: { pickZoomLevel: "Välj zoomnivå", activeDateRange: "Aktivt datumintervall", startText: "Start datum", endText: "Slut datum", todayText: "I dag" },
                    TimeAxisHeaderMenu: { pickZoomLevel: "Välj zoomnivå", activeDateRange: "Aktivt datumintervall", startText: "Start datum", endText: "Slut datum", todayText: "I dag" },
                    UndoRedo: { UndoLastAction: "Ångra senaste åtgärden", RedoLastAction: "Gör om senast ångrade åtgärden" },
                    EventFilter: { filterEvents: "Filtrera händelser", byName: "Med namn" },
                    TimeRanges: { showCurrentTimeLine: "Visa aktuell tidslinje" },
                    PresetManager: { minuteAndHour: { topDateFormat: "ddd, DD/MM, h:mm" }, hourAndDay: { topDateFormat: "ddd DD/MM" }, weekAndDay: { displayDateFormat: "HH:mm" } },
                    RecurrenceConfirmationPopup: {
                        "delete-title": "Borttagning av bokning",
                        "delete-all-message": "Vill du ta bort alla instanser av denna bokning?",
                        "delete-further-message": "Vill du ta bort denna och alla framtida instanser av denna bokning, eller bara denna?",
                        "delete-further-btn-text": "Ta bort alla framtida",
                        "delete-only-this-btn-text": "Ta bort endast denna",
                        "update-title": "Redigering av upprepad bokning",
                        "update-all-message": "Vill du ändra alla instanser av denna bokning?",
                        "update-further-message": "Vill du ändra på endast denna instans, eller denna och alla framtida?",
                        "update-further-btn-text": "Alla framtida",
                        "update-only-this-btn-text": "Endast denna",
                        Yes: "Ja",
                        Cancel: "Avbryt",
                        width: 500,
                    },
                    RecurrenceLegend: {
                        " and ": " och ",
                        Daily: "Daglig",
                        "Weekly on {1}": function (e) {
                            var t = e.days;
                            return "Veckovis på ".concat(t);
                        },
                        "Monthly on {1}": function (e) {
                            var t = e.days;
                            return "Måntaligen den ".concat(t);
                        },
                        "Yearly on {1} of {2}": function (e) {
                            var t = e.days,
                                r = e.months;
                            return "Årligen ".concat(t, " ").concat(r);
                        },
                        "Every {0} days": function (e) {
                            var t = e.interval;
                            return "Var ".concat(t, " dag");
                        },
                        "Every {0} weeks on {1}": function (e) {
                            var t = e.interval,
                                r = e.days;
                            return "Var ".concat(t, " vecka på ").concat(r);
                        },
                        "Every {0} months on {1}": function (e) {
                            var t = e.interval,
                                r = e.days;
                            return "Var ".concat(t, " månad ").concat(r);
                        },
                        "Every {0} years on {1} of {2}": function (e) {
                            var t = e.interval,
                                r = e.days,
                                n = e.months;
                            return "Var ".concat(t, " år på ").concat(r, " av ").concat(n);
                        },
                        position1: "den första",
                        position2: "den andra",
                        position3: "den tredje",
                        position4: "den fjärde",
                        position5: "den femte",
                        "position-1": "den sista",
                        day: "dagen",
                        weekday: "veckodagen",
                        "weekend day": "dagen i veckoslut",
                        daysFormat: function (e) {
                            var t = e.position,
                                r = e.days;
                            return "".concat(t, " ").concat(r);
                        },
                    },
                    RecurrenceEditor: {
                        "Repeat event": "Upprepa bokning",
                        Cancel: "Avbryt",
                        Save: "Spara",
                        Frequency: "Frekvens",
                        Every: "Var",
                        DAILYintervalUnit: "dag",
                        WEEKLYintervalUnit: "vecka",
                        MONTHLYintervalUnit: "månad",
                        YEARLYintervalUnit: "år",
                        Each: "Varje",
                        "On the": "På den",
                        "End repeat": "Avsluta upprepning",
                        "time(s)": "upprepningar",
                    },
                    RecurrenceDaysCombo: { day: "dagen", weekday: "veckodagen", "weekend day": "dagen i veckoslutet" },
                    RecurrencePositionsCombo: { position1: "första", position2: "andra", position3: "tredje", position4: "fjärde", position5: "femte", "position-1": "sista" },
                    RecurrenceStopConditionCombo: { Never: "Aldrig", After: "Efter", "On date": "På datum" },
                    RecurrenceFrequencyCombo: { Daily: "Daglig", Weekly: "Veckovis", Monthly: "Månatlig", Yearly: "Årlig" },
                    RecurrenceCombo: { None: "Ingen", Custom: "Anpassad..." },
                    Summary: {
                        "Summary for": function (e) {
                            return "Sammanfattning för ".concat(e);
                        },
                    },
                    ScheduleRangeCombo: { completeview: "Hela schemat", currentview: "Aktuell vy", daterange: "Datumintervall", completedata: "Hela schemat (alla aktiviteter)" },
                    SchedulerExportDialog: { "Schedule range": "Tidsintervall", "Export from": "Från", "Export to": "Till" },
                    ExcelExporter: { "No resource assigned": "Ingen resurs tilldelad" },
                    CrudManagerView: { serverResponseLabel: "Serversvar:" },
                });
            t.default = i;
        },
    ]).default;
});
