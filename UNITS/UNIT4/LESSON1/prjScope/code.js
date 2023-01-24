/*Scope refers to the range of accessibility of parts of your code from other parts (variable
functions etc.). */


let v=22;// v is a global variable. This means it is accessable everywhere in the project.
/* Global variables are not made in any function blocks. */

/* RULE OF THUMB: Always narrows the scope of the variable. 
ie. make local, unless it has to be lexical, and lexical unless it has to be global*/
$(document).ready(function($){
	
	alert("The value of v is " +v);
	
	let z=100;
	/* z has lexical scope. This mean it is a variable declared in a function which itself 
	contains other functions in which that variable is also accessible. */

	$("#btn1").click(function(event){
		alert("The value of z is " +z);
		let x=10;/* x is a local variable. As a result, its scope is limited to the function
		in which its made. */
		alert("The value of x is " +x);
		alert("The value of v is " +v);
	});//end of btn1 click

	$("#btn2").click(function(event){
		//alert("The value of x is " +x);
		/* x is not accesible here because it's local to the function
		block for btn1 click event. */
		let y=5;
		alert("The value of y is " +y);// this works because y is local to this block
		alert("The value of v is " +v);
	});//end of btn2 click

});//end of doc ready

function doSomething()
{
	alert("The value of z is " +z);/* z is lexical to the doc ready function. 
	Therefore it is not accessible here becasue do something was not created in doc ready. */
	alert("The value of v is " +v);
}