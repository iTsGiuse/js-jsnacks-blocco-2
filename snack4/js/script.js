/* Chiedi un numero di 4 cifre all’utente e calcola 
la somma di tutte le cifre che compongono il numero. */

/* CHIEDI UN NUMERO DI 4 CIFRE ALL'UTENTE */
const number = prompt('inserisci un numero di quattro cifre');
console.log('il numero inserito è ' + number);

/* IMPOSTA VARIABILE */
let sum = 0;

/* INIZIO CICLO */
for (let i = 0; i < number.length; i++) {
    
    /* SALVA SINGOLA CIFRA */
    let numero = number[i];

    /* TRASFORMA CIFRA DA STRINGA A NUMERO */
    numero = parseInt(numero);
    console.log('singolo numero ' + numero);

    /* FAI LA SOMMA */
    sum = sum + numero;
    console.log('singola somma ' + sum);
}

/* OUTPUT SOMMA FINALE */
console.log('la somma finale è ' + sum);