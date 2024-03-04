/*
[do..while] Desenvolva uma página que leia as idades de “n” pessoas até que a soma das idades 
ultrapasse 100 anos. Ao término, apresente:
   -> A idade da pessoa mais velha.
*/

let limite = 100;
let pessoaVelha = 0;
let somaIdades = 0;
let idade;

do {
    let entradaIdade = prompt("Digite sua idade:");

    if (entradaIdade === null) {
        alert("Operação Cancelada");
        break;
    }

    idade = parseInt(entradaIdade);

    if (isNaN(idade) || idade <= 0) {
        throw new Error("Valor Inválido");
    }

    somaIdades += idade;

    if (idade > pessoaVelha) {
        pessoaVelha = idade;
    }
} while (somaIdades < limite);

alert(`A pessoa mais velha tem ${pessoaVelha} anos`);
