<?php

session_start();
require_once "../php/conexion.php";

if (!isset($_SESSION['id_conductor'])) {
    die("No has iniciado sesión como conductor.");
}

$id_conductor = $_SESSION['id_conductor'];

$sql = "SELECT
            c.id_conductor,
            c.id_ruta,
            c.id_busetas,
            r.numero,
            r.destino_inicial,
            r.destino_final
        FROM conductor c
        INNER JOIN ruta r
        ON c.id_ruta = r.id_ruta
        WHERE c.id_conductor = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "i",
    $id_conductor
);

$stmt->execute();

$resultado = $stmt->get_result();

$ruta = $resultado->fetch_assoc();

if (!$ruta) {
    die("No se encontró una ruta asignada.");
}

?>

<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Rutas Asignadas</title>


<style>
/* =====================================
   CONFIGURACIÓN GENERAL
===================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    min-height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: #ffffff;
}

.pagina {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    border: 5px solid #092b38;
    overflow: hidden;
}

/* =====================================
   HEADER
===================================== */

.header {
    width: 100%;
    height: 134px;
    min-height: 134px;
    background: linear-gradient(
        110deg,
        #d8f0fc,
        #a9ddf7
    );

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 105px;
    position: relative;
}

.logo img {
    width: 92px;
    height: 92px;
    object-fit: contain;
    border-radius: 50%;
    filter: drop-shadow(0 7px 10px rgba(0,0,0,0.15));
}

.titulo-header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.titulo-header h1 {
    font-size: 43px;
    font-weight: 900;
    letter-spacing: 4px;
    color: #064477;
}

.titulo-header p {
    display: none;
}

/* BOTÓN CERRAR SESIÓN */

.btn-login {
    background: #203747;
    color: white;
    border: none;
    border-radius: 40px;
    padding: 17px 30px;
    min-width: 176px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    box-shadow: 0 9px 18px rgba(0,0,0,0.16);
    transition: 0.3s;
}

.btn-login:hover {
    background: #07517e;
    transform: translateY(-2px);
}

/* =====================================
   CONTENIDO PRINCIPAL
===================================== */

.contenido {
    width: 100%;
    min-height: 548px;
    flex: 1;

    display: flex;
    align-items: stretch;
}

/* =====================================
   PANEL IZQUIERDO - RUTAS
===================================== */

.panel-rutas {
    width: 70.5%;
    background: #858585;
    padding: 34px 53px;
}

.panel-rutas h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 44px;
    font-weight: normal;
    color: #000000;
    margin-bottom: 52px;
}

/* FILA DE CADA RUTA */

.ruta {
    display: grid;

    grid-template-columns:
        278px
        minmax(250px, 362px)
        56px
        56px
        56px;

    gap: 37px;

    align-items: center;
    margin-bottom: 42px;
}

/* HORARIO */

.hora {
    height: 39px;
    background: #242424;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 15px;
    text-align: center;
    white-space: nowrap;
}

/* INFORMACIÓN DE LA RUTA */

.datos {
    height: 56px;
    background: #d3d3d3;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7px 23px;
    overflow: hidden;
}

.nombre-ruta {
    font-size: 16px;
    color: #000000;
    margin-bottom: 2px;
}

.recorrido {
    font-size: 13px;
    color: #000000;
    text-transform: uppercase;
    line-height: 15px;
}

/* =====================================
   BOTONES DE RUTA
===================================== */

.btn {
    width: 56px;
    height: 56px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 0.2s;
}

.btn:hover {
    transform: scale(1.08);
}

/* BOTÓN VERDE */

.aceptar {
    background: #00ff00;
    font-size: 34px;
}

/* BOTÓN AMARILLO */

.esperar {
    background: #ffff00;
    position: relative;
}

.esperar span {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #000000;
    position: relative;
}

.esperar span::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 9px;
    background: #ffff00;
    left: 12px;
    top: 4px;
}

.esperar span::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 3px;
    background: #ffff00;
    left: 12px;
    top: 12px;
}

/* BOTÓN ROJO */

.cancelar {
    background: #ff0000;
    font-size: 34px;
}

/* =====================================
   PANEL DERECHO
===================================== */

   .panel-derecho {
    width: 29.4%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
    overflow-y: auto;
    padding: 20px;
}


