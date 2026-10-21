<?php
require(conexion.php);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cedula = $_POST['cedula'];
    $placa = $_POST['placa'];
    $password = $_POST['password'];
    
}
?>