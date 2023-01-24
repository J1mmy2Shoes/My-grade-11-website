/*
alert("test");
//Q 1,17-21


//Question 1

for(let c=2;c<=10;c+=2)
{
	alert(c);
}

//Question 2

let guess=0;
let answer2=0;
let count=1;
let difference=0;

answer2=Math.round(Math.random()*99);
while(guess!=answer2&&count<11)
{
	guess=+prompt("Enter your guess. Guess "+count+":");
	difference=answer2-guess;
	if(difference<0)
	{
		difference*-1;
	}
	if(difference==0)
	{
		break;
	}
	else if(difference<=5)
	{
		alert("Your guess is hot");
	}
	else if(difference>=6&&difference<=10)
	{
		alert("Your guess is warm");
	}
	else
	{
		alert("Your guess is cold")
	}
	count++;
}
if(guess==answer2)
{
	alert("You're right");
}
else
{
	alert("You are out of guesses. The answer was " + answer2);
}

//Question 3

let originalPopulation=12960000000;
let decreasingRate=0.045;
let decreasingNumber=0;
let numberOfYears=0;

decreasingNumber=originalPopulation*decreasingRate;

while(originalPopulation>0)
{
	originalPopulation-=decreasingNumber;
	numberOfYears++;
}
alert(numberOfYears);


//Question 4

let inputNumber=0;
let counter=0;

while(inputNumber>=0)
{
	inputNumber=+prompt("Enter a positive number")
	counter++;
}
alert(counter);


//Question 5

let inputNumber=0;
let counter=0;
let sum=0;

while(inputNumber>=0)
{
	inputNumber=+prompt("Enter a positive number")
	counter++;
	sum+=inputNumber;
}
alert(counter);
alert(sum);

//Question 6

let inputNumber=0;
let counter=0;
let sum=0;
let average=0;


while(inputNumber>=0)
{
	inputNumber=+prompt("Enter a positive number")
	counter++;
	sum+=inputNumber;
}
average=sum/counter;
alert(counter);
alert(sum);
alert(average);

//Question 7

let inputNumber=0;
let largest=0;
let smallest=100000;

while(inputNumber>=0)
{
	inputNumber=+prompt("Enter a positive number")
	if(inputNumber<smallest)
	{
		smallest=inputNumber;
	}
	if (inputNumber>largest)
	{
		largest=inputNumber;
	}
}
alert("Largest: "+largest+" Smallest "+smallest);

//Question 8

let number=0;

while(number<2)
{
	number++;
	alert(number);
}
*/

//Question 9

let number=0;

number=+prompt("Enter a number greater than 100");
while(number<=100)
{
	if(!number)
	{
		break;
	}
	if(number<=100)
	{
		number=+prompt("Enter another number greater than 100");
	}
}

/*

//Question 10

let userNumber=0;
let userNumber2=0;
let counter=0;
let answer=0;
let string=" ";
userNumber2=+prompt("Enter a number");
for(x=1;x<=userNumber2;x++)
{
	counter=x;
	while(counter!=0)
	{
		if(x%counter==0)
		{
			answer++;
		}
		counter--;
	}

	if(answer==2)
	{
		string=string+" "+x;
	}
	answer=0;
}
alert(string);

//Question 17

let number="";

for(let x=4;x<=140;x+=2)
{
	number=number+" "+x;
}
alert(number);

//Question 18

for (y=0;y<=8;y+=2)
{
	alert(y);
}

//Question 19

let y=0;

for(let z=5;z<=10;z+=5)
{
	y=z*2;
	alert(y);
}

//Question 20 (not finished)

let low=0;
let high=0;
let sum=0;
let range=0;
low=+prompt("Enter your lowest number.");
high=+prompt("Enter your highest number.");
range=high-low;
for(let x=1;x<=range;x++)
{
	sum+=x;
}


alert(sum);

//Question 21

let userNumber=0;
let answer=0;
let average=0;

userNumber=+prompt("Enter your number.");
for(let b=1;b<=userNumber;b++)
{
	answer+=b;
}
average=answer/userNumber;

alert(average);

//Question 22
*/