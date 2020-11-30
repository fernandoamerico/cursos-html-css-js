//Operadores Lógicos são usados para tomar decições baseadas em condições multiplas, no Js existem 3: And, Or e o Not.

//Operador Lógico "And" (&&):
//Ele irá retornar TRUE se os dois operandos forem TRUE.

console.log(true && true);

//Exemplo Real: Temos uma pessoa que só pode aplicar para uma vaga se for maior de idade e ter carteira de trabalho.

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//Operador Lógico OU repreentando pelos sinais ||
//Ele vai retonar true se um dos operandos for true.

let a = false;
let b = false;
let c = a || b;

console.log(c);

//Operador NOT representando por !.
//Ele vai sempre modificar o resultado do operando, ou seja, se for TRUE, ele vai indicar como falso e se for FALSE, ele vai indicar como true.

let d = !c;
console.log(d);