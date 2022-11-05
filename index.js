$(document).ready(function () {//hacer función para el buscador
    var optionValue = $("#selectSearch option:selected").val();
    var inputValue = $('#search').val();
    ESC();
    fillDivWithZenvaInfoSearch(optionValue, inputValue);
    var cache = [];//convertir cache en varable tipo funcion para volverla privada

//    keyup
    $("#search").on('keyup', function () {
        inputValue = $(this).val();
//      ------------------------  cache manual ----------------------(mi propio cache ;) )
//        recomendación: aprender a crear caché con ajax
        var htmlCache = "";
        inputValue === "" ? null : cache.push(inputValue);
        cache.length <= 5 ? null : cache.shift();
        if (cache.length !== 0) {
            var counter = 0;
            for (var i = 0; i < cache.length; i++)
                inputValue === cache[i] ? counter++ : null;
            for (var i = 0; i < cache.length; i++)
                inputValue === cache[i] && counter >= 2 ? cache.splice(cache.length - 1, 1) : null;
            htmlCache = '<ul id="ulSearch" class="dropdown-menu dropdown-menu-end w-75 container-fluid mx-0 px-2" aria-labelledby="search">';
            for (var i = 0; i < cache.length; i++) {
                htmlCache += '<li class="d-flex flex-row align-items-center"><i class="fas fa-search"></i><a class="dropdown-item" href="#">' + cache[i] + '</a></li>';
            }
            htmlCache += '</ul>';
            var parent = document.getElementById('divSearch');
            var child = document.getElementById('ulSearch');
            parent.removeChild(child);
            $("#divSearch").append(htmlCache);
            child = document.getElementById('ulSearch');
            $("#ulSearch").show();
        }
//      ------------------------------------------------------
        fillDivWithZenvaInfoSearch(optionValue, inputValue);
        if (inputValue !== "") {

        } else {
            // mostrar div de búsquedas reciente si input está vacío, y mostrar alternativas de búsqueda si input está lleno
        }
    });
//    agregar evento q desaparezce ul al hacer click en un elemento
//    change
    $("div").on('change', '#selectSearch', function (e) {//continuar haciendo el buscador, validacion cuando se cambie el select
        optionValue = $("#selectSearch option:selected").val();
        fillDivWithZenvaInfoSearch(optionValue, inputValue);
        e.stopPropagation();
    });

//    mouseover
    
    $("#search").on('mouseover', function () {
        addUl_ulIn($(this), "#meetingTime div div div ul", 'position: absolute;inset: 0px auto auto 0px; margin: 0px; transform: translate(158px, 37px);');
    });
    $("#meetingTime div div div ul").on('mouseover', function () {
        addUl_ulIn("#search", $(this), 'position: absolute;inset: 0px auto auto 0px; margin: 0px; transform: translate(158px, 37px);');
    });
//    mouseout
    $('.box-img img').on('mouseout',function (){console.log("c");
        $(this).css('transition','all 0.3s ease-in-out');
    });
    $(document).on("click", function (e) {
        var container = $("#search");//click fuera del input del buscador
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            removeUl_ulOut("#search", "#meetingTime div div div ul");
        }
    });

});
