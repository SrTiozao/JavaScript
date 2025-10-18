// IEE 754-2008
let num1 = 10.20204;
let num2 = 0.1;
/*
console.log(num1.toString() + num2);
console.log(typeof num1); 
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
*/
//console.log(num1.toFixed(2))
let temp = num1 * '5';
 console.log(Number.isNaN(temp));//Sempre retornara vdd se aconta for false

/*
num1 = ((num1 * 100) + (num2 * 100)) / 100;// 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100;// 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;// 1.0
*/
/*
num1 += num2;// 0.8
num1 += num2;// 0.9
num1 += num2;// 1.0
num1 += num2;// 1.1

num1 = parseFloat(num1.toFixed(2));// Os dois é mesma coisa
num1 = Number(num1.toFixed(2));
*/
// console.log(num1);
// console.log(Number.isInteger(num1));
