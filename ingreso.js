$(document).ready(function () {
    ESC();
    var boolEmail;

    $('form button').on('click', function (event) {
        boolEmail = validationEmail(event, '#exampleInputEmail1');
        $('form').on('submit', function (e) {
            e.preventDefault();
            //pendiente para guardar los datos obtenidos de los input
        });
    });
    $('#exampleInputEmail1').on('keyup', function (event) {
        boolEmail = validationEmail(event, '#exampleInputEmail1');
    });
    $(document).on('keyup', function (e) {
        if (e.which == 27) {//al presionar ESC
            $('#exampleInputEmail1').blur();
            $('#exampleInputPassword1').blur();
        }
        if (e.which == 13) {//al presionar ENTER
            //pendiente para guardar los datos obtenidos de los input
            $('form button').focus();
            emptyFieldForm();
        }
        if (e.which === 9) {//al presionar Tab
            comprobationEmail(boolEmail, '#exampleInputEmail1', e, 'Correcto', 'Formato de correo electrónico incorrecto');
        }
    });
    $(document).on('click', function (event) {
        comprobationEmail(boolEmail, '#exampleInputEmail1', event, 'Correcto', 'Formato de correo electrónico incorrecto');
        var container = $("#exampleInputPassword1");//click fuera
        if (!container.is(event.target)) {

        }
    });
});
