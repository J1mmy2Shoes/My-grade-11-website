alert("Logical Operators");

/* Logical operators are used in conjunctions with comparition operators to
create more complex and efficient conditions (descisions).
There are 3 of them: The AND, the OR and the NOT
AND: &&
OR: ||
NOT: !
These operators operate on boolean operands.

True && True = True
True && False = False
False && False = False

True || True = True
True || False = True
False || Flase = Flase

!True = False 
!False = True
Operator precedence is as follows:
!
&&
||

!(1>2) || 6<10 = !F || 6<10 = !F || T = T || T = T
*/

let login=null;
let password=null;

login=prompt("Enter your login.")
password=prompt("Enter your password.")

if((login=="krnic" || login=="Krnic") && password=="ics3u")
{
	alert("Welcome");
	location.href="http://sdsscomputers.com"
}
else
{
	alert("Sorry");
}