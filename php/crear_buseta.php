<?php

require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $marca = $_POST['marca'];
    $carroceria = $_POST['carroceria'];
    $modelo = $_POST['modelo'];

    $sql = "INSERT INTO busetas
            (marca, carroceria, modelo)
            VALUES (?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param(
        "sss",
        $marca,
        $carroceria,
        $modelo
    );

    if ($stmt->execute()) {
?>
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>

<script>
Swal.fire({
    icon: 'success',
    title: 'Buseta registrada',
    text: 'La buseta se creó correctamente'
}).then(() => {
    window.location.href='../html/bienvenido_administrador.html';
});
</script>

</body>
</html>

<?php
    } else {
?>
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>

<script>
Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo registrar la buseta'
}).then(() => {
    window.history.back();
});
</script>

</body>
</html>

<?php
    }
}
?>