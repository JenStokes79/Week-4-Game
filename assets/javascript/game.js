//generates random number when button is pushed

$(document).ready(function(){
	$("#random-button").on("click", function(){
		var randomNumber = Math.floor(Math.random() * 100) +1;
		$("#random-number").html(randomNumber);
		
	})



	
	});

