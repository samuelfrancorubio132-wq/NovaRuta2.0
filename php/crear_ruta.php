<?php
require(conexion.php);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero = $_POST['numero'];
    $paraderos = $_POST['paraderos'];
    $destino_inicial = $_POST['destino_inicial'];
    $destino_final = $_POST['destino_final'];
    
}

$sql ="INSERT INTO rutas (numero, paraderos, destino_inicial, destino_final)
                VALUES (:numero, :paraderos, :destino_inicial, :destino_final)";

$stmt = $conecion->prepare($sql);

$stmt->bindParam(":numero", $numero);
$stmt->bindParam(":paraderos", $paraderos);
$stmt->bindParam(":destino_inicial", $destino_inicial);
$stmt->bindParam(":destino_final", $destino_final);

$stmt->execute();

echo "Registro insertado correctamente"
?>

