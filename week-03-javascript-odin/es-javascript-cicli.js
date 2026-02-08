//1. Utilizzate il ciclo for per mostrare i numeri pari da 2 a 10.

for (let i = 0; i <= 10; i++) {

  if (i % 2 == 0) {;
    alert(i);
  }
}


//2. Riscrivi il ciclo for utilizzando la sintassi while,
// ma senza alterarne la funzionalità (l’output deve rimanere lo stesso).

/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0;
while(i < 3) {
  alert(`number %{i}!`);
  i++;
}


/* 3. Scrivi un ciclo che richieda (tramite prompt) un numero maggiore di 100.
Se l’utente inserisce un numero non valido – chiedete di inserirlo nuovamente.

Il ciclo deve continuare a richiede un numero fintanto che l’utente non inserisce un numero maggiore di 100,
oppure annulla l’input (sia premendo cancel che inserendo una riga vuota).

Possiamo assumere che l’utente inserisca solo numeri. 
Non c’è quindi bisogno di implementare alcun tipo di logica per un input di tipo non numerico.
*/


let number = 0;
while(number > 100) {
  number = +prompt('Inserisci un umero maggiore di 100 per chiudere il programma!');

}