$(document).ready(function($){

	$("#btnAdd1").click(function(event){
		//sum();
		let n1=_randomizer(11,25);
		let n2=_randomizer(15,33);
		$("#txtNumber1").val(n1);
		$("#txtNumber2").val(n2);
		$("#lblAnswer1").text(superSum(n1,n2));

	});//end of btnAdd1 click
	$("#btnAdd2").click(function(event){
		//sum2();
		$("#lblAnswer2").text(superSum(+$("#txtNumber3").val(),+$("#txtNumber4").val()));
	});//end of btnAdd2 click
	$("#btnAdd3").click(function(event){
		//sum3();
		//$("#lblAnswer3").text(superSum(+$("#txtNumber5").val(),+$("#txtNumber6").val()));
		// arugments +$("#txtNumber5").val() and +$("#txtNumber6").val()
		let n1=+$("#txtNumber5").val()
		let n2=+$("#txtNumber6").val()
		let result=superSum(n1,n2);//n1 and n2 are the arguments to the function.
		$("#lblAnswer3").text(result);
	});//end of btnAdd3 click


});//end of doc ready
function sum()
{
	let n1=+$("#txtNumber1").val();
	let n2=+$("#txtNumber2").val();
	let answer=n1+n2;
	$("#lblAnswer1").text(answer);
}
function sum2()
{
	let n1=+$("#txtNumber3").val();
	let n2=+$("#txtNumber4").val();
	let answer=n1+n2;
	$("#lblAnswer2").text(answer);
}
function sum3()
{
	let n1=+$("#txtNumber5").val();
	let n2=+$("#txtNumber6").val();
	let answer=n1+n2;
	$("#lblAnswer3").text(answer);
}
function superSum(num1,num2)//num1 and num2 are parameters
{
	let answer=num1+num2;
	return answer;/* not all functions that have parameters need to return a value.
	If a function  returns a value, we normally assign it to a variable when a function is called.*/
}
/* Parameters are variables that store the values passed to a function
the values passed to a function are call its arguements.*/

// a function to randomlize a speicifed range of numbers
function _randomizer(min,max)
{
	let answer=Math.round(min + Math.random()*(max-min));
	return answer;
}