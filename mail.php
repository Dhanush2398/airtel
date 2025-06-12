<?php

$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$to = "dth.net2025@gmail.com"; 


$subject = "Airtel Connection Request from $name";
$body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage:\n$message";
$headers = "From: $email";


if (!empty($name) && !empty($phone)) {
    mail($to, $subject, $body, $headers);
}


header("Location: thankyou.html");
exit;
?>


