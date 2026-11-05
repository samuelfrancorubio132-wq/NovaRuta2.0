<?php

require("conexion.php");

$cedula = $_POST['cedula'];
$placa = $_POST['placa'];
$password = $_POST['password'];

$sql = "SELECT * FROM conductor
        WHERE cedula = ?
        AND placa = ?
        AND password = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sss",
    $cedula,
    $placa,
    $password
);

$stmt->execute();

$resultado = $stmt->get_result();

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Validación</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>

<?php

if ($resultado->num_rows > 0) {

    echo "
    <script>
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Inicio de sesión correcto',
        confirmButtonText: 'Continuar'
    }).then(() => {
        window.location.href='../html/rutas_asignadas.html';
    });
    </script>
    ";

} else {

    echo "
    <script>
    Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'Cédula, placa o contraseña incorrectos',
        confirmButtonText: 'Intentar de nuevo'
    }).then(() => {
        window.location.href='../html/inicio_conductor.html';
    });
    </script>
    ";

}

?>

</body>
</html>