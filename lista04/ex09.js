/*
Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
Leia 5 números inteiros e armazene em um vetor B. 
Carregue e apresente um vetor C com os valores de A e B alternados.
*/

let contador = 0;
let vetorA = [];
let vetorB = [];

do {
    try {
        let numInteiro = parseInt(prompt("Digite um número inteiro: "));
        if (!isNaN(numInteiro)) {
            vetorA.push(numInteiro);
            contador++;
        } else {
            alert("Valor Inválido. Digite um número inteiro.");
        }
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }
} while (contador < 5);

alert("Lista A: " + vetorA);

contador = 0;

do {
    try {
        let numInteiro = parseInt(prompt("Digite um número inteiro: "));
        if (!isNaN(numInteiro)) {
            vetorB.push(numInteiro);
            contador++;
        } else {
            alert("Valor Inválido. Digite um número inteiro.");
        }
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }
} while (contador < 5);

alert("Lista B: " + vetorB);


let vetorC = []
for (let i = 0; i < 5; i++) {
    vetorC.push(vetorA[i], vetorB[i]);
};

alert("Valores alternados: " + vetorC);