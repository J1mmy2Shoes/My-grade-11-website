/* arrays are groups of variables /memory blocks where 
each one has the same number. The index number starts at
 0 and ends at array.length-1. Each memory block is callled 
 an element of that array. Each element has an index number
 */




/*
	 let names=new Array("bob","Lisa","joe","Girish","Sluga","James");
	 let ages=[15,16,19,11,19,17];
	 alert(names[0]+ " " + ages[0]);

	 /*the above example demos how to create
	 and intiialize arrays. arrays are parralel if they are related
	 and normally contain the same number of elements.
	 */

// Program to find the persons age



/*
	let name;
	let age;
	name=prompt("Please enter the students name:");
	for(let x=0;x<names.length;x++)
	{
		alert("Checking person against "+names[x]);
		if(names[x].toLowerCase()==name.toLowerCase())
		{
			alert("Their age is "+ages[x]);
			break;
		}
	}

*/


let data=[];
for(let x=0;x<1000;x++)
{
	n=Math.round(Math.random()*100)
	data.push(n);
}
for(let x=0;x<data.length;x++)
{
	console.log(data[x]);
}


//Finding the arrays largest number
let max=data[0];
for(let x=1;x<data.length;x++)
{
	if(data[x]>max)
	{
		max=data[x];
	}

}
alert("The largest number is " + max);
