/*
Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração 
apresente a média aritméticas desses valores.
*/

let contador = 0;
let numeros = [];

do {
    try {
        let numInteiro = parseInt(prompt("Digite um número inteiro: "));
        if (!isNaN(numInteiro)) {
            numeros.push(numInteiro);
            contador++;
        } else {
            alert("Valor Inválido. Digite um número inteiro.");
        }
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }
} while (contador < 8);

alert("Valores originais: " + numeros);

let soma = numeros.reduce(function(acumulador, valor){
    return acumulador + valor
})

let media = soma / contador


alert("Média " + media);