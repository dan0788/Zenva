<?php

include './funciones.php';

class data {

    function getInfoFromZenvaTable($usuario, $contraseña, $database, $tablename) {
        $optionValue = $_POST['optionValue'];
        $inputValue = $_POST['inputValue'];
        $sentenciaSql = $_POST['inputValue'] === "" ? "select * from BDD_usuarios" : "select * from " . $tablename . " where " . $optionValue . " regexp '^" . $inputValue . "'";
        $a = new functions();
//        echo $sentenciaSql;
        $a->getInfoFromTable($usuario, $contraseña, $database, $tablename, $sentenciaSql);
    }

}

$d = new data();
$d->getInfoFromZenvaTable("root", "", "zenva", "BDD_usuarios");
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

