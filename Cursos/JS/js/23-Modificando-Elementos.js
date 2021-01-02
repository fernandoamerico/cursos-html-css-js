//Existe algumas maneiras bem comuns de modificar um elemento, veja:
//innerHTML = "" - Usando o innerHTML você irá passar um novo html ao elemento selecionado, veja:

let para1 = document.getElementById("p1");

para1.innerHTML = "Novo texto";
console.log(para1);

//innerText
//Com o innerText iremos ter uma pequena diferença, pois o innerHTML muda o html em si, já o innerText muda o texto dentro do elemento. Em outras palavras com o innerHTML eu podería atribuir uma nova tag html por exemplo innerHTML = "<h1> Novo texto </h1> que o elemento selecionado iriá passar a ser efetivamente um h1 e não mais um parágrafo <p>.

//Já com o innerText iremos mudar o texto dentro do elemento para um texto exatamente igual ao novo, ou seja, se colocamos <h1>texto</h1> esse texto irá ficar exatamente como escrevemos com <> e tudo.

let para2 = document.getElementById("p2");
para2.innerText = "<h1> Texto </h1>";
console.log(para2);

//textContent
//Com o textContent iremos trabalhar com tudo o que está dentro do elemento selecionado, mesmo que o elemento esteja ocultado. Ou seja, ao usar o innerText, o console irá retornar apenas os textos visíveis já o textContent irá retornar todo o conteúdo, indiferente se está visível ou na tela.

let para3 = document.getElementById("p3");
let text3 = para3.textContent;

console.log(text3);

// Se a gente usasse o innerText:

let text32 = para3.innerText;
console.log(text32);

//Observe que a spam já não aparece mais no innerText e no textContent sim aparece.

//Se usamor innerHTML

console.log(para3.innerHTML);

//Iremos ter o texto do elemento principal mais o código dos elementos internos.

//className: Você irá modificar uma classe de um determinado elemento. O elemento que usamos tem a class="className" que aplica a cor azul no elemento, mas no código abaixo, iremos retirar essa classe do elemento, usando o atributo className:

let classN = document.getElementById("p4");
classN.className = "";

//Você poderia simplesmente colar entre "" um nome novo para a classe já existente no elemento.

//setAttribute();
//Caso você queira chamar um atributo único que você criou para o seu projeto, você deverá usar o método setAttribute() e assim poderá modificar o valor desse atributo.

let novoAtr = document.getElementById("p4");
novoAtr.setAttribute("novoatt", "Novo Valor 2");

//Para criar um novo atributo, basta fazer assim:

let novoAtt = document.getElementById("p4");
novoAtt.setAttribute("novoatt2", "Txt");

console.log(novoAtr);

//getAttribute();
//Se você precisa imprimir um valor de um atributo você pode usar o getAttribute().

console.log(novoAtt.getAttribute("novoatt"));


//style
//Você também pode modificar o estilo do seu atributando usando style.

//vamos usar os atributos usados nos exempros anteriores.

novoAtt.style.backgroundColor = "red";

//OBS> Você pode buscar na internet mais formas de modificar o estilo do seu elemento usando Js.