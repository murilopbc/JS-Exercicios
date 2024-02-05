/* 
Desenvolva um script para uma pousada que cobra R$ 200,00 de diária mais uma taxa de serviço que varia 
de acordo com o período de hospedagem, sendo:
   -> R$ 10,00 por diária em períodos maiores que 10 dias.
   -> R$ 15,00 por diária se o período for de 10 dias.
   -> R$ 20,00 por diária em períodos menores que 10 dias.
   Apresente o valor total da hospedagem a ser pago por um período informado pelo usuário.
*/

let diaria = 200
let qtd_dia = 11

console.log(`Seja bem-vindo a pousada Murilove!`)
console.log(`Digite o período de sua hospedagem: ${qtd_dia} dias`)



if (qtd_dia > 10) {
    diaria = 200 + (10 * qtd_dia)
    console.log(`Valor total da hospedagem: ${diaria}`)
}

else if (qtd_dia == 10){
    diaria = 200 + (15 * qtd_dia)
    console.log(`Valor total da hospedagem: ${diaria}`)
}
else {
    diaria = 200 + (20 * qtd_dia)
    console.log(`Valor total da hospedagem: ${diaria}`)
}
