var player = {
"gamertag": "",
"mainClass": "",
"subClass": ""
}


function updatePlayer(player, submissionType){
	player[submissionType] = document.getElementById(submissionType).value;
	console.log(player);
	document.getElementById(submissionType).value = ""
	return player
}

