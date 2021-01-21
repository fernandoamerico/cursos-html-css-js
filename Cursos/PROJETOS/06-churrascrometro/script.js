let inpAdultos = document.getElementById("adultos");
let inpCriancas = document.getElementById("criancas");
let inpHoras = document.getElementById("horas");

let resul = document.getElementsByClassName("resultdos")[0];

function calc() {
  tempo();
  let a = inpAdultos.value;
  let c = inpCriancas.value / 2;
  let h = inpHoras.value;

  let resultadoCarne = a * carne + c * carne;
  let resultadoCerveja = a * cerveja;
  let resultadoRefri = a * refri + c * refri;
  
  console.log(18 % 6);

  

  resul.innerHTML = `<p>Você precisa de ${resultadoCarne / 1000 }kg de carne</p>`;
  resul.innerHTML += `<p>Você precisa de ${Math.ceil(resultadoCerveja / 355)} latas de 355ml  de cerveja</p>`;
  resul.innerHTML += `<p>Você precisa de ${Math.ceil(resultadoRefri / 1000)} garrafas de 1l de refrigerante</p>`;
}

function tempo() {
  let h = inpHoras.value;
  if (h <= 6) {
    carne = 400;
    cerveja = 1200;
    refri = 1000;
  } else {
    carne = 400 + (50 * (h - 6));
    cerveja = 1200 + (135 * (h - 6));
    refri = 1000 + (85 * (h - 6));
  }
}

