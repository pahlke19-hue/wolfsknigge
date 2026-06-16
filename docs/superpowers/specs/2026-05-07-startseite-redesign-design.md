# Design Spec: Startseite Redesign (Verkaufsfunnel)

**Datum:** 2026-05-07  
**Datei:** `src/pages/index.astro`  
**Scope:** Komplettes Redesign der index.astro mit Funnel-Struktur, angepasst an das Design-System der Grunderziehungsgruppe- und Über-mich-Seiten.

---

## Hintergrund & Ziel

Die aktuelle Startseite verwendet dieselbe Design-Sprache wie die neuen Unterseiten, folgt aber keiner Funnel-Logik. Besucher werden informiert, aber nicht emotional geführt.

Ziel: Startseite wird zur **verkaufsoptimierten Funnel-Seite** mit emotionalem Hook, Einwandbehandlung und klarem CTA-Pfad. Design-Sprache wird vollständig auf den Stand der zuletzt überarbeiteten Seiten gebracht.

**Positionierung:** Problemverhalten (Aggression, Angst, Stress) als primärer USP. Welpen/Grunderziehung sekundär, aber willkommen.

---

## Ton & Stil

- Umgangssprachlich, direkt, menschlich — kein Agentur-Deutsch
- Negativer Hook bevorzugt (Schmerz benennen, dann lösen)
- Keine m-Dashes (—), keine übermäßigen Bindestriche in Headlines
- Kurze Satzfragmente für Punch: "Leinenpöbeln. Jeden Tag." statt "Der Hund reagiert auf andere Hunde."
- SEO: H1 emotional/markig, SEO-Keyword lebt im `<title>`-Tag (bereits: "Mobiles Hundetraining in Kiel | WolfsKnigge")

---

## Design-System (von den neuen Seiten übernehmen)

Alle folgenden Elemente sind bereits in `grunderziehungsgruppe.astro` und `ueber-mich.astro` implementiert und werden identisch übernommen:

- **Hero:** Fullscreen, parallax, `hero-reveal`-Animationen, Badge mit Ping-Dot, Stats-Leiste unten
- **reveal / reveal-delay-{n}:** Scroll-animierte Einblendungen
- **Google-Logo SVG:** Exaktes SVG aus grunderziehungsgruppe.astro (4-Farb-Paths)
- **Testimonial-Marquee:** `animate-marquee` mit Edge-Fades
- **Big-Number-Cards:** Riesenzahl im Hintergrund (`text-white/5`), Card-Hover-Top-Border
- **Marquee-Strip orange:** `bg-orange` mit Keywords in `animate-marquee`
- **FAQ:** `<details>`/`<summary>` mit `group-open`-Styling
- **Prozess:** Orb-Nummern mit Glow, horizontale Connector-Line (desktop)
- **Farb-Tokens:** `bg-anthrazit`, `bg-anthrazit-2`, `bg-anthrazit-3`, `text-orange`, `text-gradient-orange`

---

## Sektionsstruktur (Funnel-Reihenfolge)

### 1. HERO
**Ziel:** Aufmerksamkeit fangen, Vertrauen signalisieren  
**Inhalt:** Bleibt strukturell wie bisher. Hintergrundbild `rene-hero.webp`, parallax, hero-reveal-Animationen.

H1 (3 Zeilen):
- Zeile 1: weiß — situativer Hook (z.B. "Dein Hund dreht durch?")
- Zeile 2: orange italic — Markenversprechen
- Zeile 3: weiß — Auflösung

Subheadline: Region + Kernbotschaft, kein m-Dash  
CTAs: "Kostenloses Kennenlernen" (primär, orange) + "Angebote ansehen" (sekundär)  
Stats: 150+ Teams · 5,0 Google · 24h Antwortzeit (unverändert)

---

### 2. BEKANNT AUS — Press-Strip
**Ziel:** Vertrauen sofort nach dem Hero signalisieren  
**Design:** Schmale Sektion (`py-10`), dunkler Hintergrund (`bg-anthrazit-2`), zentrierter Text "Bekannt aus" in `text-white/30 uppercase tracking-widest`, darunter drei Logo-Wrapper im Glasmorphism-Stil:

- `bg-white/4 backdrop-blur border border-white/8 rounded-2xl px-8 py-4`
- Logos in CSS `filter: grayscale(1) brightness(1.8)` — wirken gräulich/angepasst auf dunklem Grund
- Flex-Row mit Gap, auf Mobile gestackt oder kleiner skaliert

Logos (SVG oder `<img>` mit Alt-Text):
- RTL Nord
- Landeszeitung
- Kieler Nachrichten

---

### 3. PAIN POINTS — "Kommt dir das bekannt vor?"
**Ziel:** Besucher emotional abholen, Schmerz benennen  
**Design:** Grid 2×3 (mobile: 1 Spalte), Cards mit Icon + kurzer Headline + 1 Satz

6 Pain-Point-Karten (Problemverhalten primär, Normalkunden sekundär):
1. Leinenpöbeln — "Andere Hunde auftauchen = Stress für alle"
2. Kein Rückruf — "Er kommt. Aber nur wenn er Lust hat."
3. Angst & Panik — "Böller, Gewitter, Fremde — für ihn ein Alptraum"
4. Stress in der Stadt — "Radfahrer, Kinder, Kinderwagen — alles zu viel"
5. Basics funktionieren nicht — "Sitz klappt zu Hause. Draußen: komplettes Chaos."
6. Überfordert als Ersthundebesitzer — "Niemand hat dir erklärt, wie das wirklich geht."

