//Troque os valores das variáveis:
//Forma feita por mim.

let a = 'vermelho';
let b = 'azul';

function c (){
    ab = a;
    bb = b;
}

function d (){
    c();
    a = bb;
    b = ab;
}

d();

console.log(a);
console.log(b);

//Maneira realizada pelo professor:

let e = 'vermelho';
let f = 'azul';

let g = e;

e = f;
f = g;

console.log(e);
console.log(f);