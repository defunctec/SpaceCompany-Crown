<?php

// Add needed functions
require $_SERVER['DOCUMENT_ROOT'] . '/wp-config.php';
require $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
require $_SERVER['DOCUMENT_ROOT'] . '/wp-blog-header.php';
require 'private/nftSave.php';

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'single-page' );

define('WP_USE_THEMES', true);

get_header();

?>

<div class="container">
	<h3>IPFS Save Hash</h3>
	<div><?php nftSave(); ?></div>
	<br>
	<h4>If the IPFS hash shows, your save is successful.</h4>
	<button onclick="window.location.href='https://newsbunker.org/SpaceCompany';">Back</button>
</div>

<?php
get_footer();
?>