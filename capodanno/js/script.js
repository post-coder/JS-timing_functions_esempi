// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

let secondsLeft = 10;

const testoElement = document.getElementById("testo");

// memorizzo la timing function in una variabile per poterla manipolare
let capodannInterval = setInterval(count, 1000);


// dichiaro la funzione da chiamare dentro la timing function
function count() {
  console.log("esecuzione");
  
  // aggiorno il testo
  testoElement.innerText = secondsLeft;
  
  // controllo se è già capodanno
  if(secondsLeft <= 0) {
    
    // stampo in pagina
    testoElement.innerText = "AUGURII";

    // rimuovo la timing function dalla nostra variabile
    clearInterval(capodannInterval);
  }

  // altrimenti diminuisco il timer
  secondsLeft--;
  
}