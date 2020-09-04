<?php

// Add needed functions
include_once $_SERVER['DOCUMENT_ROOT'] . '/wp-config.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/wp-includes/wp-db.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/cloutier/php-ipfs-api/src/IPFS.php';
use \Cloutier\PhpIpfsApi\IPFS;
global $wpdb;

function nftSave(){
            // Admin protocol
            $nftname = "nbpsc";
            // Create random sha256 hash
            $getTime = current_time('timestamp', $gmt = true);
            $randomHash = hash('sha256', $getTime, false);
            // Get user ID
            $getUser = wp_get_current_user();
            $getID = $getUser->ID;
            // Custom get current users owner address
            $getUserMeta = get_user_meta($getID, $key = 'get_user_crown_address', $single = true);
            // Get savedata string from html form
            $result = $_POST['data'];
            // Get IPFS hash
            $ipfs = new IPFS("localhost", "8080", "5001");
            $addIPFS = $ipfs->add($result);
            // Call to Crown client
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
            // Command to Crown client.
            CURLOPT_POSTFIELDS => '{"jsonrpc": "1.0", "id":"curltest", "method": "nftoken", "params": ["issue","'.$nftname.'","'.$randomHash.'","'.$getUserMeta.'","'.$getUserMeta.'","'.$addIPFS.'"] }',
            //CURLOPT_POSTFIELDS => '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }',
            //CURLOPT_POSTFIELDS => '{"jsonrpc": "1.0", "id":"curltest", "method": "nftoken", "params": ["issue","nprf","1d0eac61086c9cfc6e23e8e3cf0f1b892836ae4551c0b19510f704b676d2fdfa","tCRWZwLBbBB97mRsBnnRcHqdTjw12Z5CUgMi9","tCRWZwLBbBB97mRsBnnRcHqdTjw12Z5CUgMi9","https://api.myjson.com/bins/exzwt"] }',
            CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache",
            "content-type: application/json",
                "user: RPCUSER:RPCUSER"
            ),
        )); 
                $response = curl_exec($curl);
                 echo $addIPFS;
                 $err = curl_error($curl);

                curl_close($curl);
                if ($err) {

                    echo "cURL Error #:" . $err;
                } else {
                    return $response;
                } 
}

?>