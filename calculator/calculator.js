console.log('Aloha')
const elCalc = document.getElementById("calculator");
console.log(elCalc);

function sum(x, y){
    console.log('top Sum')
    const mySum = x + y;
    console.log('mySum: ', mySum);
    elCalc.innerHTML =`the result is ${mySum}`;
}

function subtract(x, y){
    console.log('top Subtract')
    const subtract = x - y;
    console.log('subtract: ', subtract);
    elCalc.innerHTML=`the result is ${subtract}`;
}

function multiply(x, y){
    console.log('top Multiply')
    const multiply = x * y;
    console.log('multiply: ', multiply);
    elCalc.innerHTML=`the result is ${multiply}`;
}

function divide(x, y){
    console.log('top Divide')
    const divide = x / y;
    console.log('divide: ', divide);
    elCalc.innerHTML=`the result is ${divide}`;
}


function main(x,y){
    sum(x,y);
    subtract(x,y);
    multiply(x,y);
    divide(x,y);
}
console.log('prompts')
const num1=prompt("Enter first number: ");
const num2=prompt("Enter second number: ");

const x=Number(num1);
const y=Number(num2);
console.log('Before main')
main(x,y);