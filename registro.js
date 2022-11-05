let __c, __d, __idcountry, __idstates, __arraycities;
class getResult {
    valor = '';
    constructor(data) {
        this.valor = data;
    }
}
$(document).ready(function () {
    $('#country').on('change', function () {
        new getIdCountryInt().getIdCountryInt('getId.php', '#country');
        setTimeout(() => {
            __idcountry = __d.valor;
            new getIdStates().getIdStates('getId.php');
            new getCities().getCities('localities/cities.json', '#city');
            __arraycities.sort();
            new optionsOnSelect().optionsOnSelect(__arraycities, '#city');
        }, 1000);
    });
});
function registro() {
    ESC();
//    en el documento html tiene que estar añadido datePicker.js
    let __arraySons = [];
    for (var i = 0; i < 11; i++) {
        __arraySons[i] = i;
    }
    new optionsOnSelect().optionsOnSelect(__arraySons, '#sons');
    let __arrayStudies = ["", "Primaria incompleta", "Primaria completa", "Secundaria incompleta", "Secundaria completa", "Universidad incompleta", "Universidad completa", "Maestría incompleta", "Maestría completa", "Doctorado incompleto", "Doctorado completo"];
    new optionsOnSelect().optionsOnSelect(__arrayStudies, '#studies');
    let __arrayCivilstatus = ["", "Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a", "Unión Libre"];
    new optionsOnSelect().optionsOnSelect(__arrayCivilstatus, '#civilstatus');
    new countries().countries('localities/countries.json', '#country');
    new getIdCountryInt().getIdCountryInt('getId.php', '#country');
    setTimeout(() => {
        __idcountry = __d.valor;
        new getIdStates().getIdStates('getId.php');
        new getCities().getCities('localities/cities.json', '#city');
        __arraycities.sort();
        new optionsOnSelect().optionsOnSelect(__arraycities, '#city');
    }, 1000);
//    falta colocar ciudades de cada pais con api de google
    /*
     * ecuador: https://gist.githubusercontent.com/emamut/6626d3dff58598b624a1/raw/166183f4520c4603987c55498df8d2983703c316/provincias.json
     */
//});
}

function countries() {
    let __arrayCountries = [];
    let __array = [];
    this.countries = function (urlCountries, selectName) {
        $.ajax(urlCountries, {
            dataType: 'json',
            cache: false
        }).done(function (response) {
            $.each(response, function (index, element) {
                $.each(element, function (indice, elemento) {
                    $.each(elemento, function (ind, elem) {
                        ind === 'name' ? __arrayCountries.push(elem) : __array.push(elem);
                    });
                });
            });
            new optionsOnSelect().optionsOnSelect(__arrayCountries, selectName);
        }).fail(function (request, errorType, errorMessage) {
            console.log(errorType);
        });
    };
}
function getIdCountryJSON() {
    this.getIdCountryJSON = function (urlCountries, selectName) {
        return $.ajax(urlCountries, {
            data: {'value': $(selectName).val(), 'localData': 'countries', 'columnNametoSearch': 'name'},
            async: false,
            type: 'POST',
            dataType: 'json',
            success: function (response) {
//                    console.log(response.JSON);
            }
        }).done(function (response) {
//            console.log(response);
        }).fail(function (request, errorType, errorMessage) {
            console.log(errorMessage);
        });
    };
}
function getIdCountryInt() {
    this.getIdCountryInt = function (urlCountries, selectName) {
        setTimeout(() => {
            __c = new getResult(new getIdCountryJSON().getIdCountryJSON(urlCountries, selectName));
            setTimeout(() => {
                __d = new getResult(__c.valor.responseJSON[1].id);
            }, 250);
        }, 500);
    };
}
function getIdStates() {
    this.getIdStates = function (urlParroquies) {
        return $.ajax(urlParroquies, {
            data: {'value': __idcountry, 'localData': 'states', 'columnNametoSearch': 'id_country'},
            async: false,
            type: 'POST',
            dataType: 'json',
            cache: false
        }).done(function (response) {
            __idstates = [];
            $.each(response, function (index, element) {
                $.each(element, function (indice, elemento) {
                    indice === 'id' ? __idstates.push(elemento) : null;
                });
            });
        }).fail(function (request, errorType, errorMessage) {
            console.log(errorMessage);
        });
    };
}
function getCities() {
    let  __length = __idstates.length;
    __arraycities = [];
    this.getCities = function (urlCountries, selectName) {
        for (var i = 0; i < __length; i++) {
            let number = __idstates[i];
            $.ajax(urlCountries, {
                async: false,
                type: 'POST',
                dataType: 'json',
                cache: false
            }).done(function (response) {
                $.each(response, function (index, element) {
                    $.each(element, function (indice, elemento) {
                        let el = elemento.id_state.toString();
                        el === number ? __arraycities.push(elemento.name) : null;
                    });
                });
            }).fail(function (request, errorType, errorMessage) {
                console.log(errorMessage);
            });
        }
    };
}