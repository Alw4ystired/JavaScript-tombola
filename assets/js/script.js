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
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti FATTO
   2. estrai()          — pesca un numero casuale tra i non usciti FATTO
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

//Funzione tabellone
function rendiTabellone() {

  tabelloneJs.textContent = '';

  for (let i = 0; i <= 90; i++) {
    const grigliaTabellone = document.createElement('div');
    grigliaTabellone.classList.add('numero');
    grigliaTabellone.textContent = i;

    if (usciti.includes(i)) {
      grigliaTabellone.classList.add('uscito');
    }

    tabelloneJs.appendChild(grigliaTabellone);
  }
}

rendiTabellone();



/*//Funzione estrai con alert
function estrai() {
  //Questo è l'alert
  if (usciti.length >= 90) {
    alert('Tutti i numeri sono stati estratti!');
    return;
  }*/

  // Creazione array dei numeri ancora disponibili
  const disponibili = [];
  for (let i = 0; i <= 90; i++) {
    if (!usciti.includes(i)) {
      disponibili.push(i);
    }
  }

  //Estrazione numeri
  const indice = Math.floor(Math.random() * disponibili.length);
  const numeroEstratto = disponibili[indice];

  usciti.push(numeroEstratto);

  ultimoNumeroJs.textContent = numeroEstratto;
  cronologiaJs.textContent = usciti.join(' - ');

  rendiTabellone();


/*rendiCronologia = () => {
    // Se non è stato estratto niente 
    if (usciti.length === 0) {
        cronologiaJs.textContent = 'Nessun numero estratto.';
        return;
    }

      const ultimi10 = usciti.slice(-10).reverse; //Reverse l'ho cercato su google
      
    cronologiaJs.textContent = ultimi10.join(' - ');
}*/

function rendiCronologia() {
  // Se non è stato estratto niente 
    if (usciti.length === 0) {
        cronologiaJs.textContent = 'Nessun numero estratto.';
        return;
    }

    const ultimi10 = usciti.slice(-10);
    cronologiaJs.textContent = ultimi10.join(' - ');
};

function estrai() {
    if (usciti.length >= 90) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }

    const disponibili = [];
    for (let i = 0; i <= 90; i++) {
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

function reset() {
    usciti = [];
    ultimoNumeroJs.textContent = '-';
    rendiCronologia();
    rendiTabellone();
}

estraiBtnJs.addEventListener('click', estrai);
resetBtnJs.addEventListener('click', reset);

rendiTabellone();
rendiCronologia();
