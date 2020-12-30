var alunos = ['Maria', 'Jose', 'João', 'Carlos'];

var nota1 = [3, 7, 7, 9];
var nota2 = [5, 7, 5, 10];


function media(n1 , n2) {
    m = (n1 + n2) / 2;
    return m;
}

function result() {
    if (m >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var i in alunos){
    console.log("O Aluno " + alunos[i] + " teve as notas: " + nota1[i] + " e " + nota2[i] + " obtendo uma média " + media(nota1[i], nota2[i]) + " sendo assim: " + result());
}


