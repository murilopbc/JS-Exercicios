/* 
O IMC (Índice de Massa Corporal) é um critério da Organização Mundial da Saúde para dar uma indicação 
sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura * altura). 
Desenvolva um script que leia o peso e a altura de uma pessoa e apresente a sua condição, sendo:
   -> Abaixo de 18,5 é considerado “Abaixo do peso”.
   -> Entre 18,5 até 25 é considerado “Normal”.
   -> Entre 25 até 30 é considerado “Acima do peso”.
   -> Acima de 30 é considerado “Obeso”.
*/

let peso = 80
let altura = 1.90
let imc = peso / (altura * altura)

console.log(`Digite o seu peso: ${peso} `)
console.log(`Digite a sua altura: ${altura} `)



if (imc > 30){
    console.log(`Obeso`)
}
else if (imc > 25){
    console.log(`Sobrepeso`)
} 
else if (imc > 18.5){
    console.log(`Normal`)
} 
else{
    console.log(`Abaixo do peso`)
} 


