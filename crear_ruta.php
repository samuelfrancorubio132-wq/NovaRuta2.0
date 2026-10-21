<?php
require(conexion.php);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero = $_POST['numero'];
    $paraderos = $_POST['paraderos'];
    $destino_inicial = $_POST['destino_inicial'];
    $destino_final = $_POST['destino_final'];
    
}

