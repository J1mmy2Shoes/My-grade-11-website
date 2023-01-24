$(document).ready(function($){
/*The doc ready event occurs as soon as the document loads in the browser window*/
	alert("the ready event fired");

	$("#btnTest").click(function(event){
		$("div").css("background-color","black");
	});//end of btnTest click

	$("#txtTest").focus(function(event){
		$("div").css("background-color","yellow");
	});//end of txtTest focus

	$("#txtTest1").focus(function(event){
		$("div").css("background-color","brown");
	});//end of txtTest focus

	$("div").mouseenter(function(event){
		$("div").css("background-color","blue");
	});//end of div mouseenter

	$("div").mouseleave(function(event){
		$("div").css("background-color","green");
	});//end of div mouseleave

	$("#txtTest").keypress(function(event){
		//alert(event.which);
		if(event.which==97)
		{
			$("div").css("background-color","grey");
		}
		else if(event.which==98)
		{
			$("div").css("background-color","purple");
		}
	});//end of txtTest keypress

});//end of doc ready
