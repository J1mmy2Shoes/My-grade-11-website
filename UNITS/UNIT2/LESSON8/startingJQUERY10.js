$(document).ready(function() {

	$("#div1").click(function(event) {
		$("#div4").fadeOut("slow");
	});//end of div1 click

	$("#div2").click(function(event) {
		$("#div4").fadeIn("fast");
	});//end of div2 click

	$("#div3").click(function(event) {
		$("div").hide();
	});//end of div3 click

});//end of doc ready