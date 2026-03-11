# Week 07 - CSS Intermedio, Selettori Avanzati & Positioning

**Periodo:** 02/03/2026 - 08/03/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Settima settimana di studio, seconda settimana del percorso Full Stack JavaScript di The Odin Project. Settimana intensa e variegata — ho approfondito CSS a tutto tondo (unità, testo, proprietà avanzate, selettori, positioning, custom properties) alternando con miglioramenti importanti al progetto Gestionale Centro Estetico e alle prime candidature di lavoro. Una giornata di pausa consapevole per ricaricare le energie verso la fine della settimana.

## 🎯 Obiettivi Settimana

- [x] Unità CSS completate (px, em, rem, vh, vw, %)
- [x] Text styling e best practices per i font
- [x] Font esterni e locali — gestione e responsive
- [x] Proprietà CSS avanzate (background, border, border-radius, box-shadow)
- [x] Selettori avanzati — studio approfondito
- [x] CSS Diner — esercizio completo
- [x] Esercizi selettori su MDN
- [x] CSS Positioning
- [x] Funzioni CSS e compatibilità browser
- [x] Custom Properties (CSS Variables)
- [x] Panoramica preprocessori e framework (Sass, SCSS, Bootstrap, Tailwind)
- [x] Forms HTML — prima parte con esercizi MDN
- [x] Miglioramenti Gestionale Centro Estetico
- [x] GitHub Releases automatizzate
- [x] LinkedIn e GitHub aggiornati con nuovo progetto

## 🔑 Concetti Chiave Appresi

### Unità CSS
```css
/* Unità assolute */
.element { font-size: 16px; } /* pixel - valore fisso */

/* Unità relative al font */
.element { font-size: 1rem; }  /* relativa al root (html) */
.element { font-size: 1.5em; } /* relativa al genitore */

/* Unità relative al viewport */
.element { height: 100vh; }  /* viewport height */
.element { width: 100vw; }   /* viewport width */
.element { height: 100dvh; } /* dynamic viewport height (mobile) */

/* Percentuale */
.element { width: 50%; } /* relativa al genitore */
```

### Text Styling e Font
```css
/* Font esterni con @font-face */
@font-face {
  font-family: 'MyFont';
  src: url('./fonts/myfont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

/* Font responsivo con clamp */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem); /* min, preferito, max */
}

/* Best practices testo */
p {
  line-height: 1.5;
  letter-spacing: 0.01em;
  max-width: 65ch; /* larghezza ottimale per la lettura */
}
```

### Proprietà CSS Avanzate
```css
/* Background */
.element {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Border e border-radius */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  border-radius: 50%; /* cerchio perfetto */
}

/* Box Shadow */
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* ombra interna */
}
```

### Selettori Avanzati
```css
/* Pseudo-classi strutturali */
li:first-child { color: red; }
li:last-child { color: blue; }
li:nth-child(2n) { color: green; } /* elementi pari */
li:nth-child(odd) { color: purple; } /* elementi dispari */

/* Pseudo-classi di stato */
a:hover { text-decoration: underline; }
input:focus { outline: 2px solid blue; }
input:checked + label { font-weight: bold; }

/* Pseudo-elementi */
p::before { content: "→ "; }
p::after { content: " ←"; }
p::first-line { font-weight: bold; }

/* Selettori di attributo */
a[href^="https"] { color: green; } /* inizia con */
a[href$=".pdf"] { color: red; }    /* finisce con */
a[href*="odin"] { color: blue; }   /* contiene */

/* Combinatori avanzati */
.parent > .child { } /* figlio diretto */
.prev + .next { }    /* fratello adiacente */
.prev ~ .sibling { } /* tutti i fratelli successivi */
```

### CSS Positioning
```css
/* Static - default */
.element { position: static; }

/* Relative - si sposta rispetto alla posizione originale */
.element {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute - si posiziona rispetto al genitore positioned */
.child {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed - fisso rispetto al viewport */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Sticky - ibrido tra relative e fixed */
.header {
  position: sticky;
  top: 0;
}
```

### Custom Properties (CSS Variables)
```css
/* Definizione nella root */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #1e40af;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --border-radius: 8px;
}

/* Utilizzo */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
}

/* Fallback */
.element {
  color: var(--color-text, #333); /* usa #333 se la variabile non esiste */
}
```

### Funzioni CSS
```css
/* calc() - calcoli dinamici */
.element {
  width: calc(100% - 2rem);
  height: calc(50vh - 60px);
}

/* clamp() - valore tra min e max */
.text { font-size: clamp(1rem, 2.5vw, 2rem); }

/* min() e max() */
.container { width: min(100%, 1200px); }
```

## 🚧 Sfide Incontrate

**Giorno 1 (02/03):** Nessun problema — giornata molto produttiva con 10 ore di studio. Grande soddisfazione nel creare la preview del profilo GitHub con Figma per LinkedIn.

**Giorno 2 (03/03):** Deviazione consapevole dallo studio per migliorare il Gestionale — non rimpianti, il risultato è stato ottimo. GitHub Releases automatizzate e presentazione professionale del progetto su LinkedIn.

