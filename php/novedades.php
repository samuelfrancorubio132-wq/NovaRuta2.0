<div class="novedad-panel" id="novedades-contenido">
<?php
$pdo = new PDO("mysql:host=localhost;dbname=novaruta;charset=utf8mb4", "root", "");

foreach ($pdo->query("SELECT titulo, descripcion FROM novedades ORDER BY id DESC") as $n) {
    echo "<h2>" . htmlspecialchars($n['titulo']) . "</h2>";
    echo "<p>"  . htmlspecialchars($n['descripcion']) . "</p>";
}
?>
</div>