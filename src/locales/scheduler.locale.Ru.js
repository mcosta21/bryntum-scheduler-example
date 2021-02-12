/*!
 *
 * Bryntum Scheduler 4.0.8 (TRIAL VERSION)
 * LANGUAGE: Русский / RUSSIAN / RUSSO
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
        ? define("Ru", [], t)
        : "object" == typeof exports
        ? (exports.Ru = t())
        : ((e.bryntum = e.bryntum || {}), (e.bryntum.locales = e.bryntum.locales || {}), (e.bryntum.locales.Ru = t()));
})(window, function () {
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 3))
        );
    })([
        function (e, t, n) {
            "use strict";
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? r(Object(n), !0).forEach(function (t) {
                              a(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : r(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
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
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            n.d(t, "a", function () {
                return l;
            });
            var l = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "mergeLocales",
                            value: function () {
                                for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                return (
                                    n.forEach(function (t) {
                                        Object.keys(t).forEach(function (n) {
                                            "object" === i(t[n]) ? (e[n] = o(o({}, e[n]), t[n])) : (e[n] = t[n]);
                                        });
                                    }),
                                    e
                                );
                            },
                        },
                        {
                            key: "trimLocale",
                            value: function (e, t) {
                                var n = function (t, n) {
                                    if (!e[t]) throw new Error('Key "'.concat(t, "\" doesn't exist in locale"));
                                    if (n) {
                                        if (!e[t][n]) throw new Error('SubKey "'.concat(t, ".").concat(n, "\" doesn't exist in locale"));
                                        delete e[t][n];
                                    } else delete e[t];
                                };
                                Object.keys(t).forEach(function (e) {
                                    Array.isArray(t[e])
                                        ? t[e].forEach(function (t) {
                                              return n(e, t);
                                          })
                                        : n(e);
                                });
                            },
                        },
                        {
                            key: "publishLocale",
                            value: function (e, t) {
                                var n = (window.bryntum = window.bryntum || {}),
                                    r = (n.locales = n.locales || {});
                                r[e] = r[e] ? this.mergeLocales(r[e], t) : t;
                            },
                        },
                    ]),
                    (n = null) && c(t.prototype, n),
                    r && c(t, r),
                    e
                );
            })();
        },
        ,
        ,
        function (e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    localeName: "Ru",
                    localeDesc: "Русский",
                    Object: { Yes: "Да", No: "Нет", Cancel: "Отмена" },
                    Combo: { noResults: "Нет результатов" },
                    FilePicker: { file: "Файл" },
                    Field: {
                        badInput: "Недопустимое значение поля",
                        patternMismatch: "Значение должно соответствовать определенному шаблону",
                        rangeOverflow: function (e) {
                            return "Значение должно быть меньше или равно ".concat(e.max);
                        },
                        rangeUnderflow: function (e) {
                            return "Значение должно быть больше или равно ".concat(e.min);
                        },
                        stepMismatch: "Значение должно соответствовать шагу",
                        tooLong: "Значение должно быть короче",
                        tooShort: "Значение должно быть длиннее",
                        typeMismatch: "Значение должно быть в специальном формате",
                        valueMissing: "Поле не может быть пустым",
                        invalidValue: "Недопустимое значение поля",
                        minimumValueViolation: "Нарушение минимального значения",
                        maximumValueViolation: "Нарушение максимального значения",
                        fieldRequired: "Поле не может быть пустым",
                        validateFilter: "Выберите значение из списка",
                    },
                    DateField: { invalidDate: "Невернывй формат даты" },
                    NumberFormat: { locale: "ru", currency: "RUB" },
                    DurationField: { invalidUnit: "Неверные единицы" },
                    TimeField: { invalidTime: "Неверный формат времени" },
                    List: { loading: "Загрузка..." },
                    PagingToolbar: {
                        firstPage: "Перейти на первую страницу",
                        prevPage: "Перейти на предыдущую страницу",
                        page: "страница",
                        nextPage: "Перейти на следующую страницу",
                        lastPage: "Перейти на последнюю страницу",
                        reload: "Перезагрузить текущую страницу",
                        noRecords: "Нет записей для отображения",
                        pageCountTemplate: function (e) {
                            return "из ".concat(e.lastPage);
                        },
                        summaryTemplate: function (e) {
                            return "Показаны записи ".concat(e.start, " - ").concat(e.end, " из ").concat(e.allCount);
                        },
                    },
                    DateHelper: {
                        locale: "ru",
                        weekStartDay: 1,
                        unitNames: [
                            { single: "миллисек", plural: "миллисек", abbrev: "мс" },
                            { single: "секунда", plural: "секунд", abbrev: "с" },
                            { single: "минута", plural: "минут", abbrev: "мин" },
                            { single: "час", plural: "часов", abbrev: "ч" },
                            { single: "день", plural: "дней", abbrev: "д" },
                            { single: "неделя", plural: "недели", abbrev: "нед" },
                            { single: "месяц", plural: "месяцев", abbrev: "мес" },
                            { single: "квартал", plural: "кварталов", abbrev: "квар" },
                            { single: "год", plural: "лет", abbrev: "г" },
                        ],
                        unitAbbreviations: [["мс", "мил"], ["с", "сек"], ["м", "мин"], ["ч"], ["д", "ден", "дне"], ["н", "нед"], ["мес"], ["к", "квар", "квр"], ["г"]],
                        parsers: { L: "DD.MM.YYYY", LT: "HH:mm" },
                        ordinalSuffix: function (e) {
                            return "".concat(e, "-й");
                        },
                    },
                },
                o = n(0),
                a = o.a.mergeLocales(r, {
                    ColumnPicker: { column: "Колонка", columnsMenu: "Колонки", hideColumn: "Спрятать колонку", hideColumnShort: "Спрятать" },
                    Filter: {
                        applyFilter: "Применить фильтр",
                        filter: "Фильтр",
                        editFilter: "Изменить фильтр",
                        on: "В этот день",
                        before: "До",
                        after: "После",
                        equals: "Равно",
                        lessThan: "Меньше, чем",
                        moreThan: "Больше, чем",
                        removeFilter: "Убрать фильтр",
                    },
                    FilterBar: { enableFilterBar: "Показать панель фильтров", disableFilterBar: "Спрятать панель фильтров" },
                    Group: {
                        group: "Группа",
                        groupAscending: "Группа по возрастанию",
                        groupDescending: "Группа по убыванию",
                        groupAscendingShort: "Возрастание",
                        groupDescendingShort: "Убывание",
                        stopGrouping: "Убрать группу",
                        stopGroupingShort: "Убрать",
                    },
                    Search: { searchForValue: "Найти значение" },
                    Sort: {
                        sort: "Сортировка",
                        sortAscending: "Сортировать по возрастанию",
                        sortDescending: "Сортировать по убыванию",
                        multiSort: "Сложная сортировка",
                        removeSorter: "Убрать сортировку",
                        addSortAscending: "Добавить сортировку по возрастанию",
                        addSortDescending: "Добавить сортировку по убыванию",
                        toggleSortAscending: "Сортировать по возрастанию",
                        toggleSortDescending: "Сортировать по убыванию",
                        sortAscendingShort: "Возрастание",
                        sortDescendingShort: "Убывание",
                        removeSorterShort: "Убрать",
                        addSortAscendingShort: "+ Возраст...",
                        addSortDescendingShort: "+ Убыв...",
                    },
                    GridBase: {
                        loadFailedMessage: "Не удалось загрузить!",
                        syncFailedMessage: "Не удалось синхронизировать!",
                        unspecifiedFailure: "Неуказанная ошибка",
                        networkFailure: "Ошибка сети",
                        parseFailure: "Не удалось разобрать ответ сервера",
                        loadMask: "Загрузка...",
                        syncMask: "Сохраняю данные, пожалуйста подождите...",
                        noRows: "Нет записей для отображения",
                        removeRow: "Удалить запись",
                        removeRows: "Удалить записи",
                        moveColumnLeft: "Передвинуть в левую секцию",
                        moveColumnRight: "Передвинуть в правую секцию",
                        moveColumnTo: function (e) {
                            return "Переместить колонку в секцию ".concat(e);
                        },
                    },
                    CellMenu: { removeRow: "Удалить запись", removeRows: "Удалить записи" },
                    PdfExport: { "Waiting for response from server": "Ожидание ответа от сервера...", "Export failed": "Не удалось экспортировать", "Server error": "На сервере произошла ошибка", "Generating pages": "Генерация страниц..." },
                    ExportDialog: {
                        width: "40em",
                        labelWidth: "13em",
                        exportSettings: "Настройки",
                        export: "Экспорт",
                        exporterType: "Разбивка на страницы",
                        cancel: "Отмена",
                        fileFormat: "Формат файла",
                        rows: "Строки",
                        alignRows: "Выровнять строки",
                        columns: "Колонки",
                        paperFormat: "Размер листа",
                        orientation: "Ориентация",
                        repeatHeader: "Повторять заголовок",
                    },
                    ExportRowsCombo: { all: "Все строки", visible: "Видимые строки" },
                    ExportOrientationCombo: { portrait: "Портретная", landscape: "Ландшафтная" },
                    SinglePageExporter: { singlepage: "Одна страница" },
                    MultiPageExporter: {
                        multipage: "Многостраничный",
                        exportingPage: function (e) {
                            var t = e.currentPage,
                                n = e.totalPages;
                            return "Экспорт страницы ".concat(t, "/").concat(n);
                        },
                    },
                    MultiPageVerticalExporter: {
                        multipagevertical: "Многостраничный (по вертикали)",
                        exportingPage: function (e) {
                            var t = e.currentPage,
                                n = e.totalPages;
                            return "Экспорт страницы ".concat(t, "/").concat(n);
                        },
                    },
                }),
                i = o.a.mergeLocales(a, {
                    ResourceInfoColumn: {
                        eventCountText: function (e) {
                            return e + " " + (e >= 2 && e <= 4 ? "события" : 1 !== e ? "событий" : "событие");
                        },
                    },
                    Dependencies: { from: "От", to: "К", valid: "Верная", invalid: "Неверная" },
                    DependencyType: {
                        SS: "НН",
                        SF: "НО",
                        FS: "ОН",
                        FF: "ОО",
                        StartToStart: "Начало-Начало",
                        StartToEnd: "Начало-Окончание",
                        EndToStart: "Окончание-Начало",
                        EndToEnd: "Окончание-Окончание",
                        short: ["НН", "НО", "ОН", "ОО"],
                        long: ["Начало-Начало", "Начало-Окончание", "Окончание-Начало", "Окончание-Окончание"],
                    },
                    EventEdit: { Name: "Название", Resource: "Ресурс", Start: "Начало", End: "Конец", Save: "Сохранить", Delete: "Удалить", Cancel: "Отмена", "Edit event": "Изменить событие", Repeat: "Повтор" },
                    DependencyEdit: {
                        From: "От",
                        To: "К",
                        Type: "Тип",
                        Lag: "Запаздывание",
                        "Edit dependency": "Редактировать зависимость",
                        Save: "Сохранить",
                        Delete: "Удалить",
                        Cancel: "Отменить",
                        StartToStart: "Начало к Началу",
                        StartToEnd: "Начало к Окончанию",
                        EndToStart: "Окончание к Началу",
                        EndToEnd: "Окончание к Окончанию",
                    },
                    EventDrag: { eventOverlapsExisting: "Событие перекрывает существующее событие для этого ресурса", noDropOutsideTimeline: "Событие не может быть отброшено полностью за пределами графика" },
                    SchedulerBase: { "Add event": "Добавить событие", "Delete event": "Удалить событие", "Unassign event": "Убрать назначение с события" },
                    HeaderContextMenu: { pickZoomLevel: "Выберите масштаб", activeDateRange: "Диапазон дат", startText: "Начало", endText: "Конец", todayText: "Сегодня" },
                    TimeAxisHeaderMenu: { pickZoomLevel: "Выберите масштаб", activeDateRange: "Диапазон дат", startText: "Начало", endText: "Конец", todayText: "Сегодня" },
                    UndoRedo: { UndoLastAction: "Отменить последнее действие", RedoLastAction: "Повторить последнее отмененное действие" },
                    EventFilter: { filterEvents: "Фильтровать задачи", byName: "По имени" },
                    TimeRanges: { showCurrentTimeLine: "Показать линию текущего времени" },
                    PresetManager: { minuteAndHour: { topDateFormat: "ddd DD.MM, HH:mm" }, hourAndDay: { topDateFormat: "ddd DD.MM" }, weekAndDay: { displayDateFormat: "HH:mm" } },
                    RecurrenceConfirmationPopup: {
                        "delete-title": "Вы удаляете повторяющееся событие",
                        "delete-all-message": "Хотите удалить все повторения этого события?",
                        "delete-further-message": "Хотите удалить это и все последующие повторения этого события или только выбранное?",
                        "delete-further-btn-text": "Удалить все будущие повторения",
                        "delete-only-this-btn-text": "Удалить только это событие",
                        "update-title": "Вы изменяете повторяющееся событие",
                        "update-all-message": "Изменить все повторения события?",
                        "update-further-message": "Изменить только это повторение или это и все последующие повторения события?",
                        "update-further-btn-text": "Все будущие повторения",
                        "update-only-this-btn-text": "Только это событие",
                        Yes: "Да",
                        Cancel: "Отменить",
                        width: 600,
                    },
                    RecurrenceLegend: {
                        " and ": " и ",
                        Daily: "Ежедневно",
                        "Weekly on {1}": function (e) {
                            var t = e.days;
                            return "Еженедельно (".concat(t, ")");
                        },
                        "Monthly on {1}": function (e) {
                            var t = e.days;
                            return "Ежемесячно (день: ".concat(t, ")");
                        },
                        "Yearly on {1} of {2}": function (e) {
                            var t = e.days,
                                n = e.months;
                            return "Ежегодно (день: ".concat(t, ", месяц: ").concat(n, ")");
                        },
                        "Every {0} days": function (e) {
                            var t = e.interval;
                            return "Каждый ".concat(t, " день");
                        },
                        "Every {0} weeks on {1}": function (e) {
                            var t = e.interval,
                                n = e.days;
                            return "Каждую ".concat(t, " неделю, день: ").concat(n);
                        },
                        "Every {0} months on {1}": function (e) {
                            var t = e.interval,
                                n = e.days;
                            return "Каждый ".concat(t, " месяц, день: ").concat(n);
                        },
                        "Every {0} years on {1} of {2}": function (e) {
                            var t = e.interval,
                                n = e.days,
                                r = e.months;
                            return "Каждый ".concat(t, " год, день: ").concat(n, " месяц: ").concat(r);
                        },
                        position1: "первый",
                        position2: "второй",
                        position3: "третий",
                        position4: "четвертый",
                        position5: "пятый",
                        "position-1": "последний",
                        day: "день",
                        weekday: "будний день",
                        "weekend day": "выходной день",
                        daysFormat: function (e) {
                            var t = e.position,
                                n = e.days;
                            return "".concat(t, " ").concat(n);
                        },
                    },
                    RecurrenceEditor: {
                        "Repeat event": "Повторять событие",
                        Cancel: "Отменить",
                        Save: "Сохранить",
                        Frequency: "Как часто",
                        Every: "Каждый(ую)",
                        DAILYintervalUnit: "день",
                        WEEKLYintervalUnit: "неделю",
                        MONTHLYintervalUnit: "месяц",
                        YEARLYintervalUnit: "год/лет",
                        Each: "Какого числа",
                        "On the": "В следующие дни",
                        "End repeat": "Прекратить",
                        "time(s)": "раз(а)",
                    },
                    RecurrenceDaysCombo: { day: "день", weekday: "будний день", "weekend day": "выходной день" },
                    RecurrencePositionsCombo: { position1: "первый", position2: "второй", position3: "третий", position4: "четвертый", position5: "пятый", "position-1": "последний" },
                    RecurrenceStopConditionCombo: { Never: "Никогда", After: "После", "On date": "В дату" },
                    RecurrenceFrequencyCombo: { Daily: "Каждый день", Weekly: "Каждую неделю", Monthly: "Каждый месяц", Yearly: "Каждый год" },
                    RecurrenceCombo: { None: "Не выбрано", Custom: "Настроить..." },
                    Summary: {
                        "Summary for": function (e) {
                            return "Сводка на ".concat(e);
                        },
                    },
                    ScheduleRangeCombo: { completeview: "Полное расписание", currentview: "Текущая видимая область", daterange: "Диапазон дат", completedata: "Полное расписание (по всем событиям)" },
                    SchedulerExportDialog: { "Schedule range": "Диапазон расписания", "Export from": "С", "Export to": "По" },
                    ExcelExporter: { "No resource assigned": "Ресурс не назначен" },
                    CrudManagerView: { serverResponseLabel: "Ответ сервера:" },
                });
            t.default = i;
        },
    ]).default;
});
