/* 
O IMC (Índice de Massa Corporal) é um critério da Organização Mundial da Saúde para dar uma indicação 
sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura * altura). 
Desenvolva um script que leia o peso e a altura de uma pessoa e apresente a sua condição, sendo:
   -> Abaixo de 18,5 é considerado “Abaixo do peso”.
   -> Entre 18,5 até 25 é considerado “Normal”.
   -> Entre 25 até 30 é considerado “Acima do peso”.
   -> Acima de 30 é considerado “Obeso”.
*/


while (true){
    try{
        let peso = prompt("Digite seu peso: ")
        let altura = prompt("Digite sua altura: ")
        if (peso === null || altura === null){
            alert("Operação Cancelada!")
            break
        }
        peso = parseFloat(peso)
        altura = parseFloat(altura)

        let imc = peso / (altura * altura)

        if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0){
            throw new Error("Valor Inválido")
        }
        if (imc > 30){
            alert("Obeso")
        }
        else if (imc > 25){
            alert("Sobrepeso")
        } 
        else if (imc > 18.5){
            alert("Normal")
        } 
        else{
            alert("Abaixo do peso")
        } 
       

    }catch(error){
        alert(error.message)
    }
}

