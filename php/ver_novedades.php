<?php

$conexion = new mysqli(
    "localhost",
    "root",
    "",
    "novaruta_manizales"
);

?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Novedades</title>

<style>

body{
    font-family:Arial;
    background:#f4f4f4;
}

.tarjeta{
    width:80%;
    margin:15px auto;
    padding:15px;

    background:white;

    border-left:5px solid #1689b2;

    border-radius:10px;

    box-shadow:0 2px 10px rgba(0,0,0,.15);
}
.boton-volver{

    position:fixed;

    bottom:20px;

    left:20px;

    width:55px;

    height:55px;

    border-radius:50%;

    border:none;

    background:#dff3ff;

    cursor:pointer;

    font-size:28px;

    color:#063d72;

    box-shadow:0 5px 15px rgba(0,0,0,.2);
}
.btn-volver{

    position:fixed;

    top: 685px;

    left:20px;

    padding:12px 20px;

    background:#263043;

    color:white;

    border:none;

    border-radius:10px;

    font-size:16px;

    font-weight:bold;

    cursor:pointer;

    box-shadow:
        0 4px 12px rgba(0,0,0,.2);

    transition:.3s;
}

.btn-volver:hover{

    background:#1689b2;

    transform:translateY(-2px);
}

</style>

</head>
<body>

<h1>Novedades Registradas</h1>

<?php


$problema = $_POST['problema'];
$hora = $_POST['hora'];
$ubicacion = $_POST['ubicacion'];
$id_ruta = $_POST['id_ruta'];
$id_busetas = $_POST['id_busetas'];

$sql = "INSERT INTO novedades
(
Problema,
Hora,
Ubicacion,
id_busetas,
id_ruta
)

VALUES

(
?,
?,
?,
?,
?
)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
"sssii",
$problema,
$hora,
$ubicacion,
$id_busetas,
$id_ruta
);

$stmt->execute();

echo "
<script>
alert('Novedad enviada correctamente');
window.location='../html/rutas_asignadas.php';
</script>
";
?>