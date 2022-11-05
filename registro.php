<!doctype html>
<html lang="es">
    <head>
        <title>Blog de citas</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Daniel Ayala">
        <meta name="keywords" content="zenva,citas">
        <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
        <script defer src="font_awesome/js/all.js"></script>
        <link rel="stylesheet" href="font_awesome/css/all.css">

        <link rel="stylesheet" href="bootstrap5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="bootstrap5/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        <script src="datePicker.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="registro.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="header.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="funciones.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="validaciones.js?ts=<?= time() ?>" type="text/javascript"></script>

        <link rel="stylesheet" href="css/registro.css?ts=<?= time() ?>">
        <link rel="stylesheet" href="css/BackgroundImage.css?ts=<?= time() ?>">
        <link rel="stylesheet" href="css/title.css?ts=<?= time() ?>">
    </head>
    <script type="text/javascript">
        $.ajax('title.html', {
            success: function (response) {
                $('body > div').prepend(response);
            }
        }).fail(function (request, errorType, errorMessage) {
            $('body  > div').prepend(errorType + ':' + errorMessage);
        });
        $.ajax('header.html', {
            success: function (response) {
                $('body > div').prepend(response);
            }
        }).fail(function (request, errorType, errorMessage) {
            $('body > div').prepend(errorType + ':' + errorMessage);
        });
        $.ajax('datePicker.json', {
            dataType: 'json',
            success: function (response) {
                $.each(response, function (index, element) {
                    $('#date-birthday > div:last-of-type').prepend(element);
                });
            }
        }).fail(function (request, errorType, errorMessage) {
            $('#date-birthday > div:last-of-type').prepend(errorType + ':' + errorMessage);
        });
        window.addEventListener('load', function () {
            setTimeout(() => {
                datepicker();
                registro();
            }, 500);
        });
//        $.ajax('datePicker.html', {
//            success: function (response) {
//                $('#date-birthday > div:last-of-type').prepend(response);
//            }
//        }).fail(function (request, errorType, errorMessage) {
//            $('#date-birthday > div:last-of-type').prepend(errorType + ':' + errorMessage);
//        });
    </script>
    <body>
        <div class="container-fluid mx-0 px-0">
            <div class="d-flex flex-column w-100 align-items-center">
                <form action="submit" method="POST" class="col-md-5">
                    <div class="row g-3" id="name-lastname">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                        </div>
                    </div>
                    <div class="row align-items-center flex-column" id="date-birthday">
                        <h6 class="col-md-9 fw-bolder py-1 text-center text-pink">
                            Fecha de nacimiento
                        </h6>
                        <div class="col-md-9">
                            <!--datepicker-->
                        </div>
                    </div>
                    <div class="row g-2 flex-row justify-content-around m-0" id="gender-sons">
                        <div class="col-md-4 my-3">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Género:</h6>
                            <select id="gender" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option value="Masculino" selected>Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="col-md-4 my-3">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Hijos:</h6>
                            <select id="sons" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <!--array sons-->
                            </select>
                        </div>
                    </div>
                    <div class="row g-2 flex-row justify-content-around m-0" id="studies-civilstatus">
                        <div class="col-md-4 my-3">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Nivel de estudios:</h6>
                            <select id="studies" class="form-select form-select-sm" aria-label=".form-select-sm example">

                            </select>
                        </div>
                        <div class="col-md-4 my-3">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Estado civil:</h6>
                            <select id="civilstatus" class="form-select form-select-sm" aria-label=".form-select-sm example">

                            </select>
                        </div>
                    </div>
                    <div class="row g-2 flex-row justify-content-around m-0" id="country-city">
                        <div class="col-md-4 my-3">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">País:</h6>
                            <select id="country" class="form-select form-select-sm" aria-label=".form-select-sm example">

                            </select>
                        </div>
                        <div class="col-md-4 my-3">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Ciudad:</h6>
                            <select id="city" class="form-select form-select-sm" aria-label=".form-select-sm example">

                            </select>
                        </div>
                    </div>
                    <div class="row g-2 flex-row justify-content-around m-0" id="telf">
                        <div class="col-md-4">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Teléfono:</h6>
                            <input type="text" class="form-control" placeholder="" aria-label="Telf" onkeypress="return solocaracteres(event, '0123456789')">
                        </div>
                    </div>
                    <div class="row g-2 flex-row justify-content-around m-0">
                        <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Subir fotos</h6>
                    </div>
                    <div class="input-group mb-3 row g-2 flex-row justify-content-around m-0" id="photos">
                        <div class="col-md-10 my-0">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Foto perfil</h6>
                            <input type="file" class="form-control" id="inputGroupFile01">
                        </div>
                        <div class="col-md-10 my-0">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Foto 2</h6>
                            <input type="file" class="form-control" id="inputGroupFile02">
                        </div>
                        <div class="col-md-10 my-0">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Foto 3</h6>
                            <input type="file" class="form-control" id="inputGroupFile03">
                        </div>
                        <div class="col-md-10 my-0">
                            <h6 class="col-md-9 fw-bolder py-1 text-center d-flex justify-content-center w-100 text-pink">Foto 4</h6>
                            <input type="file" class="form-control" id="inputGroupFile04">
                        </div>
                    </div>
                </form>
            </div>

            <!--para el formulario se deben registrar los siguientes datos: -->
            <!--            
                        NOMBRES        name-lastname
                        APELLIDOS      name-lastname
                        FECHA DE NACIMIENTO (LA EDAD LA CALCULA EL SISTEMA)     date-birthday
                        GENERO       gender-sons
                        NIVELESTUDIOS (OPCIONAL)     studies-civilstatus
                        ESTADOCIVIL       studies-civilstatus
                        HIJOS (OPCIONAL)      gender-sons
                        PAIS_RESIDENCIA         country-city
                        CIUDAD_RESIDENCIA       country-city
                        TELEFONO (OPCIONAL)
                        DETALLES (OPCIONAL)
                        FOTO1
                        FOTO2
                        FOTO3 (OPCIONAL)
                        FOTO4 (OPCIONAL)
                        CORREOELECTRONICO
                        USUARIO
                        CONTRASEÑA-->
        </div>
    </body>
</html>
