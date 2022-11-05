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
        <link rel="stylesheet" href="bootstrap5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="bootstrap5/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        <link rel="stylesheet" href="css/ingreso.css?ts=<?= time() ?>">
        <link rel="stylesheet" href="css/BackgroundImage.css?ts=<?= time() ?>">
        <link rel="stylesheet" href="css/title.css?ts=<?= time() ?>">
        <script src="ingreso.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="header.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="funciones.js?ts=<?= time() ?>" type="text/javascript"></script>
        <script src="validaciones.js?ts=<?= time() ?>" type="text/javascript"></script>
    </head>
    <body>
        <div class="container d-flex justify-content-center">
            <div class="w-25 my-3">
                <form class="text-center">
                    <div class="mb-3 text-center">
                        <label for="exampleInputEmail1" class="form-label fw-bolder">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onkeypress="return solocaracteres(event, 'abcdefghijklmnñopqrstuvwxyz0123456789-_.@')">
                        <div id="emailHelp" class="form-text">Esta página no comparte información personal con ningún usuario externo</div>
                    </div>
                    <div class="mb-3 text-center">
                        <label for="exampleInputPassword1" class="form-label fw-bolder">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required>
                    </div>
                    <div class="mb-3 form-check text-start">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Mantener abierta la sesión</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <script type="text/javascript">
            
            $.ajax('title.html', {
                success: function (response) {
                    $('body').prepend(response);
                }
            }).fail(function (request, errorType, errorMessage) {
                $('body').prepend(errorType + ':' + errorMessage);
            });
            $.ajax('header.html', {
                success: function (response) {
                    $('body').prepend(response);
                }
            }).fail(function (request, errorType, errorMessage) {
                $('body').prepend(errorType + ':' + errorMessage);
            });
//    onclick (html)
            function addUl_btnClick(btnName, ulPosition, styleProperties) {
                $(btnName).attr('aria-expanded') ? $(btnName).removeAttr('aria-expanded') : $(btnName).attr('aria-expanded', 'true');
                $(btnName).toggleClass('show');
                $(btnName).closest('div').children('ul').eq(ulPosition - 1).toggleClass('show');
                $(btnName).closest('div').children('ul').eq(ulPosition - 1).attr('style') ? $(btnName).removeAttr('style') : $(btnName).closest('div').children('ul').eq(ulPosition - 1).attr('style', styleProperties);
            }
            
        </script>

    </body>
</html>

<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

