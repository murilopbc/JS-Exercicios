/* 
Desenvolva um script para uma pousada que cobra R$ 200,00 de diária mais uma taxa de serviço que varia 
de acordo com o período de hospedagem, sendo:
   -> R$ 10,00 por diária em períodos maiores que 10 dias.
   -> R$ 15,00 por diária se o período for de 10 dias.
   -> R$ 20,00 por diária em períodos menores que 10 dias.
   Apresente o valor total da hospedagem a ser pago por um período informado pelo usuário.
*/

let diaria = 200

while(true){
    try {
        let qtd_dia = prompt("Digite quantos dias irá ficar hospedado: ");
        if (qtd_dia === null){
            alert("Operação Cancelada!");
            break
        }

        qtd_dia = parseInt(qtd_dia)

        if (isNaN(qtd_dia) || qtd_dia <= 0) {
            throw new Error("Valor Inválido");
        }

        if (qtd_dia > 10) {
            diaria = 200 + (10 * qtd_dia)
            alert(`Valor total da hospedagem: ${diaria}`)
        }
        
        if (qtd_dia == 10){
            diaria = 200 + (15 * qtd_dia)
            alert(`Valor total da hospedagem: ${diaria}`)
        }

        else {
            diaria = 200 + (20 * qtd_dia)
            alert(`Valor total da hospedagem: ${diaria}`)
        }
        

    } catch(error){
        alert(error.message)
    }
}




