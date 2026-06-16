# Design-Spec: Über-Mich & Grunderziehungsgruppe Redesign
**Datum:** 2026-05-06  
**Scope:** Redesign von `ueber-mich.astro` und `grunderziehungsgruppe.astro` im Stil der `einzelstunde.astro`  
**Status:** Freigegeben, bereit zur Implementierung

---

## Ziele

- Beide Seiten visuell auf den dark-Style der Einzelstunde-Seite bringen (anthrazit-Töne, orange Akzente, Parallax-Hero, reveal-Animationen, Marquee-Strips)
- **Über mich:** Vertrauen aufbauen → soft Bridge zu Angeboten. Kein primärer Hard-Sell.
- **Grunderziehungsgruppe:** Vision-Frame (positives Zielbild) → Differenzierung → Format → Preis → CTA Anmeldung/Anfrage

---

## Globale Design-Prinzipien (von Einzelstunde übernommen)

- Durchgehend dark: `bg-anthrazit`, `bg-anthrazit-2`, `bg-anthrazit-3`
- Akzentfarbe: `text-orange`, `bg-orange`, `text-gradient-orange`
- Hero: `min-height: 100svh`, BG-Bild mit Parallax-Scroll, Gradient-Overlays von unten + links
- Tag-Pill: pulsing dot + Label, `bg-white/8 backdrop-blur border-white/12`
- Headings: `font-display font-extrabold tracking-[-0.04em]`, `clamp(3rem, 9vw, 7.5rem)` im Hero
- Reveal-Animationen: `hero-reveal` (Hero), `reveal` + `reveal-delay-1/2/3` (Sektionen)
- Marquee-Strip: orange BG, `animate-marquee`, uppercase tracking-widest
- Testimonial-Marquee: `animate-marquee`, Cards `bg-white/4 border-white/6`
- Social Proof Header: 5 Sterne (gelb) + Google-Logo (SVG, klein) + Text
- CTA-Buttons: primär `bg-orange rounded-full shine`-Klasse, sekundär `bg-white/6 backdrop-blur border-white/15`
- Kein `bg-white`, kein `bg-gray-50`, kein `text-gray-*` auf den überarbeiteten Seiten
- Namen ("René") sparsam einsetzen — nicht in jedem Abschnitt

---

## Seite 1: `ueber-mich.astro`

### Sektionsreihenfolge (freigegeben)

1. Hero
2. Big Statement
3. Lehrmeister Elix & Suka
4. Erfahrung mit Problemhunden
5. Marquee Strip
6. Ausbildung & Qualifikation
7. Philosophie / 4 Quadranten
8. Warum WolfsKnigge
9. NEU: Soft-Bridge Angebote
10. Final CTA

---

### 1. Hero

- **BG-Bild:** `/images/hundeschule_in_sehestedt.webp`
- **Parallax:** identisch Einzelstunde (`scale(1.12) translateY(...)` on scroll)
- **Overlays:** `bg-gradient-to-t from-[#0a0a0b] via-[rgba(10,10,11,0.65)]` + `bg-gradient-to-r from-[rgba(10,10,11,0.9)]`
- **Tag-Pill:** `● Dein Trainer · Kiel · Rendsburg · Neumünster · Eckernförde`
- **H1** (zweizeilig, `clamp(3rem,9vw,7.5rem)`):
  - Zeile 1 (weiß): „Hi, ich bin"
  - Zeile 2 (orange-gradient, italic): „René."
- **Subline:** „Hundetrainer für Kiel, Rendsburg, Neumünster & Eckernförde. Spezialisiert auf Problemverhalten — fair, fundiert, gewaltfrei."
- **CTAs:** `Kennenlerngespräch` (orange, href Kontakt) + `Meine Geschichte` (Glass, href `#geschichte`)
- **Stat-Strip** (3 Werte, Trennstriche):
  - `1,5J` · Ausbildung
  - `150+` · Teams
  - `§11` · Sachkunde
- **Hero-Reveal-Script:** identisch Einzelstunde

---

### 2. Big Statement

- `bg-anthrazit`, `noise`, radial orange blob
- Eyebrow: `MEIN ANTRIEB`
- H2: „Nicht durch Bücher gelernt. **Sondern durch das Leben.**"
- Sub: „Ich war selbst mal überfordert mit meinem Hund. Genau deshalb verstehe ich, was du gerade durchmachst — und genau deshalb verurteile ich niemanden."

---

### 3. Lehrmeister Elix & Suka

