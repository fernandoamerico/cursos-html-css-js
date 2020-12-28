//while: uma das grandes diferenças do for para o while é que a variável tem que ser declarada fora do loop.

let i = 5;

while (i >= 1){
    console.log(i);
    i--;
}

//Do..While
//O DO..While é quase a mesma coisa do While só que antes de fazer a validação da condição do loop ele vai realizar o processo ao menos uma vez:

let ii = 1;

do {
    console.log(ii);
    ii++;
} while (ii <= 5);