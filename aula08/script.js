const nome = "Anailson";
let idade = 23;
let peso = 110;
let altura = 1.80;

const anoNascimento = 2025 - idade;
let calcIMC = peso / (altura * altura);

console.log(`${nome} tem ${idade} anos pesa ${peso} Kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${calcIMC}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);