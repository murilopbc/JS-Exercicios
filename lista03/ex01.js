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

// Função Média

function media(num1, num2){
    return (num1 + num2) / 2 
}
console.log(media(10, 20))

// Função Menor Número

function menor(num1, num2){
    if (num1 > num2) {
        return num2
    }
    else {
        return num1
    }
}
console.log(menor(11,12))

// Função diferença entre números

function diferenca(num1, num2){
    if (num1 > num2) {
        return num1 - num2
    }
    else {
        return num2 - num1
    }
}
console.log(diferenca(5,40))

// Função números em ordem crescente

function crescente(num1, num2){
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    return [num1, num2]

}
console.log(crescente(44,42))





