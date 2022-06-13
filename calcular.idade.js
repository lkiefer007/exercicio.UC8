//Faça um programa que receba a idade de uma pessoa em anos e 
//imprima essa idade em: meses, dias, horas, minutos.

//entrada

let idade = 33
;

//porcessamento
let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24
let idadeMinutos = idadeHoras * 60

//saida
console.log("sua idade em meses é: " + idadeMeses);
console.log("Sua idade em dias é: " + idadeDias);
console.log("Sua idade em horas é: " + idadeHoras);
console.log("Sua idade em minutos é: "+ idadeMinutos);