**Giorno 3 (04/03):** Poco tempo disponibile. Prima candidatura di lavoro inviata — passo importante e necessario per mantenersi durante lo studio.

**Giorno 4 (05/03):** I selettori `nth-child` e varianti più complesse rimangono da consolidare con la pratica. CSS Diner completato con grande soddisfazione.

**Giorno 5 (06/03):** Visita importante ha portato via quasi tutta la giornata — solo 2 ore di studio ma la streak è stata mantenuta.

**Giorno 6 (07/03):** Stanchezza e perdita di concentrazione verso fine giornata nonostante 8 ore di studio. Giornata molto densa con tanti argomenti affrontati.

**Giorno 7 (08/03):** Giornata di pausa consapevole per ricaricare le energie — famiglia e svago. Piccolo accenno ai form per mantenere la streak.

## 🏗️ Miglioramenti Progetti

### Gestionale Centro Estetico — Aggiornamenti
**Repository:** [Gestionale-Centro-Estetico](https://github.com/Taaccii/Gestionale-Centro-Estetico)  
**Aggiornamenti questa settimana:**
- Miglioramento funzionalità scarne nella versione demo
- Integrazione sistema automatizzato di release con **GitHub Releases**
- Fix bug nella build demo (versione portable)
- Refactor completo del README con preview animata (GIF)
- Progetto aggiunto alla sezione Progetti di LinkedIn con preview
- Messo in primo piano sul profilo LinkedIn

## 🔧 Strumenti e Tecniche Appresi

- **CSS Units:** Differenza pratica tra px, em, rem, vh, vw, dvh, %
- **Font responsivi:** `clamp()` per font size adattivi, `@font-face` per font locali
- **CSS Diner:** Esercizio interattivo completo per padroneggiare i selettori
- **Selettori nth-child:** Pattern pari/dispari, posizioni specifiche, formule
- **CSS Positioning:** Static, relative, absolute, fixed, sticky — quando usare quale
- **Custom Properties:** Definizione, utilizzo, fallback — basi per theming e manutenibilità
- **Funzioni CSS:** `calc()`, `clamp()`, `min()`, `max()`
- **GitHub Releases:** Automatizzazione del rilascio versioni con tag e assets
- **Preprocessori (panoramica):** Sass/SCSS, differenze con CSS nativo
- **Framework CSS (panoramica):** Bootstrap vs Tailwind — approcci diversi

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 02/03  | 10h | Unità CSS, text styling, font, proprietà avanzate, Figma preview |
| 03/03  | 10h | Gestionale: GitHub Releases, bug fix, LinkedIn update |
| 04/03  | 4h  | Gestionale: fix bug demo, prime candidature lavoro |
| 05/03  | 6h  | Selettori avanzati, CSS Diner, esercizi MDN |
| 06/03  | 2h  | Fine esercizi selettori, inizio positioning (visita) |
| 07/03  | 8h  | Positioning, funzioni CSS, custom properties, form pt.1 |
| 08/03  | 1h  | Pausa, famiglia, accenno ai form |
| **TOT**| **41h** | **7 giorni** |

## ✅ Completato

- [x] Unità CSS — studio completo
- [x] Text styling e gestione font (esterni, locali, responsive)
- [x] Proprietà CSS avanzate (background, border, box-shadow)
- [x] Selettori avanzati — studio approfondito
- [x] CSS Diner — completato
- [x] Esercizi selettori MDN — completati
- [x] CSS Positioning — completato
- [x] Funzioni CSS (calc, clamp, min, max)
- [x] Custom Properties — basi
- [x] Panoramica preprocessori e framework CSS
- [x] Forms HTML — prima parte con esercizi MDN
- [x] Gestionale: GitHub Releases automatizzate
- [x] Gestionale: bug fix versione demo
- [x] Gestionale: README refactor con GIF preview
- [x] LinkedIn: progetto Gestionale aggiunto e in primo piano
- [x] Figma: preview profilo GitHub per LinkedIn

## 📄 In Corso

- [ ] Forms HTML — seconda parte ed esercizi
- [ ] Approfondimento selettori nth-child complessi
- [ ] Candidature lavoro in corso

## 🎯 Obiettivi Week 08

- Completare i form HTML con seconda parte ed esercizi
- Continuare il percorso CSS intermedio su The Odin Project
- Iniziare CSS Grid
- Mantenere la streak

## 💡 Riflessioni Personali

Settimana molto intensa — 41 ore totali, la seconda più alta finora. Ho trovato un buon equilibrio tra studio puro e lavoro pratico sui progetti. Le deviazioni per migliorare il Gestionale non erano "tempo perso" ma investimento sulla presentazione professionale. Il CSS sta diventando sempre più chiaro e logico — selettori, positioning e custom properties sono concetti che si iniziano a vedere come strumenti potenti e non come regole da memorizzare. CSS Diner è stato divertente e formativo. La pausa del giorno 7 era necessaria — meglio un giorno di reset che bruciare la motivazione.

---

**Status:** ✅ Completata  
**Streak:** 🔥 47 giorni consecutivi  
**Prossimi passi:** Completare i form HTML e continuare CSS intermedio su The Odin Project