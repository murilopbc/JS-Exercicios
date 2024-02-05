/*
[while] Desenvolva uma página que leia as notas de uma disciplina de uma sala com “n” alunos 
   (ficará a critério do usuário indicar quando os alunos acabaram).  Ao término, apresente:
   -> A quantidade de notas lidas.
   -> A média aritmética das notas da sala.
*/

nota_matematica = 6
contador = 1
limite = 10
media = nota_matematica / contador

while (contador <= limite){
   nota = console.log(`Digite a nota do aluno ${contador}: ${nota_matematica}`)
   contador++
}
console.log(`Foram lidas ${limite} notas`)

console.log(`A média da sala na prova de matemática foi ${media}`)
