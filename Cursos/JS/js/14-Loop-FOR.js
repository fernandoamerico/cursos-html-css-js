//Laço e Loop é uma maneira de ficar repetindo uma ação várias vezes sem precisar fazer manualmente.

//No JS temos 5 loops: For, While, Do..While, For..In e For..Of.

//For:

//Vamos criar um loop onde você tenha que repetir uma frase 5 vezes, basta você fazer:

//usando "for" você irá abrir um parenteses e dentro irá por a variável "i" que é a abreviação de index ou indice que é normalmente usado em loops.

// Depois de criar a variável, você irá indicar que esse varíavel tem o valor "0" depois indicar a condição que o loop irá continuar rodando, no nosso caso, como temos que repetir a frase 5 vezes, então vamos indicar que o loop irá rodar enquanto "i" seja menor que "5" quando "i" for maior que "5" ele não será mais rodado, e por fim, para que o "i" não esteja parado no tempo sempre valendo zero, temos que incrementar o valor a "i" com o comando "i++" que adicionará sempre +1 a ele.

for(let i = 0; i < 5; i++){
    console.log('Estou Aprendendo', i);
}

//assim temos um código que repete 5 vezes a mesma frase.

//Na lista que aparece, notamos que o Js começou a contar a partir do zero, caso queira que ele comece a partir do 1, você pode simplesmente dizer que o loop contará a partir do 1 e que ele contará até que "i" seja menor ou IGUAL 5:

for(let ii = 1; ii <= 5; ii++){
    console.log('Repetindo', ii);
}

//Você também pode tirar os números ímpares ou pares da contagem, basta por dentro dos simbolos {} um if que irá tirar o módulo do número que estiver dentro da variável, se o resultado for 0 o numero será par se o resultado for diferente de 0 será impar.

for(iii = 1; iii <= 5; iii++){
    if(iii % 2 !== 0){
        console.log("contage", iii);
    };
};

//Você também pode fazer o valor decrescente, ou seja, o valor inicial é 5 e ele vá dominúindo.

for (iiii = 5; iiii >= 1; iiii--){
    console.log(iiii)
}