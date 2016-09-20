<?php
	/*
	 * There is a great set of resources that have structured
	 * diplomacy maps:
	 * 
	 *   http://www.diplom.org/dpjudge/new/?page=MapFiles
	 *
	 * This script converts .geography files to json
	 */
	
	if(sizeof($argv) < 3) {
		echo("USAGE: php translate_map.php [path/to/input.geography] [path/to/output.json]".PHP_EOL);
		echo("e.g. php translate_map.php scripts/maps/base.geography data/maps/base.json".PHP_EOL);
		die();
	}
	
	$geography_path = $argv[1];
	$output_path = $argv[2];
	$geography_handle = fopen($geography_path, "r");
	$spaces = array();

	// Load in the base data
	while (($line = fgets($geography_handle)) !== false) {
		// Skip comments
		if($line[0] == "#")
			continue;

		// Skip blank lines
		if(trim($line) == "")
			continue;

		if(($wedge = strpos($line, "=")) !== false) {
			$name = trim(substr($line, 0, $wedge));
			$abbreviations = explode(" ", trim(substr($line, $wedge + 1)));
			$key = strtolower(str_replace("/", "_", $abbreviations[0]));
			$spaces[$key] = array(
				"name" => $name,
				"abbreviations" => $abbreviations,
				"type" => "",
				"army_moves" => array(),
				"fleet_moves" => array(),
			);
		} else {
			$parts = preg_split('/\s+/', trim($line));
			$type = $parts[0];
			$key = strtolower(str_replace("/", "_",$parts[1]));
			$moves = array_slice($parts, 3);
			$spaces[$key]["type"] = $type;

			// Armies can't be in water
			if($type != "WATER") {
				$spaces[$key]["army_moves"] = array_reduce($moves,
					function($carry, $item) {
						// Armies can move to any listed location
						$item = str_replace("/", "_", $item);
						$carry[] = strtolower($item);
						return $carry;
					},
					array());
			}

			// Fleets can't be in land
			if($type != "LAND") {
				$spaces[$key]["fleet_moves"] = array_reduce($moves,
					function($carry, $item) {
						// Fleets can move to any non-lowercase location
						$item = str_replace("/", "_", $item);
						if(ctype_upper(str_replace("_","", $item)))
							$carry[] = strtolower($item);
						return $carry;
					},
					array());
			}
		}
	}

	// Clean the move list to remove land / fleet
	// and water / army combinations
	foreach($spaces as $key => $space) {
		$fleet_moves = array();
		foreach($spaces[$key]["fleet_moves"] as $move) {
			if($spaces[$move]["type"] != "LAND")
				$fleet_moves[] = $move;
		}
		$spaces[$key]["fleet_moves"] = $fleet_moves;
		

		$army_moves = array();
		foreach($spaces[$key]["army_moves"] as $move) {
			if($spaces[$move]["type"] != "WATER")
				$army_moves[] = $move;
		}
		$spaces[$key]["army_moves"] = $army_moves;
	}
    fclose($geography_handle);

    // Spit out the results
    $output_handle = fopen($output_path, "w" );
    fwrite($output_handle, json_encode($spaces, JSON_PRETTY_PRINT));
?>