//Comparações não Boleanos.

//Comparadores não boleanos, irão comparar valores que não são necesariamente TRUE ou FALSE, esses comparadores são chamados de:

//Falsy: Que verifica se os operadores são do tipo Undefined, null, 0, false, ''(string vazia) ou NaN(Not a Number).

//Truthy: Irá responder com o próprio valor não boleano e não falsy, por exemplo: numeros ou strings.

function a(b, c){
    d = b || c;
};

a(1, true);

console.log(d);

//Observação: ele vai comparar apenas o primeiro e o segundo operador, depois do segundo ele ignorará tudo, por exemplo: a || b || c.

