<?php

include("conexion.php");

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$password = $_POST['password'];

$sql = "SELECT * FROM administrador
        WHERE correo='$correo'
        AND contrasena='$contrasena'
        AND password='$password'";

$resultado = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Validación de acceso</title>
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

        window.location.href='../html/bienvenido_administrador.html';

    });

    </script>
    ";

} else {

    echo "
    <script>

    Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'Correo, contraseña o llave incorrectos',
        confirmButtonText: 'Intentar de nuevo'
    }).then(() => {

        window.location.href='../html/inicio_administrador.html';

    });

    </script>
    ";

}

?>

</body>
</html>