/*Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 
(caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.
*/

let contador = 0;
let numeros = [];

do {
    try {
        let numero = parseInt(prompt("Digite um número entre 100 e 200: "));
        if (numero < 100 || numero > 200 || isNaN(numero)) {
            alert("Valor Inválido. Digite um número inteiro entre 100 e 200.");
        } else {
            numeros.push(numero);
            contador++;
        }
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }
} while (contador < 8);

alert("Números: " + numeros);
