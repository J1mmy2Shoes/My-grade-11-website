/* Create a function to accept an array of marks in a class
and returns the average*/
let marks=[67,88,55,94,36,98,72];
let avgerage=0;
let total=0;
let totalNumberOfMarks=marks.length;

for(let i=0;i<marks.length;i++)
{
	total+=marks[i];
	console.log("The current marks is" +marks[i]+ "and the current total is "+total);
}
average=total/totalNumberOfMarks;
console.log("The average is "+average);


let marks2=[99,88,89,83,77,81,96,92,75,63,76];

alert(averager(marks2));
document.write(averager(marks));
document.write(averager([55,66,77]));

function averager(numbers)
{
	let _total=0;
	let _numbers=numbers.length;
	let _avg=0;
	for(let x=0;x<_numNumbers;x++)
	{
		_total+=numbers[x]
	}
	_avg=_total/_numNumbers;
	return _avg;

}//end of averager