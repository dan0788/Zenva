<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Blog de citas</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Daniel Ayala">
        <meta name="keywords" content="zenva,citas">
        <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
        <script defer src="font_awesome/js/all.js"></script>
        <link rel="stylesheet" href="bootstrap5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="bootstrap5/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <!--         Bootstrap CSS 
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
                 Option 1: Bootstrap Bundle with Popper 
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>-->

        <link rel="stylesheet" href="css/custom.css?ts=<?= time() ?>">
        <!--<link rel="stylesheet" media="print" href="css/print.css?ts=<?= time() ?>">-->
        <script src="index.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="header.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="funciones.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="validaciones.js?ts=<?= time() ?>" type="text/javascript"></script>
    </head>
    <body>
        <div class="container-fluid px-0">
            <script type="text/javascript">
                $.ajax('header.html', {
                    success: function (response) {
                        $('body').prepend(response);
                    }
                }).fail(function (request, errorType, errorMessage) {
                    $('body').prepend(errorType + ':' + errorMessage);
                });
            </script>
            <div id="meetingTime" class="container-fluid mx-0 px-5 justify-content-center"><!--div 2 de meetingTime-->
                <div class="row flex-column">
                    <h4 class="text-center">Meeting Time</h4>
                    <h5 class="text-center">Buscar</h5>
                </div>
                <div class="d-flex flex-row justify-content-center w-100">
                    <!-----------------------barra de búsqueda------------------------------>
                    <div class="input-group mb-3 w-50">
                        <select id="selectSearch" class="form-select btn-outline-secondary" aria-label="Default select example"><!--validacion en select para cada option seleccionado-->
                            <option value="Nombres" selected>Nombre:</option>
                            <option value="Apellidos">Apellido:</option>
                            <option value="Edad">Edad:</option>
                            <option value="Genero">Género:</option>
                            <option value="Pais_residencia">País y ciudad:</option>
                        </select>
                        <div id="divSearch">
                            <input id="search" type="text" class="form-control" aria-label="Text input with dropdown button" onkeypress="return solocaracteres(event, ' áéíóúabcdefghijklmnñopqrstuvwxyz0123456789')" onclick="addUl_btnClick('#search', 1, 'inset: 0px auto auto 0px; margin: 0px;')"><!--colocar validaciones en input cuando cambie la option-->
                            <ul id="ulSearch" class="dropdown-menu dropdown-menu-end w-75 container-fluid mx-0 px-2" aria-labelledby="search">
                                <li class="d-flex flex-row align-items-center"><i class="fas fa-search"></i><a class="dropdown-item" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <!---------------------------------------------------------------------->
                </div>
            </div>
            <main class="container-fluid mx-0 px-5 row flex-row">
                
            </main>
        </div>
        <script type="text/javascript">

//    onclick (html)
            function addUl_btnClick(btnName, ulPosition, styleProperties) {
                $(btnName).attr('aria-expanded') ? $(btnName).removeAttr('aria-expanded') : $(btnName).attr('aria-expanded', 'true');
                $(btnName).toggleClass('show');
                $(btnName).closest('div').children('ul').eq(ulPosition - 1).toggleClass('show');
                $(btnName).closest('div').children('ul').eq(ulPosition - 1).attr('style') ? $(btnName).removeAttr('style') : $(btnName).attr('style', styleProperties);
            }
//            crear contador de clicks para mejorar la experiencia del usuario
//problema: ul de input está desapareciendo al mouseout del input
//problema: al ingresar una foto, el programa debe recortar la imagen hasta
        </script>
    </body>
</html>

<?php
// put your code here
?>