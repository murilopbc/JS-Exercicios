/*Desenvolva um programa que leia 10 números e apresente os valores pares. 
Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”
*/


let contador = 0;
let numeros = [];

do {
    try {
        let numero = parseInt(prompt("Digite um número: "));
        if (!isNaN(numero)) {
            numeros.push(numero);
            contador++;
        } else {
            alert("Valor Inválido. Digite um número inteiro.");
        }
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }
} while (contador < 10);

alert("Números " + numeros);

let pares = numeros.filter(function(valor){
    return valor % 2 === 0
});

if (pares.length === 0){
    alert("Todos os números são ímpares")
}
else{
    alert("Números pares " + pares.join(", "));

}
