const numero = window.prompt('Digite um número');
// let numero = prompt('Digite um número');
 numero = Number(numero);
let RaizQ = (numero ** 0.5);
let UpArredondo = Math.ceil(numero);

const numeroTitulo = document.getElementById('numero-titulo');        
const texto = document.getElementById('texto');
const CalcRaiz = document.getElementById('CalcRaiz');
const NaN = document.getElementById('Nan');
const UpArre = document.getElementById('UpArre');


CalcRaiz.innerHTML = `Raiz Quadrada é: ${RaizQ}`;
numeroTitulo.innerHTML = `Seu número é: ${numeroTitulo}`;
texto.innerHTML = `<p>Seu numero + 2 é: ${numero + 2}.</p>`;
UpArre.innerHTML = `Arrendodando para cima ${UpArredondo}`;


























/*
        let RaizQ = (Digite ** 0.5);
        console.log(RaizQ);
        document.body.innerHTML +=`${RaizQ} <br/>` 
        document.body.innerHTML += `${Digite} é inteiro: ${Number.isInteger()} <br/>`
        */