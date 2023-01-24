$(document).ready(function() {
	$("h1").fadeOut();
	$("h1").fadeIn("fast");

	$("p").click(function(event) {
		let counter=0;
		while(counter<10)
		{
			$("h1").fadeOut();
			$("h1").fadeIn("fast");
			counter++;
		}

	});//end of p click
});//end of doc ready