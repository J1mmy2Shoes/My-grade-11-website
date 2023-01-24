$(document).ready(function($){
//q1a
	/*
	$("#btnQ1").click(function(event){
		let data=$("#txtQ1").val();
		let capital=data.charAt(0).toUpperCase();
		$("#lblQ1").text(capital);
	});//end of btnQ1 click
	*/
	/*
//q1b
	$("#btnQ1").click(function(event){
		let sentence=$("#txtQ1").val();
		let wordCount=1;
		alert(sentence);

		for(x=0;x<sentence.length;x++)
		{
			alert(x+sentence.charAt(x));
			if(sentence.charAt(x)==" ")
			{
				wordCount++;
				alert(wordCount);
			}
		}
		$("#lblQ1").text(wordCount);
	});//end of btnQ1 click
		
	SHORTCUT
	let answer=sentence.split(" ").length;


	*/
	/*
//q1c
	$("#btnQ1").click(function(event){
		let sentence=$("#txtQ1").val();
		sentence=sentence.toUpperCase();
		$("#lblQ1").text(sentence);
	});//end of btnQ1 click
	*/
	/*
//q1d
	$("#btnQ1").click(function(event){
		let word=$("#txtQ1").val();
		let newWord="";
		for(x=word.length-1;x>=0;x--)
		{
			newWord+=word.charAt(x);
		}
		$("#lblQ1").text(newWord);
	});//end of btnQ1 click
	*/
//q2
	/*
	$("#btnQ2").click(function(event){
		let data=$("#txtQ2").val();
		data=data.toUpperCase();
		let character="";
		for(x=0;x<data.length;x++)
		{
			character=data.charAt(x);
			if(character=="A"||character=="E"||character=="I"||character=="O"||character=="U")
			{
				alert("Your first vowel is "+character+" at postion: " + x);
				break;
			}
		}

	});//end of btnQ2 click
	*/
//q3
	/*
	$("#btnQ3").click(function(event){
		let word=prompt("enter your word");
		let pattern=prompt("enter the patteren to find");
		let postion=word.indexOf(pattern);
		if (postion>=0)
		{
			alert(pattern+ " is found at postion "+postion);
		}
		else
		{
			alert("your pattern is not found");
		}
	});//end of btnQ3 click
	*/
//q4
	/*
	$("#btnQ4").click(function(event){
		let data=$("#txtQ4").val();
		let a=0;
		let e=0;
		let i=0;
		let o=0;
		let u=0;
		for(x=0;x<data.length;x++)
		{
			character=data.charAt(x);
			if(character=="a"){a++;}
			else if(character=="e"){e++;}
			else if(character=="i"){i++;}
			else if(character=="o"){o++;}
			else {u++;}

		}
		alert("Vowel              Frequency \n" +"a                        "+a+"\n" +"e                        "+e+"\n"+"i                        "+i+"\n"+"o                        "+o+"\n"+"u                        "+u+"\n")
	});//end of btnQ4 click
	*/
//q5
	/*
	$("#btnQ5").click(function(event){
		let data=$("#txtQ5").val();
		data=data.replace("cie","cei");
		$("#lblQ5").text(data);
	});//end of btnQ5 click
	*/
//q6
/*
	$("#btnQ6").click(function(event){
		let word=prompt("enter your word");
		let pattern=prompt("enter the patteren to find");
		let postion=word.indexOf(pattern);
		let counter=0;
		if(postion>=0)
		{
			counter++;
			alert(pattern+ " occurs "+counter+" times");
		}
		else
		{
			alert("your pattern is not found");
		}
	});//end of btnQ6 click
*/
//q7
	$("#btnQ7").click(function(event){
		let data=$("#txtQ7").val()
		if(data==data.toLowerCase())
		{
			let postionM=data.indexOf()
		}


	});//end of btnQ7 click

});//end of doc ready