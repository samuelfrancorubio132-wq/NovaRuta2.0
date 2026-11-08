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

$sql = "SELECT * FROM novedades";

$resultado = $conexion->query($sql);

while($fila = $resultado->fetch_assoc()){

    echo "

    <div class='tarjeta'>

        <b>ID Buseta:</b> ".$fila['id_busetas']."<br>

        <b>ID Ruta:</b> ".$fila['id_ruta']."<br>

        <b>Problema:</b> ".$fila['Problema']."<br>

        <b>Hora:</b> ".$fila['Hora']."<br>

        <b>Ubicación:</b> ".$fila['Ubicaciion']."<br>

    </div>

    ";

}

?>
<button
type="button"
class="btn-volver"
onclick="window.location.href='../html/bienvenido_administrador.html'">

    ← Volver al Administrador

</button>
</body>
</html>