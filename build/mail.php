<?php
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/SMTP.php';
    require 'phpmailer/Exception.php';

    $title = "Тема письма";

    $c =true;
    $title = "Тема письма";
    foreach ( $_POST as $key => $value) {
       if ( $value != "" && $key != "project_name"&& $key != "admin_name" && $key != "form_subject" ) {
           $body .= "
           " . ()
       }
    }