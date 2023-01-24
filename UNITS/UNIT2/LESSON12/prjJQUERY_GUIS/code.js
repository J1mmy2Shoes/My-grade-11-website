$(document).ready(function(event) {
	let _name="";
	let password="";
	let male=false;
	let female=false;
	let _red=false;
	let _yellow=false;
	let _blue=false;
	let _country="";
	let _info="";

	$("#btnProcess").click(function(event) {
		_name=$("txtFullName").val();
		_password=$("#txtPassword").val();
		_male=$("#radMale").prop("checked");
		_female=$("#radfemale").prop("checked");
		if(_male==true)
		{
			alert("Hello mister");
		}
		else
		{
			alert("Hello maam");
		}

		_red=$("#chkRed").prop("checked");
		_yellow=$("#chkYellow").prop("checked");
		_blue=$("#chkBlue").prop("checked");
		if(_blue==true)
			{alert("I like BLUE too!");}
		else
			{alert("Those other colours are fine!");}

		_country=$("#selCountries").val();
		alert("So your from " +_country);

		_info=$("#txtYourself").val();
		alert(_info);

		$("#lblData").text("Thanks for completing my survey!");

		//alert("Your password is " + _password);
		//alert(_name);

	});

});//end of ready function