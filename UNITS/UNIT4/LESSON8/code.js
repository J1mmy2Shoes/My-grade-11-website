$(document).ready(function($){
	let numbers=[];
	$("#btnRandom").click(function(event){
		for(x=0;x<10;x++)
		{
			numbers.push(Math.round(1+Math.random()*99));
		}
		$("#lblRandom").text(numbers);
	});//end of btnRandom click
	$("#btnSort").click(function(event){
		let tempNum=0;
		for(let pass=0;pass<numbers.length;pass++)
		{
			for(index=0;index<numbers.length-1;index++)
			{
				if(numbers[index]>numbers[index+1])
				{
					tempNum=numbers[index+1];
					numbers[index+1]=numbers[index];
					numbers[index]=tempNum;
				}
			}
		}
		$("#lblSort").text(numbers);
	});//end of btnSort click

});//end of doc ready