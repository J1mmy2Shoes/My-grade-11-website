alert("test");

//Q2

let name = prompt ("What is the official name of JavaScript?")
if (name == "ECMAScript")
{
	alert ("Right!");
}
else
{
	alert ("Didn't know? ECMAScript!");
}

//Q3

let number = +prompt ("Enter your number.")

if (number > 0)
{
	alert("1");
}
else if (number < 0)
{
	alert("-1");
}
else
{
	alert("0");
}

//Q4

let login = prompt ("Login.");
if (login == "Admin")
{
	let password = prompt ("Enter password.");
	if (password == "TheMaster")
	{
		alert("Welcome!");
	}
	else if (password == "")
	{
		alert("Canceled.");
	}
	else	
	{
		alert("Wrong password.");
	}
}
else if (login == "")
{
	alert("Canceled.");
}
else
{
	alert("I don't know you.");
}


//Q5

let a=+prompt("Enter your first number.");
let b=+prompt("Enter you next number.");
let result=a+b<4 ? "below":"above"

alert(result);