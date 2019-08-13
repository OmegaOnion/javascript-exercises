function add (a,b) {
	return a+b;
}

function subtract (a,b){
	return a-b;
}

function sum (values) {	
	var temp = 0;
	for (i=0;i<values.length;i++){
		temp+=Number(values[i]);
	}
	return temp;	
}
function multiply (values) {
	var temp;
	if (values.length > 0) temp = values[0];
	else temp = 0;
	for (i=1;i<values.length;i++){
		temp*=Number(values[i]);
	}
	return temp;
}

function power(a,b) {
	return a**b;
}

function factorial(n) {
	//0 or less
	if (n<0) return 0;
	//base case
	if (n<=1) return 1;
	//recurse
	return n*factorial(n-1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}