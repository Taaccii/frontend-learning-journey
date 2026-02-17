/* 
ES.1 Avete un array di oggetti user; ognuno di essi ha la proprietà user.name.
Scrivete il codice che converte gli oggetti in un array di nomi.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );



/* 
ES.2 Avete un array di oggetti user, ognuno di questi possiede name, surname e id.

Scrivete il codice per creare un altro array che derivi da questo, sempre composto da oggetti con id e fullName,
dove fullName viene generato da name e surname.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith



/* 
ES.3 Scrivete una funzione sortByAge(users) che accetti un array di oggetti
con proprietà age e lo riordini per age.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];


function sortByAge(arr) {
  arr = arr.sort((a, b)) => a.age - b.age);
};

sortByAge(arr);

// ora: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


/* 
ES.4 Scrivete una funzione getAverageAge(users) che accetti un array di oggetti
con la proprietà age e ritorni l’età media.

La formula della media è: (age1 + age2 + ... + ageN) / N.
*/


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
  return arr.reduce((sum, arr) => sum + arr.age, 0) / arr.lenght;
  
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


/* 
Immaginiamo di ricevere un array di utenti nella forma {id:..., name:..., age... }.

Scrivi una funzione groupById(arr) che ricavi un oggetto da esso,
con id come chiave e gli elementi dell’array come valori

Una funzione simile è molto utile quando si lavora con dati provenienti da un server.

In questo esercizio sappiamo che id è unico. Non ci saranno due array con lo stesso id.

Per favore utilizza il metodo .reduce nella soluzione.
*/

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

/*
// dopo la chiamata dovremmo avere:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/