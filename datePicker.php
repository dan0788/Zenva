<!doctype html>
<html lang="es">
    <head>
        <title>title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="">
        <meta name="keywords" content="">
        <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
        <script defer src="font_awesome/js/all.js"></script>
        <link rel="stylesheet" href="font_awesome/css/all.css">

        <link rel="stylesheet" href="bootstrap5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="bootstrap5/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <!----------------------------------------------------------->
        <script type="text/javascript" src="datePicker.js?ts=<?= time() ?>"></script>
        <link rel="stylesheet" href="css/datePicker.css?ts=<?= time() ?>">

    </head>
    <body>
        <script type="text/javascript">
            $.ajax('datePicker.html', {
                success: function (data) {
                    $('body').prepend(data);
                }
            }).fail(function (request, errorType, errorMessage) {
                $('body').prepend(errorMessage);
            });
        </script>
        <div class="datepicker"></div><div class="datepicker"></div>

        <ul style="margin: 0;">
            <li><span class="icon login"></span> Login</li>
            <li><span class="icon tps"></span> TPS Reports</li>
            <li><span class="icon twitter"></span> Twitter</li>
        </ul>
        

    </body>
</html>
