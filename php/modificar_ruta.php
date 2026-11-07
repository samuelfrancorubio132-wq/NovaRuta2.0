<?php

$conexion = new mysqli(
    "localhost",
    "root",
    "",
    "novaruta_manizales"
);

$sql = "SELECT * FROM ruta";

$resultado = $conexion->query($sql);

?>

<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
<title>Modificar Ruta</title>

<link rel="stylesheet" href="../css/modificar_ruta.css">
<style>
body{
    margin:0;
    background:#ececec;
    font-family:Arial,sans-serif;
}

.titulo{
    text-align:center;
    font-size:60px;
    color:#0f1c34;
    margin-top:40px;
    margin-bottom:40px;
    font-family:Georgia, serif;
}

.contenedor-rutas{

    width:85%;

    margin:0 auto;

    display:flex;

    flex-direction:column;

    gap:20px;
}

.tarjeta{

    background:#b1b1b1;

    border-radius:12px;

    padding:20px 25px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    box-shadow:
    0 4px 15px rgba(0,0,0,.15);

    transition:.3s;
}

.tarjeta:hover{

    transform:translateY(-2px);

    box-shadow:
    0 8px 20px rgba(0,0,0,.2);
}

.info{

    color:white;

    width:80%;
}

.info h2{

    margin-bottom:10px;

    color:white;

    font-size:34px;
}

.info p{

    margin:4px 0;

    font-size:18px;

    color:white;
}

.acciones{

    display:flex;

    gap:10px;
}

.acciones a{

    width:55px;

    height:55px;

    display:flex;

    align-items:center;

    justify-content:center;

    text-decoration:none;

    font-size:28px;

    border-radius:10px;

    background:#263043;

    color:white;

    transition:.3s;
}

.acciones a:hover{

    background:#1689b2;

    transform:scale(1.08);
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

    top:20px;

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

<h1 class="titulo">
    Modificar Ruta
</h1>

<div class="contenedor-rutas">

<?php

while($fila = $resultado->fetch_assoc()){

echo "

<div class='tarjeta'>

    <div class='info'>

        <h2>Ruta ".$fila['id_ruta']."</h2>

        <p>
        <strong>Numero:</strong>
        ".$fila['numero']."
        </p>

        <p>
        <strong>Paraderos:</strong>
        ".$fila['paraderos']."
        </p>

        <p>
        <strong>Destino Inicial:</strong>
        ".$fila['destino_inicial']."
        </p>

        <p>
        <strong>Destino Final:</strong>
        ".$fila['destino_final']."
        </p>

    </div>

    <div class='acciones'>

        <a
        href='editar_ruta.php?id=".$fila['id_ruta']."'>
            ✏️
        </a>

    </div>

</div>

";
}

?>

</div>
<button
type="button"
class="btn-volver"
onclick="window.location.href='../html/bienvenido_administrador.html'">

    ← Volver al Administrador

</button>
</body>

</html>