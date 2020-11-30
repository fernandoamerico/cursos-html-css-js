//Exercício: Digite dois numeros e retorne o número maior.


function calc( a, b){
    if ( a > b){
        console.log(a);
    }
    else{
        console.log(b);
    };
};

calc(21, 5);

//Maneria do professor: Usando operador Ternário.

let r = calc2(21, 5);
console.log(r);

function calc2 (n1, n2){
    return n1 > n2 ? n1 : n2;
};