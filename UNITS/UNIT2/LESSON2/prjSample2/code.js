/* 
	Yi Bo Cheng
	03/06/2019
	Lesson 2
	The following code shows the js for calculating area of a circle 
	taxes of a shoe.
*/
alert("Let's start");
/*
A variable is a memory block that is reserved by a programmer. 
It is used to store data. It is created by following a format. 
The format requires a name.
Example format:
let name;
To assign a value to a variable, we use the assignment operator (=). 
An operator is a symbol or group of symbol that preforms an operation on data.
Example use:
age=10;
*/
/*Solve for the area of a circle*/
let radius; //reserving memory block for radius
let area; //reserving memory block for area
const PI=3.14; /*This is a constant.
Constants are memory block whose value can not change.
The names of a constant should be capitalized.*/
radius=10; //setting the value for radius
area=PI*radius*radius; //cacluating area
/*The asterisk is a math operator.
It is called a binary operator because it operates on 2 values.
These values must be numbers.*/
alert("The area of a circle with a radius of " + radius + " is " + area); //an alert showing the area of the circle
/*In programming, variables can be used to store many different types of data.
These include strings and numbers. 
The other main type of data is the boolean.
The values of a boolean are true and false. 
The other main type of data is the object.
This data type contains many different types together.*/

/*Solve the cost of a 115 pair of running shoe.
Show the taxes and the final total.*/
let costOfShoes=115; //reserving memory block and settomg value for the cost of the shoe
let taxes=0; //reserving memory block and settomg value for the taxes
let finalTotal=0; //reserving memory block and settomg value for the total cost

taxes=costOfShoes*0.13; //caculating the value of the taxes
finalTotal=taxes+costOfShoes; //calculating the final value of the shoe

alert("The cost of a pair of shoes valued at $"+costOfShoes + " is\n$" +finalTotal + " includes $"+ taxes + " of taxes."); //an alert showing the final cost of shoe and the amount of taxes.