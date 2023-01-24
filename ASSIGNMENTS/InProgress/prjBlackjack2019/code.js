/* 
	James Billinger
	Yi Bo Cheng
	04/18/2019
	This is our JavaScript page for our game
*/
$(document).ready(function($){
	/* Game VARIABLES */
	//player variables
	let cardPlayerValue1=0;
	let cardPlayerValue2=0;
	let cardPlayerValue3=0;
	let cardPlayerValue4=0;
	let cardPlayerValue5=0;

	let cardPlayerValueTotal=0;

	let cardPlayer1FileName="";
	let cardPlayer2FileName="";
	let cardPlayer3FileName="";
	let cardPlayer4FileName="";
	let cardPlayer5FileName="";
	
	let card1FilePath="";
	let card2FilePath="";
	let card3FilePath="";
	let card4FilePath="";
	let card5FilePath="";
	
	let pCardCount=0;
	
	//dealer variables
	let cardDealerValue1=0;
	let cardDealerValue2=0;
	let cardDealerValue3=0;
	let cardDealerValue4=0;
	let cardDealerValue5=0;
	
	let cardDealerValueTotal=0;
	
	let cardDealer1FileName="";
	let cardDealer2FileName="";
	let cardDealer3FileName="";
	let cardDealer4FileName="";
	let cardDealer5FileName="";
	
	let dCard1FilePath="";
	let dCard2FilePath="";
	let dCard3FilePath="";
	let dCard4FilePath="";
	let dCard5FilePath="";
	
	let dCardCount=0;

	//round counter
	let roundCounter=1;
	
	//bet check
	let betCheck=0;
	
	//money variables
	let money=1000;
	let bet=0;
	
	//hide buttons
	$("#btnBet").hide();
	$("#btnDeal").hide();
	$("#btnHit").hide();
	$("#btnStand").hide();
	$("#btnRepeat").hide();
	$("#btnPlay").hide();

	//hide textbox
	$("#textBox").hide();

	//bet menu hide
	$("#divBet").hide();
	$("#chips").hide();
	$("#lblMoney").hide();
	$("#betting").hide();

	//audio hide
	$("#music").hide();
	$("audio").hide();

	//popup hide
	$("#losePopup").hide();
	$("#winPopup").hide();
	$("#tiePopup").hide();
	$("#gameoverPopup").hide();
	$("#playPopup").hide();
	
	//hide cards
	$("#playerElements").hide();
	$("#dealerElements").hide();

	//start popup fade in 
	$("#startPopup").hide();
	$("#startPopup").fadeIn();

	//mouse enter
	$("#imgISee").mouseenter(function(event){
		$("#imgISee").css("opacity","1");//increases opacity of image when mouse enters
	});//end of imgISee mouseenter
	
	//mouse leave
	$("#imgISee").mouseleave(function(event){
		$("#imgISee").css("opacity","0.6");//returns to original opacity when mouse leaves
	});//end of imgISee mouseleave

	//click
	$("#imgISee").click(function(event){
		$("#startPopup").fadeOut();
		$("#textBox").delay(400);
		$("#textBox").fadeIn();
		$("#status").html("<h1><br>ブラックジャックへようこそ。<br>(Welcome to Blackjack)</h1>");
		$("#btnPlay").delay(1000);
		$("#btnPlay").fadeIn();
	});//end of imgISee click

	//play button
	$("#btnPlay").click(function(event){
		$("#playPopup").fadeIn();//fade in play popup
	});//end of btnPlay click
	
	//go/fight button
	$("#btnGo").click(function(event){
		$("#playPopup").fadeOut();//fade out play popup
		$("#playerElements").fadeIn();//fade in player cards
		$("#dealerElements").fadeIn();//fade in dealer cards
		$("#btnBet").fadeIn();//fade in bet button
		$("#btnPlay").hide();//hide play button
		$("#divBet").fadeIn();//bet elements fade in
		$("#textBox").hide();//hide text box
		$("#chips").fadeIn();
		$("#lblMoney").fadeIn();
		$("#betting").fadeIn();
		$("#music").fadeIn();
		$("audio").fadeIn();
	});//end of btnGo click

	//bet button
	$("#btnBet").click(function(event){
		bet=+$("#txtBet").val(); //get bet value from txtBet;
		betCheck=bet/bet;//this ensures the player does not input a letter for bet
		if(bet>money||bet<=0||betCheck!=1) //if user enters invalid number, retry
		{
			$("#textBox").fadeIn(750);
			$("#textBox").delay(1750);
			$("#status").html("<h1>あなたはばか！有効な額を賭けるか、私の立場で敗北させてください[Oasis].<br>(You fool! Bet a valid amount or be defeated by my stand [Oasis].) </h1>");
			$("#status").css("font-size","70%");
			$("#textBox").fadeOut();
			$("#btnBet").hide();//disables the bet button so the textbox does not appear after betting if the btn is spammed
			$("#btnBet").delay(2500);//delays the btn to prevent spam
			$("#btnBet").fadeIn();
		}
		else{
			money-=bet; //determine value of players money
			$("#lblMoney").html("$"+money); //display amount of money
			$("#btnDeal").fadeIn();
			$("#btnBet").hide();
			$("#textBox").hide();//hides warning textbox if bet is entered correctly
			$("#betting").hide();
		}		
	});//end btnBet click

	//deal button
	$("#btnDeal").click(function(event){
		/* PLAYER CARDS */
		/* Player Card 1 */
		if(pCardCount==0&&cardPlayerValueTotal<21)//ensures total value is less than 21
		{
			cardPlayerValue1=Math.round(1+Math.random()*51);
			cardPlayer1FileName="card"+cardPlayerValue1+".JPG";
			card1FilePath="cards/cards/"+cardPlayer1FileName;
			$("#imgPlayerCard1").prop("src",card1FilePath);
			/*CARD 1 VALUE*/
			cardPlayerValue1=Math.round(cardPlayerValue1%13);//calculating card value
			if(cardPlayerValue1==11||cardPlayerValue1==12||cardPlayerValue1==0)//K,Q,J has value of 10
			{
				cardPlayerValue1=10;
			}
			cardPlayerValueTotal+=cardPlayerValue1;//adds card 1 value to total
			$("#playerCardValue").html("<p>"+cardPlayerValueTotal+"</p>");
			pCardCount++;
		}
		/* Player Card 2 */
		if(pCardCount==1&&cardPlayerValueTotal<21)
		{
			do{ //keeps rerolling card if card value repeated
				cardPlayerValue2=Math.round(1+Math.random()*51);
				cardPlayer2FileName="card"+cardPlayerValue2+".JPG";
				card2FilePath="cards/cards/"+cardPlayer2FileName;
				$("#imgPlayerCard2").prop("src",card2FilePath);
			} while(cardPlayerValue1==cardPlayerValue2);
			/*CARD 2 VALUE*/
			cardPlayerValue2=Math.round(cardPlayerValue2%13);//calculating card value
			if(cardPlayerValue2==11||cardPlayerValue2==12||cardPlayerValue2==0)//K,Q,J has value of 10
			{
				cardPlayerValue2=10;
			}
			cardPlayerValueTotal+=cardPlayerValue2;//adds card 2 value to total
			$("#playerCardValue").html("<p>"+cardPlayerValueTotal+"</p>");
			pCardCount++;
		}
		/* DEALER CARDS */
		/* Dealer Card 1*/
		if(dCardCount==0)
		{
			do{ //keeps rerolling card if card value repeated
				cardDealerValue1=Math.round(1+Math.random()*51);
				cardDealer1FileName="card"+cardDealerValue1+".JPG";
				dCard1FilePath="cards/cards/"+cardDealer1FileName;
				$("#imgDealerCard1").prop("src",dCard1FilePath);
			} while(cardDealerValue1==cardPlayerValue1||cardDealerValue1==cardPlayerValue2)
			/*CARD 1 VALUE*/
			cardDealerValue1=Math.round(cardDealerValue1%13);//calculating card value
			if(cardDealerValue1==11||cardDealerValue1==12||cardDealerValue1==0)//K,Q,J has value of 10
			{
				cardDealerValue1=10;
			}
			cardDealerValueTotal+=cardDealerValue1;//adds card 1 value to total
			$("#dealerCardValue").html("<p>"+cardDealerValueTotal+"</p>");
			dCardCount++;
		}
		$("#btnDeal").hide();
		$("#btnHit").fadeIn();
		$("#btnStand").fadeIn();
	});//end of btnDeal

	//hit button
	$("#btnHit").click(function(event){
		/* Player Card 3*/
		if(pCardCount==2&&cardPlayerValueTotal<21)
		{
			do{ //keeps rerolling card if card value repeated
				cardPlayerValue3=Math.round(1+Math.random()*51);
				cardPlayer3FileName="card"+cardPlayerValue3+".JPG";
				card3FilePath="cards/cards/"+cardPlayer3FileName;
				$("#imgPlayerCard3").prop("src",card3FilePath);
			} while(cardPlayerValue3==cardPlayerValue2||cardPlayerValue3==cardPlayerValue1);//ensures no repeating cards
			/*CARD 3 VALUE*/
			cardPlayerValue3=Math.round(cardPlayerValue3%13);//calculating card value
			if(cardPlayerValue3==11||cardPlayerValue3==12||cardPlayerValue3==0)//K,Q,J has value of 10
			{
				cardPlayerValue3=10;
			}
			cardPlayerValueTotal+=cardPlayerValue3;//adds card 3 value to total
			$("#playerCardValue").html("<p>"+cardPlayerValueTotal+"</p>");
			pCardCount++;
		}
		/* Player Card 4*/
		else if(pCardCount==3&&cardPlayerValueTotal<21)
		{
			do{ //keeps rerolling card if card value repeated
				cardPlayerValue4=Math.round(1+Math.random()*51);
				cardPlayer4FileName="card"+cardPlayerValue4+".JPG";
				card4FilePath="cards/cards/"+cardPlayer4FileName;
				$("#imgPlayerCard4").prop("src",card4FilePath);
			} while(cardPlayerValue4==cardPlayerValue1||cardPlayerValue4==cardPlayerValue2||cardPlayerValue4==cardPlayerValue3);
			/*CARD 4 VALUE*/
			cardPlayerValue4=Math.round(cardPlayerValue4%13);//calculating card value
			if(cardPlayerValue4==11||cardPlayerValue4==12||cardPlayerValue4==0)//K,Q,J has value of 10
			{
				cardPlayerValue4=10;
			}
			cardPlayerValueTotal+=cardPlayerValue4;//adds card 4 value to total
			$("#playerCardValue").html("<p>"+cardPlayerValueTotal+"</p>");
			pCardCount++;
		}
		/* Player Card 5*/
		else if(pCardCount==4&&cardPlayerValueTotal<21)
		{
			do{ //keeps rerolling card if card value repeated
				cardPlayerValue5=Math.round(1+Math.random()*51);
				cardPlayer5FileName="card"+cardPlayerValue5+".JPG";
				card5FilePath="cards/cards/"+cardPlayer5FileName;
				$("#imgPlayerCard5").prop("src",card5FilePath);
			} while(cardPlayerValue5==cardPlayerValue1||cardPlayerValue5==cardPlayerValue2||cardPlayerValue5==cardPlayerValue3||cardPlayerValue5==cardPlayerValue4);
			/*CARD 5 VALUE*/
			cardPlayerValue5=Math.round(cardPlayerValue5%13);//calculating card value
			if(cardPlayerValue5==11||cardPlayerValue5==12||cardPlayerValue5==0)//K,Q,J has value of 10
			{
				cardPlayerValue5=10;
			}
			cardPlayerValueTotal+=cardPlayerValue5;//adds card 5 value to total
			$("#playerCardValue").html("<p>"+cardPlayerValueTotal+"</p>");
			pCardCount++;
		}
		else if(pCardCount==5&&cardPlayerValueTotal<21)//player cannot hit when all cards are flipped 
		{
			$("#status").html("<h1>You are out of cards to hit. You must STAND.</h1>");//changes textbox content
			$("#textBox").fadeIn();
			$("#textBox").delay(2000);
			$("#textBox").fadeOut();
			$("#btnHit").fadeOut();
		}
		else if(cardPlayerValueTotal==21)//player cannot hit when value is 21
		{
			$("#status").html("<h1>Your card value is at 21. You must STAND.</h1>");
			$("#textBox").fadeIn();
			$("#textBox").delay(2000);
			$("#textBox").fadeOut();
			$("#btnHit").fadeOut();
		}
		/* Lose Check */
		if(cardPlayerValueTotal>21)
		{
			$("#losePopup").fadeIn();
			$("#btnHit").hide();
			$("#btnStand").hide();
		}
	});//end of btnHit click

	//stand button
	$("#btnStand").click(function(event) {
		/* DEALER CARDS */
		/* Dealer Card 2*/
		if(dCardCount==1&&cardDealerValueTotal<16)
		{
			do{ //keeps rerolling card if card value repeated
				cardDealerValue2=Math.round(1+Math.random()*51);
				cardDealer2FileName="card"+cardDealerValue2+".JPG";
				dcard2FilePath="cards/cards/"+cardDealer2FileName;
				$("#imgDealerCard2").prop("src",dcard2FilePath);
			} while (cardDealerValue2==cardPlayerValue1||cardDealerValue2==cardPlayerValue2||cardDealerValue2==cardPlayerValue3||cardDealerValue2==cardPlayerValue4||cardDealerValue2==cardPlayerValue5||cardDealerValue2==cardDealerValue1);
			/*CARD 2 VALUE*/
			cardDealerValue2=Math.round(cardDealerValue2%13);//calculating card value
			if(cardDealerValue2==11||cardDealerValue2==12||cardDealerValue2==0)//K,Q,J has value of 10
			{
				cardDealerValue2=10;
			}
			cardDealerValueTotal+=cardDealerValue2;//adds card 2 value to total
			$("#dealerCardValue").html("<p>"+cardDealerValueTotal+"</p>");
			dCardCount++;
		}
		/* Dealer Card 3*/
		if(dCardCount==2&&cardDealerValueTotal<16)
		{
			do{ //keeps rerolling card if card value repeated
				cardDealerValue3=Math.round(1+Math.random()*51);
				cardDealer3FileName="card"+cardDealerValue3+".JPG";
				dcard3FilePath="cards/cards/"+cardDealer3FileName;
				$("#imgDealerCard3").prop("src",dcard3FilePath);
			} while (cardDealerValue3==cardPlayerValue1||cardDealerValue3==cardPlayerValue2||cardDealerValue3==cardPlayerValue3||cardDealerValue3==cardPlayerValue4||cardDealerValue3==cardPlayerValue5||cardDealerValue3==cardDealerValue1||cardDealerValue3==cardDealerValue2);
			/*CARD 3 VALUE*/
			cardDealerValue3=Math.round(cardDealerValue3%13);//calculating card value
			if(cardDealerValue3==11||cardDealerValue3==12||cardDealerValue3==0)//K,Q,J has value of 10
			{
				cardDealerValue3=10;
			}
			cardDealerValueTotal+=cardDealerValue3;//adds card 3 value to total
			$("#dealerCardValue").html("<p>"+cardDealerValueTotal+"</p>")
			dCardCount++;
		}
		/* Dealer Card 4*/
		if(dCardCount==3&&cardDealerValueTotal<16)
		{
			do{ //keeps rerolling card if card value repeated
				cardDealerValue4=Math.round(1+Math.random()*51);
				cardDealer4FileName="card"+cardDealerValue4+".JPG";
				dcard4FilePath="cards/cards/"+cardDealer4FileName;
				$("#imgDealerCard4").prop("src",dcard4FilePath);
			} while (cardDealerValue4==cardPlayerValue1||cardDealerValue4==cardPlayerValue2||cardDealerValue4==cardPlayerValue3||cardDealerValue4==cardPlayerValue4||cardDealerValue4==cardPlayerValue5||cardDealerValue4==cardDealerValue1||cardDealerValue4==cardDealerValue2||cardDealerValue4==cardDealerValue3);
			/*CARD 4 VALUE*/
			cardDealerValue4=Math.round(cardDealerValue4%13);//calculating card value
			if(cardDealerValue4==11||cardDealerValue4==12||cardDealerValue4==0)//K,Q,J has value of 10
			{
				cardDealerValue4=10;
			}
			cardDealerValueTotal+=cardDealerValue4;//adds card 4 value to total
			$("#dealerCardValue").html("<p>"+cardDealerValueTotal+"</p>");
			dCardCount++;
		}
		/* Dealer Card 5*/
		if(dCardCount==4&&cardDealerValueTotal<16)
		{
			do{ //keeps rerolling card if card value repeated
				cardDealerValue5=Math.round(1+Math.random()*51);
				cardDealer5FileName="card"+cardDealerValue5+".JPG";
				dcard5FilePath="cards/cards/"+cardDealer5FileName;
				$("#imgDealerCard5").prop("src",dcard5FilePath);
			} while (cardDealerValue5==cardPlayerValue1||cardDealerValue5==cardPlayerValue2||cardDealerValue5==cardPlayerValue3||cardDealerValue5==cardPlayerValue4||cardDealerValue5==cardPlayerValue5||cardDealerValue5==cardDealerValue1||cardDealerValue5==cardDealerValue2||cardDealerValue5==cardDealerValue3||cardDealerValue5==cardDealerValue4);
			/*CARD 5 VALUE*/
			cardDealerValue5=Math.round(cardDealerValue5%13);//calculating card value
			if(cardDealerValue5==11||cardDealerValue5==12||cardDealerValue5==0)//K,Q,J has value of 10
			{
				cardDealerValue5=10;
			}
			cardDealerValueTotal+=cardDealerValue5;//adds card 5 value to total
			$("#dealerCardValue").html("<p>"+cardDealerValueTotal+"</p>");
			dCardCount++;
		}
		/* Checking results */
		if(cardDealerValueTotal==21&&cardPlayerValueTotal!=21)//lose 
		{
			$("#losePopup").fadeIn();
		}
		else if(cardDealerValueTotal>cardPlayerValueTotal&&cardDealerValueTotal<21)//lose
		{
			$("#losePopup").fadeIn();
		}
		else if(cardDealerValueTotal<cardPlayerValueTotal&&cardDealerValueTotal<21)//win
		{
			bet*=2;
			money+=bet;
			$("#lblMoney").html("$"+money); //display amount of money
			$("#winPopup").fadeIn();
		}
		else if(cardDealerValueTotal==cardPlayerValueTotal)//tie
		{
			money+=bet;
			$("#lblMoney").html("$"+money); //display amount of money
			$("#tiePopup").fadeIn();
		}
		else if(cardDealerValueTotal==21&&cardPlayerValueTotal==21)//tie
		{
			money+=bet;
			$("#lblMoney").html("$"+money); //display amount of money
			$("#tiePopup").fadeIn();
		}
		else if(cardDealerValueTotal>21)//win
		{
			bet*=2;
			money+=bet;
			$("#lblMoney").html("$"+money); //display amount of money
			$("#winPopup").fadeIn();
		}
		$("#btnHit").hide();
		$("#btnStand").hide();
		$("#music").hide();
		$("audio").hide();
	});//end of btnStand Click

	//view results (when lost) button	
	$("#btnViewLose").click(function(event){
		$("#losePopup").fadeOut(1000);
		$("#btnRepeat").fadeIn(1000);
		$("#music").fadeIn();
		$("audio").fadeIn();
	});//end of btnViewLose click
	
	//view results (when won) button
	$("#btnViewWin").click(function(event){
		$("#winPopup").fadeOut(1000);
		$("#btnRepeat").fadeIn(1000);
		$("#music").fadeIn();
		$("audio").fadeIn();
	});//end of btnViewWin click
	
	//view results (when tie) button
	$("#btnViewTie").click(function(event){
		$("#tiePopup").fadeOut(1000);
		$("#btnRepeat").fadeIn(1000);
		$("#music").fadeIn();
		$("audio").fadeIn();
	});//end of btnViewTie click

	//play again button
	$("#btnRepeat").click(function(event){

		if(money>0)
		{
			//round counter
			roundCounter++;

			//empty bet input
			$("#txtBet").val("");

			//hide buttons
			$("#btnDeal").hide();
			$("#btnHit").hide();
			$("#btnStand").hide();
			$("#btnRepeat").hide();

			//status box reset
			$("#status").fadeIn();
			$("#status").html("Welcome to round " +roundCounter)

			//card value count reset
			$("#dealerCardValue").html("<p>0</p>");
			$("#playerCardValue").html("<p>0</p>");

			//cards reset 
			$("#imgPlayerCard1").prop("src","cards/cards/card55.JPG");
			$("#imgPlayerCard2").prop("src","cards/cards/card55.JPG");
			$("#imgPlayerCard3").prop("src","cards/cards/card55.JPG");
			$("#imgPlayerCard4").prop("src","cards/cards/card55.JPG");
			$("#imgPlayerCard5").prop("src","cards/cards/card55.JPG");

			$("#imgDealerCard1").prop("src","cards/cards/card55.JPG");
			$("#imgDealerCard2").prop("src","cards/cards/card55.JPG");
			$("#imgDealerCard3").prop("src","cards/cards/card55.JPG");
			$("#imgDealerCard4").prop("src","cards/cards/card55.JPG");
			$("#imgDealerCard5").prop("src","cards/cards/card55.JPG");
			
			//card count reset
			dCardCount=0;
		 	pCardCount=0;
		 	cardPlayerValueTotal=0;
		 	cardDealerValueTotal=0;

		 	//show bet button
		 	$("#btnBet").fadeIn();
		 	$("#betting").fadeIn();
		}
		//game over
	 	else
	 	{
	 		$("#gameoverPopup").fadeIn();
	 		$("#betting").fadeIn();
	 		$("#music").hide();
			$("audio").hide();
	 	}
	});//end of btnRepeat click

	//relaod game (when game over) button
	$("#btnGameover").click(function(event){
		location.reload(true);//reloads game
	});//end of btnGameover click
});//end of doc ready