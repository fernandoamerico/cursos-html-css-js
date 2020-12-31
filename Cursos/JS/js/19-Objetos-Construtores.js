// Quando precisamos padronizar certos comandos e evitar erros de sintaxe, é muito comum usarmos objetos e funções, uma manera muito pratica de repetir a mesma estrutura varias vezes.

// Veja no Exemplo a baixo, onde para acriar um perfil de aluno, criamos uma função que irá ter um objeto que vai criar um novo perfil de aluno sempre que for chamada.

function criarAluno(na, na1, na2) {
  return {
    n: na,
    n1: na1,
    n2: na2,
    // E dentro do objeto iremos criar um método para calcular a média do aluno.
    media: function () {
      return (this.n1 + this.n2) / 2;
    },
  };
}

// Agora podemos criar uma variável que irá receber os atributos de cada aluno e assim executar nossa função criar aluno.
var turma = [
  criarAluno("Fernando", 10, 5),
  criarAluno("Américo", 8, 5),
  criarAluno("Silva", 2, 10),
];

// Agora basta escolher qual aluno você deseja exibir.
console.log("CHAMANDO A VAIRÁVEL NORMALMENTE:");
var aluno = turma[1];
console.log(aluno);

// Podemos listas também todos os elementos de nosso array turma usando um for.
console.log("CHAMANDO A VARIÁVEL USANDO FOR:");
for (var al of turma) {
  console.log(al);
  console.log(al.media());
}

// Uma outra manera de fazer o mesmo que o for, seria usando a método forEach onde irá ser chamado todos os elementos de nossa variável e repassando para uma função que irá executar alguma tarefa usando esses elementos, veja:

console.log("Usando forEach:");
turma.forEach(function (e) {
  console.log(e);
});
// Como pode ver, esse método funciona exatamente igual ao for.

//Por fim também existe uma outra maneira de criar um objeto sem necessariamente usar um objeto propriamente dito, isso é, temos que criar um construtor de um objeto e assim esse construtur é que irá criar os objetos para a gente, veja:

// primeiro criamos uma função que irá trabalhar com os dados recebidos de nossas entradas externas.

function criarAl(nome1, nota1, nota2) {
  this.nom1 = nome1;
  this.no1 = nota1;
  this.no2 = nota2;

  this.md = function () {
    return (this.no1 + this.no2) / 2;
  };
}

// Agora que ja temos a função que será responsável por criar nosso objeto, basta criar uma variável para cada objeto e com a chave "new" definir os atributos para cada um desses novos objetos.


var alu1 = new criarAl("Fer", 6, 7);
var alu2 = new criarAl("Américo", 2, 10);

console.log("Isso foi criado por um criador de objetos:");
console.log(alu1);
