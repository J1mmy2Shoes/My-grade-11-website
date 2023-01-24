//alert("Hello, lets learn about functions!");
//Start of document ready
$(document).ready(function($) {
	let computerNumber=Math.round(1+Math.random()*99);
	let numberOfGuesses=0;
	let answer;

	alert(computerNumber);

	$("#btnGuess").click(function(event) {
		let playerGuess=+$("#txtGuess").val();
		let range=0;

		range=Math.abs(playerGuess-computerNumber);
		
		if(range==0)
		{
			alert("You got it right");
			quitGame();
		}
		else if(range<=5)
		{
			$("#h3Suggestions").html("Your guess is hot");
			numberOfGuesses++;
		}
		else if(range<=10)
		{
			$("#h3Suggestions").html("Your guess is warm");
			numberOfGuesses++;
		}
		else if(range<=15)
		{
			$("#h3Suggestions").html("Your guess is cold");
			numberOfGuesses++;
		}
		else
		{
			$("#h3Suggestions").html("Your guess is freezing");
			numberOfGuesses++;
		}
		alert("You have taken "+numberOfGuesses+" attempt(s) so far")
	});//end of btnGuess click


	$("#btnQuit").click(function(event) {
		quitGame();
	});//end of btnQuit

	
/* A funciton is a named block of code. You create it by using the following format
function name()
{
	
}
Anywhere you want to use the function, you call it.
Besure to follow the name with ().

Functions are a part of modular programming. This type of programming provides us with
many advantages.
1. Efficientcy: Less code to write
2. Speed: The interpreter or compiler requires less time to parse your code.
3. Readability: Make reading your code eaiser for you and others.
4. Debugging: You only foucus on making changes in one spot or location.
*/

	function quitGame()
	{
		answer=confirm("Do you want to play again?");
		alert(answer);
		if(answer==true)
		{
			location.href="index.html";
		}
		else
		{
			location.href="https://www.youtube.com";		
		}
	}

});//end of document ready
