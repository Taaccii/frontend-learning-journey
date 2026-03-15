# Week 08 - Forms HTML, Validation & Sign-Up Form Project

**Periodo:** 09/03/2026 - 15/03/2026  
**Fonte:** The Odin Project

## 📚 Contesto

Ottava settimana di studio, terza settimana del percorso Full Stack JavaScript di The Odin Project. Settimana segnata da eventi importanti fuori dallo studio — buone notizie dall'ospedale, nuovo lavoro trovato e un periodo familiare impegnativo. Nonostante le ore ridotte, ho completato i form HTML, le validation e portato a termine il progetto Sign-Up Form con grande soddisfazione. Una settimana che dimostra come la costanza conti più delle ore.

## 🎯 Obiettivi Settimana

- [x] Form controls — completati
- [x] Styling dei form
- [x] Form validation — completata
- [x] Progetto Sign-Up Form — completato
- [ ] CSS Grid — iniziato (continua week 09)

## 🔑 Concetti Chiave Appresi

### Form Controls
```html
<!-- Input types principali -->
<input type="text" name="name" required>
<input type="email" name="email" required>
<input type="password" name="password" required>
<input type="tel" name="phone">
<input type="checkbox" name="available" value="yes">
<input type="radio" name="type" value="option1">

<!-- Select -->
<select name="size">
  <option value="xs">Extra Small</option>
  <option value="s">Small</option>
</select>

<!-- Textarea -->
<textarea name="message" rows="5"></textarea>
```

### Form Structure
```html
<!-- Label e input separati — best practice -->
<label for="name">Name</label>
<input type="text" id="name" name="name">

<!-- Input dentro label — preferibile per checkbox e radio -->
<label for="available">
  <input type="checkbox" id="available" name="available">
  <span>I'm available</span>
</label>

<!-- Fieldset per raggruppare -->
<fieldset>
  <legend>Type of Talk</legend>
  <input type="radio" id="main" name="type" value="main">
  <label for="main">Main Stage</label>
</fieldset>
```

### Form Validation
```html
<!-- Validazione nativa HTML -->
<input type="email" required>
<input type="password" 
       pattern="[A-Za-z0-9]{8,}" 
       title="Minimum 8 characters, letters and numbers only"
       required>
```
```css
/* user-invalid — si attiva solo dopo interazione */
input:user-invalid {
  border-color: #c0393b;
  box-shadow: none;
}

/* invalid — si attiva subito al caricamento (evitare per UX) */
input:invalid {
  border-color: red;
}

/* Messaggio errore con :has() */
.input:has(input:user-invalid)::after {
  content: 'Invalid field';
  color: #c0393b;
  font-size: 0.75rem;
}
```

### Form Styling
```css
/* Rimuovere stile default browser */
input {
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  padding: 3px 8px;
}

/* Focus state personalizzato */
input:focus {
  border-color: #4a93f2;
  box-shadow: 2px 4px 8px -1px hsla(213, 10%, 21%, 0.25);
}

/* Label styling */
label {
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  font-weight: 500;
}
```

### Layout Two-Column con Sticky Sidebar
```css
/* Immagine fissa a sinistra */
.image-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 40%;
  flex-shrink: 0;
}

/* Contenuto scrollabile a destra */
.main {
  width: 60%;
}
```

### Pseudo-elemento ::before con background-image
```css
/* Ridimensionare immagine in ::before */
.logo::before {
  content: '';
  display: inline-block;
  width: 80px;
  height: 80px;
  background-image: url('./img/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
/* content: url() non permette di ridimensionare — usare background-image */
```

## 🚧 Sfide Incontrate

**Giorno 1 (09/03):** Giornata quasi persa per visita medica — solo 2 ore in sala d'attesa. Streak mantenuta.

**Giorno 2 (10/03):** Giornata storica — buone notizie dall'ospedale e nuovo lavoro trovato. Solo 1 ora di studio ma la motivazione è alle stelle. Da mercoledì prossimo inizierà il lavoro, con meno ore disponibili per studiare.

**Giorno 3 (11/03):** Finalmente completati tutti i form con calma e attenzione. Poca concentrazione ma risultato raggiunto.

**Giorno 4 (12/03):** Visita per il nuovo lavoro ha portato via la giornata. Validation completate nelle 2 ore disponibili.

