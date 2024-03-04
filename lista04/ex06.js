/*
Desenvolva um programa que a partir de um vetor de Strings com 10 nomes inicializados na declaração 
leia um novo nome e verifique se ele está armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
caso contrário, apresente a mensagem “Nome não encontrado!”
*/

let nomes = ["Murilo", "João", "Caio", "Sarah", "Stella", "Adriana", "Lucca", "Márcia", "Maria", "Marcos"];

try {
    let nomeDigitado = prompt("Digite um nome da lista: ");
    let indice = nomes.indexOf(nomeDigitado);

    if (indice !== -1) {
        alert(`Nome ${nomeDigitado} encontrado na lista na posição ${indice + 1}`);
    } else {
        alert("Nome não encontrado!");
    }
} catch (error) {
    alert("Erro ao processar a entrada.");
}
