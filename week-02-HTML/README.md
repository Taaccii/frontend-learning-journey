# Week 02 - HTML & CSS Foundations

**Periodo:** 27/01/2026 - 31/01/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Seconda settimana di studio, con un cambio di strategia. Dopo aver completato JavaScript Fundamentals e Objects su JavaScript.info, ho identificato delle lacune importanti in HTML e CSS che mi impedivano di creare progetti pratici. Ho deciso di consolidare le basi frontend con The Odin Project prima di continuare con JavaScript avanzato.

## 🎯 Obiettivi Settimana

- [x] Git e GitHub workflow
- [x] Configurazione SSH per GitHub
- [x] HTML semantico e struttura
- [x] Primo progetto: Recipes Website
- [x] CSS Fundamentals (selettori, cascade, specificità)
- [x] Box Model (content box, inline, block)
- [x] Chrome DevTools (inspector e debug)
- [x] Flexbox (inizio)

## 🔑 Concetti Chiave Appresi

### Git & GitHub
- Configurazione chiave SSH per push senza password
- Workflow: `git add`, `git commit`, `git push`
- Gestione repository e collegamenti remoti

### HTML
```html
<!-- Struttura semantica -->
<header>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="recipe.html">Recipes</a></li>
    </ul>
  </nav>
</header>
```

### CSS - Selettori
```css
/* Concatenamento - elementi con TUTTE le classi */
.card.featured { /* ... */ }

/* Raggruppamento - elementi con UNA delle classi */
.card, .featured { /* ... */ }

/* Cascade e specificità */
#id { /* specificità: 100 */ }
.class { /* specificità: 10 */ }
element { /* specificità: 1 */ }
```

### Box Model
```css
/* Content box (default) */
.box {
  width: 200px;
  padding: 20px;
  /* larghezza totale = 240px */
}

/* Border box (più intuitivo) */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  /* larghezza totale = 200px */
}
```

### Flexbox (Introduzione)
```css
.container {
  display: flex;
  justify-content: center; /* asse principale */
  align-items: center; /* asse trasversale */
  flex-direction: row; /* o column */
}

.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```

## 🚧 Sfide Incontrate

**Giorno 1 (27/01):** Configurazione chiave SSH per GitHub ha rallentato il lavoro, ma una volta configurata ha migliorato molto il workflow.

**Giorno 4 (29/01):** Confusione tra concatenamento e raggruppamento CSS. Risolto con esempi pratici:
- `.class1.class2` = elemento CON entrambe le classi
- `.class1, .class2` = elementi CON almeno una delle classi

**Giorno 5 (31/01):** Flexbox è stato "una bella botta di informazioni". Gli esercizi sono più complessi e richiedono tempo per essere compresi senza aiuto esterno. Attualmente fermo all'esercizio 05.

## 📁 Progetti Completati

### Recipes Website
**Repository:** [odin-recipes](https://github.com/Taaccii/odin-recipes)  
**Descrizione:** Primo sito web in HTML puro con tre ricette, immagini e collegamenti. Successivamente aggiunto CSS per migliorare lo stile.

### CSS Exercises
Completati esercizi su:
- [Intro to CSS](https://github.com/Taaccii/css-exercises/tree/main/foundations/intro-to-css)
- [Cascade](https://github.com/Taaccii/css-exercises/tree/8509f2f9a2bf215fc754cefdb557966897699c1c/foundations/cascade/01-cascade-fix)

## 🔧 Strumenti Appresi

- **Terminale/CLI:** Migliorato l'uso quotidiano dei comandi da terminale
- **Git:** Workflow completo (add, commit, push)
- **Chrome DevTools:** Inspector per debug CSS e HTML
- **GitHub:** Gestione repository e chiavi SSH

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 27/01  | 6h  | Git, GitHub, HTML inizio |
| 28/01  | 7h  | HTML, primo progetto |
| 29/01  | 7h  | CSS intro, esercizi |
| 30/01  | 4h  | Box model, DevTools |
| 31/01  | 7h  | Flexbox (esercizi in corso) |
| **TOT**| **31h** | **5 giorni** |

## ✅ Completato

- [x] The Odin Project: Foundations → Git Basics
- [x] The Odin Project: Foundations → HTML Foundations
- [x] The Odin Project: Foundations → CSS Foundations
- [x] Progetto: Recipes Website (HTML + CSS base)
- [x] Esercizi: Intro CSS, Cascade, Box Model
- [x] The Odin Project: Foundations → Flexbox (in corso)

## 🔄 In Corso

- [ ] Flexbox esercizi (fermo all'esercizio 05)
- [ ] Comprensione allineamento e posizionamento con Flexbox

## 🎯 Obiettivi Week 03

- Completare tutti gli esercizi Flexbox
- Consolidare l'uso di `justify-content`, `align-items`, `flex-direction`
- Eventualmente iniziare con CSS Grid
- Possibile progetto pratico per applicare Flexbox

---

**Status:** 🔄 In corso (Flexbox esercizi)  
**Streak:** 🔥 11 giorni consecutivi  
**Prossimi passi:** Completare esercizio 05 Flexbox e proseguire con gli altri
