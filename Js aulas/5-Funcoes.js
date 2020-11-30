//Functions ela faz parte de todo software e é uma das partes mais fundamentais.
//Como nomear uma função = Verbo + substantivo: Ex. resetaCor, transformaObjeto, alterarTamanho.

let corSite = "azul";
console.log (corSite);

function resetarCor (){
    corSite = "";
};

resetarCor();
console.log (corSite);

//Exercício: Criar um sistema onde várias variáveis recebem diferentes tipos de nomes de produtos e depois criar um objeto que receberá diferentes produtos em um único objeto.

let roupas = ['Camisas', 'Shorts', 'Bermudas', 'Calças', 'Sapatos'];
let eletronicos = ['TVs', 'Celulares', 'Conversor Digital', 'Home theater'];
let banho = ['Sabonetes', 'Shampoos', 'Escova de Dente', 'Promoção'];

function selecionarProduto() {
    roupas[0] = 'Chinelos';
    camisa = roupas[0];
}

function promocao(){
    escolha = banho[3];
    escolha = "";
}

promocao();
console.log(escolha);

//Exercício Yago 2: Criar um amigo e usar concatenação com arrays, functions e objetos.

let yago = {
    nome: 'Yagu',
    sobrenome: 'Arauju',
    altura: 2.00,
    estado: 'solteiro',
};

function corrigirDados (nomeCorrigido, sobrenomeCorrigido, alturaCorrigido, estadoCorrigido) {
    dadosCorrigidos = nomeCorrigido + ' ' + sobrenomeCorrigido + ', ' + alturaCorrigido + ', ' + estadoCorrigido;
};

corrigirDados('Yago', 'Araujo', 1.82, 'Casado');
console.log(dadosCorrigidos);

//Tipos de Funções: 1 = Realiza uma tarefa e não devolve nada.
//Uma função que não realiza uma tarefa é aquela que apenas te envia o que está sendo repassado para ela, assim que ela não realiza tarefa nenhuma. 

function dizerNome (){
    console.log ('Fernando');
}

dizerNome();

//Já a função que realiza uma tarefa vai realizar alguma ação antes de enviar o resultado dessa ação. Exemplo:

function calculadora (valor1, valor2){
    return valor1 * valor2;
};
console.log(calculadora(5,2));

function calculadora2 (valor3, valor4){
    result = valor3 * valor4;
};
calculadora2(5,2);
console.log(result);