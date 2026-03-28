# Week 09 - CSS Grid, Flexbox & Admin Dashboard Project

**Periodo:** 16/03/2026 - 22/03/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Nona settimana di studio, quarta settimana del percorso Full Stack JavaScript di The Odin Project. Settimana intensa e ricca di soddisfazioni — completato CSS Grid, approfondito l'uso combinato con Flexbox e portato a termine il progetto Admin Dashboard con un design personalizzato e funzionalità extra non richieste dalla traccia. Settimana anche importante a livello personale: firmato il contratto per il nuovo lavoro e iniziato il modulo JavaScript avanzato. 60 giorni di streak raggiunti!

## 🎯 Obiettivi Settimana

- [x] CSS Grid — completato
- [x] Grid Garden — esercizio interattivo completato
- [x] Proprietà avanzate di Grid
- [x] Grid + Flexbox insieme — approfondito
- [x] Progetto Admin Dashboard — completato e pubblicato
- [x] JavaScript avanzato — iniziato
- [x] Oggetti e metodi JavaScript — ripasso

## 🔑 Concetti Chiave Appresi

### CSS Grid — Base
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
}

/* Posizionamento esplicito */
.item {
  grid-column: 1 / 3;   /* dalla colonna 1 alla 3 */
  grid-row: 1 / -1;     /* dalla riga 1 all'ultima */
}
```

### Grid — Proprietà Avanzate
```css
/* auto-fit con minmax — colonne responsive */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Sidebar fissa + contenuto flessibile */
.layout {
  grid-template-columns: minmax(250px, 300px) 1fr;
}

/* Grid nidificati */
.main-content {
  display: grid;
  grid-template-columns: 1fr minmax(250px, 300px);
}
```

### Grid vs Flexbox — Quando usare quale
```css
/* Grid — layout bidimensionale (righe E colonne) */
.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
}

/* Flexbox — layout monodimensionale (riga O colonna) */
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
```

### CSS Custom Properties per Theming
```css
:root {
  --main-bg: #e2e8f0;
  --card-bg: #fafafa;
  --sidebar-bg: #1f2937;
  --accent: #3882f6;
  --accent-hover: #2563eb;
  --text-primary: #1a2035;
  --text-secondary: #718096;
  --shadow-card: var(--shadow-elevation-medium);
}
```

### Josh Comeau Shadow Palette
```css
:root {
  --shadow-color: 215deg 12% 57%;
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.20),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.20),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.20),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.20);
}
/* Ombre con tinta HSL invece di nero puro — più naturali */
```

### Hover e Active Animations
```css
.card {
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(56, 130, 246, 0.2);
}

.card:active {
  transform: translateY(-1px);
  box-shadow: var(--shadow-card);
}
```

### SVG Inline con currentColor
```css
/* L'SVG eredita il colore dal CSS */
.nav-link {
  color: white;
}

.nav-link svg {
  fill: currentColor; /* prende il colore dal genitore */
  flex-shrink: 0;
}
```

### Oggetti JavaScript e `this`
```javascript
const user = {
  name: 'Tacci',
  greet() {
    return `Hi, I'm ${this.name}`; // this si riferisce all'oggetto
  }
};

