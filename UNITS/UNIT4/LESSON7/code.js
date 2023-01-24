$(document).ready(function($){


	$("#btnLarge").click(function(event){
		let data=random10Numbers();
		let largest=0;
		for(x=0;x<data.length;x++)
		{
			if(data[x]>largest)
			{
				largest=data[x];
			}
		}
		alert(largest);
	});//end of btn large click

	$("#btnSmall").click(function(event){
		let data=random10Numbers();
		let smallest=1/0;
		for(x=0;x<data.length;x++)
		{
			if(data[x]<smallest)
			{
				smallest=data[x];
			}
		}
		alert(smallest);
	});//end of btn small click

});//end of doc rdy


//q1
function random10Numbers()
{
	let answer=[];
	for(x=0;x<10;x++)
	{
		answer.push(Math.round(1+Math.random()*99));
	}
	return answer;
}

//q2