<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Incluir los archivos de PHPMailer (ajusta las rutas según tu estructura de carpetas)
require 'path/to/PHPMailer/Exception.php';
require 'path/to/PHPMailer/PHPMailer.php';
require 'path/to/PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos enviados desde el formulario
    $nombre   = htmlspecialchars($_POST['nombre'] ?? '');
    $email    = htmlspecialchars($_POST['email'] ?? '');
    $telefono = htmlspecialchars($_POST['telefono'] ?? '');
    $mensaje  = htmlspecialchars($_POST['mensaje'] ?? '');

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host       = 'mail.fundacire.org'; // Servidor SMTP
        $mail->SMTPAuth   = true;
        $mail->Username   = 'donaciones@fundacire.org'; // Tu usuario SMTP
        $mail->Password   = 'donaciones..fundacire'; // Tu contraseña SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 465; // O 587 dependiendo de los requerimientos de tu hosting

        // Configuración de los destinatarios y remitente
        $mail->setFrom($email, $nombre);
        $mail->addAddress('donaciones@fundacire.org', 'Fundación Ciudad Refugio'); // Correo corporativo solicitado[cite: 1]

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde el formulario de contacto';
        $mail->Body    = "Has recibido un nuevo mensaje de contacto:<br><br>" .
                         "<b>Nombre:</b> $nombre<br>" .
                         "<b>Correo:</b> $email<br>" .
                         "<b>Teléfono:</b> $telefono<br>" .
                         "<b>Mensaje:</b><br>$mensaje";

        $mail->send();
        echo 'El mensaje ha sido enviado correctamente.';
    } catch (Exception $e) {
        echo "No se pudo enviar el mensaje. Error de Mailer: {$mail->ErrorInfo}";
    }
} else {
    // Si se intenta acceder directamente al archivo PHP, redirigir correctamente al formulario
    header("Location: contacto.html");
    exit();
}
?>