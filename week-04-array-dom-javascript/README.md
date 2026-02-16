# Week 04 - JavaScript Arrays, DOM Manipulation & Interactive Projects

**Periodo:** 09/02/2026 - 15/02/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Quarta settimana di studio, continuo approfondimento di JavaScript sul percorso The Odin Project. Dopo aver consolidato le basi con funzioni e cicli, ho affrontato gli array (primo vero scoglio), la manipolazione del DOM, e ho completato due progetti interattivi completi. Settimana molto intensa con grande crescita nella comprensione degli event listener e della manipolazione dinamica delle pagine.

## 🎯 Obiettivi Settimana

- [x] Array in JavaScript
- [x] Esercizi sugli array
- [x] DOM Manipulation
- [x] Event Listeners
- [x] Progetto: Rock-Paper-Scissors UI
- [x] Responsive Design (mobile)
- [x] Progetto: Etch-a-Sketch
- [x] Git branch e merge

## 🔑 Concetti Chiave Appresi

### Array JavaScript
```javascript
// Metodi array fondamentali
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.forEach(num => console.log(num));
const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num > 3);
```

### DOM Manipulation
```javascript
// Selezione elementi
const element = document.querySelector('.class');
const elements = document.querySelectorAll('.class');

// Creazione elementi
const div = document.createElement('div');
div.classList.add('class-name');
div.textContent = 'Hello';
container.appendChild(div);

// Modifica stili
element.style.backgroundColor = 'red';
```

### Event Listeners
```javascript
// Click events
button.addEventListener('click', () => {
  console.log('Clicked!');
});

// Mouse events
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);

// Evento con parametro
element.addEventListener('mousedown', (event) => {
  if (event.button === 0) { // Left click
    // code
  } else if (event.button === 2) { // Right click
    // code
  }
});
```

### Callback Functions
```javascript
// Funzione come parametro
function handleClick() {
  console.log('Clicked!');
}

button.addEventListener('click', handleClick);

// Arrow function
button.addEventListener('click', () => {
  console.log('Clicked!');
});
```

### Data Attributes
```javascript
// HTML: <div data-opacity="0.5"></div>
element.dataset.opacity = '0.8';
const opacity = element.dataset.opacity;
```

## 🚧 Sfide Incontrate

**Giorno 1 (09/02):** Gli array sono stati il primo vero scoglio. Confusione rispetto a Python, ci ho messo parecchio per ingranare con gli esercizi. Ho rallentato molto su questo argomento.

**Giorno 4 (12/02):** Le funzioni di callback mi hanno bloccato parecchio e non sono ancora del tutto chiare. Dovrò ripassarle quando ricapita l'occasione.

**Giorno 5 (13/02):** Forse sono stato troppo a cercare di rendere rock-paper-scissors bello e funzionale, perdendo più tempo del dovuto. Ma ne è valsa la pena per l'apprendimento.

**Giorno 6 (14/02):** Problemi nel capire meglio gli event listener. Blocco iniziale su come disegnare bene i quadrati con JavaScript nel progetto Etch-a-Sketch.

**Giorno 7 (15/02):** Problemi con i listener risolti. Una volta capito il funzionamento, è diventato molto più facile.

## 🏗️ Progetti Completati

### Rock-Paper-Scissors UI
**Repository:** [rock-paper-scissors](https://github.com/Taaccii/rock-paper-scissors)  
**Descrizione:** Reimplementazione completa del progetto con interfaccia grafica. Include:
- UI pulita e funzionale
- Logica migliorata e refactoring completo
- Responsive design per mobile
- Effetti hover e transizioni CSS
- Sistema di punteggio visivo
- Grande soddisfazione personale per il risultato

### Etch-a-Sketch
**Repository:** [etch-a-sketch](https://github.com/Taaccii/etch-a-sketch)  
**Descrizione:** Progetto interattivo di disegno con griglia dinamica. Include:
- Griglia dinamica creata con JavaScript e Flexbox
- Sistema di disegno con mouse hover e drag-to-draw
- Click sinistro per disegnare, click destro per cancellare
- Prompt per selezione dimensione griglia (max 100×100)
- Modalità colore normale e random color (rainbow mode)
- Sistema opacity progressiva (10 passaggi da 0.1 a 1.0)
- Effetto hover temporaneo
- Pulsanti interattivi (Set Grid Size, Random Color, Clean Grid)
- Responsive design
- Progetto molto sfidante ma estremamente formativo

### Landing Page - Responsive Update
**Descrizione:** Aggiornamento della landing page personale con implementazione del responsive design per mobile, applicando le conoscenze acquisite.

## 🔧 Strumenti Appresi

- **Git Branch & Merge:** Iniziato studio del branching per gestione versioni
- **Chrome DevTools:** Uso approfondito per debugging eventi e DOM
- **Event Delegation:** Pattern avanzato per performance (studiato ma non implementato)
- **CSS Media Queries:** Per responsive design mobile
- **Flexbox Avanzato:** Per layout complessi e griglie dinamiche

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 09/02  | 6h  | Array JavaScript, esercizi |
| 10/02  | 4h  | Fine esercizi array, intro DOM |
| 11/02  | 4h  | DOM manipulation, esercizi DOM |
| 12/02  | 9h  | DOM exercises, shopping list, git branch, rock-paper-scissors UI |
| 13/02  | 7h  | Completamento rock-paper-scissors UI, responsive design |
| 14/02  | 6h  | Inizio Etch-a-Sketch, griglia, hovering, draw system |
| 15/02  | 6h  | Completamento Etch-a-Sketch, listener avanzati |
| **TOT**| **42h** | **7 giorni** |

## ✅ Completato

- [x] The Odin Project: Foundations → Arrays
- [x] JavaScript Exercises: esercizi sugli array
- [x] The Odin Project: Foundations → DOM Manipulation
- [x] Esercizi DOM manipulation
- [x] Progetto: Shopping List interattiva (esercizio)
- [x] Git: branch e merge (intro)
- [x] Progetto: Rock-Paper-Scissors UI completa
- [x] Responsive Design: implementazione mobile
- [x] Aggiornamento Landing Page con responsive
- [x] Progetto: Etch-a-Sketch completo
- [x] Event Listeners: comprensione approfondita
- [x] Callback Functions: studio e applicazione

## 📄 In Corso

- [ ] Approfondimento callback functions
- [ ] Event delegation pattern
- [ ] Continuo studio su The Odin Project

## 🎯 Obiettivi Week 05

- Iniziare studio degli Objects in JavaScript
- Fare esercizi di ripasso su Array e Object
- Iniziare progetto Calculator di The Odin Project


## 💡 Riflessioni Personali

Settimana molto intensa e produttiva. Gli array sono stati una sfida importante, ma una volta superati ho acquisito molta più sicurezza. La manipolazione del DOM e gli event listener, inizialmente complessi, sono diventati chiari con la pratica nei progetti. Molto orgoglioso di entrambi i progetti completati, in particolare Etch-a-Sketch che mi ha fatto crescere tantissimo nella comprensione di JavaScript, eventi, e creazione di UI interattive. Ho imparato l'importanza di non avere fretta: dedicare tempo extra per rendere i progetti belli e funzionali è valso ogni minuto.

---

**Status:** ✅ Completata  
**Streak:** 🔥 26 giorni consecutivi  
**Prossimi passi:** Iniziare lo studio degli Objects in JavaScript e continuare con progetti sempre più complessi