- `bg-anthrazit-2`, `id="geschichte"`
- Eyebrow: `MEINE GRÖSSTEN LEHRMEISTER`
- H2: „Zwei Hunde. **Unendlich viel** gelernt."
- Sub: unverändert
- **2 Cards** (`md:grid-cols-2`), `bg-anthrazit-3`, `rounded-3xl`, `overflow-hidden`:
  - Oben: Bild `aspect-ratio: 4/3`, `object-fit: cover`, abgerundet oben (`rounded-t-3xl`)
  - Unten: Text-Content wie bisher
  - **Elix-Card:** Bild `/images/elix_mit_maulkorb.webp`, hover-Border orange
  - **Suka-Card:** Bild `/images/suka_am_strand.webp`, hover-Border türkis
  - Wasserzeichen 01/02, Hover-Top-Bar Gradient, Tags „Der Überforderer" / „Die Spezialistin"
- Quote-Block darunter: unverändert

---

### 4. Erfahrung mit Problemhunden

- `bg-anthrazit` (war `bg-gray-50`)
- Split-Layout: Text links, Bild rechts
- **Bild:** `/images/rene_mit_tierschutzhund.webp`
- Eyebrow: `PRAXISERFAHRUNG`
- H2: „Mich schockt so schnell **nichts** mehr." (zweite Zeile `text-gradient-orange`)
- Text: `text-white/60`, `strong` → `text-white`, `em.text-orange`

---

### 5. Marquee Strip

- `bg-orange`, identisch Einzelstunde
- Wörter: „Fair · Fundiert · Individuell · Mobil · Gewaltfrei · Wissenschaftlich · Ehrlich · Alltagsnah"

---

### 6. Ausbildung & Qualifikation

- `bg-anthrazit-2` (war `bg-gray-50`)
- Eyebrow: `QUALIFIKATION & PHILOSOPHIE`
- H2: „Fair, fundiert **& individuell.**"
- Skills-Grid: `bg-anthrazit-3`, `text-white/60`, hover `text-orange`
- Detail-Box links: `bg-anthrazit-3 border-l-4 border-orange`
- Detail-Box rechts: `bg-anthrazit-3 border-l-4 border-tuerkis`
- Weiterbildungs-Einträge: `bg-anthrazit-4`
- Dozenten-Liste: `text-white/70`, check-icon orange

---

### 7. Philosophie / 4 Quadranten

- `bg-anthrazit` (war `bg-white`)
- Linker Akzent-Streifen entfällt (war `bg-white`-spezifisch)
- Eyebrow: `MEIN ANSATZ`
- H2: „Alle Möglichkeiten nutzen. **Kein Dogmatismus.**"
- Fließtext: `text-white/60`, `strong` → `text-white font-semibold`
- 4 Quadranten-Karten: `bg-anthrazit-3 border border-white/6`, hover `border-orange/30 bg-orange/5`
- Quadranten-Nummern: `text-orange font-display font-extrabold`

---

### 8. Warum WolfsKnigge

- `bg-anthrazit-2` (war bereits dark — minimale Anpassung)
- Inhalt unverändert (Wolf + Knigge, 2 Cards orange/türkis)

---

### 9. NEU: Soft-Bridge Angebote

- `bg-anthrazit-2`
- Eyebrow: `MEINE ANGEBOTE`
- H2: „Wo kann ich **für euch da sein**?"
- 3 klickbare Cards (`md:grid-cols-3`), `bg-anthrazit-3 rounded-3xl border border-white/4`:
  - Hover: orange Top-Border-Gradient (`opacity-0 → opacity-100`), `hover:-translate-y-1`
  - **Einzelstunde** → `/einzelstunde` — Icon, Titel, „1:1, mobil, dort wo's brennt", Pfeil-Link
  - **Grunderziehungsgruppe** → `/grunderziehungsgruppe` — „Kleine Gruppe, alltagsnah, max. 7 Teams", Pfeil-Link
  - **Anamnesegespräch** → `/anamnesegespraech` — „Noch unsicher? Erstgespräch, kostenlos", Pfeil-Link

---

### 10. Final CTA

- Identisch Einzelstunde: `bg-anthrazit noise`, radial glow, blob-float
- H2: „Bereit, etwas zu **verändern**?"
- Sub: „Das Kennenlerngespräch ist kostenlos. Antwort innerhalb von 24 Stunden."
- Buttons: `Jetzt Kennenlernen` (orange) + `📞 0151 47736042` (Glass)

---

## Seite 2: `grunderziehungsgruppe.astro`

### Sektionsreihenfolge (freigegeben)

