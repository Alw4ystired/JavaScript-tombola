/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti FATTO
   2. estrai()          — pesca un numero casuale tra i non usciti FATTO
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

let usciti = []; // array dei numeri già estratti
const tabelloneJs = document.querySelector('#tabellone');
const ultimoNumeroJs = document.querySelector('#ultimo-numero');
const cronologiaJs = document.querySelector('#cronologia');
const estraiBtnJs = document.querySelector('#estrai');
const resetBtnJs = document.querySelector('#reset');


//Funzione tabellone
function rendiTabellone() {
    tabelloneJs.textContent = '';

    for (let i = 1; i <= 90; i++) {
        const grigliaTabellone = document.createElement('div');
        grigliaTabellone.classList.add('numero');
        grigliaTabellone.textContent = i;

        if (usciti.includes(i)) {
            grigliaTabellone.classList.add('uscito');
        }

        tabelloneJs.appendChild(grigliaTabellone);
    }
}

//Funzione cronologia
function rendiCronologia() {
  // Se non è stato estratto niente 
    if (usciti.length === 0) {
        cronologiaJs.textContent = 'Nessun numero estratto.';
        return;
    }

    const ultimi10 = usciti.slice(-10);
    cronologiaJs.textContent = ultimi10.join(' - ');
}

//Funzione per estrarre i numeri
function estrai() {
    if (usciti.length >= 90) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }

    const disponibili = [];
    for (let i = 1; i <= 90; i++) {
        if (!usciti.includes(i)) {
            disponibili.push(i);
        }
    }

    const indice = Math.floor(Math.random() * disponibili.length);
    const numeroEstratto = disponibili[indice];

    usciti.push(numeroEstratto);

    ultimoNumeroJs.textContent = numeroEstratto;

    rendiCronologia();
    rendiTabellone();
}

//Funzione per resettare
function reset() {
    usciti = [];
    ultimoNumeroJs.textContent = '-';
    rendiCronologia();
    rendiTabellone();
}

//Listener dei bottoni
estraiBtnJs.addEventListener('click', estrai);
resetBtnJs.addEventListener('click', reset);

rendiTabellone();
rendiCronologia();