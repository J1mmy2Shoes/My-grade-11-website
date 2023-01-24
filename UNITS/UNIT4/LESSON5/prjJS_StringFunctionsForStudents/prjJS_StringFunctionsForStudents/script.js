//alert("Hello, lets learn about string functions!");
//Start of document ready
$(document).ready(function($) {
	$("#btnProcess1").click(function(event) {
		/* Act on the event */
		let data=$("#txtInput1").val();
		result=data.charAt(data.length-1);
		/*The above line of code will extract the last letter form any word stored in the variable data.
		Note that all the strings have their index starting at number 0.
		the index being the position of each character in that sting.
		*/
		$("#lblOutput1").text(result);		
	});

	$("#btnProcess2").click(function(event) {
		/* Act on the event */
		let data=$("#txtInput2").val();
		for(let x=0;x<data.length;x++)
		{
			let code=data.charCodeAt(x);
			alert("The code for " +data.charAt(x) + " is " + code);
		}
		/* The above program goes through each letter in the word stored in data and 
		displays its asccii/unicode code.
		*/

		$("#lblOutput2").text(result);		
	});

	$("#btnProcess3").click(function(event) {
		/* Act on the event */
		let data=$("#txtInput3").val();
		let word=prompt("Enter the word to find");
		let postion=data.indexOf(word);
		if(postion==-1)
		{
			alert("Your word doesn't exist.");
		}
		else
		{
			$("#lblOutput3").text(postion);
		}
		/* The above program will find the location of the word */

		$("#lblOutput3").text(result);		
	});

	$("#btnProcess4").click(function(event) {
		/* Act on the event */
		let data=$("#txtInput4").val();
		let first=data.charAt(0);
		let restOfWord=data.substring(1);
		let result=first.toUpperCase()+restOfWord;
		$("#lblOutput4").text(result);		
	});
	/* The above takes the word in the data and makes the first letter capital
	and displays it back in the label. */ 
});//end of document ready
