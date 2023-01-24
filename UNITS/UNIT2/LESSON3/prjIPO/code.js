alert("test");
/*The IPO model is something that applies to the majority of programs.
It stands for input, processing, and output.
Input refers to the method of data acquisition.
Processing refers to the caculations and/or decisions make with that data.
Output is what we do with the results of processing.
In our case, we will use  the prompt function to gather input and we'll 
use the alert function for output.
*/
let radius=0;
let area=0;

//INPUT
radius=prompt("What is the radius of the circle whose area you want to calculate?");
/*Prompt is a function that will return the value entered by the user.*/
alert("It seems as if your radius is " + radius);

//PROCESSING
area=3.14*radius**2;

//OUTPUT
alert("The area is " + area);

/*A simple sum calculator for 3 numbers.*/
let number1=0;
let number2=0;
let number3=0;
let sum=0;

number1=+prompt("Enter your first number.")
number2=+prompt("Enter your second number.")
number3=+prompt("Enter your third number.")

sum=number1+number2+number3;

alert("The sum is " + sum);
console.log("The sum is " + sum);
document.write("<h1>The sum is " + sum + "</h1>");