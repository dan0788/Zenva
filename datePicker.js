
function datepicker(){
    //$(document).ready(function () {
    let __nowDate = new nowDate();
//    ---------------------------
    setDataOfDate(__nowDate.nowYear(), __nowDate.nowMonth());
    let __addYears = new addYears();
    __addYears.addYears();
    let __getYear = __nowDate.nowYear();
    let __getDay = __nowDate.nowDay();//en numeros
    let __getMonth = __nowDate.nowMonth();//en numeros
    let __arrayMonths = new arrayMonths().arrayMonths();
    let __arrayYears = new arrayYears().arrayYears();
    let __arrayYearslength = __arrayYears.length;
    for (var i = 0; i < __arrayYearslength; i++) {
        let b = new setDataOfMonths('#year' + __arrayYears[i]);
        b.setDataOfMonths();
    }
    $("ul[id^='row-months']").removeClass('d-flex');
    $("ul[id^='row-months']").addClass('d-none');
    let screenHeigth = screen.height;
    let screenWidth = screen.width;
    $("#box").addClass('d-none');
//    eventos
    $('#title-month').on('click', function () {
        $('.calendar-box').css('-webkit-animation', 'traslation-month-calendar 1s ease-in-out forwards');
        $('.calendar-box-years').css('-webkit-animation', 'traslation-return-years-calendar 1s ease-in-out forwards');
    });
//    flechas cambio de mes
    $('#arrow-left').on('click', function () {
        __getMonth--;
        removeRows();
        setDataOfDate(__getYear, __getMonth);
        __getYear = $('#title-month').text().slice(-4);
        let length = __arrayMonths.length;
        let monthtext = $('#title-month').text().slice(0, -5);
        for (var i = 1; i <= length; i++) {
            monthtext === __arrayMonths[i - 1] ? __getMonth = i : null
        }
    });
    $('#arrow-right').on('click', function () {
        __getMonth++;
        removeRows();
        setDataOfDate(__getYear, __getMonth);
        __getYear = $('#title-month').text().slice(-4);
        let length = __arrayMonths.length;
        let monthtext = $('#title-month').text().slice(0, -5);
        for (var i = 1; i <= length; i++) {
            monthtext === __arrayMonths[i - 1] ? __getMonth = i : null
        }
    });
    let __arrayActiveYears = [];
    $('.calendar-box-years div h6').on('click', function (event) {
        __getYear = new getYear(event).getYear();
        if (__arrayActiveYears.length !== 0) {
            for (var i = 0; i < __arrayActiveYears.length; i++) {
                $('#boxMonths' + __arrayActiveYears[i]).css('-webkit-animation', 'traslation-hidden-boxmonths .7s ease-in-out forwards');
            }
        }
        __arrayActiveYears.shift();
        __arrayActiveYears.push(__getYear);
        $('#boxMonths' + __getYear).css('-webkit-animation', 'traslation-show-boxmonths .7s ease-in-out forwards');
        $("ul[id^='row-months" + __getYear + "']").removeClass('d-none');
        $("ul[id^='row-months" + __getYear + "']").addClass('d-flex');
    });
    $('li[class^="button-Months"]').on('click', function (event) {
        let __date = new getMonth(event);
        let __monthString = __date.getMonth().slice(0, -4);
        __getYear = __date.getMonth().slice(-4);
        let __arrayMonths = new arrayMonths().arrayMonths();
        for (var i = 0; i < __arrayMonths.length; i++) {
            if (__monthString === __arrayMonths[i]) {
                __getMonth = i + 1;
                break;
            }
        }
        $('#boxMonths' + __getYear).css('-webkit-animation', 'traslation-hidden-boxmonths .7s ease-in-out forwards');
        $('.calendar-box').css('-webkit-animation', 'traslation-return-month-calendar 1s ease-in-out forwards');
        $('.calendar-box-years').css('-webkit-animation', 'traslation-years-calendar 1s ease-in-out forwards');
        removeRows();
        setDataOfDate(__getYear, __getMonth);
        $("ul[id^='row-months']").addClass('d-none');
    });
    $('#days').on('click', function (event) {
        let __date = new getDay(event);
        __getDay = __date.getDay();
        $('#box').removeClass('d-absolute');
        $('#box').addClass('d-none');
        document.getElementById('datepicker-select-months').options[__getMonth - 1].selected = 'selected';
        for (var i = 0; i < __arrayYearslength; i++) {
            __getYear.toString() === __arrayYears[i].toString() ? document.getElementById('datepicker-select-years').options[i].selected = 'selected' : null;
        }
        $('.calendar-box').removeAttr('style');
        $('.calendar-box-years').removeAttr('style');
//        ---------------------------------------
        __numDaysOfMonth = new numDaysOfMonth(__getYear, __getMonth).numDaysOfMonth();
        __arrayNumbers = new arrayNumbers();
        __arrayNumbersOfDays = __arrayNumbers.arrayNumbers(__numDaysOfMonth);
        __optionsOpt = new optionsOnSelect();
        $('#datepicker-select-days').html('');
        __optionsOpt.optionsOnSelect(__arrayNumbersOfDays, '#datepicker-select-days');
        document.getElementById('datepicker-select-days').options[__getDay - 1].selected = 'selected';
    });
    
    $('#button-calendar').on('click', function () {
        $('#box').toggleClass('d-none');
        $('#box').toggleClass('d-absolute');
        let box = $('#box').offset();
        let button = $('#button-calendar').offset();
        let boxtop = box['top'];
        let boxleft = box['left'];
        let buttontop = button['top'];
        let buttonleft = button['left'];
        box['left'] < 0 ? boxleft = 0 : null;
        box['top'] < 0 ? boxtop = 0 : null;
        box['left'] + 270 > screenWidth ? boxleft = buttonleft - 270 : null;
        box['top'] + 250 > screenHeigth ? boxtop = buttontop - 250 : null;
        $('#box').offset({top: boxtop, left: boxleft});
    });
//    datepickers selects----------------------------------------------------
    let __numDaysOfMonth = new numDaysOfMonth(__getYear, __getMonth).numDaysOfMonth();
    let __optionsOpt = new optionsOnSelect();
    let __arrayNumbers = new arrayNumbers();
    let __arrayNumbersOfDays = __arrayNumbers.arrayNumbers(__numDaysOfMonth);
    __optionsOpt.optionsOnSelect(__arrayNumbersOfDays, '#datepicker-select-days');
    document.getElementById('datepicker-select-days').options[__getDay - 1].selected = 'selected';
    __optionsOpt = new optionsOnSelect();
    __optionsOpt.optionsOnSelect(__arrayMonths, '#datepicker-select-months');
    document.getElementById('datepicker-select-months').options[__getMonth - 1].selected = 'selected';
    __optionsOpt = new optionsOnSelect();
    __optionsOpt.optionsOnSelect(__arrayYears, '#datepicker-select-years');
    document.getElementById('datepicker-select-years').options[100].selected = 'selected';
//    change options
    $('#datepicker-select-days').on('change', function () {
        __getDay = $(this).val();
    });
    $('#datepicker-select-months').on('change', function () {
        __getMonth = document.getElementById('datepicker-select-months').selectedIndex + 1;
//        ---------------------------
        __numDaysOfMonth = new numDaysOfMonth(__getYear, __getMonth).numDaysOfMonth();
        __arrayNumbers = new arrayNumbers();
        __arrayNumbersOfDays = __arrayNumbers.arrayNumbers(__numDaysOfMonth);
        __optionsOpt = new optionsOnSelect();
        $('#datepicker-select-days').html('');
        __optionsOpt.optionsOnSelect(__arrayNumbersOfDays, '#datepicker-select-days');
        document.getElementById('datepicker-select-days').options[__getDay - 1].selected = 'selected';
    });
    $('#datepicker-select-years').on('change', function () {
        __getYear = $(this).val();
    });
    //});
}

