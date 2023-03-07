
// chiedo quanti secondi bisogna aspettare
let secondsToWait = prompt("Quanti secondi mancano alla cottura della pasta?");

// avvio una timing function setTimeout per eseguire una funzione una sola volta allo scadere del tempo specificato
// ricordiamoci che le timing functions richiedono un tempo espresso in millisecondi
// dobbiamo quindi moltiplicare il numero inserito dall'utente per 1000
setTimeout(buttaLaPasta, secondsToWait * 1000);

// dichiaro la funzione da eseguire tramite la timing function
function buttaLaPasta() {
  alert("Scola la pasta!");
}
