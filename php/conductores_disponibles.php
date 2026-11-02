<?php

include("conexion.php");

$sql = "SELECT * FROM conductor";
$stmt = $conexion->prepare($sql);
$stmt->execute();

$rutas = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($conductores as $conductor){
?>

<div class="ruta">
    <strong><?php echo $ruta['ruta']; ?></strong>

    <span>
        <?php echo $ruta['ruta']; ?>
    </span>
</div>

<?php
}
?>