1. Hero
2. Big Statement / Vision
3. Eckdaten-Strip
4. Social Proof Marquee
5. Trainingsinhalte
6. Marquee Strip
7. Differenzierung
8. Trainer-Split
9. Einstieg / 3 Steps
10. FAQ (Akkordeon)
11. Preis
12. Final CTA

---

### 1. Hero

- **BG-Bild:** `/images/grunderziehungsgruppe.webp`
- **Parallax:** identisch Einzelstunde
- **Tag-Pill:** `● AlltagsKnigge · Kiel · Rendsburg`
- **H1** (dreizeilig, `clamp(3rem,9vw,7.5rem)`):
  - Zeile 1 (weiß): „Entspannter Alltag."
  - Zeile 2 (orange-gradient, italic): „Echtes Team."
  - Zeile 3 (weiß): „Kleine Gruppe."
- **Subline:** „Max. 7 Teams. Alltagsnahe Orte. Ein Spezialist, der wirklich hinschaut."
- **CTAs:** `Jetzt anmelden` (orange, href Kontakt) + `Wie läuft's ab?` (Glass, href `#einstieg`)
- **Stat-Strip:**
  - `Max. 7` · Teams
  - `60 Min` · Pro Einheit
  - `5,0 ★` · Google

---

### 2. Big Statement / Vision

- `bg-anthrazit`, `noise`, radial orange blob
- Eyebrow: `DAS ZIEL`
- H2: „Spaziergang ohne Stress. **Alltag, der funktioniert.**"
- Sub: „Wenn dein Hund entspannt neben dir läuft, im Café ruhig liegt und auf Begegnungen gelassen reagiert — das ist kein Glück. Das ist Training."

---

### 3. Eckdaten-Strip

- `bg-anthrazit-2`
- 4 Karten (`sm:grid-cols-2 lg:grid-cols-4`), `bg-anthrazit-3 rounded-[20px] border border-white/4`:
  - `Max. 7 Teams` · Gruppengröße
  - `60 Minuten` · Pro Einheit
  - `Einstieg jederzeit` · Fortlaufend, keine Blöcke
  - `Kiel & Rendsburg` · Wechselnde Alltagsorte
- Hinweis darunter (`text-white/40 text-sm text-center`): „Kieler Gruppe in Kiel · Rendsburger Gruppe rund um Rendsburg"

---

### 4. Social Proof Marquee

- Identisch Einzelstunde (`bg-anthrazit-2 border-y border-white/4`)
- Social Proof Header:
  - Google-Logo SVG (klein, original Farben oder weiß/40)
  - 5 Sterne (gelb)
  - Text: „5,0 auf Google · Über 150 betreute Teams"
- Marquee-Cards: gruppenspezifische Stimmen (Platzhalter bis geliefert), fallback generische Testimonials

---

### 5. Trainingsinhalte

- `bg-anthrazit-2`
- Eyebrow: `TRAININGSINHALTE`
- H2: „Womit wir **arbeiten.**"
- Sub: „Das sind die Schwerpunkte — deine Situation bestimmt, was wir vertiefen."
- 8 Cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`), identisches Card-Design wie Einzelstunde:
  - 🐾 Zuverlässige Basics
  - 📣 Sicherer Rückruf
  - 🐕 Leinenführigkeit
  - 🧠 Impulskontrolle
  - 💬 Klare Kommunikation
  - 🌆 Alltagstauglichkeit
  - 🤝 Begegnungstraining
  - 🎯 Bindung & Vertrauen

---

### 6. Marquee Strip

- `bg-orange`, identisch Einzelstunde
- Wörter: „Klein · Alltagsnah · Spezialist · Individuell · Kein Schema F · Max. 7 Teams · Gewaltfrei · Rendsburg & Kiel"

---

### 7. Differenzierung

- `bg-anthrazit`
- Eyebrow: `WARUM WOLFSKNIGGE?`
- H2: „Was uns von anderen **Gruppen unterscheidet.**"
- 4 Cards (`md:grid-cols-2`), `bg-anthrazit-3 rounded-3xl`, breites Layout (wie Elix/Suka):
  - `01` · **Kleine Gruppe** — „Max. 7 Teams. Jeder bekommt echte Aufmerksamkeit — nicht nur einen Platz in der Reihe."
  - `02` · **Echte Alltagsorte** — „Kein isolierter Hundeplatz. Training dort, wo euer Alltag stattfindet — Straße, Park, Stadt."
  - `03` · **Spezialist statt Generalist** — „Auf Problemverhalten spezialisiert. Das merkst du — auch wenn dein Hund 'nur' Grunderziehung braucht."
  - `04` · **Kein starres Programm** — „Die Gruppe bestimmt das Tempo. Kein Schema F, das alle gleich behandelt."

---

### 8. Trainer-Split

- `bg-anthrazit-2`, identisch Einzelstunde-Trainer-Split
- **Bild links:** `/images/rene_mit_tierschutzhund.webp`, `aspect-ratio: 4/5`
- **Badge:** `150+ Teams erfolgreich begleitet`
- **Eyebrow:** `DEIN TRAINER`
- **H2:** „Spezialisiert auf das, **was andere übersehen.**"
- **Text:** 2–3 Sätze, Schwerpunkt Problemverhalten, fair & gewaltfrei, kein Namens-Spam
- **Link:** „Mehr erfahren →" `/ueber-mich`

---

### 9. Einstieg / 3 Steps

- `bg-anthrazit`, `id="einstieg"`
- Eyebrow: `SO LÄUFT'S AB`
- H2: „In **drei Schritten** dabei."
- 3 Steps (`grid-cols-1 md:grid-cols-3`), Kreis mit Nummer, identisch Ablauf-Section Einzelstunde:
  - `01` · **Kurz telefonieren** — „Wir sprechen durch, was du dir vorstellst und was dein Hund mitbringt."
  - `02` · **Empfehlung** — „Direkt in die Gruppe — oder erst eine Einzelstunde zum Kennenlernen. Gemeinsam entschieden."
  - `03` · **Einfach mitlaufen** — „Einstieg jederzeit. Kein Block, keine Mindestlaufzeit."
