/* Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id 
rosso i numeri dispari e in verde i numeri par */

/* DICHIARAZIONE ARRAY */
const numeri = [];

/* DICHIARAZIONE VARIABILI */
let pari = document.getElementById('#uno');
let dispari = document.getElementById('#due');

/* COLORA IL TESTO IN BASE ALLA RICHIESTA DELL'ESERCIZIO */
pari.style.color= 'green';
dispari.style.color= 'red';

/* INIZIO CICLO */
for (let i = 1; i < 10; i++) {
  
  /* AGGIUNGI NUMERI ALL'ARRAY */
  numeri[i]= i;

  /* AGGIUNGI I NUMERI DELL'ARRAY AD UNA VARIABILE */
  let number = numeri[i];

  /* CHECK E MOSTRA A SCHERMO I NUMERI PARI E DISPARI */
  if (number % 2 === 0) {
    pari.innerHTML +=` ${number}`;
  } else if (number % 2 !== 0) {
    dispari.innerHTML +=` ${number}`;
  }

}


