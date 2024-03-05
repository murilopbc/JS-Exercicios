/*
Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.
*/

let nomes = ["Murilo", "João", "Caio", "Sarah", "Stella", "Adriana", "Lucca", "Márcia", "Maria", "Marcos"];
let contador = 1
let limite = 5

while(contador <= limite){
    try {
        let nomeDigitado = prompt(`Tentativa ${contador}: Digite um nome da lista:`);
        let indice = nomes.indexOf(nomeDigitado);
    
        if (indice !== -1) {
            alert(`Nome ${nomeDigitado} encontrado na lista na posição ${indice + 1} na tentativa ${contador}`);
            break
        } else {
            alert("Nome não encontrado!");
            
        }
        contador++
        
    } catch (error) {
        alert("Erro ao processar a entrada.");
    }

}

if (contador > limite){
    alert(`Limite de ${limite} tentativas atingido. Nome não encontrado.`)
}

// Usando For ao invés do while


// let nomes = ["Murilo", "João", "Caio", "Sarah", "Stella", "Adriana", "Lucca", "Márcia", "Maria", "Marcos"];
// let limite = 5;

// for (let tentativa = 1; tentativa <= limite; tentativa++) {
//     try {
//         let nomeDigitado = prompt(`Tentativa ${tentativa}: Digite um nome da lista:`);
//         let indice = nomes.indexOf(nomeDigitado);

//         if (indice !== -1) {
//             alert(`Nome ${nomeDigitado} encontrado na lista na posição ${indice + 1} na tentativa ${tentativa}.`);
//             break;
//         } else {
//             alert("Nome não encontrado!");
//         }
//     } catch (error) {
//         alert("Erro ao processar a entrada.");
//     }
// }

// if (tentativa > limite) {
//     alert(`Limite de ${limite} tentativas atingido. Nome não encontrado.`);
// }
