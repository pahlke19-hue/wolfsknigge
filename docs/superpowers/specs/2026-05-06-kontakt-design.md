# Kontaktseite – Design Spec
**Datum:** 2026-05-06  
**Status:** Freigegeben

---

## Ziel
Neue `/kontakt`-Seite im gleichen Designsystem wie `einzelstunde.astro`. Ersetzt die bisherige Hostinger-Baukasten-Seite. Formular-Backend wird zunächst nicht implementiert (statisches HTML).

---

## Layout-Entscheidungen

- **Hero-Stil:** Option A – Hintergrundbild (`rene-hero.webp`) mit Gradient-Overlays
- **Seitenstruktur:** Split Layout B – Hero oben, darunter geteilte Sektion (Kontaktinfos links / Formular rechts)
- **Keine Stat-Bar** im Hero (bewusst entfernt – kein Spam der Nutzer mit Zahlen)

---

## Sektionen

### 1. Hero (`min-height: 100svh`)
- Hintergrundbild: `public/images/rene-hero.webp`, `object-position: center 30%`
- Gradient-Overlays: vertikal (unten dunkel → oben transparent) + horizontal (links dunkel → rechts transparent)
- Oranger Radial-Glow-Blob (top-right)
- Pill-Badge: `"Kostenlos kennenlernen · Unverbindlich"` mit orangem Dot
- `<h1>`: `"Schreib mir."` + `<em>"Ich antworte."</em>` (kursiv, orange Gradient)
- Untertitel: `"Das erste Gespräch ist kostenlos und unverbindlich. Ich antworte innerhalb von 24 Stunden."`
- 3 Buttons:
  - Primary orange: `"Anfrage schreiben"` → scrollt zu `#formular`
  - Secondary: `"📞 0151 47736042"` → `tel:`-Link
  - WhatsApp (grün `#25d366`): offizielles WhatsApp-SVG-Icon + `"WhatsApp"` → `https://wa.me/4915147736042`

### 2. Split-Sektion (`id="formular"`)
**Links – Kontaktinfos:**
- Eyebrow: `"Direkt in Kontakt"`
- `<h2>`: `"Wie darf ich dich erreichen?"`
- Intro-Text
- 3 Kontakt-Karten:
  - Telefon: `0151 47736042` → `tel:`-Link
  - WhatsApp: offizielles SVG, grün → `wa.me`-Link
  - E-Mail: `kontakt@wolfsknigge.de` → `mailto:`-Link
- Öffnungszeiten-Block: Mo–Fr 9–18 Uhr, Sa 9–14 Uhr, So geschlossen

**Rechts – Formular-Karte:**
- Felder: Name*, Hundename*, Hunderasse*, Stadt*, E-Mail*, Telefon (optional), Interesse (Dropdown), Nachricht (Textarea)
- DSGVO-Checkbox + Link zur Datenschutzerklärung
- Submit-Button: orange, `"Anfrage senden →"`
- Formular-Aktion: vorerst kein Backend (`action="#"`)

---

## Technik

- Datei: `wolfsknigge/src/pages/kontakt.astro`
- Layout: `Layout.astro` (wie alle anderen Seiten)
- Animations: `.reveal` / `.reveal-scale` / `.reveal-delay-N` (IntersectionObserver aus Layout.astro)
- Hero-Reveal-JS: analog zu `einzelstunde.astro` (opacity/transform Animation beim Laden)
- WhatsApp-Icon: offizielles SVG (zwei Pfade, `fill="currentColor"`)
- Navigation: `/kontakt`-Route in `Header.astro` ergänzen

## SEO / Meta
- `<title>`: `"Kontakt – Wolfsknigg Hundeschule Bredenbek"`
- Meta-Description: lokale Keywords (Kiel, Rendsburg, Neumünster)
- Canonical URL: `https://wolfsknigge.de/kontakt`
