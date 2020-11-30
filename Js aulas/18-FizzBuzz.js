//FizzBuzz: Compare valores e tenha um retorno baseado nos valores de entrada.


//Se não for digitado nada > "Favor digitar um numero";
//Se o valor não for um número > "Não é número";
//Se o número não divide por 3 ou por 5 > Entrada;
//Se o número é divisor de 3 e 5 : FizzBuzz;
//Se o número é divisor de 3 > Fizz;
//Se o número é dividor de 5 > Buzz;

let n = '0';

function fizzBuzz (n){
    if(n === ''){
        console.log('Favor digitar um número:');
    }
    else if (n / 1 == n){
        if(n % 3 !==   0 && n % 5 !== 0){
            console.log(n);
        }
        else if(n % 3 == 0 && n % 5 == 0){
            console.log('FizzBuzz')
        }
        else if (n % 3 == 0){
            console.log('Fizz')
        }
        else if(n % 5 == 0){
            console.log('Buzz')
        };
    }
    else {
        console.log('Não é número');
    };
};

fizzBuzz(n);


