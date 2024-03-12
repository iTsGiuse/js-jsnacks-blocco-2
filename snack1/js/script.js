/* L'utente inserisce un numero nel prompt, se è pari stampa il numero,
se è dispari stampa il numero successivo */

/* L'utente inserisce un numero */
let numero = parseInt(prompt('inserisci un numero'));

/* se è pari stampa il numero, se è dispari stampa il numero successivo */ 
if (numero % 2 === 0) {
    alert('il numero è pari');
} else if ( numero % 2 !== 0) {
    numero++
    alert('il numero è dispari');
}