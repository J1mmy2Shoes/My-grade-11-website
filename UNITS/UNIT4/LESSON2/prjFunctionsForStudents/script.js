alert("Hello, lets learn about functions!");
//Start of document ready
$(document).ready(function($) {
	let numberOfGuesses=0;
	let answer=0;
	let computerNumber=Math.round(1+Math.random()*99);
	alert(computerNumber);
	
	

	$("#btnGuess").click(function(event) {
		let range=0;
		let playersGuess=+$("#txtGuess").val();
		range=Math.abs(playersGuess-computerNumber);
		if(range==0)
		{
			alert("Hey you got it right!");
			quitGame();
		}
		else if(range<=5)
		{
			$("#h3Suggestions").html("Your guess is HOT!!");
			numberOfGuesses++
		}
		else if(range<=10)
		{
			$("#h3Suggestions").html("Your guess is WARM!!");
			numberOfGuesses++
		}
		else if(range<=15)
		{
			$("#h3Suggestions").html("Your guess is COLD!!");
			numberOfGuesses++
		}
		else 
		{
			$("#h3Suggestions").html("Your guess is FREEZING!!");
			numberOfGuesses++
		}
		alert("You have taken "+ numberOfGuesses + " attempts so far.");






	});//end of btnGuess click


	$("#btnQuit").click(function(event) {
		quitGame();
		

	});//end of btnQuit
	
	/*A function is a named block of code. YOu create it by using the following format:
	function name(){body}
	Anywhere you want to use the funciton you simply call it.
	Be sure tp follow the name with its brackets ().
	Functions are a part of modular programming. This type of programming
	provides us with many advantages:
	1. Efficiency-->less code to write
	2. Speed--> The interpreter/compiler requires less time to parse your code
	3. Readability--> makes reading oyur code easier
	4. Debbuging--> you only focus on making changes in one location
	*/
	function quitGame()
	{
		answer=confirm("Do you want to play again changedSSSS")
			alert(answer);
			if(answer==true)
			{
				location.href="index.html";
			}
			else
			{
				location.href="http://www.youtube.com";
			}
	}

});//end of document ready
