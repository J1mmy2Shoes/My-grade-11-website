alert("test");

//Question 1

let age=null;

age=prompt("How old are you?");
if(age>=14&&age<=90)
{
	alert("Your age is between 14 and 90.");
}
else
{
	alert("Your age is not between 14 and 90");
}

//Question 2

let age2=null;

age2=prompt("How old are you?");

if(age2<14||age2>90)
{
	alert("You are younger than 14 or older than 90.");
}
else
{
	alert("Your age is in between 14 and 90.");
}

//Question 3

let grade=null;

grade=prompt("Enter your grade.");
if(grade>=80&&grade<=100)
{
	alert("A");
}
if(grade<=79&&grade>=70)
{
	alert("B");
}
if(grade<=69&&grade>=60)
{
	alert("C");
}
if(grade<=59&&grade>=50)
{
	alert("D");
}
if(grade>101)
{
	alert("Please enter correct grade");
}
if(grade<=49)
{
	alert("F");
}


//Question 4

let weight=null;

weight=prompt("Enter your weight in lbs");
if(weight>=200)
{
	alert("Heavyweight");
}
else if(weight>=161&&weight<=200)
{
	alert("Middleweight");
}
else if(weight>=135&&weight<=160)
{
	alert("Lightweight");
}
else if(weight>=126&&weight<=134)
{
	alert("Featherweight");
}
else
{
	alert("Flyweight");
}

//Question 5

let input=null;

input=+prompt("Enter a number from 1 and 10");
if(input>=1&&input<=10)
{
	if(input==1||input==3|input==5||input==7||input==9)
	{
		alert("Your number is odd.")
	}
	else
	{
		alert("Your number is even.")
	}
}
else
{
	alert("Incorrect number.")
}

/* Alternative (using % remainder)
let number=+prompt("Enter your number.")
let remainder=number%2

if(remainder==0)
{
	alert("Number is even");
}
else
{
	alert("Number is odd");
}

*/

//Question 6

let number=null;
let guess=null;

number=Math.round(Math.random()*9)+1;
guess=prompt("Guess the number between 1-10");
if(guess==number)
{
	alert("You're right!");
}
else if(guess>11)
{
	alert("Please enter a number between 1 and 10");
}
else
{
	alert("You're wrong!");
}

//Question 7

let radius=null;
let totalArea=null;
const PI=3.14;

radius=+prompt("Enter your radius");
if(radius>0&&radius<1000)
{
	totalArea=PI*radius**2;
	alert("The area is "+totalArea);
}
if(radius<0)
{
	alert("Area cannot be caculated");
}
if(radius>1000)
{
	alert("Number is too large to be calculated.")
}

