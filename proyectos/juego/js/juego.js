let atras = "img/atras.png";
let f1 = "img/frente1.png";
let f2 = "img/frente2.png";
let f3 = "img/frente3.png";
let f4 = "img/frente4.png";
let f5 = "img/frente5.png";
let f6 = "img/frente6.png";

let cuenta = document.getElementById("cuenta");
let tiempoRestante = document.getElementById("tiempoRestante");
let mensaje = document.getElementById("mensaje");
let btnStart = document.getElementById("btnStart");
let btnRestart = document.getElementById("btnRestart");
let juego = document.getElementById("juego");

let primera = null;
let segunda = null;
let cartaActual = null;
let parejasEncontradas = 0;
let nivel = 1;
let tiempo = 0;
let temporizadorActivo = true;
let bloqueado = false;

let cartas = [];


function mezclar() {
  cartas = [f1,f1, f2,f2, f3,f3, f4,f4, f5,f5, f6,f6];
  cartas.sort(() => Math.random() - 0.5);

  for (let i = 1; i <= 12; i++) {
    document.getElementById("c"+i).mi = cartas[i-1];
  }
}


function tapar() {
  for (let i = 1; i <= 12; i++) {
    let carta = document.getElementById("c"+i);
    carta.src = atras;
    carta.abierta = false;
  }
}


function mostrarCarta() {
  if (cartaActual.abierta || bloqueado) return;

  cartaActual.src = cartaActual.mi;
  cartaActual.abierta = true;

  if (primera === null) primera = cartaActual;
  else {
    segunda = cartaActual;
    verificar();
  }
}

function verificar() {
  bloqueado = true;
  if (primera.mi === segunda.mi) {
    parejasEncontradas++;
    primera = null;
    segunda = null;
    bloqueado = false;
    if (parejasEncontradas === 6) ganar();
  } else {
    setTimeout(() => {
      primera.src = atras;
      segunda.src = atras;
      primera.abierta = false;
      segunda.abierta = false;
      primera = null;
      segunda = null;
      bloqueado = false;
    }, 700);
  }
}


function activarClicks() {
  for (let i = 1; i <= 12; i++) {
    document.getElementById("c"+i).onclick = function () {
      cartaActual = this;
      mostrarCarta();
    }
  }
}

function cuentaJuego() {
  if (!temporizadorActivo) return;

  if (tiempo > 0) {
    tiempoRestante.textContent = "Tiempo: " + tiempo;
    tiempo--;
    setTimeout(cuentaJuego, 1000);
  } else perder();
}


function empezar() {
  btnStart.style.display = "none";
  mensaje.textContent = "";
  parejasEncontradas = 0;
  temporizadorActivo = true;
  juego.style.display = "grid";

  mezclar();
  for (let i = 1; i <= 12; i++) {
    let carta = document.getElementById("c"+i);
    carta.src = carta.mi;
    carta.abierta = true;
  }

  cuenta.textContent = "Nivel " + nivel;
  let mem = 3;
  tiempo = mem;

  function mostrarMemoria() {
    if (mem > 0) {
      cuenta.textContent = "Memoriza: " + mem;
      mem--;
      setTimeout(mostrarMemoria, 1000);
    } else {
      cuenta.textContent = "Nivel " + nivel;
      tapar(); 
      activarClicks();

      tiempo = 50 - ((nivel - 1) * 5);
      cuentaJuego();
    }
  }
  mostrarMemoria();
}

function ganar() {
  temporizadorActivo = false;
  nivel++;
  if (nivel > 5) {
    mensaje.textContent = "¡Completaste todos los niveles!";
    juego.style.display = "none";
    btnRestart.style.display = "inline-block";
    return;
  }
  setTimeout(empezar, 1500);
}


function perder() {
  temporizadorActivo = false;
  mensaje.textContent = "¡Perdiste!";
  juego.style.display = "none";
  btnRestart.style.display = "inline-block";
  document.getElementById("gifResultado").style.display = "block";
}


function reiniciar() {
  nivel = 1;
  parejasEncontradas = 0;
  mensaje.textContent = "";
  tiempoRestante.textContent = "";
  juego.style.display = "grid";
  btnRestart.style.display = "none";
  document.getElementById("gifResultado").style.display = "none";
  empezar();
}