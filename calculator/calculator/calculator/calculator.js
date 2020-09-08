const elCalc = document.getElementById("calculator");

function add(x, y) {
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function main(x,y) {

	const myAdd = add(x,y);
	const mySub = subtract(x,y);
	const myMul = multiply(x,y);
	const myDiv = divide(x,y);

	console.log('myAdd: ', myAdd);
	console.log('mySub: ', mySub);
	console.log('myMul: ', myMul);
	console.log('myDiv: ', myDiv);

    let myHTML = `
    <ul>
	    <li>The result of the addition is: ${myAdd}</li>
	    <li>The result of the subtraction is: ${mySub}</li>
	    <li>The result of the multiplication is: ${myMul}</li>
	    <li>The result of the division is: ${myDiv}</li>
    </ul>`;
    
	elCalc.innerHTML = myHTML;
}

// *********************

const num1=prompt("Enter first number: ");
const num2=prompt("Enter second number: ");

main( Number(num1), Number(num2));