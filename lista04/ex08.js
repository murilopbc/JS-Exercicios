/*
Desenvolva um programa que leia 6 números inteiros e armazene em um vetor A. 
Carregue um vetor B (de mesmo tipo e tamanho) com a metade dos valores armazenados em A. 
Apresente os valores dos dois vetores.
*/

let contador = 0;
let vetorA = [];

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
} while (contador < 6);

alert("Valores originais: " + vetorA);



let vetorB = vetorA.map(function (valor) {
    return valor / 2;
});

alert("Valores divididos por 2: " + vetorB);

