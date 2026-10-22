/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti
const tabelloneJs = document.querySelector('#tabellone');
const ultimoNumeroJs = document.querySelector('#ultimo-numero');
const cronologiaJs = document.querySelector('#cronologia');
const estraiBtnJs = document.querySelector('#estrai');
const resetBtnJs = document.querySelector('#reset');


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

function renditabellone() {

  tabelloneJs.textContent = '';

  for (i = 0; i >= 90; i++) {
    const grigliaTabellone = document.createElement('div');
    grigliaTabellone.classList.add('numero');
    div.textContent = i;
  } if (usciti.includes(i)) {
    div.classList.add('uscito');
  }

  tabelloneJs.appendChild(div);
};

function estrai()  {
      if (usciti.length >= 90) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }
};