- Verbindungslinie zwischen Steps (desktop only), identisch Einzelstunde

---

### 10. FAQ

- `bg-anthrazit-2`
- Eyebrow: `HÄUFIGE FRAGEN`
- H2: „Alles, was du **wissen willst.**"
- Akkordeon (Vanilla JS, kein Framework), 5 Einträge:
  1. „Mein Hund ist nicht ganz verträglich — passt er überhaupt in eine Gruppe?"
  2. „Ich habe keine Erfahrung. Bin ich hier richtig?"
  3. „Wann lohnt sich die Gruppe, wann eine Einzelstunde?"
  4. „Ich war schon in einer anderen Hundeschule — was ist hier anders?"
  5. „Muss ich vorher Einzelstunden nehmen, oder kann ich direkt einsteigen?"
- Style: `bg-anthrazit-3 border border-white/6 rounded-2xl`, expand → orange Akzent (`border-orange/30`)
- Progressive Enhancement: ohne JS zugänglich via `<details>`/`<summary>`

---

### 11. Preis

- `bg-anthrazit`, identisch Einzelstunde-Preisbox
- Eyebrow: `INVESTITION`
- H2: „Transparent. **Kein Kleingedrucktes.**"
- 2-spaltige Box (`bg-anthrazit-3 rounded-[24px] border border-white/6`):
  - **Links:** Zwei Preis-Optionen:
    - Einzeltermin: `XX €` (Platzhalter — Betrag vom Nutzer noch ausstehend)
    - 10er-Karte: `XX €` + Badge „10 % gespart"
  - **Rechts:** Feature-Liste:
    - 60 Minuten Training
    - Alltagsnahe Orte in Kiel & Rendsburg
    - Max. 7 Teams pro Einheit
    - Einstieg jederzeit
    - Fahrtkosten nach Absprache
- Link unten: „Alle Preise ansehen →" `/preise`

---

### 12. Final CTA

- Identisch Einzelstunde: `bg-anthrazit noise`, radial glow, blob-float
- H2: „Bereit für einen **entspannten Alltag**?"
- Sub: „Kurzer Anruf genügt. Wir schauen gemeinsam, was passt."
- Buttons: `Jetzt anmelden` (orange, href Kontakt) + `📞 0151 47736042` (Glass)

---

## Offene Punkte (vor Implementierung klären)

- [ ] **Preise Grunderziehungsgruppe:** Einzeltermin XX € / 10er-Karte XX € (10 % Rabatt) — Beträge vom Nutzer ausstehend
- [ ] **Gruppenspezifische Testimonials:** Texte vom Nutzer ausstehend, generische als Platzhalter
- [ ] **Google-Logo SVG:** Offizielles Google-Logo oder stilisiertes „G" in Originalfarben — Nutzerpräferenz klären bei Implementierung
- [ ] **FAQ-Antworten:** Texte für die 5 Akkordeon-Antworten — vom Nutzer oder durch Trainer zu formulieren

---

## Nicht im Scope

- Backend-Änderungen
- Neue Routen oder Konfigurationsänderungen
- Deployment
- Andere Seiten als `ueber-mich.astro` und `grunderziehungsgruppe.astro`
