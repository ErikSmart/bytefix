<?php
$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$mensaje = $_POST['asunto'];
$datos_fromulario=" Nombre: $nombre \n Correo: $email \n Asunto: $mensaje \n";
$recipient = "erikcat06@yahoo.com";
$subject = "Mensaje del sitio web";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $datos_fromulario, $mailheader) or die("Error!");
echo "En menos de dos días nos comunicaremos";
?>
