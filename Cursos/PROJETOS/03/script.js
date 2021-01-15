 let h1 = document.getElementById("h2")
 
let pessoas = ["Fernando", "João", "Genaura", "Juliana", "Maria", "Fernando 2", "João 2", "Genaura 2", "Juliana 2", "Maria 2"]


 function sortear(){
    num = Math.floor(Math.random() * pessoas.length);
    h1.innerHTML = pessoas[num];
 }