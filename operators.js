
//arthametic operators
var diff=5-3;
console.log("diff:" +diff);

var product=5*9;
console.log("product:"+product);	

var sum=9+6+3;
console.log("sum:"+sum);

var div=9/8;
console.log("div:"+div);

var mod=8%5;
console.log("mod:"+mod);

//assainment operators

	var R=10;
	R+=10;
	console.log(R);

var R=10;
	R-=10;
	console.log(R);

	var R=10;
	R*=10;
	console.log(R);

	//comparsion operator

	var s1=9;
	var s2=10;
	if (s1==s2) {

		console.log(true);
	}
	else
	{

		console.log(false);
	}

	var s1=15;
	var s2=10;
	if (s1>=s2) {

		console.log(true);
	}
	else
	{

		console.log(false);
	}


	//comarestion property

age=prompt("enter u r age:");
age=parseInt(age);
if(age>30)
{
document.write("as u r more thn 30 yr old,need to check u r health regularly");
}
else
{
	document.write("as u r young ,do not requrid to check regularly");

}


//comaresion  else with else if

ge=prompt("enter u r age:");
age=parseInt(age);
if(age>60)
{
document.write("as u r more thn 60 yr old,need to check u r health regularly");
}
else if (age>30)
 {

 	document.write("as u r below 60 yr old,need to take gud care about u r health");
 }
 else
{
	document.write("as u r young ,do not requrid to check regularly u can enjoy");

}