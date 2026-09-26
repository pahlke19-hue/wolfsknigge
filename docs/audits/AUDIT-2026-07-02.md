# Website-Audit wolfsknigge.de

**Stand:** 02.07.2026 · **Methode:** 14 Prüf-Dimensionen (UX/Conversion, Technik, SEO, Recht, Content), jede Aussage gegen Quellcode **und** Live-Site verifiziert (curl, Build-Analyse). Keine Code-Änderungen in diesem Durchgang.

---

## Executive Summary

Die Site ist **deutlich besser als der Durchschnitt der Branche** — sauberes technisches Fundament (statischer Astro-Build ohne JS-Ballast, self-hosted Fonts, korrektes Consent-Gating, vollständiges Impressum inkl. §11-TierSchG-Erlaubnis), starke emotionale Texte und echte Preistransparenz. Was sie von einem 50.000-€-Agenturprojekt trennt, sind nicht fehlende Features, sondern **Konsistenz und letzte Meter**: widersprüchliche Angaben (Anfahrtskosten, Antwortzeit, Firmenname), ein Conversion-Pfad, der an drei Stellen bricht (externer Buchungs-Handoff unerklärt, Pakete ohne CTA, Pillar-Seite unverlinkt), und ein Dutzend Detailfehler, die einzeln klein, in Summe aber sichtbar sind.

**Gesamtnote: 2-** (gut, mit klaren, größtenteils schnell behebbaren Abzügen)

| Bereich | Note | Kernaussage |
|---|---|---|
| UX/Conversion (Persona-Durchlauf) | 2- | Emotional stark, aber Haupt-Problem-Pfad (Problemhund) ist verwaist |
| UX/Conversion (Vertrauen & Buchung) | 2 | Preistransparenz exzellent; Konsistenz-Risse + unerklärter 123Hundeschule-Handoff |
| Architektur & Code-Qualität | 2 | Build sauber, JS/CSS zentralisiert; Typprüfung fehlt, Seiten-Skelette 8× kopiert |
| Performance & Core Web Vitals | 2- | JS exzellent (0 Bundles); 550–700-KB-Hero-Bilder ohne srcset auf Unterseiten |
| Accessibility | 3+ | Fundament stark (Alt-Texte 100 %, Fokus-Stile); ohne JS ist die Seite leer, Haupt-CTA verfehlt WCAG-Kontrast |
| Sicherheit & Konfiguration | 3+ | Keine Secrets, Honeypot, Consent-Gating korrekt; Security-Header fehlen, Widerruf wirkungslos |
| Live-Betrieb (Header, Caching, Redirects) | 3+ | Redirect-Basics sauber; Asset-Caching nicht konfiguriert, netlify.app-Duplikat erreichbar |
| SEO — Indexierung & Crawling | 2- | Basics vollständig; ~100 interne Links laufen durch unnötige 301-Hops |
| SEO — On-Page | 2- | 100 % unique Titles/Descriptions; Überlängen schneiden den stärksten USP ab |
| SEO — Strukturierte Daten | 3+ | FAQ/Breadcrumb/BlogPosting sauber; AggregateRating verstößt gegen Google-Richtlinien |
| Local SEO | 3 | POIs & GBP solide; 3 von 4 Stadtseiten ~90 % Template, kein Review-Funnel |
| Open Graph & Social | 3 | Basis-Set komplett; og:image ist 500×750-Hochformat-WebP (WhatsApp-untauglich) |
| Recht (DDG, DSGVO, TierSchG, AGB) | 2- | Impressum vorbildlich; OS-Link seit 07/2025 obsolet, Widerrufsformular fehlt |
| Content & Marke | 2- | Texte authentisch und spezifisch; Preis-Widerspruch Website ↔ AGB, Blog im Burst-Modus |

---

## 🔴 Kritische Fehler (sofort beheben)

