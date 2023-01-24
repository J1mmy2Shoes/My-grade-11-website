/* 
	James Billinger
	Yi Bo Cheng
	04/19/2019
	This is our javascript page for our game
*/
$(document).ready(function($) {
	//game variables 
	let money=1000;
	let bet=0;
	let pot=0;
	//player variables
	let pCard1=0;
	let pCard2=0;
	let pCard3=0;
	let pCard4=0;
	let pCard5=0;
	let pTotal=0;
	let numPCards=0;

	//dealer variables
	let cCard1=0;
	let cCard2=0;
	let cCard3=0;
	let cCard4=0;
	let cCard5=0;
	let cTotal=0;
	let numCCards=0;
	//alert("Let the game begin!");

	//click the bet button
	$("#btnBet").click(function(event) {
		/* Act on the event */
		if($("#txtBet").val().charAt("0")=="$")
			bet=+$("#txtBet").val().substring(1);
		else
			bet=+$("#txtBet").val();

		if(bet>money)
		{
			$("#gameInfo").html("You can not bet more money than you currently have!");
			return;
		}
		$("#btnBet").prop("disabled",true);
		$("#btnDeal").prop("disabled",false);
		pot=bet*2;
		money-=bet;
		$("#lblMoney").html("$"+money);
	});

	//click the deal button
	$("#btnDeal").click(function(event) {
		/* Act on the event */
		pCard1=Math.round(1+Math.random()*51);
		cCard1=Math.round(1+Math.random()*51);
		cCard2=Math.round(1+Math.random()*51);

		$("#pc1").prop("src","assets/cards/card"+pCard1+".JPG");
		$("#cc1").prop("src","assets/cards/card"+cCard1+".JPG");
		$("#cc2").prop("src","assets/cards/card"+cCard2+".JPG");

		pCard1=pCard1%13;
		if(pCard1==11 || pCard1==12 || pCard1==0)
			pCard1=10;

		cCard1=cCard1%13;
		if(cCard1==11 || cCard1==12 || cCard1==0)
			cCard1=10;

		cCard2=cCard2%13;
		if(cCard2==11 || cCard2==12 || cCard2==0)
			cCard2=10;

		pTotal=pCard1+pCard2+pCard3+pCard4+pCard5;
		cTotal=cCard1+cCard2+cCard3+cCard4+cCard5;

		$("#heading1").html("Your Cards: "+pTotal);
		$("#heading2").html("Dealer Cards: "+cTotal);

		$("#btnDeal").prop("disabled",true);
		$("#btnHit").prop("disabled",false);
		$("#btnStay").prop("disabled",false);

		numPCards=1;
		numCCards=2;
	});//end of btnDeal click


	$("#btnHit").click(function(event) {
		/* Act on the event */
		if(numPCards<5)
			{
				numPCards++;
				let temp=Math.round(1+Math.random()*51);
				let temp2=temp%13;
				if(temp2==11 || temp2==12 || temp2==0)
					temp2=10;
		
				$("#pc"+numPCards).prop("src","assets/cards/card"+temp+".JPG");
							
				pTotal+=temp2;
		
				$("#heading1").html("Your Cards: "+pTotal);
			}
			else 
			{
				$("#btnHit").prop("disabled",true);
			}
			if(pTotal>21)
				{
					$("#gameInfo").html("YOU'VE GONE OVER 21. YOU LOSE! Press Play to start next round.");
					$("#gameInfo").css("background-color","red");
					$("#btnHit").prop("disabled",true);
					$("#btnStay").prop("disabled",true);
					$("#btnPlay").prop("disabled",false);
				}
	});//end of btnHit click

	$("#btnPlay").click(function(event) {
		/* Act on the event */
		if(money<=0)
		{
			$("#gameInfo").css("background-color","red");
			$("#gameInfo").css("font-size","2em");
			$("#gameInfo").html("You have no more money. This game is over.To play again refresh the page.");	
			return;
		}
		$("#gameInfo").html("Next Round.");
		$("#gameInfo").css("background-color","green");
		$("#btnHit").prop("disabled",true);
		$("#btnStay").prop("disabled",true);
		$("#btnPlay").prop("disabled",true);
		$("#btnBet").prop("disabled", false);
		for(let x=1;x<=5;x++)
		{
			$("#pc"+x).prop("src","assets/cards/card55.JPG");
			$("#cc"+x).prop("src","assets/cards/card55.JPG");
		}
		pTotal=0;
		cTotal=0;
	});//end of btnPlay click

	$("#btnStay").click(function(event) {
		/* Act on the event */
		let count=3;
		while(cTotal<pTotal)
		{	
	
			let temp=Math.round(1+Math.random()*51);
			$("#cc"+count).prop("src","assets/cards/card"+temp+".JPG");
		
			temp=temp%13;
			if(temp==11 || temp==12 || temp==0)
			temp=10;

			cTotal+=temp;
			$("#heading2").html("Dealer Cards: "+cTotal);
			count++;
			
		}
		if(pTotal<=21 && pTotal>cTotal ||cTotal>21)
		{
			$("#gameInfo").html("YOU WIN!!!!! Press Play to start next round.");
			$("#gameInfo").css("background-color","blue");
			$("#btnHit").prop("disabled",true);
			$("#btnStay").prop("disabled",true);
			$("#btnPlay").prop("disabled",false);
			money+=bet*2;
			$("#lblMoney").html("$"+money);
		}
		else 
		{
			$("#gameInfo").html("YOU LOSE!!!!! Press Play to start next round.");
			$("#gameInfo").css("background-color","red");
			$("#btnHit").prop("disabled",true);
			$("#btnStay").prop("disabled",true);
			$("#btnPlay").prop("disabled",false);	
		}
	});//end of btnStay click

});//end of ready
