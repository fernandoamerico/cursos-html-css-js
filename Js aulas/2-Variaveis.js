
//Variáveis e tipos de variáveis

let idade = 5;
console.log(idade);
let altura = 180;
console.log(altura);

// camelCase = Primeira Letra menuscula e as próximas palavras começam com Maiuscula.

let myName = 'Fernando';
let myAge = '29';
let socialStatus = 'Solteiro';

console.log(myName, myAge, socialStatus);

let valorIngressoAdulto = 20;
valorIngressoAdulto = 25;
console.log(valorIngressoAdulto); 

const constante = 20;

// OBS: Você nunca pode mudar o valor de uma variável que é constante usando "const" no lugar de "let". Só use let quando você tiver certeza que terá que mudar os valores de uma varíavel.

// Tipos Primitivos: Referencia e Valores
// Referencia: String.

let nome = 'Fernando'; //string literal, é um nome que se dá a varias letras em uma palavra. Em outras palavras, um texto ou muitas palavras em uma varíavel.

let idade2 = 25; // number literal, é o mesma cisa do string só que para numeros.

let estaAprobado = true; //boolean = é o mesmo de dizer que sim ou não. A variável vai retornar sempre um Sim ou um Não.

let sobrenome ; //Undefined = uma variável não definida = não é muito usado.

let corSelecionado = null; // Você usa para resetar um valor. Ex. Uma pagina sempre estará como "null" no seu fundo, ou seja, sem cor até que uma pessoa selecione uma cor, mas depois, quando uma nova pessoal carregar a pagina a variavel no navegador dessa pessoa, voltará a ser "null" e aí essa pessoa poderá recarregar uma nova cor e mudar novamente essa varíavel.

//Para descobrir o tipo de uma varíavel, use "Typeof".
console.log(typeof idade2);