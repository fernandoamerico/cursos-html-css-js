// Evita usar "if" infinitos.

//Ex. Você tem um cliente e se esse cliente tiver mais de 100 pontos, ele é um cliente do tipo premium se não ele é do tipo comum.

let pontosClientes = 100;

let tipoDeCliente = pontosClientes > 100 ? 'Premium' : 'Comum';

console.log(tipoDeCliente);