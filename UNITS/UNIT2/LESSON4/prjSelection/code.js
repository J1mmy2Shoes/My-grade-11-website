alert("Decisions");
/*
Decisions in programming are based off of conditions.
A condition use comparision or condtional operators to compare value and generate
a boolean value: true or false.
The list of these operators are as follows:
== equals to
=== strict equality (checks type match)
> greater than
< less than
>= greater or equal to
<= less or equal to
!= not equal to

Example conditions:
1>3 False
"Joe" <= "Joseph" True
True != False True

We use these conditions to make decisions.

Formatt:
if(condition)
{
	
}
elseif(condition)
{
	
}
elseif(condition)
{
	
}
else
{
	
}

elseif and else are optional. You can have as many elseif as needed, but
only one else (else always has to be on the end).
*/

let person="";
person=prompt("What is your name?");
if(person=="krnic")
{
	alert("Hey I know you.");
}
else if(person=="viktor")
{
	alert("Hey I know you.");
}
else if(person=="bob")
{
	alert("Hey I know you.");
}
else
{
	alert("Sorry don't know you.");
}


let grade=0;
let letter="";

grade=+prompt("What is your grade?");

if(grade>=80)
{
	letter="A";
}
else if(grade>=70)
{
	letter="B";
}
else if(grade>=60)
{
	letter="C";
}
else if(grade>=50)
{
	letter="D";
}
else
{
	letter="F";
}

alert(letter);