<!DOCTYPE html>
<html>
<head>
    <title>Mostrar Rutas</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
            background: #f4f6f9;
            margin: 0;
            padding: 30px;
        }

        h2{
            text-align: center;
            color: #2c3e50;
        }

        form{
            text-align: center;
            margin-bottom: 20px;
        }

        button{
            background: #3498db;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
        }

        table{
            width: 90%;
            margin: auto;
            border-collapse: collapse;
            background: white;
        }

        th{
            background: #2c3e50;
            color: white;
            padding: 12px;
        }

        td{
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }
    </style>

</head>

<body>


</body>
</html>
</head>
<body>

    <h2>Consultar Rutas</h2>

    <form method="post">
        <button type="submit" name="mostrar">Mostrar rutas</button>
    </form>

    <?php
    // Conexión a la base de datos
    $conexion = new mysqli("localhost", "root", "", "novaruta_manizales");

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    if (isset($_POST['mostrar'])) {

        $sql = "SELECT * FROM ruta";
        $resultado = $conexion->query($sql);

        if ($resultado->num_rows > 0) {

            echo "<table border='1'>";
            echo "<tr>
                    <th>Número</th>
                    <th>Paraderos</th>
                    <th>Destino Inicial</th>
                    <th>Destino Final</th>
                  </tr>";

            while($fila = $resultado->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $fila['numero'] . "</td>";
                echo "<td>" . $fila['paraderos'] . "</td>";
                echo "<td>" . $fila['destino_inicial'] . "</td>";
                echo "<td>" . $fila['destino_final'] . "</td>";
                echo "</tr>";
            }

         echo "<table>";

        } else {
            echo "No hay registros.";
        }
    }

    $conexion->close();
    ?>

</body>
</html>