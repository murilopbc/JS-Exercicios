/*
Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração 
apresente o dobro de cada valor armazenado.
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
} while (contador < 5);

alert("Valores originais: " + numeros);

let numerosDobrados = numeros.map(function (valor) {
    return valor * 2;
});

alert("Valores dobrados: " + numerosDobrados);
