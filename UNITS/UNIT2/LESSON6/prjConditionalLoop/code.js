alert("Conditional loops");
/*
Conditional loops are used when you are not sure of how many iterations are required beforehand.
These loops iterate repeatedly while a condition is true.
There are 2 types.

1. The precondition
2. The postcondition

The formatt for each are as follows:

Precondition:
while(condition){body}

Postcondition:
do{body}while(condition);
*/

/*
while(1<2)
{
	console.log("hello");
}
*/

let count=0;
let answer="";
while(answer!="bob"&&answer!="Bob"&&count<5)
{
	answer=prompt("What is your name?");
	count++;
}
alert("Hi bob, I've been waiting for you.");
/*The above is a perfect example of where a conditional loop would be used in a program.
Since we don't know ahead of time the number of requests for bob then a for loop would be
inappropriate.

Note in the example above, we can still control the number of iteration in a conditional 
loop by using a counter variable*/


let index=7;
do
{
	index+=2
	console.log(index);

}while(index<15);
