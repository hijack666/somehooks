<?php
    $client_id = 'kimne78kx3ncx6brgo4mv6wki5h1ko';
    $mode = 'subscribe';
    $callback_url = 'http://somequery.ru/twnotif.php';
    $target_user_id = '73477451';

    $lease_days = '10';

    $lease_seconds = $lease_days * 24 * 60 * 60;

    $subscribe_to_event_url = 'https://api.twitch.tv/helix/webhooks/hub';

    $data = array(

    'hub.mode' => $mode,

    'hub.topic' => 'https://api.twitch.tv/helix/streams?user_id='.$target_user_id,

    'hub.callback' => $callback_url,

    'hub.lease_seconds' => $lease_seconds

    );

    $data_string = json_encode($data);

    $ch = curl_init($subscribe_to_event_url);

    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');

    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_HTTPHEADER, array(

    'Content-Type: application/json',

    'Content-Length:'.strlen($data_string),

    'Client-ID: '.$client_id

    ));

    $result = curl_exec($ch);

    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    echo $httpcode."

    ".$result; 
    header("Access-Control-Allow-Headers:*");
ini_set("allow_url_fopen", true);

