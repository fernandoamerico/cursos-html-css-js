//Vamos aprender como acessar um elemento no HTML usando Js.



//getElementById(); 
//Você irá chamar um elemento usando o seu Id. 
console.log(document.getElementById("titul0"));



//getElementsByClassName();
//Você irá chamar um elemento usando a classe do elemento. Também pode atribuír o conteúdo desses elementos a uma variável que será transformada em um array(caso seja uma classe) e então poderá trabalhar com esse array como qualquer outro array.
let par1 = document.getElementsByClassName("pa1");
console.log(par1[0]) //Usei [] apenas para mostrar que é possível mas também podemos imprimir diretamente a linha de código no console como no exempro do Id.




//getElementsByTagName(); 
//Você irá chamar um elemento usando a tag geral, como <h1> ou <p>.

console.log("Sem []");
console.log(document.getElementsByTagName("h1"));

console.log("Com []");
console.log(document.getElementsByTagName("h1")[0]);
