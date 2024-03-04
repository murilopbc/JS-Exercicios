/*
Leia dois números e a opção escolhida pelo usuário, sendo:
1 – Apresente a média aritmética dos números. (Com parâmetros e Com retorno).
2 – Apresenta o menor número. (Com parâmetros e Com retorno).
3 – Apresenta a diferença entre o maior e o menor número. (Com parâmetros e Com retorno).
4 – Apresenta os números em ordem crescente. (Com parâmetros e Sem retorno).

Os dois números devem ser diferentes. Caso sejam informados números iguais 
apresente mensagem de “erro” e solicite novamente os números.

Cada opção será implementada em uma função.

*/

let numero1, numero2;

do {
    numero1 = prompt("Digite um número: ");
    numero2 = prompt("Digite um outro número: ");

    if (numero1 === numero2) {
        alert("Os números devem ser diferentes");
    }

} while (numero1 === numero2);

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

function media(num1, num2) {
    return (num1 + num2) / 2;
}

function menor(num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

function diferenca(num1, num2) {
    return Math.abs(num1 - num2);
}

function crescente(num1, num2) {
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    return [num1, num2];
}

alert(`1 - Média: ${media(numero1, numero2)}`);
alert(`2 - Menor número: ${menor(numero1, numero2)}`);
alert(`3 - Diferença: ${diferenca(numero1, numero2)}`);
alert(`4 - Números em ordem crescente: ${crescente(numero1, numero2).join(', ')}`);
