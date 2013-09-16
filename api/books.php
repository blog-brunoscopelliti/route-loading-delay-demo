<?php

	sleep(1);

	$result = array(
		0 => array('id' => 1, 'title' => 'The hitchhiker\'s guide to the galaxy', 'authors' => array('Douglas Adams')),
		1 => array('id' => 2, 'title' => 'AngularJS', 'authors' => array('Brad Green', 'Shyam Seshadri'))
	);

	$json = json_encode($result);
	echo $json;

	return;