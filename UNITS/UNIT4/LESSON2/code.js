$(document).ready(function($){
	let cm=0;
	let ft=0;
	let inches=0;
	let yards=0;

	$("#btnChange").click(function(event){
		cmConvert();
		ftConvert();
	});//end of btnChange click

function cmConvert()
{
	cm=+$("#txtCm").val();
	inches=cm/2.54;
	$("#inches").html(inches);
}
function ftConvert()
{
	ft=+$("#txtFt").val();
	yards=ft/3;
	$("#yards").html(yards);
}



});//end of doc ready