/*
Desenvolva um script que leia a idade de um atleta e apresente a categoria a que ele pertence, sendo, 
menores de 18 anos “Juvenil” e os demais “Adulto”. 
*/

while (true){
    try {
        let idade = prompt("Digite sua idade: ");
        if (idade === null){
            alert("Operação Cancelada!");
            break;
        }
        idade = parseInt(idade);

        if (isNaN(idade) || idade <= 0) {
            throw new Error("Valor Inválido");
        }
        if (idade < 18) {
            alert(`Você tem ${idade} anos\nVocê é Juvenil`);
        }
        else {
            alert(`Você tem ${idade} anos\nVocê é Adulto`);
        }
        
    } catch(error){
        alert(error.message);
    }
    
}
