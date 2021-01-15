//Para trabalhar com datas no Js você precisa criar uma variável que irá receber essa data e depois usar a chave "New" e depois chamar o método "Data()".

var d = new Date();
console.log(d);

//Caso você queira alterar uma data, é só por a nova data dentro do ():

var d2 = new Date("01-01-2000");
console.log(d2)

//OBS: Lembre-se que números vazios sempre serão calculados como milisegundos, então se você por por exemplo, 2020 para indetificar o ano, o Js irá entender que são 2020 milesegundos e não o ano 2020.

var d3 = new Date(2020);
console.log("2020 milesegundos e não anos: " + d3);
//Ou seja, se você colocar um número como "5789283748238492" isso representará uma data em milesegundos e não um ano em específico. 

//Existe também a possibilidade de você extrair alguns dados desse método Date() que seria usando algumas palavras chaves como por exemplo, se você quiser extrair apenas o dia da semana referente a data:

console.log(d.getDay()); 
// Lembrando que o Js irá passar não o nome do dia mas o número que ele representa, contando a partir do 0 até o 6, sendo 7 dias da semana.

//Você pode traduzir isso criando um arrays e colocando em cada elemento um dia da semana, depois quando printar na tela, você apenas coloca o getDay() dentro de [] de nosso elemento, assim cada número que getDay() repassar para nosso arrys será um número da semana, veja:


var days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var d4 = new Date();
console.log("Dias da semana: " + days[d4.getDay()]);