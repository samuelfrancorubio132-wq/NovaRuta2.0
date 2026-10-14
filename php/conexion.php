<?php

$servername = "localhsot";
$username = "root";
$password = "";
$dbname = "novaruta_manizales";

#crear conexion
$conn = new mysqli($servername, $username, $password, $dbname); #define los datos de conexion
#conn es la variable que va a guardar todos los datos de conexion 

// verificar la conexion
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error); #el coneect_error es como algo mas especifico y el conn es mas gneral
}
?>