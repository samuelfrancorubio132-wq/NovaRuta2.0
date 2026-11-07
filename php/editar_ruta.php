<?php

$conexion = new mysqli(
    "localhost",
    "root",
    "",
    "novaruta_manizales"
);

$id = $_GET['id'];

if(isset($_POST['actualizar'])){

    $numero = $_POST['numero'];
    $paraderos = $_POST['paraderos'];
    $destino_inicial = $_POST['destino_inicial'];
    $destino_final = $_POST['destino_final'];

    $sql = "UPDATE ruta
            SET
            numero='$numero',
            paraderos='$paraderos',
            destino_inicial='$destino_inicial',
            destino_final='$destino_final'
            WHERE id_ruta='$id'";

    if($conexion->query($sql)){

        header("Location: modificar_ruta.php");
        exit();

    }
}

$sql = "SELECT * FROM ruta
        WHERE id_ruta='$id'";

$resultado = $conexion->query($sql);

$fila = $resultado->fetch_assoc();

?>

<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">

<title>Editar Ruta</title>

<style>

body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#ececec;
}

.titulo{
    text-align:center;
    color:#0b4f8a;
    font-size:55px;
    margin-top:40px;
}

.formulario{
    width:600px;
    margin:40px auto;
    background:white;
    border-radius:15px;
    padding:30px;
    box-shadow:0 5px 20px rgba(0,0,0,.15);
}

.formulario label{
    display:block;
    margin-top:15px;
    margin-bottom:6px;
    font-weight:bold;
    color:#063d72;
}

.formulario input{
    width:100%;
    padding:12px;
    border:1px solid #d0d0d0;
    border-radius:8px;
    box-sizing:border-box;
    font-size:15px;
}

.formulario input:focus{
    outline:none;
    border:2px solid #1689b2;
}

.btn-actualizar{
    width:100%;
    margin-top:25px;
    padding:15px;
    background:linear-gradient(
        135deg,
        #1689b2,
        #0d6f93
    );
    color:white;
    border:none;
    border-radius:10px;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
}

.btn-actualizar:hover{
    background:linear-gradient(
        135deg,
        #0d6f93,
        #084d66
    );
}

</style>

</head>

<body>

<h1 class="titulo">
    Editar Ruta
</h1>

<form method="POST" class="formulario">

    <label>ID Buseta</label>

    <input
    type="number"
    name="numero"
    value="<?php echo $fila['numero']; ?>">

    <label>Paraderos</label>

    <input
    type="text"
    name="paraderos"
    value="<?php echo $fila['paraderos']; ?>">

    <label>Destino Inicial</label>

    <input
    type="text"
    name="destino_inicial"
    value="<?php echo $fila['destino_inicial']; ?>">

    <label>Destino Final</label>

    <input
    type="text"
    name="destino_final"
    value="<?php echo $fila['destino_final']; ?>">

    <button
    type="submit"
    name="actualizar"
    class="btn-actualizar">

        Actualizar Ruta

    </button>

</form>

</body>

</html>