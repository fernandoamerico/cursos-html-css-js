//Chamando um elemento filho
//Propriedade> children

let div1 = document.getElementsByClassName("divPai")[0];
console.log(div1.children[0]);


//Você pode também chamar o elemento pai usando a propriedade parent

console.log(div1.parentElement) //Nesse caso seria o body o elemento pai da divPai.

//Outra forma de buscar um elemento desde o documento raiz.

console.log(document.body.children); //Agora ele passa todos os elementos filhos de body.

//Informando qual o elemento pai é ao clicar no elemento filho.

let p = document.getElementsByTagName("h5");

for ( let i of p ) {
    i.addEventListener("click", qop);
}

function qop (e) {
    console.log(e.target) //A propriedade target chama o evento que está sendo executado e só funciona se você estiver usando o addEventListener.
}
