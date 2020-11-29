<?php
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);   
     $name = $request['name'];
     $email = $request['email'];
     $message = "This message is only visible to the FisicalFitness.co.uk It is a contact request message from your website.";

    
     $to = "me@garyallin.uk, zach@fisicalfitness.co.uk";
     $subject = "Contact Request";     
     $headers = "From:".$name."\r\n";
     $headers .= "Reply-To:".$email;

    mail( $to, $subject, $message, $headers);
}
?>