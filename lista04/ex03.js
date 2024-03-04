/*
Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.
*/

let contador = 0;
let idades = [];

do {
    try {
        let idade = parseInt(prompt("Digite sua idade: "));
        if (!isNaN(idade)) {
            idades.push(idade);
            contador++;
        } else {
            alert("Valor Inválido. Digite um número inteiro.");
        }
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }
} while (contador < 20);

alert("Idades: " + idades);

let soma = idades.reduce(function(acumulador, valor){
    return acumulador + valor
})

let media = soma / contador

let idadesAcimaMedia = idades.filter(function(valor){
    return valor > media
})


alert("Valores acima da média " + idadesAcimaMedia.join(", "));