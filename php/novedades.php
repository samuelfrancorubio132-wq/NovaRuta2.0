<?php
requiere("conexion.php");


if($_SERVER["REQUEST_METHOD"] == "post") {
    $primera = $_POST['primera'];
    $segundo = $_POST['segundo'];
    $tercera = $_POST['tercera'];
    $cuarta = $_POST['cuarta'];
}
?>

 // ==== Sentencia con INSERT INTO =====
  // Columnas (nombres.de.phpmyAdmin) VALUE ( variable.PHP), en el mismo orden====
  <?php
  $sql = "INSERT INTO novedades(primera,segundo,tercera,cuarta)
  VALUES('$primera','$segunda','$tercera', '$cuarta')";

  // Env iar la Sentencia a MYSQL
  if ($conn->query($sql)=== TRUE) {
    $mensaje = "Resgistro Guardado correctamente";
    $clase = "msg";
    } else {
        $mensaje = "Error:". $conn->error; // ej. codigo duplicado
    $clase = "msg err";
}
?>