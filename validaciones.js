function solocaracteres(event, cadena) {//personalizado
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key).toLowerCase();
    let letras = cadena;
    let especiales = "8-37-39-46";

    let tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}
function validationEmail(event, elementName) {
//    console.log("cant de argumentos:"+arguments.length);
    var bool = false;
    var text = $(elementName).val();
    if (text === '') {
        bool = undefined;
    } else if (text.includes('@')) {
        $(elementName).attr('onkeypress', 'return solocaracteres(event, "abcdefghijklmnñopqrstuvwxyz.")');
        var charIndex = text.indexOf("@");
        text = text.substring(charIndex + 1, text.length);
        if (text.includes('.')) {
            $(elementName).attr('onkeypress', 'return solocaracteres(event, "abcdefghijklmnñopqrstuvwxyz")');
            bool = true;//todo está correcto
        } else {
            $(elementName).attr('onkeypress', 'return solocaracteres(event, "abcdefghijklmnñopqrstuvwxyz.")');
        }
    } else {
        $(elementName).attr('onkeypress', "return solocaracteres(event, 'abcdefghijklmnñopqrstuvwxyz0123456789-_.@')");
    }
    return bool;
}
function ESC() {
    $(document).on('keyup', function (e) {
        if (e.which == 27) {//al presionar ESC desaparecen todos los ul y lo que sea
            removeUl_ulOut("#search", "#meetingTime div div div ul");
            removeUl_ulOut("#btnGroupDrop1", "header div:first-of-type section:nth-of-type(2) div div ul:first-of-type");
            removeUl_ulOut("#btnGroupDrop2", "header div:first-of-type section:nth-of-type(2) div div ul:nth-of-type(2)");
            removeUl_ulOut("#btnGroupDrop3", "header div:first-of-type section:nth-of-type(2) div div ul:last-of-type");
        }
    });
}
function validDiv(boolValue, elementName, correctText, incorrectText) {
    $(document).ready(function () {
//        confirmar si el div existe o no
        var div = $(elementName).parent().children('.validDiv');
        div.length === 0 ? null : div.remove();
//        declaracion de variables
        var newElement = document.createElement("div");
        var element = document.querySelector(elementName);
        var style = document.createElement('style');
//        insertar propiedades al nuevo elemento
        newElement.textContent = boolValue === true ? correctText : boolValue === false ? incorrectText : null;
        if (boolValue === true || boolValue === false) {
            newElement.className = 'validDiv';
            newElement = newElement.outerHTML;//transforma object HTML a String
            element.insertAdjacentHTML('afterend', newElement);
//        crear hoja de estilos para el nuevo div
            style.type = 'text/css';
            style.innerHTML = boolValue === true ? '.validDiv{position: absolute;display: block;max-width: 100%;padding: .25rem .5rem;margin-top: .1rem;font-size: .875rem;color: #fff;background-color: rgba(25,135,84,.8);border-radius: .25rem;}' : boolValue === false ? '.validDiv{position: absolute;display: block;max-width: 100%;padding: .25rem .5rem;margin-top: .1rem;font-size: .875rem;color: #fff;background-color: red;border-radius: .25rem;}' : null;
            document.querySelector(elementName).appendChild(style);
        }
    });
}
function comprobationEmail(boolEmail, elementName, event, correctText, incorrectText) {
    var container = $(elementName);
    var element = document.querySelector(elementName);
    var clases = element.getAttribute('class');
    if (!container.is(event.target)) {//click fuera
        boolEmail === false && !clases.includes('incorrect') ? clases = clases + ' incorrect' : boolEmail === true && !clases.includes('correct') ? clases = clases + ' correct' : null;
        validDiv(boolEmail, elementName, correctText, incorrectText);
        element.setAttribute('class', clases);
    } else if (container.is(event.target)) {
        clases = element.getAttribute('class');
        clases.includes('incorrect') ? clases = clases.replace(' incorrect', '') : clases.includes('correct') ? clases = clases.replace(' correct', '') : null;
        element.setAttribute('class', clases);
        validDiv(undefined, elementName, correctText, incorrectText);
    }
}