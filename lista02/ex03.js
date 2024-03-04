/*
[for] Desenvolva uma página que leia um número inicial e um número final e apresente os números 
entre esse intervalo de 3 em 3. Por exemplo, de 10 a 30 seria apresentado 10, 13, 16, 19, 22, 25 e 28.
*/

while (true){
    try {
        let num_inicio = prompt("Digite um número: ")
        let num_final = prompt("Digite um outro número: ")

        if (num_inicio === null || num_final === null){
            alert("Operação Cancelada!")
            break
        }

        num_inicio = parseInt(num_inicio)
        num_final = parseInt(num_final)

        if (isNaN(num_inicio) || isNaN(num_final)){
            throw new Error("Valor Inválido")
        }

        else if(num_final < num_inicio){
            throw new Error("Número final deve ser maior que o número inicial!")
        
        } else {
            for (let i = num_inicio; i <= num_final; i += 3){
                alert(i)
        
        }
        break

    }
} catch(error){
    alert(error.message)
}

}