### K1 — Kursstart „Sonntag, 05.07." ist in 3 Tagen abgelaufen
[src/pages/welpengruppe.astro:5](src/pages/welpengruppe.astro#L5) (angezeigt in Z. 168 + 592). Ab dem 06.07. wirbt die frisch SEO-optimierte Welpengruppen-Seite mit einem vergangenen Termin — der schnellste Weg, Vertrauen zu verspielen.
**Fix:** Termin-Array mit `find(k => new Date(k.iso) > Date.now())` statt hartkodiertem String, oder Formulierung „Einstieg jederzeit — nächster Start auf Anfrage".

### K2 — Anfahrtskosten: Website widerspricht den eigenen AGB
[src/pages/preise.astro:155](src/pages/preise.astro#L155) + Z. 492: „erste 25 km frei, danach **25 ct/km** (nur über 25 km hinaus)" vs. [src/pages/agb.astro](src/pages/agb.astro) Ziffer 2.3: „**0,30 €** pro gefahrenem **Gesamtkilometer (Hin- und Rückfahrt)**, Freigrenze 50 Gesamt-km". Preis **und** Berechnungsmodus widersprechen sich — Irreführungsrisiko (PAngV) und Konfliktstoff im Streitfall. Zusätzlich wird die Logik an 4 weiteren Stellen jeweils anders erklärt (anamnesegesprach.astro:476 „nach Absprache", kontakt.astro:82-84 „Pauschale", CityPage.astro:454 „Kerngebiet").
**Fix:** Eine Version festlegen, AGB + alle 6 Website-Stellen angleichen.

### K3 — AggregateRating verstößt gegen Googles Review-Snippet-Richtlinien
[src/layouts/Layout.astro:156-160](src/layouts/Layout.astro#L156-L160): Selbst ausgezeichnetes 5.0/14-Rating aus Google-Rezensionen, sitewide auf allen Seiten. Beides (self-serving LocalBusiness-Rating + fremdgesourcte Bewertungen) ist explizit untersagt — Risiko: Manual Action / Verlust aller Rich Results.
**Fix:** Block ersatzlos entfernen. Der Social Proof steht ohnehin sichtbar im Content.

---

## Befunde nach Bereich

### 1. UX & Conversion

**Stärken:** MobileBar mit 1-Tap-WhatsApp/Anruf, emotionale H1s in Du-Form, vollständige Preistransparenz, Einwandbehandlung („Was, wenn es nicht klappt?"), kostenloses Kennenlerngespräch als durchgängiges Angebot.

| # | Schwere | Befund | Ort | Fix |
|---|---|---|---|---|
| U1 | Hoch | Problemhund-Pillar verwaist: Hero-Chips und Pain-Point-Karten sind tote `<span>`/`<div>`, /problemhund/ hat sitewide nur 1 internen Link | index.astro:144-155, 283-290 | Chips + Karten zu Links machen, Nav-Eintrag „Problemverhalten" |
| U2 | Hoch | Preisseite: 3 von 4 Paketen + alle Intensivkurse ohne CTA | preise.astro:326-344, 454-474 | „Paket anfragen"-Button → /kontakt/ je Karte |
| U3 | Hoch | Header- & Mobile-Menü-Haupt-CTA „Jetzt buchen" führt **extern** zu 123Hundeschule; kein /kontakt-Eintrag im Menü | Header.astro:76-78, 131-133 | Primär-CTA „Kostenloses Kennenlernen" → /kontakt/, extern als Sekundär |
| U4 | Hoch | Buchungs-Handoff zu 123Hundeschule an 14 Stellen unerklärt (Vertrauensbruch im Abschlussmoment) | u. a. preise.astro:192, welpengruppe.astro:127 | Micro-Copy: „Buchung läuft sicher über unser Kursportal 123Hundeschule" |
| U5 | Hoch | Hero-CTA liegt mobil rechnerisch unter dem Fold (Stapelhöhe >900 px bei ~660–750 px Viewport) | index.astro (Hero) | pt-24, Subline kürzen, Stats-Zeile mobil ausblenden |
| U6 | Mittel | Antwortzeit widersprüchlich: „<2h" (Stadtseiten) vs. „<24h" (Rest) | CityPage.astro:196-199 | Auf „<24h" harmonisieren |
| U7 | Mittel | Welpen-Preis-Bruch: „ab 25 €" (Start/Preise) vs. 185 € auf der Zielseite | index.astro:25, welpengruppe.astro:536 | „185 € / 8 Termine" durchgängig |
| U8 | Mittel | Pflicht-Select im Kontaktformular verlangt Produktentscheidung mit Preisen; „Kostenloses Kennenlernen" fehlt als erste Option | kontakt.astro:174-189 | Optionen nach Problem benennen, Kennenlernen zuerst |
| U9 | Mittel | DSGVO-Pflicht-Checkbox rechtlich unnötig (Art. 6 I lit. b genügt), kostet mobile Abschlussrate | kontakt.astro:203-214 | Passiver Hinweistext statt Checkbox |
| U10 | Mittel | Kein Bild von René auf Preis- und Kontaktseite | preise.astro, kontakt.astro | Kleines Portrait ergänzen |
| U11 | Niedrig | Hero-Chips mobil ~8–10 px unlesbar | index.astro:144, CityPage.astro:147-159 | flex-wrap + feste 13 px |
| U12 | Niedrig | Danke-Seite ist Sackgasse (nur „Zurück zur Startseite") | danke.astro:26-30 | „Was jetzt passiert"-Block + WhatsApp |
| U13 | Niedrig | Fixe MobileBar verdeckt Footer-Ende (~80 px), Impressum/Datenschutz teils abgedeckt | Footer.astro:87-95 | pb-[calc(88px+env(safe-area-inset-bottom))] lg:pb-0 |
| U14 | Niedrig | Bis zu 3 gleichrangige Final-CTAs nebeneinander | preise.astro:604-625 u. a. | 1 Primär + 1 Sekundär |
| U15 | Niedrig | Methodik-Botschaft inkonsistent: „gewaltfrei" vs. „alle vier Quadranten" | index.astro:16 vs. hundeschule-kiel.astro:16 | Eine Formulierung wählen |

### 2. Technik — Architektur & Code-Qualität

**Stärken:** Build fehlerfrei (28 Seiten, 5,3 s), JS zentralisiert (nur Layout + CityPage), CSS-Animationen zentral, typisierte Props, Zod-Content-Schema, FAQ single-source (Array speist Markup + JSON-LD), Stadtseiten sauber abstrahiert (je 39 Zeilen).

| # | Schwere | Befund | Fix |
|---|---|---|---|
| A1 | Mittel | `@astrojs/check` + `typescript` nicht installiert — der in CLAUDE.md dokumentierte Standard-Check `npx astro check` läuft ins Leere; Typprüfung findet nie statt | `npm i -D @astrojs/check typescript` |
| A2 | Mittel | Service-Seiten-Skelette 8× zeichengleich kopiert (FAQ-Accordion, Section-Header) — je 540–630 Zeilen pro Seite, Änderungen müssen 8× repliziert werden | `FaqSection.astro` / `ServiceLayout.astro` extrahieren |
| A3 | Niedrig | Copyright-Jahr wird beim Build eingefroren (Footer.astro:7) | Akzeptabel; bei Jahreswechsel Rebuild |
| A4 | Niedrig | Flache Blog-URLs ([slug].astro auf Root): künftiger Post-Slug kann mit Seitenroute kollidieren | Bei neuen Posts beachten |

### 3. Technik — Performance & Core Web Vitals

**Stärken:** 0 externe JS-Bundles (!), 2 gezielt preloadete self-hosted Fonts, Startseiten-Hero korrekt optimiert (196 KB, fetchpriority, dimensions), Tracking erst nach Consent, CLS durch aspect-ratio-Container weitgehend abgefangen.

| # | Schwere | Befund | Fix |
|---|---|---|---|
| P1 | Hoch | LCP-Killer auf Unterseiten: Hero-Bilder mit fetchpriority=high sind 552–700 KB (rendsburg_kanal 700 KB, gruppenstunde 552 KB, nok 648 KB) — für die mobile Zielgruppe im Funkloch auf dem Hundeplatz das größte Perf-Problem | Auf <150 KB fürs Mobile-Viewport bringen (Resize + Kompression) |
| P2 | Mittel | srcset nur auf index.html (1 von 28 Seiten); Bilder in public/ statt astro:assets → keine Responsive-Varianten | Mittelfristig auf `<Image>`/astro:assets migrieren |
| P3 | Mittel | Asset-Caching live nicht konfiguriert: auch fingerprinted /_astro/*.css und alle Bilder liefern `max-age=0,must-revalidate` — jeder Wiederbesuch revalidiert alles (curl-verifiziert) | `[[headers]]` in netlify.toml: /_astro/* → `max-age=31536000, immutable`; /images/*, /fonts/* → lange max-age |
| P4 | Niedrig | Kein Astro-Prefetch (`prefetch: true`) — interne Navigation könnte quasi-instant sein | Eine Zeile in astro.config.mjs |
| P5 | Niedrig | logo.svg ohne width/height (kleiner CLS-Beitrag auf jeder Seite) | Dimensionen setzen |

### 4. Technik — Accessibility

**Stärken:** 0 Bilder ohne alt (sitewide geprüft), exakt 1 H1/Seite, globale :focus-visible-Stile, html lang="de", native details/summary-Accordions, gepflegtes aria-expanded, vollständige Formular-Labels, Parallax reduced-motion-gegated.

| # | Schwere | Befund | Fix |
|---|---|---|---|
| Y1 | Hoch | Ohne JS ist die Seite quasi leer: `.reveal { opacity: 0 }` gilt unbedingt (global.css:157), sichtbar wird Content nur per IntersectionObserver. Verstößt gegen die eigene Progressive-Enhancement-Regel | `<noscript><style>.reveal,.reveal-scale{opacity:1;transform:none}</style></noscript>` in Layout.astro |
| Y2 | Mittel | Haupt-Conversion-CTA verfehlt WCAG-Kontrast: Weiß auf Orange #f97316 ≈ 2,8:1 (nötig 4,5:1) — MobileBar.astro:26 + alle bg-orange/text-white-Buttons | Anthrazit auf Orange (~8:1) oder dunkleres Orange |
| Y3 | Mittel | ~33 Textstellen unter 4,5:1 (text-white/30–/45); Fließtext bei /55–/60 besteht knapp (~5,3:1) | Fließtext min. /60, Micro-Labels prüfen |
| Y4 | Niedrig | Kein Skip-Link („Zum Inhalt springen") | In Layout.astro ergänzen |
| Y5 | Niedrig | Reveal-Einblendungen (0,9 s translateY) laufen auch bei prefers-reduced-motion: reduce | Media-Query um .reveal-Transitions |

### 5. Technik — Sicherheit & Live-Konfiguration

**Stärken:** Keine Secrets im Repo, Honeypot im Formular, Consent Mode v2 default-denied, GTM/GA/Meta laden erst nach Klick, HSTS aktiv, http→https + www→non-www sauber, echtes 404, Draft-Handling korrekt (hunde-news liefert live 404).

| # | Schwere | Befund | Fix |
|---|---|---|---|
| S1 | Mittel | Security-Header fehlen komplett (live nur HSTS): kein X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy | `[[headers]]`-Block in netlify.toml (zusammen mit P3) |
| S2 | Mittel | Consent-Widerruf wirkungslos: Decline-Handler setzt nur localStorage, pusht kein `gtag('consent','update', …denied)`; geladene Tags tracken weiter (CookieConsent.astro:101-104) | Consent-Update + ggf. Reload im Handler |
| S3 | Mittel | wolfsknigge.netlify.app liefert 200 (komplette Site-Kopie, kein Redirect, kein X-Robots; Canonical mildert) | `_redirects`: `https://wolfsknigge.netlify.app/* https://wolfsknigge.de/:splat 301!` |
| S4 | Mittel | GA4 potenziell doppelt: `loadGA()` lädt gtag.js direkt + GA4-Tag im GTM-Container | Eine Ladequelle festlegen |
| S5 | Strategisch | Keine Content-Security-Policy | Erst Report-Only, dann scharf |

### 6. SEO — Indexierung, On-Page, Schema, Local

**Stärken:** robots.txt + Sitemap korrekt, Canonicals, 100 % unique Titles & Descriptions auf 27 Seiten, keyword-starke Stadtseiten-H1s, FAQ/Breadcrumb/BlogPosting-Schema technisch sauber, GBP-Verlinkung, konsistentes Einzugsgebiet.

| # | Schwere | Befund | Fix |
|---|---|---|---|
| SEO1 | Mittel | ~100 interne Links ohne Trailing-Slash → jeder Klick/Crawl läuft durch einen 301 | Alle href auf Trailing-Slash + `trailingSlash: 'always'` |
| SEO2 | Mittel | Stadtseiten-Descriptions 202–219 Zeichen — Google schneidet bei ~155 ab, der USP „200+ Teams, 5,0 auf Google" steht am **Ende** und ist unsichtbar | Auf ≤155 kürzen, USP nach vorn |
| SEO3 | Mittel | 11 Titles über 60 Zeichen (Blog-Suffix „\| WolfsKnigge Blog" treibt bis 96 Z.) | Suffix kürzen, Titles ≤60 |
| SEO4 | Mittel | H1 ohne Keyword auf Money-Pages (welpengruppe, einzelstunde, preise, Start) — bewusst emotional, aber das stärkste On-Page-Signal trägt null Suchintention | Keyword-Subline oder Kombi-H1 |
| SEO5 | Mittel | LocalBusiness-Datenqualität: Geo-Koordinaten ~3,2 km daneben, kein addressRegion, keine @id, Logo als image (Layout.astro:107-121) | Alle 4 Punkte korrigieren |
| SEO6 | Mittel | 3 von 4 Stadtseiten ~90 % Template (nur POIs getauscht, ~80–120 Wörter unique) — „substantially similar pages"-Risiko | Pro Stadt 2–3 unique Module (Fallstudie, lokale FAQs) |
| SEO7 | Hoch | Kein Review-Funnel trotz 200+ Kunden und nur 14 Google-Reviews | `_redirects`: `/bewerten → <GBP-Review-URL> 302` |
| SEO8 | Hoch | Erklärter Hebel „Kiel-LP intern stärken" liegt brach: 5 von 7 Blog-Posts verlinken die Kiel-LP nicht (Gassi-Post: 13 Kiel-Nennungen, 0 Links) | Je 1–2 kontextuelle Links in 3 Posts |
| SEO9 | Niedrig | 2-Hop-Redirect /social-walk-bindungsarbeit → /social-walk → /social-walk/ (live bestätigt) | Ziel mit Trailing-Slash in _redirects |
| SEO10 | Niedrig | dateModified immer = datePublished; author nur Name-String; keine Person-Entität für René (auch nicht auf /ueber-mich) | updatedDate-Feld + Person-Schema |
| SEO11 | Niedrig | Kein Service-/Offer-Schema auf Angebotsseiten trotz sichtbarer Preise | Service-JSON-LD je Seite |
| SEO12 | Niedrig | NAP-Inkonsistenz: „WolfsKnigge - Mobile Hundeschule" (Schema) vs. „WolfsKnigge - Hundeschule" (Impressum); Telefon „01514 7736042" vs. „0151 47736042" | Kanonische Form festlegen |

### 7. Open Graph & Social

| # | Schwere | Befund | Fix |
|---|---|---|---|
| O1 | Hoch | og:image ist 500×750-**Hochformat**-WebP für alle 28 Seiten — wird bei WhatsApp (Hauptkanal der Zielgruppe!) oft gar nicht, bei FB/LinkedIn beschnitten gerendert | 1200×630-JPG erstellen |
| O2 | Mittel | Ein globales og:image; Blog-heroImages ungenutzt | og:image aus Frontmatter je Post |
| O3 | Niedrig | Blogposts og:type="website" statt "article", keine article:published_time | Layout um article-Modus ergänzen |
| O4 | Niedrig | og:image:width/height/alt fehlen | 3 Meta-Zeilen |

### 8. Recht

**Stärken:** Impressum vollständig nach §5 DDG inkl. USt-IdNr., MStV-Verantwortlichem, Berufshaftpflicht und **vorbildlicher §11-TierSchG-Angabe mit Aufsichtsbehörde** (besser als 95 % der Hundeschulen). DSE deckt Netlify, Netlify Forms, GTM/GA4/Meta-Pixel mit SCC/AVV ab. AGB mit Widerrufsbelehrung, Impfpflichten, Verbot tierschutzwidriger Hilfsmittel.

| # | Schwere | Befund | Fix |
|---|---|---|---|
| R1 | Mittel | OS-Plattform-Link 2× obsolet — die EU-ODR-Plattform wurde zum 20.07.2025 abgeschaltet, Impressum + AGB behaupten weiterhin, sie „stellt bereit" (impressum.astro:81, agb.astro Ziffer 9) | Beide Hinweise ersatzlos streichen |
| R2 | Mittel | DSE verspricht Widerruf „jederzeit mit Wirkung für die Zukunft" — technisch nur halb wirksam (siehe S2) | S2 fixen, dann stimmt die DSE |
| R3 | Mittel | Muster-Widerrufsformular fehlt in den AGB (Art. 246a §1 II Nr. 1 EGBGB) — klassischer Abmahnpunkt | Muster anhängen |
| R4 | Niedrig | „TTDSG" statt „TDDDG" (2× in dsgvo.astro) — Gesetz heißt seit 05/2024 anders | Umbenennen |
| R5 | Niedrig | DSE-Abschnitte Facebook/Instagram behaupten „integrierte Elemente" — real sind es nur Footer-Links | Präzisieren oder streichen |
| R6 | Niedrig | AGB-Änderungsvorbehalt „jederzeit" ist nach §308 Nr. 4 BGB angreifbar | Einschränken |
| R7 | Prüfen | Google Ads läuft aktiv, DSE nennt aber nur GA4 + Meta-Pixel — falls im GTM ein Ads-Conversion-Tag feuert, fehlt der Abschnitt | GTM-Container prüfen |

### 9. Content & Marke

**Stärken:** Durchgängige Du-Anrede (Sie nur mustergemäß in der Widerrufsbelehrung), vollständig gepflegtes Blog-Frontmatter, authentische und spezifische Texte.

| # | Schwere | Befund | Fix |
|---|---|---|---|
| C1 | Hoch | Keine einzige Fallgeschichte trotz Problemhund-Positionierung — stattdessen 8 identische 1-Satz-Testimonials sitewide dupliziert | 2–3 echte Fallstudien (Fiete, Pacco — Material liegt im Pillar-Post) |
| C2 | Mittel | Blog im Burst-Modus: 9 Monate Pause, dann 4 Posts in 8 Tagen (06/2026) | Redaktionsrhythmus 1–2/Monat |
| C3 | Niedrig | Ich/Wir-Mischung (index: 29× ich, 19× wir) — als Einzelunternehmer-Marke stellenweise unentschieden | Redaktionsregel: „ich" fürs Business, „wir" nur für Trainer+Kunde |
| C4 | Niedrig | Geo-Alt-Texte teils unehrlich (NOK-Bild als „Einfelder See" deklariert) | Alt-Texte korrigieren |

---

## ⚡ Quick Wins (je <1 h, Reihenfolge = Empfehlung)

1. **Kursstart welpengruppe fixen** (K1) — 5 Minuten, zeitkritisch bis 05.07.
2. **Anfahrtskosten harmonisieren** (K2) — eine Version, 7 Stellen
3. **AggregateRating entfernen** (K3) — 1 Block in Layout.astro
4. **Header-CTA auf /kontakt/ umstellen + Handoff-Microcopy** (U3, U4)
5. **CTAs auf Preisseiten-Pakete** (U2)
6. **Problemhund verlinken:** Chips + Pain-Karten + Nav (U1)
7. **netlify.toml `[[headers]]`:** Security-Header + Asset-Caching in einem Block (S1 + P3)
8. **`_redirects` -Sammel-Fix:** netlify.app-301, /bewerten-Funnel, Redirect-Kette (S3, SEO7, SEO9)
9. **Consent-Widerruf reparieren** (S2/R2)
10. **OS-Link streichen + TDDDG + Widerrufsformular** (R1, R3, R4)
11. **Descriptions/Titles kürzen, USP nach vorn** (SEO2, SEO3)
12. **og:image 1200×630 als JPG** (O1)
13. **No-JS-Fallback für .reveal** (Y1) — 1 noscript-Block
14. **Antwortzeit auf „<24h", Welpenpreis auf „185 €"** (U6, U7)
15. **Blog→Kiel-LP-Links setzen** (SEO8)

## 🏗️ Strategische Maßnahmen (mehr Aufwand, hoher Hebel)

1. **Bild-Pipeline auf astro:assets umstellen** (P1, P2) — größter messbarer Perf-Hebel für die mobile Zielgruppe
2. **Fallgeschichten produzieren** (C1) — der fehlende Vertrauensbaustein der Problemhund-Positionierung
3. **Stadtseiten entboilerplaten** (SEO6) — je 2–3 unique Module; Rendsburg zuerst (Ads-Markt Nr. 2)
4. **Inline-Formular auf Stadtseiten aktivieren** (existiert im Code, nur landingPage-Modus) — Kiel-LP zuerst
5. **Trailing-Slash-Migration** (SEO1) — einmalig alle internen Links + Config
6. **Service-/Person-Schema-Ausbau** (SEO10, SEO11)
7. **Skelett-Komponenten extrahieren** (A2) — senkt Kosten aller künftigen Änderungen
8. **CSP einführen** (S5) — Report-Only → Enforce

---

## Priorisierte Gesamtliste 1–20 (Impact × Aufwand)

| # | Maßnahme | Warum zuerst |
|---|---|---|
| 1 | Kursstart 05.07. fixen (K1) | Wird in 3 Tagen zur aktiven Falschangabe |
| 2 | Anfahrtskosten Website ↔ AGB (K2) | Rechtsrisiko + Vertrauen, 30 Min |
| 3 | Header-/Menü-CTA → /kontakt/ + Handoff-Copy (U3, U4) | Der Haupt-Conversion-Pfad gehört der eigenen Site |
| 4 | AggregateRating raus (K3) | Penalty-Risiko für alle Rich Results |
| 5 | Preisseiten-CTAs (U2) | Kaufbereiteste Besucher stehen vor Karten ohne Knopf |
| 6 | Problemhund-Pillar verlinken (U1) | Kernpositionierung ist unauffindbar |
| 7 | netlify.toml Headers: Security + Caching (S1, P3) | Ein Block, zwei Baustellen, live messbar |
| 8 | _redirects: netlify.app + /bewerten + Kette (S3, SEO7, SEO9) | 3 Fixes, 1 Datei; Review-Funnel ist der Local-SEO-Hebel |
| 9 | Consent-Widerruf (S2) | DSGVO-Versprechen muss stimmen |
| 10 | Hero-Bilder Unterseiten <150 KB (P1) | Größter LCP-Hebel für mobile Zielgruppe |
| 11 | Descriptions/Titles kürzen (SEO2, SEO3) | USP „5,0 auf Google" ist aktuell in der SERP unsichtbar |
| 12 | og:image 1200×630 JPG (O1) | WhatsApp ist der Empfehlungskanal der Zielgruppe |
| 13 | Rechtstexte: OS-Link, TDDDG, Widerrufsformular (R1, R3, R4) | Abmahnflächen schließen, 30 Min |
| 14 | Kontaktformular: Kennenlernen zuerst, Problem-Optionen, Checkbox raus (U8, U9) | Reibung am Abschlusspunkt |
| 15 | No-JS-Fallback + CTA-Kontrast (Y1, Y2) | Zwei echte WCAG-Fails, zusammen <1 h |
| 16 | Antwortzeit/Welpenpreis/Methodik konsistent (U6, U7, U15) | Konsistenz = Vertrauen |
| 17 | Blog→Kiel-LP-Links (SEO8) | Beschlossene Strategie, 20 Minuten |
| 18 | Fallgeschichten Fiete & Pacco (C1) | Der Unterschied zwischen „behauptet" und „belegt" |
| 19 | Inline-Formular auf Kiel-LP (U/Strategie 4) | Code existiert schon, nur freischalten |
| 20 | Stadtseiten unique Module, Start: Rendsburg (SEO6) | Doorway-Risiko senken, Ads-Markt Nr. 2 stärken |

---

## Die 50.000-€-Frage

Was eine Top-Agentur anders gemacht hätte, ist **nicht** das Fundament — das ist hier teils besser als bei Agenturprojekten (0 JS-Bundles, Consent-Gating, §11-Impressum). Der Unterschied liegt in drei Disziplinen:

1. **Konsistenz-Management:** Eine Agentur pflegt eine Single Source of Truth für Preise, Claims und Kontaktdaten. Hier existieren 6 Versionen der Anfahrtskosten, 2 Antwortzeiten, 2 Firmennamen, 2 Telefonnummer-Formate.
2. **Der letzte Meter der Conversion:** Jeder Pfad wird bis zum Abschluss durchgespielt. Hier brechen drei Pfade kurz vor dem Ziel (externe Buchung unerklärt, Pakete ohne CTA, Formular verlangt Vorwissen).
3. **Betriebsprozesse:** Termine, Rechtstexte und Bildgrößen altern. Eine Agentur baut Prozesse (Termin-Array statt String, Redaktionskalender, Bild-Pipeline), damit die Site nicht schleichend verfällt.

Alle drei sind mit den obigen 20 Punkten erreichbar — geschätzt 2–3 Arbeitstage für Platz 1–17, die strategischen Punkte 18–20 als laufendes Programm.

---

*Audit erstellt am 02.07.2026. Alle Befunde gegen Quellcode und Live-Site (curl) verifiziert; Zeilenangaben beziehen sich auf den Stand des Working Tree an diesem Datum.*
