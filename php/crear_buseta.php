<?php

require("conexion.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $marca = $_POST['marca'];
    $carroceria = $_POST['carroceria'];
    $modelo = $_POST['modelo'];
   
    
}

 $sql = "INSERT INTO Buseta(marca,carroceria,modelo)
  VALUES('$marca,'$carroceria', '$modelo')";

  // Env iar la Sentencia a MYSQL
  if ($conn->query($sql)=== TRUE) {
    $mensaje = "Resgistro Guardado correctamente";
    $clase = "msg";
    } else {
        $mensaje = "Error:". $conn->error; // ej. codigo duplicado
    $clase = "msg err";
}