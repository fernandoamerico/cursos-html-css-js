//For in
//O loop For..In vai interagir com propriedades de um objeto ou elementos de um array.

//Para criar um loop for in, você precisa criar uma variavel que seja um objeto ou um array.

const pessoa = {
    nome:  'Fernando',
    idade: 29
};

//Agora você irá usar os paramentros for in e usar uma variavel chamada "chave" que significa key+value em inglês, onde essa variável irá receber os valores do objeto ou do array.


for(let chave in pessoa){
    console.log(chave);
}

//Perceba que os valores dentro do objeto passam para a variável chave de forma individual e ela passa a reportar os valores separadamenta.

//Você pode fazer isso também com um array, da seguinte maneira.

const cores = ['Vermelho', 'azul', 'verde'];

//Ao criar um array, o que você deve fazer é criar uma variável chamada indice e ela irá receber os valores em cada indice dentro do array.
 
for (let indice in cores) {
    console.log(indice);
};

//Lembrese que os indices, são os numeros dados a cada "espaço" dentro de um array, caso você queira enumerar as propriedades, você deve fazer o seguinte:

for (let indice in cores) {
    console.log(cores[indice]);
};

//Ou você pode imprimir os dois ao mesmo tempo.

for( indice in cores) {
    console.log(indice, cores[indice]);
};

//For..OF
//Caso você queira interagir com arrays e suas propriedades, é mais facil você usar o loop "For Of" pois ele foi feito especificamente para isso. Ele irá exibir apenas as propriedades dos arrays, ingnorando os índices.

for( let cor of cores){
    console.log(cor);
}