$(document).ready(function($){
	
	$("div").click(function(event){
		/* Act on event */
		$("div").append("<span style='color:white;'>hello</span");
		$("div").prepend("<span style='color:white;'>goodbye</span");
		$("h1").addClass("class1");
		$("p").addClass("class1");
	});//end of div click 
	
	$("h1").click(function(event){
		$("h1").removeClass("class1");
		alert($("h1").text());
		$("h1").text("Hi there");
	});//end of h1 click
	
	$("p").click(function(event){
		$("p").removeClass("class1");
		$("p").css("font-size","2em");
		$("p").css("color","yellow");
		$("div").html("<img src='picture.jpg' width='100' height='100'>")
		alert($("div").html());
	});//end of p click


});//end of doc ready