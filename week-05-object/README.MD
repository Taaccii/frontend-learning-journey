# Week 05 - JavaScript Objects & Calculator Project

**Periodo:** 16/02/2026 - 22/02/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Quinta settimana di studio, ultima settimana del percorso Foundations di The Odin Project. Dopo aver consolidato array e DOM manipulation, ho affrontato gli Objects in JavaScript e completato il progetto finale del curriculum: una calcolatrice funzionale completa. Settimana molto intensa con grande crescita nella gestione dello stato dell'applicazione, logica complessa e debugging.

## 🎯 Obiettivi Settimana

- [x] Objects in JavaScript
- [x] Esercizi sugli Objects
- [x] Pseudocodice e diagramma del progetto Calculator
- [x] Progetto: Calculator completo
- [x] Responsive Design (mobile e tablet)
- [x] Keyboard support
- [x] Polishing grafico e bug fixing
- [x] Deploy su GitHub Pages

## 🔑 Concetti Chiave Appresi

### Gestione dello Stato
```javascript
// Variabili di stato per controllare il flusso dell'applicazione
let firstNumber = null;
let operator = null;
let secondNumber = null;
let calculated = false;
let isPercent = false;
```

### Boolean Flags
```javascript
// Flag per gestire comportamenti speciali
if (calculated) {
  firstNumber = +mainDisplay.textContent; // usa il risultato come nuovo primo numero
} else if (firstNumber && operator) {
  secondNumber = +mainDisplay.textContent;
  mainDisplay.textContent = operate(operator, firstNumber, secondNumber);
}
```

### Selettori CSS con Attributi
```javascript
// Mappare tasti della tastiera ai bottoni esistenti
document.addEventListener('keydown', (e) => {
  const button = document.querySelector(`button[value="${e.key}"]`);
  if (button) button.click();
});
```

### Gestione Errori e Tipi
```javascript
// Gestione risultati numerici vs stringhe di errore
let result = null;
if (typeof rawResult !== 'number') {
  result = rawResult; // stringa di errore
} else if (Number.isInteger(rawResult)) {
  result = rawResult;
} else {
  result = parseFloat(rawResult.toFixed(10));
}
```

### Operatore OR per Valori di Default
```javascript
// Fallback elegante con ||
mainDisplay.textContent = mainDisplay.textContent.slice(0, -1) || '0';
```

### Feedback Visivo con Classi Temporanee
```javascript
// Effetto rosso su divisione per zero
if (typeof result === 'string') {
  display.classList.add('error');
  setTimeout(() => display.classList.remove('error'), 1500);
}
```

## 🚧 Sfide Incontrate

**Giorno 1-2 (16-17/02):** Gli Objects hanno richiesto più tempo del previsto, con qualche difficoltà negli esercizi. La stanchezza ha influito sulla concentrazione.

**Giorno 3-4 (18-19/02):** La fase di pianificazione del progetto è stata impegnativa — il primo pseudocodice era troppo lungo e complicato, ho dovuto riscriverlo da capo semplificandolo.

**Giorno 5-6 (20-21/02):** I bug più complessi riguardavano le chained operations e il comportamento del tasto `=` ripetuto. Difficile trovare il punto di partenza per il progetto, ma una volta iniziato tutto è venuto da sé.

**Giorno 7 (22/02):** Giornata di ripasso e riflessione su tutto il percorso Foundations prima di iniziare il Full Stack.

## 🏗️ Progetti Completati

### Calculator — T-3000
**Repository:** [calculator-project](https://github.com/Taaccii/calculator-project)  
**Live Demo:** [taaccii.github.io/calculator-project](https://taaccii.github.io/calculator-project)  
**Descrizione:** Calcolatrice funzionale completa con stile grafico retrò/hardware. Include:
- Operazioni base: addizione, sottrazione, moltiplicazione, divisione
- Chained operations: valuta espressioni sequenziali (es. `12 + 7 - 1 =`)
- Percentuale relativa al primo numero (es. `300 - 10% = 270`)
- Tasto `=` ripetuto: ripete l'ultima operazione con lo stesso secondo numero
- Cambio segno, decimali, backspace e clear
- Keyboard support completo
- Dual display: operazione in alto, risultato in basso
- Gestione errore divisione per zero con messaggio ironico e flash rosso
- Font size dinamico in base alla lunghezza del numero
- Responsive design per desktop, tablet e mobile (iPhone testato)
- Cross-browser: fix specifici per Safari iOS

## 🔧 Strumenti e Tecniche Appresi

- **State Management:** Gestione dello stato con variabili globali e flag booleani
- **Edge Case Handling:** Divisione per zero, doppio decimale, leading zeros, chained operations
- **CSS `-webkit-appearance`:** Fix cross-browser per Safari iOS
- **CSS `dvh`:** Dynamic viewport height per layout mobile corretto
- **`button.click()`:** Web API per simulare click via tastiera
- **`typeof`:** Controllo dinamico del tipo per gestione errori
- **Template Literals:** Per costruire stringhe dinamiche nei display

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 16/02  | 4h  | Objects JavaScript, esercizi |
| 17/02  | 6h  | Fine Objects, quasi finiti esercizi |
| 18/02  | 4h  | Fine esercizi, inizio Calculator, pseudocodice |
| 19/02  | 1h  | Pseudocodice e diagramma |
| 20/02  | 8h  | Struttura HTML/CSS, logica JS Calculator |
| 21/02  | 8h  | Completamento Calculator, bug fixing, polishing |
| 22/02  | 1h  | Ripasso Foundations, preparazione Full Stack Path|
| **TOT**| **32h** | **7 giorni** |

## ✅ Completato

- [x] The Odin Project: Foundations → Objects
- [x] Esercizi sugli Objects
- [x] Pseudocodice e diagramma Calculator
- [x] Progetto: Calculator completo con tutti gli extra
- [x] Responsive Design: mobile e tablet
- [x] Keyboard Support
- [x] Deploy su GitHub Pages
- [x] README professionale del progetto
- [x] Fix cross-browser Safari iOS
- [x] Completamento percorso Foundations di The Odin Project 🎉

## 📄 In Corso

- [ ] Approfondimento Objects e metodi avanzati
- [ ] Funzioni ricorsive e reduce (da ripassare)
- [ ] Inizio percorso Full Stack JavaScript

## 🎯 Obiettivi Week 06

- Iniziare il percorso Full Stack JavaScript di The Odin Project
- Approfondire le callback functions e le funzioni ricorsive
- Continuare a costruire progetti sempre più complessi

## 💡 Riflessioni Personali

Settimana molto soddisfacente che ha segnato la fine del percorso Foundations. Il progetto Calculator è stato il più impegnativo finora — non tanto per la difficoltà tecnica singola, ma per la gestione di tutti i casi limite insieme. Ho imparato che il vero problema è sempre iniziare: trovare il punto da cui partire. Una volta trovato, le cose vengono da sé una alla volta. Sono molto orgoglioso del risultato finale, sia per la logica che per lo stile grafico. Questo progetto mi ha aiutato a fissare davvero a mente concetti come la gestione dello stato, i flag booleani e il debugging sistematico. Non vedo l'ora di iniziare il Full Stack Path!

---

**Status:** ✅ Completata  
**Streak:** 🔥 33 giorni consecutivi  
**Prossimi passi:** Iniziare il percorso Full Stack JavaScript di The Odin Project