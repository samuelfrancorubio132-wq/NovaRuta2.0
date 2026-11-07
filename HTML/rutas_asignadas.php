<section class="panel-rutas">

    <h2>Rutas asignadas</h2>

<?php


require_once __DIR__ . '/../php/conexion.php';
session_start();

// Verificar sesión
if (!isset($_SESSION['id_conductor'])) {
    die("No has iniciado sesión como conductor.");
}

// Obtener ID del conductor
$id_conductor = $_SESSION['id_conductor'];

// Consultar rutas asignadas
$sql = "SELECT * FROM ruta WHERE id_conductor = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("i", $id_conductor);

$stmt->execute();

// Guardar resultados
$resultado = $stmt->get_result();

?>

?>

            <div class="ruta">

                <div class="hora">
                    <?= htmlspecialchars($ruta['hora_inicio'] ?? '') ?>
                    -
                    <?= htmlspecialchars($ruta['hora_fin'] ?? '') ?>
                </div>

                <div class="datos">

                    <span class="nombre-ruta">
                        <?= htmlspecialchars($ruta['nombre_ruta'] ?? '') ?>
                    </span>

                    <span class="recorrido">
                        <?= htmlspecialchars($ruta['recorrido'] ?? '') ?>
                    </span>

                </div>

                <button class="btn aceptar" type="button">🏳️</button>

                <button class="btn esperar" type="button">
                    <span></span>
                </button>

                <button class="btn cancelar" type="button">🚩</button>

            </div>

       
    

       
     
    

</section>