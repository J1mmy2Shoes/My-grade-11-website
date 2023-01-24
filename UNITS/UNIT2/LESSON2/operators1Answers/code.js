alert("test");

//Question 3
let totalVolume=0;
let height=0;
let diameter=0;
let radius=0;
const PI=3.14;
height=+prompt("Enter value for height.");
diameter=+prompt("Enter value for diameter.");

radius=diameter/2;
totalVolume=PI*radius**2*height

alert("The total volume is " + totalVolume + "cm cubed.");

//Question 4
let surfaceArea=0;
let side=0;
side=+prompt("Enter side value.");

surfaceArea=side**2*6;

alert("The surface area of the cube is " + surfaceArea + "m.")

//Question 5
let totalMoney=0;
let principalInvestment=0;
let numberOfYears=0;
let investmentRate=0;
principalInvestment=+prompt("Enter the principal investment value.");
numberOfYears=+prompt("Enter the number of years.");
investmentRate=+prompt("Enter the investment rate (in decimal).");

totalMoney=principalInvestment*(1+investmentRate)**numberOfYears;

alert("You would have $" + totalMoney + " after " + numberOfYears + " years.");