/* =====================================
   FORMULARIO NOVEDAD
===================================== */

.novedad {
    width:100%;
    min-height:500px;

    background:linear-gradient(
        135deg,
        #d8d8d8,
        #c8c8c8
    );

    border-radius:18px;

    padding:25px;

    box-shadow:
        0 8px 18px rgba(0,0,0,.15);

    display:flex;
    flex-direction:column;

    gap:15px;

}

/* ICONO DE ALARMA */

.alarma {
    position: absolute;
    top: 17px;
    right: 24px;

    font-size: 25px;
}

/* TÍTULO */


   .titulo-novedad{

    text-align:center;

    color:#063d72;

    font-size:30px;

    font-weight:bold;

    margin-bottom:10px;
}



/* CAMPOS */

    .campo-novedad{

    width:100%;

    height:50px;

    border:none;

    border-radius:8px;

    padding:0 15px;

    background:white;

    font-size:16px;

    color:#333;

    outline:none;
}

.campo-novedad::placeholder {
    color: #263746;
    opacity: 1;
}

.campo-novedad:focus {
    border-bottom: 1px solid #07517e;
}

/* OCULTAR LOS IDENTIFICADORES */


/* BOTÓN ENVIAR */

    .enviar{

    width:100%;

    height:50px;

    border:none;

    border-radius:25px;

    background:linear-gradient(
        135deg,
        #142434,
        #2a4157
    );

    color:white;

    font-size:18px;

    font-weight:bold;

    cursor:pointer;

    margin-top:10px;


}

.enviar:hover {
    background: #07517e;
}

/* =====================================
   FOOTER
===================================== */

