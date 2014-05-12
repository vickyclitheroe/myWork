<?php
  $Name= $_REQUEST['Name'] ;
  $EmailAddress = $_REQUEST['Email Address'] ;
  $message = $_REQUEST['message'] ;

  mail( "vickyclitheroe@gmail.com", "Feedback Form Results",
    $message, "From: $email" );
  header( "Location: http://www.example.com/thankyou.html" );
?>
