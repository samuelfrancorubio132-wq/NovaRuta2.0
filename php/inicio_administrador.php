<?php
requiere("conexion.php");


if($_SERVER["REQUEST_METHOD"] == "post") {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $password = $_POST['password'];
}
?>