<?php

// Add needed functions
include_once $_SERVER['DOCUMENT_ROOT'] . '/wp-config.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/wp-includes/wp-db.php';
global $wpdb;

header('Content-Type: application/json');

function commsWonder(){

            $getUser = wp_get_current_user();
            // Get user ID
            $getID = $getUser->ID;
            // Custom get current users owner address
            $getUserMeta = get_user_meta($getID, $key = 'get_user_crown_address', $single = true);
            // Custom get current users owner address
            $getAmount = "0.015";
            $curl = curl_init();
            curl_setopt_array($curl, array(
            CURLOPT_PORT => "9341",
            CURLOPT_URL => "http://RPCUSER:RPCUSER@localhost:9341",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, 
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["'.$getUserMeta.'", '.$getAmount.']}',
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: application/json",
                "user: RPCUSER:RPCUSER"
            ),
            ));
                $response = curl_exec($curl);
                 echo $response; 
                 $err = curl_error($curl);

                curl_close($curl);
                if ($err) {

                    echo "cURL Error #:" . $err;
                } else {
                    return $response;
                } 
}

commsWonder();

?>