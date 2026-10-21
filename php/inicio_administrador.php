<?php
requiere("conexion.php");


if($_SERVER["REQUEST_METHOD"] == "post") {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $password = $_POST['password'];
}
?>

 // ==== Sentencia con INSERT INTO =====
  // Columnas (nombres.de.phpmyAdmin) VALUE ( variable.PHP), en el mismo orden====
  <?php
  $sql = "INSERT INTO administrador(correo,contrasena,password)
  VALUES('$correo','$contrasena', '$password')";

  // Env iar la Sentencia a MYSQL
  if ($conn->query($sql)=== TRUE) {
    $mensaje = "Resgistro Guardado correctamente";
    $clase = "msg";
    } else {
        $mensaje = "Error:". $conn->error; // ej. codigo duplicado
    $clase = "msg err";
}
?>