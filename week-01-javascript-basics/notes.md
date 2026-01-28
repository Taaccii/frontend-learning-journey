# JavaScript Basics - Appunti

## Variabili
```javascript
let age = 25;        // Valore può cambiare
const name = "Alex"; // Valore costante
// var nome = ...    // NON usare (vecchio)
```

## Tipi di Dati

- `string` - "testo"
- `number` - 42, 3.14
- `boolean` - true, false
- `null` - valore vuoto intenzionale
- `undefined` - valore non assegnato

## Operatori
```javascript
// Aritmetici
+ - * / % **

// Confronto
=== !== > < >= <=

// Logici
&& || !
```

## Funzioni
```javascript
// Declaration
function greet(name) {
  return `Hello ${name}!`;
}

// Expression
const greet = function(name) {
  return `Hello ${name}!`;
};

// Arrow (preferita)
const greet = (name) => `Hello ${name}!`;
```

## Arrays
```javascript
const arr = [1, 2, 3, 4, 5];

// Metodi utili
arr.push(6);              // Aggiungi alla fine
arr.pop();                // Rimuovi dall'ultima
arr.map(n => n * 2);      // Trasforma ogni elemento
arr.filter(n => n > 3);   // Filtra elementi
arr.find(n => n === 3);   // Trova primo elemento
```

## Objects
```javascript
const person = {
  name: "Alex",
  age: 25,
  city: "Prato",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// Accesso
person.name;           // Dot notation
person["name"];        // Bracket notation

// Aggiungere proprietà
person.job = "Developer";
```
