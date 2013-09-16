<?php

	sleep(3);

	$result = array(
		0 => array('id' => 1, 'title' => 'Star Wars Episode IV: A New Hope', 'authors' => array('George Lucas')),
		1 => array('id' => 2, 'title' => 'Indipendence Day', 'authors' => array('Roland Emmerich')),
		2 => array('id' => 3, 'title' => 'Men In Black', 'authors' => array('Barry Sonnenfeld'))
	);

	$json = json_encode($result);
	echo $json;

	return;