<?php
require(conexion.php);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $editar1 = $_POST['editar1'];
    $editar2 = $_POST['editar2'];
    $editar3= $_POST['editar3'];
    $editar4= $_POST['editar4'];
    
}

$sql = "UPDATE rutas
        SET editar1 = :editar1,
        editar2 = :editar2,
        editar3 = editar3,
        editar4 = editar4,
        WHERE id = :id";

$stmt = $conexion->prepare($sql);

$stmt->bindParam(":editar1", $editar1);
$stmt->bindParam(":editar2", $editar2);
$stmt->bindParam(":editar3", $editar3);
$stmt->bindParam(":editar4", $editar4);
$stmt->bindParam(":id", $id);

$stmt->execute();

echo "Registro actualizado";
?>