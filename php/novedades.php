<?php

$conexion = new mysqli(
    "localhost",
    "root",
    "",
    "novaruta_manizales"
);

if(isset($_POST['Problema'])){

    $id_buseta = $_POST['id_buseta'];
    $id_ruta = $_POST['id_ruta'];
    $problema = $_POST['Problema'];
    $hora = $_POST['Hora'];
    $ubicacion = $_POST['Ubicaciion'];

    $sql = "INSERT INTO novedades
    (
        Problema,
        Hora,
        Ubicaciion,
        id_busetas,
        id_ruta
    )
    VALUES
    (
        '$problema',
        '$hora',
        '$ubicacion',
        '$id_buseta',
        '$id_ruta'
    )";

    if($conexion->query($sql)){

        echo "
        <!DOCTYPE html>
        <html>
        <head>
       
        <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>

        </head>
        <body>

        <script>

        Swal.fire({
            icon: 'success',
            title: 'Novedad enviada',
            text: 'La novedad fue registrada correctamente',
            confirmButtonColor: '#0b4f8a'
        }).then(() => {

            window.location='../html/rutas_asignadas.php';;

        });

        </script>

        </body>
        </html>
        ";

    }else{

        echo "
        <!DOCTYPE html>
        <html>
        <head>

        <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>

        </head>
        <body>

        <script>

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo guardar la novedad',
            confirmButtonColor: '#d33'
        });

        </script>
       
        </body>
        </html>
        ";

    }

}

?>