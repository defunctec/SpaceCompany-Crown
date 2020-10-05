<?php

// Add needed functions
require $_SERVER['DOCUMENT_ROOT'] . '/wp-config.php';
require $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
require $_SERVER['DOCUMENT_ROOT'] . '/wp-blog-header.php';
require 'private/nftLoad.php';

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'single-page' );

define('WP_USE_THEMES', true);

get_header();

?>

<div class="container">
    <h3>Your Save code</h3>
    <h5>Copy and paste this into the import box and click import.</h5>
    <h5>Exclude "a831rwxi1a3gzaorw1w2z49dlsor" at the bottom from the string</h5>
    <div class="breaking"><?php nftLoad(); ?></div>
    <br>
    <button onclick="window.location.href='https://newsbunker.org/SpaceCompany';">Back</button>
</div>
<style type="text/css">
.breaking {
  width: 1200px;
  word-wrap: break-word;
}
</style>

<?php
get_footer();
?>