<?php

class conection {

    public $mbd;

    function conectar($usuario, $contraseña, $dbname) {
        try {
            $this->mbd = new PDO('mysql:host=localhost;dbname=' . $dbname, $usuario, $contraseña);
            return $this->mbd;
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function cerrarConexion() {
        return $this->mbd = null;
    }

    function showInfo($tablename) {//sobra funcion
        try {
            foreach ($this->mbd->query('SELECT * from ' . $tablename) as $fila) {
                $counter = 0;
                foreach ($fila as $key => $value) {
                    if ($key == $counter) {
                        echo $value . ", ";
                        $counter++;
                    }
                }
                echo "<br/>";
            }
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getInfofromDB($sentenciaSql) {
        try {
            $newfila = [];
            $counterEachRow = 1;
            foreach ($this->mbd->query($sentenciaSql) as $fila) {
                $counter = 0;
                foreach ($fila as $key => $value) {
                    if ($key != $counter) {
                        $n[$key] = $value;
                    } else {
                        $counter++;
                    }
                }$newfila[$counterEachRow] = $n;
                $counterEachRow++;
            }
            return $newfila;
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function setInfoToDB($tablename, $columnas, $data, $lastID) {
        $lastID = $lastID + 1;
        $stmt = $this->mbd->prepare("insert into " . $tablename . "(" . $columnas . ") values(" . $lastID .",". $data . ")");
        $stmt->execute();
    }

    function counterRows($tablename) {
        foreach ($this->mbd->query('SELECT MAX(ID) AS ID FROM ' . $tablename) as $fila) {
            $id = $fila[0];
        }
        return $id;
    }

    function getInfoFromHTML($data) {
        var_dump($data);
    }

}
