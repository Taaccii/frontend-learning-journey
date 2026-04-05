# Week 10 - JavaScript Avanzato: Oggetti, Prototype & Library Project

**Periodo:** 23/03/2026 - 29/03/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Decima settimana di studio, prima settimana con il nuovo lavoro full-time. Settimana durissima — cinque serate consecutive ad addormentarsi sulla tastiera dopo giornate pesanti in fabbrica. Nonostante tutto, la streak non si è mai interrotta. Il weekend ha riscattato tutto con 6 ore di lavoro intenso sul progetto Library. Una settimana che dimostra cosa significa davvero essere costanti.

## 🎯 Obiettivi Settimana

- [x] Oggetti e constructor — studiati e applicati
- [x] Prototype — studiato e applicato
- [x] Progetto Library — quasi completato
- [x] Streak mantenuta — 7 giorni su 7

## 🔑 Concetti Chiave Appresi

### Constructor Function
```javascript
// Il constructor è uno stampo per creare oggetti identici
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID(); // ID unico automatico
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Crea un libro con new
const book = new Book("Harry Potter", "Rowling", 300, true);
```

### Prototype — Metodi condivisi
```javascript
// Il metodo viene aggiunto al prototype — condiviso da tutti i libri
Book.prototype.toggleRead = function() {
  this.read = !this.read; // inverte true/false
};

book.toggleRead(); // funziona su qualsiasi istanza di Book
```

### Separazione Dati e DOM
```javascript
// I dati stanno nell'array — il DOM è solo una rappresentazione
let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);        // 1. salva nell'array
  displayBooks();                  // 2. aggiorna il DOM
}

function displayBooks() {
  const container = document.querySelector('.main-content');
  container.innerHTML = '';
  myLibrary.forEach(book => {
    container.appendChild(createCard(book));
  });
}
```

### data-attribute per collegare DOM e dati
```javascript
// Ogni card ha l'ID del libro corrispondente
bookCard.dataset.id = book.id;

// Al click recuperi l'ID e trovi il libro nell'array
removeBook.addEventListener('click', () => {
  const id = bookCard.dataset.id;
  myLibrary = myLibrary.filter(b => b.id !== id);
  displayBooks();
});
```

### Filter per rimuovere elementi
```javascript
// filter crea un nuovo array senza l'elemento da rimuovere
myLibrary = myLibrary.filter(book => book.id !== id);
// "tieni tutti i libri il cui ID è diverso da quello da eliminare"
```

### Overlay con CSS hover
```css
.info-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.card-book:hover .info-overlay {
  opacity: 1;
  visibility: visible;
}
```

### SVG inline con DOMParser
```javascript
// Crea un oggetto con tutti gli SVG come stringhe
const ICONS = {
  trash: '<svg>...</svg>',
  check: '<svg>...</svg>',
}

// Funzione che converte la stringa in elemento SVG reale
function getIcon(name) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(ICONS[name], "image/svg+xml");
  return doc.querySelector("svg");
}
```

## 🚧 Sfide Incontrate

**Giorno 1 (23/03):** Primo giorno di lavoro — stimolante ma stancante. Solo 1 ora di studio la sera, troppo stanco per andare avanti.

**Giorno 2 (24/03):** Stanchezza che rallenta tutto — riletto le stesse cose 20 volte senza riuscire ad avanzare.

**Giorno 3 (25/03):** Addormentato sul PC alle 22:30 appena acceso. Streak mantenuta per il rotto della cuffia.

**Giorno 4 (26/03):** Stesso schema — riuscito solo a rileggere l'inizio della lezione sui constructor.

**Giorno 5 (27/03):** Addormentato sulla tastiera. Non mollato.

**Giorno 6 (28/03):** Sabato — 2 ore di lavoro sul progetto ma poca concentrazione per problemi familiari e stanchezza accumulata.

**Giorno 7 (29/03):** Domenica — 6 ore intense. Progetto quasi completato con overlay, toggle read e rimozione libri. Riscatto totale.

## 🏗️ Progetti

### Library Project — In corso
**Repository:** [library](https://github.com/Taaccii/library)

**Implementato:**
- Constructor `Book` con `crypto.randomUUID()` per ID univoci
- Array `myLibrary` come unica fonte di dati
- `addBookToLibrary()` — aggiunge libri all'array e aggiorna il DOM
- `createCard()` — crea card DOM a partire dai dati del libro
- `displayBooks()` — svuota e ricostruisce il DOM dall'array
- `Book.prototype.toggleRead` — inverte lo stato letto/non letto
- Rimozione libro con `filter` e `data-attribute`
- Overlay CSS con info libro al hover
- SVG inline con `DOMParser` e `currentColor`
- Animazione `fade-out` alla rimozione

**Da completare:**
- Form per aggiungere nuovi libri con modal/dialog
- Filtri sidebar (tutti, letti, da leggere)

## 🔧 Strumenti e Tecniche Appresi

- **Constructor function** — stampo per creare oggetti con `new`
- **`this` keyword** — riferimento all'istanza corrente dell'oggetto
- **Prototype** — metodi condivisi da tutte le istanze
- **`crypto.randomUUID()`** — genera ID univoci automatici
- **`data-attribute`** — collega elementi DOM ai dati JavaScript
- **`filter()`** — rimuove elementi da un array senza mutarlo
- **`DOMParser`** — converte stringhe HTML/SVG in elementi DOM reali
- **Separazione dati/DOM** — array come fonte di verità, DOM come rappresentazione
- **Arrow function nelle callback** — closure che mantiene accesso alle variabili esterne
- **`classList.add`** — aggiunge classi CSS dinamicamente

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 23/03  | 1h  | Primo giorno lavoro, ripasso oggetti |
| 24/03  | 1h  | Constructor e prototype — stanchezza |
| 25/03  | 1h  | Inizio progetto Library — addormentato |
| 26/03  | 1h  | Ripasso constructor — poco avanzamento |
| 27/03  | 1h  | Tentativo studio — addormentato |
| 28/03  | 2h  | Avanzamento progetto Library |
| 29/03  | 6h  | Overlay, toggle read, rimozione libri |
| **TOT**| **13h** | **7 giorni** |

## ✅ Completato

- [x] Constructor function
- [x] Prototype e metodi condivisi
- [x] Library Project — struttura base
- [x] Toggle read con prototype
- [x] Rimozione libri con filter
- [x] Overlay CSS al hover
- [x] SVG inline con DOMParser

## 📄 In Corso

- [ ] Form per aggiungere libri — da completare
- [ ] Filtri sidebar
- [ ] JavaScript avanzato — continua

## 🎯 Obiettivi Week 11

- Completare il progetto Library con form e filtri
- Trovare un ritmo sostenibile tra lavoro e studio
- Valutare il passaggio ai log settimanali

## 💡 Riflessioni Personali

13 ore — la settimana più bassa finora, cinque giorni da 1 ora ciascuno. Addormentarsi sulla tastiera ogni sera e riaprire il PC il giorno dopo è una forma di costanza che conta tanto quanto le ore. La domenica ha dimostrato che la testa funziona ancora — quando c'è tempo e riposo, i risultati arrivano. Passare ai log settimanali è una scelta saggia: meglio un log onesto a settimana che cinque log da "mi sono addormentato". Il percorso continua, il ritmo cambierà.

---

**Status:** ✅ Completata  
**Streak:** 🔥 68 giorni consecutivi  
**Prossimi passi:** Completare Library Project e trovare il ritmo lavoro + studio