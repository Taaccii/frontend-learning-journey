# Week 06 - Full Stack Path, CSS Intermedio & Progetti Personali

**Periodo:** 23/02/2026 - 01/03/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Sesta settimana di studio, prima settimana del percorso Full Stack JavaScript di The Odin Project. Dopo aver completato il percorso Foundations e il progetto Calculator, ho iniziato ad esplorare nuovi strumenti e argomenti: SVG, Emmet, HTML Tables, CSS intermedio con reset e normalize. Una giornata è stata dedicata interamente alla sistemazione dei CV, del profilo LinkedIn e alla scoperta di Figma per le social preview dei progetti. Settimana con ritmo variabile dovuto a impegni personali, ma comunque ricca di scoperte.

## 🎯 Obiettivi Settimana

- [x] Inizio percorso Full Stack JavaScript di The Odin Project
- [x] SVG — cos'è e quando usarlo rispetto alle immagini raster
- [x] Emmet — approfondimento e nuove tecniche di autocompilazione
- [x] OhMyZsh — configurazione e personalizzazione del terminale
- [x] HTML Tables — studio completo e relativi esercizi
- [x] CSS intermedio — stili di default del browser
- [x] CSS Reset e Normalize / Modern-Normalize
- [x] Creazione 2 CV professionali su rxresume.me
- [x] Setup profilo LinkedIn
- [x] Social preview GitHub con Figma
- [x] README Calculator con social preview
- [x] Introduzione alle unità di misura in CSS

## 🔑 Concetti Chiave Appresi

### SVG vs Immagini Raster
```html
<!-- SVG: scalabile infinitamente senza perdita di qualità -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<!-- Usare SVG per: icone, loghi, illustrazioni semplici, grafica UI -->
<!-- Usare <img> per: fotografie e immagini complesse -->
```

### Emmet — Abbreviazioni Avanzate
```html
<!-- Genera lista con 5 elementi con link -->
ul>li*5>a{Item $}

<!-- Genera tabella 3x3 -->
table>tr*3>td*3{Cella $}

<!-- Form con label e input -->
form>label+input[type="text"]*3
```

### HTML Tables
```html
<table>
  <thead>
    <tr>
      <th scope="col">Intestazione 1</th>
      <th scope="col">Intestazione 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Footer tabella</td>
    </tr>
  </tfoot>
</table>
```

### CSS Reset — Approccio Josh Comeau
```css
/* Reset moderno ispirato a Josh Comeau */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}
```

### CSS Normalize vs Reset
```css
/* Reset CSS: azzera tutto, si riparte da zero */
/* Normalize CSS: corregge le inconsistenze tra browser mantenendo stili utili */
/* Modern-normalize: versione aggiornata di normalize */

/* Approccio consigliato: reset + normalize insieme per massimo controllo */
```

### OhMyZsh — Terminale Potenziato
```bash
# Installazione OhMyZsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Vantaggi principali:
# - Autocompletamento avanzato
# - Plugin per git, node, npm
# - Temi visivi personalizzabili
# - Alias predefiniti utili
```

## 🚧 Sfide Incontrate

**Giorno 1 (23/02):** Nessun problema particolare — grande entusiasmo per l'inizio del Full Stack Path. OhMyZsh ha richiesto tempo di configurazione e personalizzazione, ma è stata una scoperta utile che migliorerà il workflow nel tempo.

**Giorno 2 (24/02):** Poca concentrazione dovuta a molte distrazioni in casa. Ho preferito andare più lento sulle Tables leggendo bene tutta la documentazione invece di correre.

**Giorno 3 (25/02):** Giornata quasi persa per una visita importante. Solo 1 ora di studio dedicata al ripasso degli appunti. La costanza ha prevalso sulla quantità — l'importante era mantenere la streak.

**Giorno 4-5 (26-27/02):** Nessun problema tecnico. La scoperta del blog di Josh Comeau ha portato a una "distrazione produttiva" esplorando i suoi tips and tricks — materiale di altissima qualità che ha ampliato la visione su CSS e JavaScript.

**Giorno 6 (28/02):** Giornata interamente dedicata ai CV e LinkedIn — rimandato da troppo tempo. Nessun problema ma il tempo è volato. Figma è stato una scoperta inaspettata.

**Giorno 7 (01/03):** Nessun problema. Soddisfazione nel vedere il README del Calculator con la social preview professionale.

## 🏗️ Progetti e Attività Extra

### CV Junior Developer
**Strumento:** rxresume.me (template Rhyhorn, ATS friendly)  
**Obiettivo:** Candidature per ruoli Junior Frontend/Full Stack Developer  
**Contenuto:** Summary, 4 esperienze lavorative, 4 progetti, skills tech, education, lingue

