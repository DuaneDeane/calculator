var num1=prompt("Enter first number: ");
var num2=prompt("Enter second number: ");

var x=Number(num1);
var y=Number(num2);

function sum(x, y){
    var sum = x + y;
    console.log(sum);
    document.getElementById("calculator").innerHTML=`the result is ${sum}`;
}
sum(x,y);

function subtract(x, y){
    var subtract = x - y;
    console.log(subtract);
    document.getElementById("calculator").innerHTML=`the result is ${subtract}`;
}
subtract(x,y);

function multiply(x, y){
    var multiply = x - y;
    console.log(multiply);
    document.getElementById("calculator").innerHTML=`the result is ${multiply}`;
}
multiply(x,y);

function divide(x, y){
    var divide = x - y;
    console.log(divide);
    document.getElementById("calculator").innerHTML=`the result is ${divide}`;
}
divide(x,y);