// Metodi — funzioni dentro un oggetto
user.greet(); // "Hi, I'm Tacci"
```

## 🚧 Sfide Incontrate

**Giorno 1 (16/03):** Nessun problema — CSS Grid studiato e Grid Garden completato con soddisfazione.

**Giorno 2 (17/03):** Confusione iniziale tra Grid e Flexbox — risolta guardando video di Kevin Powell e leggendo approfondimenti. Tutto più chiaro dopo.

**Giorno 3 (18/03):** Struttura base del Dashboard costruita. La sfida principale era impostare la griglia principale corretta con sidebar che occupa entrambe le righe.

**Giorno 4 (19/03):** Giornata importante — firmato il contratto per il nuovo lavoro. Qualche confusione nel mescolare Grid e Flexbox ma niente di bloccante.

**Giorno 5 (20/03):** Responsive per mobile ha portato via più tempo del previsto. Qualche bug su tablet rimane da risolvere quando le media query saranno più chiare.

**Giorno 6 (21/03):** Implementazione delle immagini preview nelle card senza rompere il layout — il problema più complesso della settimana, risolto in autonomia dopo vari tentativi.

**Giorno 7 (22/03):** Iniziato JavaScript avanzato — oggetti, metodi e `this`. Tutto abbastanza chiaro dopo il ripasso.

## 🏗️ Progetti

### Admin Dashboard — Completato
**Repository:** [admin-dashboard](https://github.com/Taaccii/admin-dashboard)  
**Live Demo:** [taaccii.github.io/admin-dashboard](https://taaccii.github.io/admin-dashboard/)

**Implementato:**
- Layout completo con CSS Grid nidificati
- Sidebar scura con SVG icons inline da Phosphor Icons
- Header con search bar, avatar, campanella e bottoni
- Project cards con immagini preview, link repo e live demo
- Announcements con separatori HR e text truncation
- Trending con avatar circolari e sfondi colorati
- Design personalizzato con color scheme coerente
- CSS Custom Properties per theming completo
- Josh Comeau Shadow Palette per ombre naturali
- Hover lift effect sulle card con accent shadow
- Responsive layout — sidebar collassa a icone su mobile

## 🔧 Strumenti e Tecniche Appresi

- **CSS Grid:** posizionamento esplicito, `grid-column`, `grid-row`, `1 / -1`
- **`minmax()`:** colonne flessibili con limiti min e max
- **`auto-fit` + `minmax`:** griglie responsive senza media query
- **Grid + Flexbox:** Grid per struttura pagina, Flexbox per componenti interni
- **CSS Custom Properties:** theming centralizzato — cambia tutto da `:root`
- **Josh Comeau shadows:** ombre multi-layer con HSL invece di `rgba(0,0,0)`
- **SVG inline con `currentColor`:** icone che ereditano il colore dal CSS
- **`-webkit-line-clamp`:** troncamento testo su più righe
- **`object-fit: cover`:** immagini responsive in contenitori fissi
- **`grid-row: 1 / -1`:** elemento che copre tutte le righe disponibili
- **Responsive con media query:** breakpoint a 768px e 480px
- **Oggetti JS:** metodi, proprietà e keyword `this`

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 16/03  | 4h  | CSS Grid completato, Grid Garden |
| 17/03  | 5h  | Proprietà avanzate Grid, Grid vs Flexbox |
| 18/03  | 6h  | Inizio Dashboard — struttura base e styling |
| 19/03  | 6h  | Firma contratto lavoro, avanzamento Dashboard |
| 20/03  | 8h  | Dashboard quasi ultimato, responsive mobile |
| 21/03  | 6h  | Dashboard completato e pubblicato |
| 22/03  | 2h  | Inizio JS avanzato — oggetti e `this` |
| **TOT**| **37h** | **7 giorni** |

## ✅ Completato

- [x] CSS Grid — studio completo
- [x] Grid Garden — completato
- [x] Proprietà avanzate Grid
- [x] Grid + Flexbox — approfondito
- [x] Progetto Admin Dashboard — completato e pubblicato
- [x] JavaScript avanzato — iniziato
- [x] Oggetti e metodi JS

## 📄 In Corso

- [ ] JavaScript avanzato — continua week 10
- [ ] Approfondimento `this` e prototype chain

## 🎯 Obiettivi Week 10

- Continuare JavaScript avanzato
- Adattarsi al nuovo ritmo lavoro di giorno + studio di sera
- Mantenere la streak

## 💡 Riflessioni Personali

Settimana straordinaria — 37 ore, progetto completato con risultato di cui sono orgoglioso, nuovo contratto di lavoro firmato e 60 giorni di streak raggiunti. Il Dashboard è stato il progetto più complesso finora: non mi sono limitato alla traccia ma ho aggiunto immagini preview nelle card, responsive layout e design personalizzato. La cosa che più mi ha sorpreso è quanto naturalmente Grid e Flexbox si integrino una volta capita la logica — Grid per la struttura grande, Flexbox per i dettagli. A 34 anni, partendo da zero, riuscire a costruire qualcosa del genere è una soddisfazione enorme. Da lunedì inizia il nuovo lavoro — il ritmo cambia, ma la streak continua.

---

**Status:** ✅ Completata  
**Streak:** 🔥 61 giorni consecutivi  
**Prossimi passi:** JavaScript avanzato e adattamento al nuovo ritmo lavoro + studio