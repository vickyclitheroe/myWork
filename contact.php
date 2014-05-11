<?php
  $name= $_REQUEST['name'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;

  mail( "vickyclitheroe@gmail.com", "Feedback Form Results",
    $message, "From: $email" );
  header( "Location: http://www.example.com/thankyou.html" );
?>
