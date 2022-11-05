<?php
include './conexion.php';
class functions{
    function getInfoFromTable($usuario,$contraseña,$database,$tablename,$sentenciaSql){
        $a=new conection();
        $a->conectar($usuario, $contraseña, $database);
        $data=$a->getInfofromDB($sentenciaSql);
        $a->cerrarConexion();
        return json_encode($data, JSON_FORCE_OBJECT);        
    }
}