/*
let num1 = prompt("Digite um numero: ");
let num2 = prompt("Digite um numero: ");

num1 = Number(num1);
num2 = parseInt(num2);

const resultado = num1 + num2;
window.alert(`resultado foi: ${resultado}`);
*/


let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;    

console.log(varA, varB, varC);
