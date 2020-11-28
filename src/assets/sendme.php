<?php
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);   
     $name = $request['name'];
     $email = $request['email'];
    //  $message = $request['message'];

     $toZach = 'zach@fisicalfitness.co.uk';
     $toMe = 'me@garyallin.uk';
     $subject = 'Contact Request';     
     $headers = 'From:'.$name;
     $headers .= 'Reply-To:'.$email;

    mail($toZach, $toMe, $subject, $message, $headers);

//     //Example with StdClass
// $json = '{"name":"Gary Allin","email":"gary.allin@gmail.com","message":"hhyhhy"}';
// $stdInstance = json_decode($json);
// echo $stdInstance->name . PHP_EOL; //"bar"
// echo $stdInstance->email . PHP_EOL; //42
// //Example with associative array
// $array = json_decode($json, true);
// echo $array['name'] . PHP_EOL; //"bar"
// echo $array['email'] . PHP_EOL; //42
}
?>