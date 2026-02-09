/*
Traducete border-left-width in borderLeftWidth

Scrivete una funzione camelize(str) che trasforma le parole separate da un trattino come “la-mia-stringa” nella notazione a cammello “laMiaStringa”.

Quindi: rimuove tutti i trattini; ogni parola dopo un trattino avrà una lettera maiuscola.

Esempi:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/


function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');

  }


camelize("background-color");

console.log(camelize);


/*
Scrivete una funzione filterRange(arr, a, b) che accetta come argomento un array arr, filtra gli elementi tra a e b e ne ritorna un array.

La funzione non dovrebbe modificare l’array. Dovrebbe invece ritornare il nuovo array.

Ad esempio:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (i valori filtrati)

alert( arr ); // 5,3,8,1 (non modificato)
*/

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr);




/*
Scrivi una funzione filterRangeInPlace(arr, a, b) che prenda un array arr e ne rimuova tutti i valori, tranne quelli contenuti tra a e b. Il test è: a ≤ arr[i] ≤ b.

La funzione dovrebbe solamente modificare l’array. Senza ritornare nulla.

Ad esempio:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // rimuove tutti i numeri tranne quelli da 1 a 4

alert( arr ); // [3, 1]
*/


function filterRangeInPlace(arr, a, b ) {
  
  for (let i = 0; i < arr.lenght; i++) {
    let val = arr[i];

    if (val < a || va > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);


/* 
Riordinare in ordine decrescente:

let arr = [5, 2, 1, -10, 8];

// ... il tuo codice per ordinare in ordine decrescente

alert( arr ); // 8, 5, 2, 1, -10
*/


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);


/*
Copiare e ordinare un array:

Abbiamo un array di stringhe arr. Vorremmo ottenerne una sua copia ordinata, mantenenendo arr inalterato.

Create una funzione copySorted(arr) che ritorni questo tipo di copia.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (nessuna modifica)
*/

