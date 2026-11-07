<?php

$alerta = "";

if(isset($_POST['guardar'])){

    $conexion = new mysqli("localhost","root","","novaruta_manizales");

    $cedula = $_POST['cedula'];
    $placa = $_POST['placa'];
    $password = $_POST['password'];
    $id_ruta = $_POST['id_ruta'];
    $id_busetas = $_POST['id_busetas'];

    $sql = "INSERT INTO conductor (cedula, placa, password, id_ruta, id_busetas)
            VALUES ('$cedula','$placa','$password','$id_ruta', '$id_busetas')";

    if($conexion->query($sql)){

        $alerta = "
        <script>
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Conductor registrado correctamente',
            confirmButtonColor: '#1f8bb4'
        }).then(() => {

            window.location='../html/conductores_disponibles.html';;

        });
        </script>
        ";

    }else{

        $alerta = "
        <script>
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo registrar el conductor',
            confirmButtonColor: '#d33'
        });
        </script>
        ";

    }
}
?>


<!DOCTYPE html>
<html lang='es'>
<head>

<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>

<title>Registrar Conductor</title>

<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>

<style>

body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#ececec;
}

.header{
    background:#c6e5f8;
    padding:30px;
    text-align:center;
}

.header h1{
    color:#0b4f8a;
    font-size:55px;
    margin:0;
}

.contenedor{
    width:450px;
    margin:50px auto;
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 4px 15px rgba(0,0,0,.2);
}

.contenedor h2{
    text-align:center;
    color:#0b4f8a;
    margin-bottom:25px;
}

input{
    width:100%;
    padding:12px;
    margin-bottom:15px;
    border:1px solid #ccc;
    border-radius:8px;
    box-sizing:border-box;
}

input:focus{
    outline:none;
    border:2px solid #1f8bb4;
}

button{
    width:100%;
    padding:14px;
    background:#1f8bb4;
    color:white;
    border:none;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
}

button:hover{
    background:#156d8c;
}

</style>

</head>

<body>

<div class='header'>
    <h1>BIENVENIDOS</h1>
</div>

<div class='contenedor'>

    <h2>REGISTRAR CONDUCTOR</h2>

    <form method='POST'>

        <input
        type='text'
        name='cedula'
        placeholder='Ingrese la cédula'
        required>

        <input
        type='text'
        name='placa'
        placeholder='Ingrese la placa'
        required>

        <input
        type='password'
        name='password'
        <span> La Contraseña debe tener una Mayuscula,Una Minuscula, Un numero, Un Caracter Especial y Min 8 carcteres
        <input
        type='number'
        name='id_ruta'
        placeholder='id_ruta'
        required>
        <input
        type='number'
        name='id.busetas'
        placeholder='id.busetas'
        required>

        <button type='submit' name='guardar'>
            Guardar Conductor
        </button>

    </form>

</div>


</body>
</html>

