<?php
/*
Eventually we will want this script to generate something along the lines of: 

{
	"map": "base",
	"players": [
		{
			"name": "",
			"bio": "",
			"avatar": ""
		}
	],
	"assignments": [
		{
			"player_id": 0,
			"country": ""
		}
	],
	"rounds": [
		{
			"narrative": "",
			"moves": [
				{
					"player_id": 0,
					"from": "",
					"to": "",
					"support_from": "", // If the command is support, specify the vector being supported
					"order": "move/hold/support/convoy/retreat",
					"commentary": "",
					"reactions": [
						{
							"player_id": 0,
							"commentary": ""
						}
					]
				}
			],
			"outcomes": [
				{
					"from": "",
					"to": "",
					"outcome": "move/disband/add"
				}
			]
		}
	]
}
 */