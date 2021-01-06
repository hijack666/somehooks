<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
   
   $printString = "";
   
   foreach ($_GET as $key => $value) {
       
       $printString = $printString  . "Key: " . $key . " Val: " . $value . "\n";
   }
   
   file_put_contents("getRequest.txt", $printString);
   
   if (isset($_GET['hub_challenge'])) {
       $challenge = $_GET['hub_challenge'];
       echo $challenge;
       file_put_contents("resget.txt", $challenge);
   }
}

$post = $_POST;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   $payload = "POST received\n";
   file_put_contents("payload.txt", $payload);
}
file_put_contents("respost.txt", $post);