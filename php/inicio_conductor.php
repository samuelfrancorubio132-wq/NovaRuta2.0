<?php
require(conexion.php);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cedula = $_POST['cedula'];
    $placa = $_POST['placa'];
    $password = $_POST['password'];
    
}
?>
  // ==== Sentencia con INSERT INTO =====
  // Columnas (nombres.de.phpmyAdmin) VALUE ( variable.PHP), en el mismo orden====
  <?php
  $sql = "INSERT INTO conductor(cedula,placa,password)
  VALUES('$cedula','$placa', '$password')";

  // Env iar la Sentencia a MYSQL
  if ($conn->query($sql)=== TRUE) {
    $mensaje = "Resgistro Guardado correctamente";
    $clase = "msg";
    } else {
        $mensaje = "Error:". $conn->error; // ej. codigo duplicado
    $clase = "msg err";
}
?>
