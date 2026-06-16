# Wolfsknigge Website — Claude Code Instructions

## Projekt
Mobile Hundeschule, Schwerpunkt Problemverhalten (Aggression, Angst, Stress).
Einzugsgebiet 35km um 24796 Bredenbek (Kiel, Rendsburg, Neumünster, Eckernförde).
Ziel der Site: Vertrauen → Expertise → Kontaktaufnahme.
Hauptzielgruppe öffnet die Seite **mobil**, oft unterwegs.

## Stack
<!-- TODO: ergänzen sobald entschieden -->
- Framework: …
- Styling: …
- Hosting: …
- Domain: wolfsknigge.de

---

## Arbeitsweise

### Suche zuerst, lies dann
- **`Grep`** für Inhalt, **`Glob`** für Dateinamen — immer zuerst.
- **`Read`** mit `offset`/`limit` sobald Datei > ~200 Zeilen. Keine kompletten 2000-Zeilen-Stylesheets dumpen.
- **`Edit`** statt Datei neu schreiben. Auch bei größeren Änderungen: chirurgisch.
- **`Bash`** nur wenn die nativen Tools nicht passen (Build, Git-Status etc.) — nicht für `cat`/`grep`/`find`.

### Output
- Nur den geänderten Block + 1 Satz wo er hingehört. Keine Erklärung außer auf Nachfrage.
- Keine „Hier ist die komplette Datei mit deiner Änderung"-Antworten.
- Kein Pre-/Postamble, kein „Lass mich wissen, wenn…", keine Zusammenfassung der Änderung.

### Scope
- Mach exakt das, was gefragt ist. Nichts dazudichten.
- Keine ungefragten Refactorings, keine „Bonus-Fixes", keine Tests/Kommentare ohne Auftrag.
- Wenn dir nebenbei was auffällt: ein Satz, kein Side-Quest.
- Bei fehlendem Kontext: nach Snippet fragen, nicht eigenständig durchs Repo wandern.

---

## Code-Standards

### HTML
- Semantisch: `<main>`, `<article>`, `<section>`, `<nav>`, saubere Heading-Hierarchie (genau ein `<h1>` pro Seite).
- A11y: aussagekräftige `alt`-Texte, sichtbarer Fokus, Tastaturnavigation funktioniert. ARIA nur wo nötig.
- `<html lang="de">`.

### CSS
- Modern: Grid, Flexbox, `clamp()`, Custom Properties, `:has()` wo sinnvoll.
- **Mobile-first.** Breakpoints nach Inhalt, nicht nach Geräten.
- Keine Utility-Frameworks im Custom-Build außer ich frage. Lesbares CSS schlägt cleveres CSS.
- Keine externen Font-CDNs (DSGVO) — self-host oder System-Fonts.

### JS
- So wenig wie möglich. Vanilla für statische Inhalte.
- Keine Library für ein 20-Zeilen-Problem.
- Progressive Enhancement: Basis-Inhalte funktionieren ohne JS.

### Performance (mobile Kunden auf dem Hundeplatz!)
- Bilder: AVIF/WebP, `loading="lazy"` außer above-the-fold, `width`/`height` gesetzt.
- Lighthouse Performance ≥ 90 mobile = Latte.
- Kein Render-Blocking im `<head>`. Kritisches CSS inline, Rest defer.

### DSGVO (deutsche Business-Site, nicht verhandelbar)
- **Keine** Google Fonts/Maps/Analytics/reCAPTCHA via Drittanbieter-CDN ohne Consent.
- YouTube/Vimeo/Instagram-Embeds nur mit Consent-Wrapper.
- Impressum + Datenschutzerklärung sind Pflicht-Routes, im Footer verlinkt.
- Externe Skripte/Pixel: erst fragen.

### Lokale SEO
- `schema.org/LocalBusiness` JSON-LD mit Adresse, `areaServed`, `geo`, Öffnungszeiten.
- Pro Seite: eindeutiger `<title>`, Meta-Description, kanonische URL.
- Lokale Keywords im Content: Kiel, Rendsburg, Neumünster, Eckernförde, Bredenbek, Schleswig-Holstein.
- Open Graph + Twitter Card für Facebook/Instagram-Sharing.

---

## Ohne explizite Freigabe NICHT
- `npm install` / neue Dependencies hinzufügen
- `git commit`, `git push`, Branches anlegen
- Dateien löschen oder umbenennen
- Build/Deploy ausführen
- Bestehende Configs (`package.json`, `vite.config.*`, `astro.config.*` etc.) umstrukturieren
- Auf externe APIs/Services neu zugreifen
