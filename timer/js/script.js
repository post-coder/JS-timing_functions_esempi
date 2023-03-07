const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const textElement = document.getElementById("text");

// variabile in cui memorizzo i secondi che passano
let secondsCount = 0;


// variabile in cui memorizzo il LA TIMING FUNCTION
let timerFunction;

// al click di start o stop eseguo le relative funzioni
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);


function startTimer() {
  // creo la timing function del setInterval 
  // e la memorizzo nella variabile per poterla manipolare successivamente
  // le timing function setInterval eseguono la funzione inserita come parametro
  // all'infinito ogni tot millisecondi indicati
  timerFunction = setInterval(tick, 1000)
}

function stopTimer() {
  // ecco che manipolo la variabile (rimuovo la timing function)
  clearInterval(timerFunction);
}

function tick() {
  console.log('tick');

  // aumento di 1 il valore del contatore di secondi
  secondsCount++;

  // aggiorno il testo mostrato in pagina
  textElement.innerText = secondsCount;

}