Section-Headline: "Kommt dir das bekannt vor?" (kein m-Dash)  
Abschluss der Sektion: kleiner CTA-Text "Du bist nicht allein damit. Und du musst das nicht alleine lösen." + Link zum Kontakt.

---

### 4. BIG STATEMENT
**Ziel:** Empathie + Positionierung mobilesTraining  
**Design:** Zentriert, dunkler Hintergrund, noise-Textur, radial-gradient orange glow

Headline (2-zeilig):
- Zeile 1: weiß — provokante These
- Zeile 2: orange — Auflösung

Copy: max. 2 Sätze, erklären warum mobil.

---

### 5. VERGLEICH — Hundeplatz vs. Mobil
**Ziel:** Unique Selling Point rational begründen  
**Design:** 2-Spalten-Grid mit ✗ links (Hundeplatz) und ✓ rechts (Mobil) — unverändert aus aktueller Implementierung.

---

### 6. FEATURES — "Sechs Gründe, warum WolfsKnigge funktioniert"
**Ziel:** USPs listenförmig verankern  
**Design:** 3×2 Grid, jede Card erhält das **Big-Number-Pattern** aus den neuen Seiten: große halbtransparente Zahl (01–06) im Hintergrund (`text-white/5 select-none`), Card-Hover mit Top-Border-Gradient.

---

### 7. SOCIAL PROOF STRIP
**Ziel:** Vertrauen durch echte Kundenstimmen  
**Design:** Wie auf Grunderziehungsgruppe-Seite — **mit Google-Logo SVG** (4-Farb-Paths), 5 Sterne gelb, "5,0 auf Google · Über 150 betreute Teams", darunter der Testimonial-Marquee.

---

### 8. TRAINER INTRO
**Ziel:** Persönliche Verbindung herstellen  
**Design:** 2-Spalten (Bild links, Text rechts), Bild mit Orange-Glow, Float-Card "150+".  
Tone: "Ich war selbst mal da." — persönlich, nicht werbend.

---

### 9. PROZESS — 4 Schritte
**Ziel:** Weg zum Kunden klar und einfach machen  
**Design:** Orb-Nummern mit Glow, horizontale Connector-Line (desktop only) — unverändert.

---

### 10. ANGEBOTE
**Ziel:** Konversion zu passenden Angebot-Seiten  
**Design:** 4-Spalten-Grid mit Bild-Cards, Price-Badge, hover-scale — unverändert.

---

### 11. STANDORTE
**Ziel:** Lokale Relevanz + SEO-interne Verlinkung  
**Design:** 4-Spalten-Grid mit Bild + Stadtname + kurzer Beschreibung — unverändert.

---

### 12. FAQ — Häufige Einwände
**Ziel:** Letzte Kaufhürden ausräumen  
**Design:** `<details>`/`<summary>` Accordion, identisch zu Grunderziehungsgruppe-Seite

5–6 Fragen, z.B.:
- "Ist mein Hund wirklich 'ein Fall' für einen Hundetrainer?"
- "Ich habe schon eine Hundeschule ausprobiert — warum sollte das hier anders sein?"
- "Was kostet ein erstes Gespräch?"
- "Mein Hund ist sehr aggressiv — geht das überhaupt?"
- "Ich wohne nicht direkt in Kiel — kommt ihr auch zu mir?"
- "Wie lange dauert es, bis man Ergebnisse sieht?"

---

### 13. MARQUEE-STRIP orange
**Ziel:** Energie + Markenstimme vor dem finalen CTA  
**Design:** `bg-orange`, `animate-marquee`, Keywords in Caps — wie auf den neuen Seiten.

Keywords: Mobil · Alltagsnah · Problemverhalten · Kein Schema F · 150+ Teams · Gewaltfrei · Kiel · Rendsburg · Eckernförde · Neumünster

---

### 14. FINAL CTA
**Ziel:** Letzte Conversion-Chance  
**Design:** Großes Heading, starker radial-gradient, `noise`-Textur, zwei Buttons (Kontakt primär, Telefon sekundär) — identisch zu Grunderziehungsgruppe/Über-mich.

---

## Zusätzliche Änderung: Blog-Link im Nav

Die Blog-Sektion wird von der Startseite entfernt. Stattdessen erhält die Navigation einen "Blog"-Eintrag. Die Layout-Komponente (`src/layouts/Layout.astro`) muss um diesen Link erweitert werden.

---

## Was NICHT geändert wird

- `<title>`-Tag und Meta-Description (SEO bereits optimiert)
- Grundlegende CSS-Klassen und Design-Tokens
- Datennamen der Bilder
- Kontakt-URL (`https://wolfsknigge.de/kontakt`)
- Telefonnummer

---

## Abgrenzung

Nur `src/pages/index.astro` und `src/layouts/Layout.astro` (Nav) werden verändert. Keine anderen Seiten, keine neuen Abhängigkeiten, kein neues CSS.
