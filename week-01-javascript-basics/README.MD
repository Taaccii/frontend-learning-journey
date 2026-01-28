# Week 01 - JavaScript Basics

**Periodo:** 22/01/2026 - 25/01/2026 
**Fonte:** JavaScript.info + freeCodeCamp

## 📚 Contesto

Prima settimana di studio intensivo JavaScript. Ho seguito JavaScript.info
dalla sezione "Fundamentals" fino agli **Objects**, alternando con esercizi
su freeCodeCamp per consolidare i concetti.

## 🎯 Obiettivi Settimana

- [x] Variabili (let, const, var)
- [x] Tipi di dati primitivi (string, number, boolean, null, undefined)
- [x] Operatori (aritmetici, logici, confronto)
- [x] Condizionali (if/else, ternary, switch)
- [x] Loops (for, while, for...of)
- [x] Funzioni (declaration, expression, arrow functions)
- [x] Arrays (metodi base: push, pop, map, filter)
- [x] Objects (creazione, accesso proprietà, metodi)

## 🔑 Concetti Chiave Appresi

### Variabili
- `let` per variabili che cambiano
- `const` per costanti
- `var` evitato (vecchio standard)

### Funzioni
```javascript
// Function declaration
function sum(a, b) {
  return a + b;
}

// Arrow function
const sum = (a, b) => a + b;
```

### Arrays
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);
```

### Objects
```javascript
const user = {
  name: "Alex",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
```

## 🚧 Sfide Incontrate

**Problema:** Dopo aver raggiunto gli Objects, ho notato di avere lacune
in HTML e CSS quando provavo a creare progetti pratici.

**Decisione:** Ripartire con The Odin Project per consolidare le basi
frontend (HTML + CSS) prima di continuare con JavaScript avanzato.

## 🔗 Risorse Utilizzate

- [JavaScript.info - Fundamentals](https://javascript.info/first-steps)
- [freeCodeCamp](https://www.freecodecamp.org/)

## ✅ Completato

- [x] JavaScript.info: The JavaScript language → Fundamentals (completo)
- [x] JavaScript.info: Objects basics (primi capitoli)
- [x] freeCodeCamp: Basic JavaScript (~30 esercizi)
- [x] Esercizi vari su variabili, funzioni, array

## 📊 Lacune Identificate

Dopo questa settimana ho capito che mi mancano:
- ❌ HTML semantico e struttura
- ❌ CSS layout (Flexbox, Grid)
- ❌ Integrazione HTML + CSS + JavaScript

→ **Decisione:** Week 02 inizia con The Odin Project (CSS Foundations)

---

**Status:** ✅ Completata (con decisione di riprendere da HTML/CSS)   
**Prossimi passi:** The Odin Project - CSS Fundamentals  
