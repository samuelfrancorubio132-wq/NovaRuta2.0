<?php

require("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $numero = $_POST['numero'];
    $paraderos = $_POST['paraderos'];
    $destino_inicial = $_POST['destino_inicial'];
    $destino_final = $_POST['destino_final'];

    $sql = "INSERT INTO ruta
            (numero, paraderos, destino_inicial, destino_final)
            VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param(
        "isss",
        $numero,
        $paraderos,
        $destino_inicial,
        $destino_final
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
            title: 'Ruta registrada',
            text: 'La ruta fue creada correctamente',
            confirmButtonText: 'Aceptar'
        }).then(() => {

            window.location.href = '../html/crear_ruta.html';

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
            text: 'No se pudo registrar la ruta'
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