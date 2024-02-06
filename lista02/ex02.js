/*
[do..while] Desenvolva uma página que leia as idades de “n” pessoas até que a soma das idades 
ultrapasse 100 anos. Ao término, apresente:
   -> A idade da pessoa mais velha.
*/

idade = 1
limite = 100
pessoaVelha = 0

do {
   console.log(`Digite sua idade: ${idade}`)
   if (idade > pessoaVelha){
      pessoaVelha = idade
   }
   idade++
} 
while(idade <= limite)

console.log(`A pessoa mais velha tem ${pessoaVelha} anos`)