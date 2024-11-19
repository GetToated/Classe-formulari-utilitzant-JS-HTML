<?php

if (isset($_GET['nombre']) && isset($_GET['DNI']) && isset($_GET['edad'])) {

    $nombre = htmlspecialchars($_GET['nombre']);
    $DNI = htmlspecialchars($_GET['DNI']);
    $edad = htmlspecialchars($_GET['edad']);



        echo "<p><strong>Nombre:</strong> $nombre</p>";
        echo "<p><strong>DNI:</strong> $DNI</p>";
        echo "<p><strong>Edad:</strong> $edad</p>";
    }
    ?>