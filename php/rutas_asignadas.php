<?php
require(conexion.php);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $escribir = $_POST['escribir'];
    
}
$sql = "INSERT INTO novedades (escribir)
        VALUES (:escribir)";

$stmt = $conexion->prepare($sql);

$stmt->bindParam(":escribir", $escribir);


$stmt->execute();

echo "Registro insertado correctamente";
?>