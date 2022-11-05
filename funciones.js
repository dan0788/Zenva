//class functions{
//    onmouseover (html)
function addUl_btnIn(btnName, ulPosition, styleProperties) {
    $(btnName).attr('aria-expanded', 'true');
    $(btnName).addClass('show');
    $(btnName).closest('div').children('ul').eq(ulPosition - 1).addClass('show');
    $(btnName).closest('div').children('ul').eq(ulPosition - 1).attr('style', styleProperties);
}
function addUl_ulIn(btnName, ulName, styleProperties) {
    $(btnName).attr('aria-expanded', 'true');
    $(btnName).addClass('show');
    $(ulName).addClass('show');
    $(ulName).attr('style', styleProperties);
}
//    onmouseout (html)
function removeUl_btnOut(btnName, ulPosition) {
    $(btnName).attr('aria-expanded', 'false');
    $(btnName).removeClass('show');
    $(btnName).closest('div').children('ul').eq(ulPosition - 1).removeClass('show');
    $(btnName).closest('div').children('ul').eq(ulPosition - 1).removeAttr('style');
}
function removeUl_ulOut(btnName, ulName) {
    $(btnName).attr('aria-expanded', 'false');
    $(btnName).removeClass('show');
    $(ulName).removeClass('show');
    $(ulName).removeAttr('style');
}
//    click fuera de los elementos

//    ----------------------------------------------------------
function fillDivWithZenvaInfoSearch(optionValue, inputValue) {
    $.ajax('getData.php', {
        dataType: 'json',
        data: {'optionValue': optionValue, 'inputValue': inputValue},
        type: 'POST',
        cache: false,
        success: function (data) {
//                console.log("success");
        }
    }).done(function (response) {
        var html = "";
        var text = [];
        $.each(response, function (index, element) {
            $.each(element, function (indice, elemento) {
                if (indice === "Nombres") {//cambiar al mejorar la apariencia de los contenedores,también guardar los no repetidos en array global
                    text[0] = elemento + " ";
                }
                if (indice === "Apellidos") {//cambiar al mejorar la apariencia de los contenedores,también guardar los no repetidos en array global
                    text[0] += elemento;
                }
                indice === "Genero" && elemento === "Masculino" ? text[1] = "box-img-men" : indice === "Genero" && elemento === "Femenino" ? text[1] = "box-img-women" : indice === "Foto1" ? text[2] = elemento : indice === "Edad" ? text[3] = elemento : indice === "Pais_residencia" ? text[4] = elemento : indice === "Ciudad_residencia" ? text[4] += ", " + elemento : null;
            });
            html += "<div id='crew' class='p-2 row col-3 mx-0 bg-transparent'>\n\
                            <div class='border border-danger rounded mx-0 p-2 d-flex flex-row align-items-center bg-light'>\n\
                                <div class='rounded " + text[1] + " box-img flex-fill'>\n\
                                    <img class='rounded' src='" + text[2] + "' alt='Foto de perfil'>\n\
                                </div>\n\
                                <div class='px-2 flex-fill d-flex flex-column d-grid gap-2'>\n\
                                    <h5 class='box-name text-white-overflow text-center m-0'>" + text[0] + "</h5>\n\
                                    <h5 class='box-info text-white-overflow m-0'>Edad: " + text[3] + "</h5>\n\
                                    <h5 class='box-info text-white-overflow m-0'>" + text[4] + "</h5>\n\
                                </div>\n\
                                <div class='d-grid gap-2 px-1 flex-fill align-content-around'>\n\
                                    <button class='btn btn-secondary button-option p-0' type='button'>Info</button>\n\
                                    <button class='btn btn-secondary button-option p-0' type='button'>Follow</button>\n\
                                    <button class='btn btn-secondary button-option p-0' type='button'>Send SMS</button>\n\
                                </div>\n\
                            </div>\n\
                        </div>";
            text = [];

        });
        $("main").html(html);
    }).fail(function (request, errorType, errorMessage) {
        $("main").text(errorMessage);
    });
}
//$(document).on("click", function (e) {
//    var container = $("#search");//click fuera del input del buscador
//    if (!container.is(e.target) && container.has(e.target).length === 0) {
//        removeUl_ulOut("#search", "#meetingTime div div div ul");
//    }
//    container = $("#btnGroupDrop1");//click fuera del boton 1
//    if (!container.is(e.target) && container.has(e.target).length === 0) {
//        removeUl_ulOut("#btnGroupDrop1", "header div:first-of-type section:nth-of-type(2) div div ul:first-of-type");
//    }
//    container = $("#btnGroupDrop2");//click fuera del boton 2
//    if (!container.is(e.target) && container.has(e.target).length === 0) {
//        removeUl_ulOut("#btnGroupDrop2", "header div:first-of-type section:nth-of-type(2) div div ul:nth-of-type(2)");
//    }
//    container = $("#btnGroupDrop3");//click fuera del boton 3
//    if (!container.is(e.target) && container.has(e.target).length === 0) {
//        removeUl_ulOut("#btnGroupDrop3", "header div:first-of-type section:nth-of-type(2) div div ul:last-of-type");
//    }
//});