**Giorno 5 (13/03):** Blocco creativo all'inizio del progetto, periodo familiare difficile. Solo 1 ora ma la struttura base è abbozzata.

**Giorno 6 (14/03):** Struttura base e primo styling del form completati in 3 ore.

**Giorno 7 (15/03):** 7 ore di lavoro intenso — progetto completato con grande soddisfazione. Tutti i problemi risolti in autonomia. Iniziato CSS Grid.

## 🏗️ Progetti

### Sign-Up Form — Completato
**Repository:** [sign-up-form](https://github.com/Taaccii/sign-up-form)  
**Live Demo:** [taaccii.github.io/sign-up-form](https://taaccii.github.io/sign-up-form/)

**Implementato:**
- Layout a due colonne con immagine sticky sidebar
- Font esterno Google Fonts (Comforter) per il logo
- Pseudo-elemento `::before` con `background-image` per il logo
- Validazione nativa con `:user-invalid`
- Pattern validation sulla password (min 8 caratteri alfanumerici)
- Focus state personalizzato con border e box-shadow
- Button hover con `brightness` e active con `translateY`
- Footer con `margin-top: auto` in flex container
- Crediti fotografici con `<small>` e `position: absolute`

## 🔧 Strumenti e Tecniche Appresi

- **Label e input:** due metodi — separati con `for/id` vs input dentro label (preferibile per checkbox/radio)
- **`:user-invalid` vs `:invalid`:** user-invalid migliore per UX — si attiva solo dopo interazione
- **`pattern` attribute:** regex per validazione input lato client
- **`position: sticky`:** ibrido tra relative e fixed — perfetto per sidebar fisse
- **`::before` con `background-image`:** unico modo per ridimensionare immagini in pseudo-elementi
- **`vw/vh` vs `%`:** vw/vh relativi alla viewport, % relativi al genitore
- **`flex-shrink: 0`:** impedisce a un elemento flex di restringersi
- **`margin-top: auto`:** spinge elementi in fondo in un flex container
- **`box-shadow` direzionale:** offset positivo simula luce da alto a sinistra
- **Google Fonts con `<link>`:** più veloce di `@import` — il browser scarica il font prima del CSS

## 📊 Progressi Giornalieri

| Giorno | Ore | Focus Principale |
|--------|-----|------------------|
| 09/03  | 2h  | Form controls, inizio styling form (visita medica) |
| 10/03  | 1h  | Ripasso form (colloqui + nuovo lavoro trovato!) |
| 11/03  | 4h  | Form completati, inizio validation |
| 12/03  | 2h  | Validation completate (visita nuovo lavoro) |
| 13/03  | 1h  | Inizio progetto Sign-Up Form |
| 14/03  | 3h  | Struttura base e styling form |
| 15/03  | 7h  | Progetto completato, inizio Grid |
| **TOT**| **20h** | **7 giorni** |

## ✅ Completato

- [x] Form controls — completati
- [x] Styling dei form
- [x] Form validation
- [x] Progetto Sign-Up Form — completato e pubblicato
- [x] Grid — iniziato

## 📄 In Corso

- [ ] CSS Grid — continua week 09

## 🎯 Obiettivi Week 09

- Completare CSS Grid
- Iniziare progetti con Grid
- Adattarsi al nuovo ritmo studio + lavoro

## 💡 Riflessioni Personali

Settimana con sole 20 ore — la più bassa finora — ma forse la più significativa a livello personale. Buone notizie dall'ospedale, nuovo lavoro trovato, periodo familiare difficile. Nonostante tutto, la streak non si è mai interrotta. Il progetto Sign-Up Form è stato completamente risolto in autonomia, scomponendo ogni problema in piccole parti e riprovando approcci diversi finché non funzionava. Quella sensazione di sbloccarsi dopo giorni di pausa e vedere tutto più chiaro è uno dei momenti più belli di questo percorso. Da settimana prossima cambia tutto — lavoro di giorno, studio di sera. Una nuova sfida.

---

**Status:** ✅ Completata  
**Streak:** 🔥 54 giorni consecutivi  
**Prossimi passi:** CSS Grid e adattamento al nuovo ritmo lavoro + studio