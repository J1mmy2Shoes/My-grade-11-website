$(document).ready(function() {
	alert("Jquery is ready");
	
	$("#div1").click(function(event) {
		/* Act on the event*/
		alert("You just clicked the div box");
		$("#div2").hide();
		//$("#div3").show();
	});//end of div click
	
	$(".divGroup1").click(function(event) {
		$("#title1").fadeOut("fast");
		$("#title1").fadeIn(1000);
	});//end of divGroup1 click

});//end of doc ready