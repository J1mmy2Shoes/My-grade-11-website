/*
Ex. 5 --> 20
Math.floor(Math.random() * 16) + 5)
							^	 ^
							|	Min Value
					Max + 1 (after added)

Math.floor = rounds to integer

*/

//Between 0-1
let random=Math.random();

//Between 1-10 ()
let random2=Math.floor(Math.random() * 10) + 1;

//Between 1-100
let random3=Math.floor(Math.random() * 100) + 1;

//Between 10-20
let random4=Math.floor(Math.random() * 11) + 10;

//Between 0-0.99
let random5=Math.random() * 0.999;


alert(random2);
alert(random3);
alert(random4);
alert(random5);