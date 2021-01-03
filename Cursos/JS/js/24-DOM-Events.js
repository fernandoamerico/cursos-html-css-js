// DOM é a estrutura de objetos que o nosso navegador gera quando é carregado e os eventos são ações que podemos fazer com esses objetos usando Js.

//Um exempro de um evento é quando atribuímos a um elemento como o <h2> o evento "onclick" que irá executar uma ação quando esse elemento for clicado.

function clicar(){
    console.log("Foi clicado");
}

// Essa é uma maneira de ao enviar um texto em nosso input ele automaticamente converter esse texto para alguma outra tag.
let a = document.getElementById("h4");
let inp = document.getElementsByTagName("input")[0];

function changeH4(){
    a.innerText = inp.value;
}

//Uma outra maneira de fazer isso usando this, seria enviando na tag <input> no nosso arquivo html o this como argumento da função changeH1 que ficaria assim:

// changeH1(this)

//Assim o this enviado a nossa função irá ser o próprio input e dentro de nossa função não iriamos usar mais o let inp, pois a tag já foi obtida pelo o nosso this, agora o que precisamos fazer é apenas passar como argumento de nossa função o this para que seja modificado o texto, assim:

let b = document.getElementsByClassName("h4")[0];

function changeH42(v){
    b.innerText = v.value;
}


//Outro evento muito interessante é você poder digitar e ao mesmo tempo o texto é modificado, veja usando o evento oninput.

let c = document.getElementById("oni");

function changeHOni(v2){
    c.innerText = v2.value;
}

