/*
[while] Desenvolva uma página que leia as notas de uma disciplina de uma sala com “n” alunos 
   (ficará a critério do usuário indicar quando os alunos acabaram).  Ao término, apresente:
   -> A quantidade de notas lidas.
   -> A média aritmética das notas da sala.
*/

let contador = 1
let limite = 5
let somaNotas = 0

while (contador <= limite){
   try {
      nota = prompt(`Digite a nota do aluno ${contador}:`)
      if (nota === null){
         alert("Operação Cancelada!")
         break
      }

      nota = parseFloat(nota)

      if (isNaN(nota) || nota < 0){
         throw new Error("Valor Inválido")
      }
      somaNotas += nota
      contador++

   }
   catch(error){
      alert(error.message)
   }
  
}
if (contador > 1) {
   
   let media = somaNotas / (contador - 1);
   alert(`A média da sala na prova de matemática foi ${media.toFixed(2)}`);
} else {
   alert("Nenhuma nota válida foi inserida.");
}