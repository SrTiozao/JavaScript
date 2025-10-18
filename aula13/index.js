const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');

let RaizQ = (numero ** 0.5);
let NaN1 = (Number.isNaN(numero));
let UpArredondo = Math.ceil(numero);
let DownArredondo = Math.floor(numero);
let CasaDec = numero.toFixed(2);

const inteiro = document.getElementById('inteiro');
const texto = document.getElementById('texto');
const CalcRaiz = document.getElementById('CalcRaiz');
const NaNHTML = document.getElementById('NaN');
const UpArre = document.getElementById('UpArre');
const DownArre = document.getElementById('DownArre');
const CasaDecHtml = document.getElementById('CasaDec');

inteiro.innerHTML = `${numero} é inteiro:${Number.isInteger(numero)}`;
numeroTitulo.innerHTML = `Seu número é: ${numero}`;
texto.innerHTML = `Seu numero + 2 é: ${numero + 2}.`;
CalcRaiz.innerHTML = `Raiz Quadrada é: ${RaizQ}`;
NaNHTML.innerHTML = `NaN é: ${NaN1}`
UpArre.innerHTML = `Arrendodando para cima: ${UpArredondo}`;
DownArre.innerHTML = `Arredondado para baixo: ${DownArredondo}`;
CasaDecHtml.innerHTML = `Com duas casas decimais: ${CasaDec}`;
