let minutos = document.getElementsByClassName("time-1")[0];
let segundos = document.getElementsByClassName("time-2")[0];
let milesimos = document.getElementsByClassName("time-3")[0];
let bPause = document.getElementsByClassName("pausar")[0]

let ligado = false;
let relogio = 0;

function iniciar() {
  if (ligado == false) {
    t = new Date();
    contador = setInterval(tempo, 10);
    ligado = true;
    bPause.innerHTML = "PAUSAR";
  }
}

function tempo() {
  t2 = new Date();
  t3 = (t2 - t) / 10;
  relogio = new Date(Math.floor(t3) * 10);

  h = relogio.getHours();
  m = relogio.getMinutes();
  s = relogio.getSeconds();
  mS = relogio.getMilliseconds();

  if (m < 10) {
    minutos.innerHTML = "0" + m;
  } else {
    minutos.innerHTML = m;
  }
  if (s < 10) {
    segundos.innerHTML = "0" + s;
  } else {
    segundos.innerHTML = s;
  }
  if (mS < 100) {
    milesimos.innerHTML = "0" + mS / 10;
  } else {
    milesimos.innerHTML = mS / 10;
  }
}

function pause() {
  if (relogio !== 0 && ligado == true) {
    clearInterval(contador);
    bPause.innerHTML = "CONTINUAR";
    ligado = false;
  }else if (relogio !== 0 && ligado == false){
    contador = setInterval(tempo, 10);
    bPause.innerHTML = "PAUSAR";
    ligado = true;
  }
}

function reiniciar() {
    if (relogio !== 0){
        clearInterval(contador);
        relogio = 0;
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";
        milesimos.innerHTML = "00";
        bPause.innerHTML = "PAUSAR";
        ligado = false;
    }
        
}