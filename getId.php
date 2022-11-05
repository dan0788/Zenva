<?php

include './funciones.php';

class getId {

    function getId() {
        $value = $_POST['value'];
        $localData=$_POST['localData'];
        $columnNametoSearch=$_POST['columnNametoSearch'];
        $d = new functions();
        $val=$d->getInfoFromTable("root", "", "zenva", $localData, "select * from ".$localData." where ".$columnNametoSearch."='".$value."'");
        return $val;
    }

}
$g=new getId();
echo $g->getId();
