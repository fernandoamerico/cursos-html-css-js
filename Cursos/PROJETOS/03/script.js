let h1 = document.getElementById("h2");

let pessoas = [
  "Fernando",
  "João",
  "Genaura",
  "Juliana",
  "Maria",
  "Fernando 2",
  "João 2",
  "Genaura 2",
  "Juliana 2",
  "Maria 2",
];

function sortear() {
  num = Math.floor(Math.random() * pessoas.length);
  h1.innerHTML = pessoas[num];
}

//####################
//Mudar Cor

let cores = [
  "palevioletred",
  "#b40909",
  "#1900ff",
  "#00ccff",
  "#f000a0",
  "#28f000",
  "#ecf000",
  "#f04400",
];

function MudarCor() {
  let SelectCor = Math.floor(Math.random() * cores.length);
  let div = document.getElementsByTagName("div")[0];
  div.style.backgroundColor = cores[SelectCor];
}

//####################
//Mudar Cor automático

let cores2 = [
  "palevioletred",
  "#b40909",
  "#1900ff",
  "#00ccff",
  "#f000a0",
  "#28f000",
  "#ecf000",
  "#f04400",
];

function Mcor() {
  let div2 = document.getElementsByClassName("div2")[0];
  let SelectCor2 = Math.floor(Math.random() * cores2.length);

  div2.style.backgroundColor = cores2[SelectCor2];

}
function StartCor() {
  setInterval(Mcor, 1000);

}