### CV Operaio Polivalente
**Strumento:** rxresume.me (template Rhyhorn, ATS friendly)  
**Obiettivo:** Lavoro temporaneo per mantenersi durante lo studio  
**Contenuto:** Summary operativa con valore aggiunto informatico, 7 esperienze lavorative, skills operative + tech

### Profilo LinkedIn
**Headline:** Junior Developer | Full Stack Web Development  
**Contenuto:** About, tutte le esperienze, formazione, certificazioni, competenze, lingue, progetti

### Social Preview GitHub — Calculator T-3000
**Strumento:** Figma  
**Dimensioni:** 1280 x 640px  
**Risultato:** Preview professionale con screenshot del progetto, sfondo coerente col design della calcolatrice e firma @Taaccii. Creato anche template riutilizzabile per i prossimi progetti.

## 🔧 Strumenti e Tecniche Appresi

- **OhMyZsh:** Potenziamento del terminale con plugin, temi e autocompletamento avanzato
- **Emmet avanzato:** Nuove abbreviazioni per velocizzare la scrittura di HTML e CSS
- **HTML Tables:** Struttura completa con `thead`, `tbody`, `tfoot`, `colspan`, `rowspan`, attributi di accessibilità
- **CSS Reset:** Differenza tra reset, normalize e modern-normalize — approccio ibrido di Josh Comeau
- **Browser Default Styles:** Come i browser applicano stili di default e come gestirli
- **Figma base:** Creazione frame, importazione immagini, testo, export PNG — primi passi con lo strumento di design professionale
- **GitHub Social Preview:** Impostazione Open Graph image per le repository (Settings → Social Preview)
- **rxresume.me:** Creazione CV ATS-friendly con template professionale

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 23/02  | 6h  | Full Stack Path inizio, SVG, Emmet, OhMyZsh |
| 24/02  | 4h  | HTML Tables, documentazione e esercizi |
| 25/02  | 1h  | Ripasso appunti (visita medica) |
| 26/02  | 4h  | Fine Tables + esercizi, CSS reset/normalize |
| 27/02  | 3h  | CSS default styles, reset, blog Josh Comeau |
| 28/02  | 6h  | CV x2, LinkedIn, Figma, social preview |
| 01/03  | 4h  | README Calculator, template Figma, unità CSS |
| **TOT**| **28h** | **7 giorni** |

## ✅ Completato

- [x] The Odin Project: Full Stack Path — SVG, Emmet, Tables, CSS intermedio
- [x] OhMyZsh configurato e personalizzato
- [x] HTML Tables — studio completo con esercizi
- [x] CSS stili di default — comprensione e gestione
- [x] CSS Reset, Normalize e Modern-Normalize
- [x] CV Junior Developer — professionale e ATS friendly
- [x] CV Operaio Polivalente — per lavoro temporaneo
- [x] Profilo LinkedIn strutturato e completo
- [x] Social preview Calculator con Figma
- [x] Template Figma riutilizzabile per social preview
- [x] README Calculator aggiornato con preview professionale
- [x] Prime ore sulle unità CSS

## 📄 In Corso

- [ ] Unità di misura CSS (px, em, rem, vh, vw, %)
- [ ] Approfondimento CSS intermedio
- [ ] Social preview per le altre repo GitHub (Etch-a-Sketch, Rock Paper Scissors)
- [ ] Approfondimento Figma

## 🎯 Obiettivi Week 07

- Completare le unità di misura CSS
- Continuare il percorso CSS intermedio di The Odin Project
- Completare le social preview di tutti i progetti GitHub
- Migliorare i README delle altre repo

## 💡 Riflessioni Personali

Settimana diversa dalle precedenti — meno concentrata su un singolo argomento ma ricca di scoperte trasversali. La giornata dedicata ai CV e LinkedIn sembrava "tempo perso" rispetto allo studio, ma era necessaria e sono molto soddisfatto del risultato. Figma è stata la scoperta più inaspettata: uno strumento enorme che voglio imparare con calma nel tempo. La scoperta del blog di Josh Comeau è stata un'altra piccola rivelazione — certi sviluppatori sanno spiegare con una chiarezza e una creatività che lasciano a bocca aperta. Settimana con meno ore totali rispetto alla precedente, ma ogni ora è stata comunque produttiva. La streak continua!

---

**Status:** ✅ Completata  
**Streak:** 🔥 40 giorni consecutivi  
**Prossimi passi:** Completare unità CSS e continuare CSS intermedio su The Odin Project