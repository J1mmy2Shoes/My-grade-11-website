$(document).ready(function() {
	$(".boxes").hide();

	$("#answer1").click(function() {
		$("#boxesWrong1").show();
	});//end of ans1 click
	$("#answer2").click(function() {
		$("#boxesWrong2").show();
	});//end of ans2 click
	$("#answer3").click(function() {
	$("#boxesRight1").show();
	});//end of ans3 click
});//end of doc ready