function imprimir() {
    let length = arguments.length;
    for (var i = 0; i < length; i = i + 2) {
        console.log(arguments[i] + ': ' + arguments[i + 1]);
    }
}
function captura_click(e) {//arreglar para hacerlo privado
// Funcion para capturar el click del raton
    var HaHechoClick;
    if (e === null) {
// Si hac click un elemento, lo leemos
        HaHechoClick = e.srcElement.id;
    } else {
// Si ha hecho click sobre un destino, lo leemos
        HaHechoClick = e.target.id || e.target.tagName;
    }
// Una prueba con salida en consola
    return HaHechoClick;
}
function setDataOfDate(year, month) {//arreglar datos de elementos donde se van a insertar
    let __getDate = new getDate(year, month, '1');
    let __daysHTML = new daysHTML(7);
    let __createRows = new createRows(6, 'row');
    let __addNumberOfDays = new addNumberOfDays(year, month);
    $('#title-month').text(__getDate.monthString() + " " + __getDate.year());
    $('#days').html(__daysHTML.daysHTML());
    $(__createRows.createRows()).appendTo('#days');
    __addNumberOfDays.addNumberOfDays();
}
function setDataOfMonths(elementName) {
    let __createRows = new createRows(3, 'row-months' + elementName.slice(-4) + '-').createRows();
    let __addMonthsToYears = new addMonthsToYears(elementName.slice(-4));
    this.setDataOfMonths = function () {
        let __element = document.createElement('div');
        __element.id = 'boxMonths' + elementName.slice(-4);
        __element.innerHTML = __createRows;
        $(__element).insertAfter(elementName);
        __addMonthsToYears.addMonthsToYears();
    };
}
function arrayYears() {
    let __nowDate = new nowDate();
    let __year = [];
    this.arrayYears = function () {
        for (var i = 0; i <= 200; i++) {
            __year[i] = __nowDate.nowYear() - 100 + i;
        }
        return __year;
    };
}
function arrayMonths() {
    let __months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.arrayMonths = function () {
        return __months;
    };
}
function arrayDays() {
    let __days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.arrayDays = function () {
        return __days;
    };
}
function nowDate() {
    let __date = new Date();
    let __nowDate = new getDate(__date.getFullYear(), __date.getMonth() + 1, __date.getDate());
    this.nowDay = function () {
        return __nowDate.day();
    };
    this.nowMonth = function () {
        return __nowDate.month();
    };
    this.nowYear = function () {
        return __nowDate.year();
    };
    this.nowDayString = function () {
        return __nowDate.dayString();
    };
    this.nowMonthString = function () {
        return __nowDate.monthString();
    };
}
function getDate(year, month, day) {
    let __date = arguments.length === 0 ? new Date() : new Date(year, month - 1, day);
    let __arrayMonths = new arrayMonths().arrayMonths();
    let __arrayDays = new arrayDays().arrayDays();
    let __nowDayInt = __date.getDate();
    let __nowMonthInt = __date.getMonth() + 1;
    let __nowDayString;
    __arrayDays.forEach(element => {
        __date.toDateString().slice(0, 3) === element.slice(0, 3) ? __nowDayString = element : null;
    });
    let __nowMonthString = __arrayMonths[__nowMonthInt - 1];
    let __nowYear = __date.getFullYear();
    this.day = function () {
        return __nowDayInt;
    };
    this.month = function () {
        return __nowMonthInt;
    };
    this.year = function () {
        return __nowYear;
    };
    this.dayString = function () {
        return __nowDayString;
    };
    this.monthString = function () {
        return __nowMonthString;
    };
}
function numDaysOfMonth(year, month) {
    let __numDaysOfMonth = new Date(year, month, 0).getDate();
    let __firstDayOfMonth = new Date(year, month - 1, '1').toDateString();//fecha del primer dia del mes
    this.numDaysOfMonth = function () {
        return __numDaysOfMonth;
    };
    this.firstDayOfMonth = function () {
        return __firstDayOfMonth;
    };
}
function daysHTML(numberColumns) {
    let __arrayDays = new arrayDays().arrayDays();
    let __html = '<ul class="d-flex flex-row m-0 px-2 py-1 w-100">';
    this.daysHTML = function () {
        for (var i = 0; i < numberColumns; i++) {
            __html += ' <li class="w-100 text-center">\n\
                    <h6 class="textName">' + __arrayDays[i].slice(0, 2) + '</h6>\n\
                </li>';
        }
        __html += '</ul>';
        return __html;
    };
}
function createRows(numberRows, idName) {
    let __html = '';
    this.createRows = function () {
        for (var i = 0; i < numberRows; i++) {
            __html += '<ul class="d-flex flex-row text-center px-2 py-0 m-0 " id="' + idName + (i + 1) + '"></ul>';
        }
        return __html;
    };
}
function addMonthsToYears(year) {
    let __arrayMonths = new arrayMonths().arrayMonths();
    let __counter = 0;
    let __html = '';
    this.addMonthsToYears = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                __html += '<li class="button-Months rounded-1 text-center w-100" id="' + __arrayMonths[__counter] + year + '">' + __arrayMonths[__counter].slice(0, 3) + '</li>';
                __counter++;
            }
            $(__html).appendTo('#row-months' + year + '-' + (i + 1));
            __html = '';
        }
    };
}
function addNumberOfDays(nowYear, nowMonth) {
    let __function = new numDaysOfMonth(nowYear, nowMonth);
    let __firstDayOfMonthString = __function.firstDayOfMonth().slice(0, 3);
    let __numDaysOfMonth = __function.numDaysOfMonth();
    let __arrayDays = new arrayDays().arrayDays();
    let __function2 = new nowDate();
    let __nowDate = __function2.nowYear() + '-' + __function2.nowMonth() + '-0' + __function2.nowDay();
    let __previousSunday = new lastSundayInt(nowYear, nowMonth - 1).lastSundayInt();
    let __html = '';
    let __numDays = 0;
    let __counter = 0;
    let __currentDate = '';
    this.addNumberOfDays = function () {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                if (i === 0) {
                    if (__firstDayOfMonthString === __arrayDays[j].slice(0, 3) && __numDays <= __numDaysOfMonth) {
                        __counter = 1;
                    } else if (__counter === 0) {
                        __html += '<li class="button-noDays rounded-1 text-center w-100">' + __previousSunday + '</li>';/*vacio*/
                        __previousSunday++;
                    }
                }
                if (__numDays >= __numDaysOfMonth) {
                    __counter = 0;
                    __numDays++;
                    __html += '<li class="button-noDays rounded-1 text-center w-100">' + (__numDays - __numDaysOfMonth) + '</li>';/*vacio*/
                }
                if (__counter === 1) {
                    __numDays++;
                    __currentDate = nowYear + "-" + nowMonth + "-0" + __numDays;
                    __currentDate === __nowDate ? __html += '<li class="button-Days rounded-1 text-center w-100 bg-info" id="' + __currentDate + '">' + __numDays + '</li>' : __html += '<li class="button-Days rounded-1 text-center w-100" id="' + __currentDate + '">' + __numDays + '</li>';//lleno
                }
            }
            $(__html).appendTo('#row' + (i + 1));
            __html = '';
        }
    };
}
function addYears() {
    let __year = new arrayYears().arrayYears();
    let __html = '';
    this.addYears = function () {
        for (var i = 0; i <= 200; i++) {
            __html += '<div id="boxyear' + __year[i] + '"><div class="calendar-title rounded d-flex justify-content-between fw-bolder px-2 py-1 align-items-center my-1 mx-2" id="year' + __year[i] + '"><h6 class="m-0" value="' + __year[i] + '" id="h6year' + __year[i] + '">' + __year[i] + '</h6></div></div>';
        }
        $('.calendar-box-years').append(__html);
        $('.calendar-box-years').scrollTop($('.calendar-box-years').height() * 27 / 2);
    }
}
function removeRows() {
    for (var i = 1; i <= 6; i++) {
        let row = document.getElementById('row' + i);
        row.remove();
    }
}
function getYear(clickEvent) {
    let __item;
    let __year = new arrayYears().arrayYears();
    this.getYear = function () {
        __item = captura_click(clickEvent);
        __year.forEach(element => {
            return __item.slice(-4) === element ? __item : null;
        });
        return __item.slice(-4);
    };
}
function getMonth(clickEvent) {
    let __item;
    let __month = new arrayMonths().arrayMonths();
    this.getMonth = function () {
        __item = captura_click(clickEvent);
        __month.forEach(element => {
            return __item === element ? __item : null;
        });
        return __item;
    };
}
function getDay(clickEvent) {
    let __item = '';
    this.getDay = function () {
        __item = captura_click(clickEvent);
        __item = __item.slice(-2);
        return __item;
    };
}
function lastSundayInt(year, month) {
    let __arrayDays = new arrayDays().arrayDays();
    let __arrayDaysLength = __arrayDays.length;
    let __function = new numDaysOfMonth(year, month);
    let __numDaysOfMonth = __function.numDaysOfMonth();
    let __firstDayOfMonth = __function.firstDayOfMonth().slice(0, 3);
    let __totalOfWeeks = Math.ceil((__numDaysOfMonth) / 7);
    let __lastSunday = ((__totalOfWeeks - 1) * 7) + 1;
    this.lastSundayInt = function () {
        for (var i = 0; i < __arrayDaysLength; i++) {
            __firstDayOfMonth === __arrayDays[i].slice(0, 3) ? __lastSunday -= i : null;
        }
        return __lastSunday;//retorna en números
    };
}
function optionsOnSelect() {
    let __html = '';
    this.optionsOnSelect = function (arrayOptions, selectName) {
        let __length = arrayOptions.length;
        for (var i = 0; i < __length; i++) {
            __html += i === 0 ? '<option selected value="' + arrayOptions[i] + '">' + arrayOptions[i] + '</option>' : '<option value="' + arrayOptions[i] + '">' + arrayOptions[i] + '</option>';
        }
        $(selectName).html(__html);
    };
}
function arrayNumbers() {
    let __array = [];
    this.arrayNumbers = function (length) {
        for (var i = 1; i <= length; i++) {
            __array[i - 1] = i;
        }
        return __array;
    };
}
