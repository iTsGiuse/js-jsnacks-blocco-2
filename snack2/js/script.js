/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* L’utente inserisce due parole */
const parolaUno = prompt('inserisci una parola');
const parolaDue = prompt('inserisci un altra parola');

/* Il software stampa prima la parola più corta, poi la parola più lunga. */ 
if (parolaUno.length > parolaDue.length) {
  alert ('è più corta la parola due' + ' ' + parolaDue);
  alert ('della parola uno' + ' ' + parolaUno);
} else if (parolaUno.length < parolaDue.length) {
  alert ('è più corta la parola uno' + ' ' + parolaUno);
  alert ('della parola due' + ' ' + parolaDue);
}