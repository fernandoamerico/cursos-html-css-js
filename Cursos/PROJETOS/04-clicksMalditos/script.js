//Chamando Elementos
let quadrado = document.getElementsByClassName("quadrado")[0];
let pClick = document.getElementById("mClicks");
let geral = document.getElementsByClassName("geral")[0];
let inicio = document.getElementsByClassName("inicio")[0];
let pSeLiga = document.getElementById("seLiga");

let calcular = 0;
var nT = 15;
var cronoStart = false;

function start() {
  geral.style.display = "block";
  inicio.style.display = "none";
}

function mudar() {
  quadrado.style.left = "0px";
  quadrado.style.top = "0px";
  quadrado.style.transform = "translate(0px, 0px)";

  let mL = Math.floor(Math.random() * 800);
  let mT = Math.floor(Math.random() * 450);
  let marginLeft = mL;
  let marginTop = mT;

  quadrado.style.marginLeft = marginLeft + "px";
  quadrado.style.marginTop = marginTop + "px";

  calcular++;

  if (calcular < 5) {
    pClick.innerHTML = "Clicks Mizerávies: " + calcular;
  } else if (calcular < 10) {
    pClick.innerHTML = "ihh.. rapaz: " + calcular;
  } else if (calcular < 15) {
    pClick.innerHTML = "homi.. desista: " + calcular;
  } else if (calcular < 20) {
    pClick.innerHTML = "tô achando é graça..: " + calcular;
  } else if (calcular < 25) {
    pClick.innerHTML = "kkkkkkkjj: " + calcular;
  } else {
    pClick.innerHTML = "cuidado com o tempo..: " + calcular;
  } 
  crono();
}

function crono() {
  if (cronoStart == false) {
    contar1 = setInterval(contar, 1000);
    cronoStart = true;
  }
}

function contar() {
  nT--;
  pSeLiga.innerHTML = "Se ligue não: " + nT + "s";
  if (nT <= 10) {
    clearInterval(contar1);
    pSeLiga.innerHTML = "Se ligue não: " + nT + "s kkk..";
  }
}