.footer {
    width: 100%;
    height: 163px;
    min-height: 163px;

    background: linear-gradient(
        110deg,
        #071d27,
        #0b2938
    );

    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-contenido {
    width: 82%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    z-index: 2;
}

/* LOGO FOOTER */

.footer-logo {
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer-logo img {
    width: 58px;
    height: 58px;
    object-fit: contain;
}

.footer-logo h3 {
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 3px;
}

.footer-logo p {
    color: #a9d8f5;
    font-size: 14px;
}

/* INFORMACIÓN COPYRIGHT */

.footer-copy {
    text-align: right;
    color: #9bcff0;
    font-size: 14px;
    line-height: 23px;
}

/* CÍRCULOS DECORATIVOS */

.circulo {
    position: absolute;
    border-radius: 50%;
    background: rgba(15, 67, 86, 0.35);
}

.circulo-1 {
    width: 180px;
    height: 180px;
    top: -110px;
    left: -85px;
}

.circulo-2 {
    width: 250px;
    height: 250px;
    bottom: -155px;
    right: -110px;
}

/* =====================================
   DISEÑO RESPONSIVE
===================================== */

@media (max-width: 1100px) {

    .header {
        padding: 0 35px;
    }

    .titulo-header h1 {
        font-size: 32px;
    }

    .panel-rutas {
        padding: 30px 25px;
    }

    .ruta {
        grid-template-columns: 1fr 1.3fr 45px 45px 45px;
        gap: 12px;
    }

    .btn {
        width: 45px;
        height: 45px;
    }

    .panel-derecho {
        padding-left: 12px;
        padding-right: 12px;
    }

}

@media (max-width: 750px) {

    .header {
        height: auto;
        min-height: 115px;
        padding: 15px;
    }

    .logo img {
        width: 65px;
        height: 65px;
    }

    .titulo-header {
        position: static;
        transform: none;
    }

    .titulo-header h1 {
        font-size: 21px;
        letter-spacing: 2px;
    }

    .btn-login {
        min-width: auto;
        padding: 12px;
        font-size: 12px;
    }

    .contenido {
        flex-direction: column;
    }

    .panel-rutas,
    .panel-derecho {
        width: 100%;
    }

    .panel-rutas {
        min-height: 400px;
        padding: 25px 15px;
    }

    .panel-rutas h2 {
        font-size: 32px;
        margin-bottom: 30px;
    }

    .ruta {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 25px;
    }

    .hora,
    .datos {
        width: 100%;
    }

    .btn {
        width: 100%;
        height: 45px;
    }

    .panel-derecho {
        padding: 35px 20px;
    }

    .novedad {
        max-width: 500px;
    }

    .footer {
        height: auto;
        min-height: 180px;
        padding: 25px 10px;
    }

    .footer-contenido {
        width: 95%;
        gap: 20px;
    }

    .footer-logo {
        gap: 8px;
    }

    .footer-logo img {
        width: 42px;
        height: 42px;
    }

    .footer-logo h3 {
        font-size: 17px;
    }

    .footer-copy {
        font-size: 11px;
    }

}
</style>
</head>

<body>

<div class="pagina">

    <!-- HEADER -->

    <header class="header">

        <div class="logo">
            <img src="../img/Shape Set.png" alt="Logo NovaRuta">
        </div>

        <div class="titulo-header">

            <h1>BIENVENIDOS</h1>

            <p>
                Aquí podrás averiguar rutas
                de transporte público de Manizales
            </p>

        </div>

        <button
            class="btn-login"
            onclick="window.location.href='../html/login_conductor.html'">

            Cerrar Sesión

        </button>

    </header>

    <!-- CONTENIDO -->

    <main class="contenido">

        <!-- PANEL IZQUIERDO -->

        <section class="panel-rutas">

            <h2>Rutas asignadas</h2>

            <div class="ruta">

                <div class="hora">

                    8:00 AM - 10:00 AM

                </div>

                <div class="datos">

                    <span class="nombre-ruta">

                        Ruta <?= htmlspecialchars($ruta['numero']) ?>

                    </span>

                    <span class="recorrido">

                        <?= htmlspecialchars($ruta['destino_inicial']) ?>

                        -

                        <?= htmlspecialchars($ruta['destino_final']) ?>

                    </span>

                </div>

                <button class="btn aceptar">
                    🏳️
                </button>

                <button class="btn esperar">
                    <span></span>
                </button>

                <button class="btn cancelar">
                    🚩
                </button>

            </div>

        </section>

        <!-- PANEL DERECHO -->

       <aside class="panel-derecho">

    <form
        id="formNovedad"
        class="novedad"
        action="../php/novedades.php"
        method="POST">

        <div class="alarma">
            🚨
        </div>

        <h3 class="titulo-novedad">
            Reportar Novedad
        </h3>

        <label for="id_ruta">
            ID Ruta
        </label>

        <input
            id="id_ruta"
            class="campo-novedad"
            type="number"
            name="id_ruta"
            value="<?= $ruta['id_ruta']; ?>"
            required
        >

        <label for="id_busetas">
            ID Buseta
        </label>

        <input
            id="id_busetas"
            class="campo-novedad"
            type="number"
            name="id_busetas"
            value="<?= $ruta['id_busetas']; ?>"
            required
        >

        <label for="problema">
            Problema
        </label>

        <input
            id="problema"
            class="campo-novedad"
            type="text"
            name="problema"
            placeholder="Describa el problema"
            required
        >

        <label for="hora">
            Hora
        </label>

        <input
            id="hora"
            class="campo-novedad"
            type="time"
            name="hora"
            required
        >

        <label for="ubicacion">
            Ubicación
        </label>

        <input
            id="ubicacion"
            class="campo-novedad"
            type="text"
            name="ubicacion"
            placeholder="Ingrese la ubicación"
            required
        >

        <button
            type="submit"
            class="enviar">

            Enviar

        </button>

    </form>

</aside>

    </main>

    <!-- FOOTER -->

    <footer class="footer">

        <div class="footer-contenido">

            <div class="footer-logo">

                <img
                    src="../img/Shape Set.png"
                    alt="Logo NovaRuta">

                <div>

                    <h3>
                        NovaRuta
                    </h3>

                    <p>
                        Tu ruta, tu ciudad.
                    </p>

                </div>

            </div>

            <div class="footer-copy">

                <p>
                    © 2026 NovaRuta
                </p>

                <p>
                    Transporte público de Manizales
                </p>

            </div>

        </div>

        <div class="circulo circulo-1"></div>

        <div class="circulo circulo-2"></div>

    </footer>

</div>
<script>
alert("HTML cargado correctamente");
</script>
<script>
console.log("JS funcionando");
</script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/ruta_asignadas.js"></script>
</body>

</html>