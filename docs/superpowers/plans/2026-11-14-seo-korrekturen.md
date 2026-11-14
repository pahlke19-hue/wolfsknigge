# Plan: SEO-Korrekturen wolfsknigge.de

Stand 14.11.2026. Geschrieben von der Analyse-Sitzung, gedacht für eine eigene Umsetzungs-Sitzung (Opus 5.5) in diesem Ordner. Der Plan ist ohne Vorwissen lesbar.

## 0. Arbeitsregeln

1. `CLAUDE.md` in diesem Ordner gilt: keine Commits, keine neuen Pakete, keine Löschungen ohne Renés Freigabe. Vor jedem Text `voice.md` lesen, vor Layout-Änderungen `design.md`.
2. Im Arbeitsverzeichnis liegen uncommittete Änderungen in `src/components/CityPage.astro` und `src/layouts/Layout.astro` (Herkunfts-Code fürs Formular). Nicht verwerfen, nicht zurücksetzen.
3. Zeilennummern in diesem Plan stammen vom 14.11.2026. Vor jeder Änderung die Stelle per Suche bestätigen.
4. Nach jedem Paket `npm run build`. Am Ende die Prüfungen aus Abschnitt 6.
5. Die Pakete sind nach Wirkung pro Aufwand sortiert. Renés Entscheidungen vom 14.11.2026 stehen in Abschnitt 5 und sind eingearbeitet. Offen ist dort nur noch O1.
6. Seit 10.11.2026 läuft ein Google Core Update. Rankings schwanken. Wirkung frühestens drei Wochen nach dessen Ende beurteilen.
7. Der MCP-Server `seobility-mcp` ist nur in diesem Projektordner verbunden. Konto im Testzeitraum, am 14.11. noch 3.343 von 4.000 Credits, Reset am 24.11.2026. `keyword_similar` kostet 10 Credits je Abfrage. Nur nutzen, wenn eine Entscheidung davon abhängt.

## 1. Datenquellen

1. Search Console, 16.08. bis 13.11.2026 (90 Tage): 413 Klicks, 24.635 Impressionen, Ø Position 9,9. MCP `wolfsknigge-gsc`, Property `sc-domain:wolfsknigge.de`.
2. Live-Crawl aller 30 Sitemap-URLs am 14.11.2026.
3. Seobility-Daten vom 14.11.2026: `docs/analysen/2026-11-14/seobility-keywords.md` (Suchvolumen Deutschland, Backlinks, Rankings am Standort Kiel und Rendsburg).
4. Google-Dokumentation, abgerufen 14.11.2026: Spam-Richtlinien, Review-Snippet-Richtlinien, Änderungsprotokoll zu FAQ-Rich-Results, Search Status Dashboard. Links in Abschnitt 8.
5. Letztes Audit: `docs/audits/AUDIT-2026-11-09.md`. Dort entschiedene Punkte nicht neu aufrollen.

Hinweis zur Search Console: Impressionen je Suchanfrage nur mit der Dimension `query` allein ablesen. Wer `query,page` summiert, zählt eine Suche mehrfach, sobald mehrere eigene Seiten erscheinen. Das Tool sortiert außerdem erst nach dem Abschneiden auf `row_limit`, für Suchanfragen ohne Klicks also einen Filter setzen.

## 2. Befunde

### 2.1 Technik, in Ordnung

Alle 30 Seiten Status 200, je ein H1, Canonicals korrekt, Titles bis 60 Zeichen, Sitemap gültig, `http` und `www` leiten per 301 um, keine kaputten internen Links, keine Weiterleitungs-Hops, `noindex` auf `/danke/` und `/thanks-formular/`, `lang="de"`, Open-Graph-Daten vorhanden, kein versteckter Text, Vortragstermine im Event-Schema liegen in der Zukunft. Lighthouse mobil 100 (Audit 09.11.).

### 2.2 Fehler

| Nr. | Befund | Beleg |
|---|---|---|
| F1 | `/hund-poebelt-an-der-leine/` ist nicht im Google-Index | Online seit 17.06.2026, laut URL-Prüfung nie gecrawlt, 0 Impressionen seit Veröffentlichung. Nur 3 eingehende Links aus Inhalten (Blog-Übersicht, `/problemhund/`, `/stress-beim-hund/`). |
| F2 | Der Leinen-Artikel enthält das Wort "Leinenaggression" kein einziges Mal | Suchvolumen: leinenaggression 260, leinenaggression hund 320, hund pöbelt an leine 390, hund bellt andere hunde an 590 |
| F3 | Stadtseiten sind zu 70 bis 81 % wortgleich | Nach Tausch des Ortsnamens identische Sätze: Kiel/Rendsburg 70 %, Rendsburg/Neumünster 81 %. Eigene Wörter: Kiel 709 von 1.895, Rendsburg 450 von 1.822, Eckernförde 565 von 1.822, Neumünster 449 von 1.847. 37 bis 41 % sind identisch mit der Startseite. Entspricht dem Muster, das Google als "Doorway abuse" beschreibt. |
| F4 | Alt-Texte behaupten Orte, die das Foto nicht zeigt | `welpe_mit_kuscheltier.webp` heißt je Seite "Welpenschule Kiel im Schrevenpark", "Welpenschule am Hafen von Eckernförde", "Welpenschule in Faldera", "Welpenschule am Nord-Ostsee-Kanal". `rene_unterordnung.webp` heißt auf der Eckernförde-Seite "Leinenführig durch den Park in Altenholz". Betroffen: `anamneseAlt`, `einzelAlt`, `welpenAlt`, `grundAlt`, `routeImageAlt` in `CityPage.astro` (Zeile 15 bis 21, Verwendung 369 bis 438). |
| F5 | Unter `wolfsknigge.netlify.app` läuft eine alte, eigene Netlify-Site | Alter Title "WolfsKnigge \| Mobile Hundeschule für Kiel, Rendsburg, Eckernförde & Neumünster", neue Seiten geben 404. Die Regel in `public/_redirects` Zeile 2 kann deshalb nie greifen. Canonical zeigt auf wolfsknigge.de, das mildert. |
| F6 | "Weiterlesen" zeigt immer die zwei neuesten Artikel | `src/pages/[slug].astro` Zeile 20 bis 25. Folge: `/welpe-beisst/` und `/stress-beim-hund/` haben je 11 Links, fünf Artikel nur einen (von `/blog/`): `/hundeschule-kosten/`, `/rueckruf-hund-kommt-nicht/`, `/5-unschlagbare-gassi-tipps/`, `/5-tipps-fur-hauslichen-umgang-mit-dem-hund/`, `/wie-du-den-richtigen-hundetrainer-fur-eure-situation-findest/`. |
| F7 | `/social-walk/` ist fast isoliert | Ein Link aus Inhalten (von `/preise/`), eigene Inhaltslinks nur auf `/kontakt/`. |
| F8 | Ortszusatz in Titles von Seiten, die keine Stadtseiten sind | `einzelstunde.astro:66` "Hundetrainer Kiel & Rendsburg", `social-walk.astro:142`, `anamnesegesprach.astro:60` "Kiel & Umgebung", `blog/index.astro:14` "Hundetrainer Kiel & Umgebung", Gassi-Artikel "Kiel & Umgebung" mit 13 Kiel-Nennungen. Folge in der Search Console: für Rendsburg-Suchen erscheinen bis zu 12 verschiedene Seiten. |
| F9 | Suchbegriffe fehlen auf den Zielseiten | `/anamnesegesprach/`: 0 mal Hundepsychologe, Verhaltenstherapie, Problemverhalten, kein Ort. `/grunderziehungsgruppe/`: 0 mal Junghund. `/einzelstunde/`: 1 mal Einzeltraining. H1 ohne Suchbegriff auf `/einzelstunde/`, `/anamnesegesprach/`, `/social-walk/`, `/grunderziehungsgruppe/`. |
| F10 | Sitemap-`lastmod` ignoriert `updatedDate` | `astro.config.mjs` Zeile 11 bis 17 liest nur `pubDate`. |
| F11 | Schema: Autor ohne Verknüpfung, fünf Unternehmens-Einträge | `[slug].astro` Zeile 46: `author` nur mit Name. `/ueber-mich/` ohne Person-Auszeichnung. Jede Stadtseite hat ein LocalBusiness mit eigener `@id` (`.../hundeschule-kiel/#localbusiness`) neben `https://wolfsknigge.de/#hundeschule`. |
| F12 | Nur 6 verweisende Domains, 2 davon verloren | Seobility-Projekt 896752. Aktiv: 123hundeschule (Buchungsportal), snautz.de, ortsdienst.de, pfotengefluester.de. Verloren: hundeschulen-verzeichnis.com, barkbase. |

### 2.3 Korrekturen gegenüber der ersten Einschätzung vom 14.11.

1. Rendsburg ist kein großes Problem. Suchvolumen zusammen rund 180 im Monat, am Standort Rendsburg stehen die richtigen Seiten auf Platz 1 bis 4. Die Streuung über viele URLs ist real, kostet aber wenig. Nur die günstigen Korrekturen machen.
2. "hundeschule eckernförde" (1.000 Suchen im Monat, 1.856 Impressionen) ist sehr wahrscheinlich großteils die Suche nach einem Mitbewerber dieses Namens. Indizien: Die Suchergebnisse führen `suchhundezentrum-nord.de/.../hundeschule-eckernfoerde` und `facebook.com/hundeschule.eckernfoerde`, dazu Suchanfragen wie "rezensionen für hundeschule eckernförde". Die Klickrate von 0,9 % ist damit erklärbar. Keinen Rezensionen-Abschnitt dafür bauen.
3. "Kiel mit Hund" lohnt nicht (50 Suchen im Monat). Echte lokale Nachfrage haben nur die Hundestrände (Abschnitt 4, Paket 6).
4. Kiel ist der größte echte Markt: hundeschule kiel 320, hundeschulen kiel 590, hundetrainer kiel 140, hundetrainerin kiel 140, hundetraining kiel 140. Dort steht die Seite auf Platz 14 bis 16.

## 3. Keyword-Zuordnung

Eine Zielseite je Thema. Andere Seiten dürfen das Thema nennen, verlinken dann aber auf die Zielseite und führen den Begriff nicht in Title oder H1.

| Thema | Suchbegriffe (Suchen/Monat, Deutschland) | Zielseite | Stand |
|---|---|---|---|
| Marke, mobil | mobile hundeschule 590, mobiler hundetrainer 70, hundeschule schleswig holstein 70 | `/` | Position 6,4 für "mobile hundeschule" |
| Problemhunde, Dienstleistung | hundetrainer für problemhunde 320, in der nähe 590, hundetrainer aggressive hunde 210 | `/` | Position 5 bis 6 |
| Kiel | hundeschule kiel 320, hundeschulen kiel 590, hundetrainer kiel 140, hundetrainerin kiel 140, hundetraining kiel 140, welpenschule kiel 50 | `/hundeschule-kiel/` | GSC 16,2 / 11,6 / 15,9 / 19,8. Seobility Standort Kiel: 14 |
| Rendsburg | hundeschule rendsburg 90, hundetrainer rendsburg 40, hundetraining rendsburg 40 | `/hundeschule-rendsburg/` | Standort Rendsburg Platz 1 bis 4, halten |
| Eckernförde | hundeschule eckernförde 1.000 (siehe 2.3), hundetrainer eckernförde 10 | `/hundeschule-eckernfoerde/` | 8,3 / 4,7 |
| Neumünster | hundeschule neumünster 140, hundetrainer neumünster 40 | `/hundeschule-neumuenster/` | 7,1 / 6,4 |
| Welpen | welpenschule in der nähe 2.900, welpenschule kiel 50, welpenkurs und welpengruppe rendsburg | `/welpengruppe/` | Standort Rendsburg Platz 1 bis 5 |
| Junghunde | junghundekurs 140, junghund training 110, junghundetraining 90 | neue Seite `/junghundegruppe/` (Paket 2.6) | Angebot existiert, steht aber nirgends auf der Website |
| Verhaltensberatung | hundepsychologe 720, in der nähe 480, verhaltenstherapie hund 720, verhaltensberatung hund 170, hundeverhaltensberater 70 | `/anamnesegesprach/` | 51 Impressionen in 90 Tagen |
| Einzeltraining | einzeltraining für hunde 320, einzeltraining hund 210, privater hundetrainer 390 | `/einzelstunde/` | kaum sichtbar |
| Social Walk | social walk hund 390, social walks hunde 390 | `/social-walk/` | Position 7 bis 8 für "in der nähe" |
| Leinenaggression | hund bellt andere hunde an 590, hund pöbelt an leine 390, leinenaggression hund 320, leinenaggression 260, leinenaggression abtrainieren 170 | `/hund-poebelt-an-der-leine/` | nicht indexiert |
| Problemhund, Ratgeber | problemhund 90 | `/problemhund/` | Position 20, nicht ausbauen |
| Kosten | kosten einer hundeschule 1.600, kosten hundeschule 1.300, hundeschule kosten 1.000 | `/hundeschule-kosten/` | 9.130 Impressionen, 39 Klicks, bundesweit, nicht ausbauen |
| Silvester | angst hund silvester 880, hund angst silvester 480 | `/hund-angst-silvester/` | Position 12 bis 25, jetzt Saison |
| Welpe beißt | welpe beißt 720, welpe beißt ständig 390 | `/welpe-beisst/` | neu, noch nicht indexiert |
| Welpenschule Zeitpunkt | ab wann welpenschule 320 | `/ab-wann-welpenschule/` | Position 6,9 |

## 4. Pakete

Rangfolge nach Wirkung: zuerst Paket 1 mit Paket 4.1 (Leinen-Artikel in den Index), dann Paket 3 für Kiel, dann Paket 2.1 (Verhaltensanalyse) und 2.5 (Silvester, bis 25.11.). Paket 5 läuft parallel bei René. Der Rest von Paket 2 und 3 danach. Start der Umsetzung nur auf Renés Ansage.

### Paket 1: Code-Korrekturen ohne Entscheidung

Reihenfolge wie nummeriert. Am Ende René eine Vorher-Nachher-Liste aller geänderten Titles zeigen und um Freigabe für Commit und Deploy bitten.

**1.1 Leinen-Artikel sichtbar machen (F1, F2)**

1. `src/content/blog/hund-poebelt-an-der-leine.md`: `seoTitle` auf "Leinenaggression: Hund pöbelt an der Leine? | WolfsKnigge" (57 Zeichen). In `description` "Leinenaggression" aufnehmen. Im Text das Wort an drei bis vier passenden Stellen ergänzen, eine davon in einer H2. Den Satz "bellt andere Hunde an" einmal im Fließtext verwenden. Ton nach `voice.md`, nichts umschreiben, was nicht nötig ist. `updatedDate: 2026-11-14` setzen.
2. Eingehende Links setzen, jeweils im Fließtext an einer Stelle, die das Thema schon nennt:
   - `src/components/CityPage.astro`: dort, wo "Leinenpöbeln" oder "Leinenaggression" steht, einmal verlinken. Wirkt auf alle vier Stadtseiten.
   - `src/pages/index.astro`: beim Symptom "Leinenaggression".
   - `src/pages/social-walk.astro`: beim Pöbel-Walk.
   - `src/pages/anamnesegesprach.astro`: einmal.
3. Fertig, wenn der Artikel im Build mindestens 8 eingehende Links aus Inhalten hat.

**1.2 Weiterlesen nach Kategorie (F6)**

`src/pages/[slug].astro`, Zeile 20 bis 25 ersetzen durch:

```js
// Related: gleiche Kategorie zuerst, dann neueste
const all = await getCollection("blog", ({ data }) => !data.draft);
const sameCat = (p) => Number(p.data.category === post.data.category);
const related = all
  .filter((p) => p.id !== post.id)
  .sort((a, b) => sameCat(b) - sameCat(a) || b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 3);
```

Drei statt zwei Karten, sonst bekommt der älteste Artikel einer Vierer-Kategorie keinen Link. Das Raster ab Zeile 132 auf drei Karten prüfen (mobil 375 px und Desktop). Fertig, wenn jeder Artikel mindestens 2 eingehende Links von anderen Artikeln hat.

**1.3 Sitemap-Datum (F10)**

`astro.config.mjs`, in der Schleife ab Zeile 13:

```js
const src = readFileSync(new URL(file, blogDir), 'utf8');
const date = src.match(/^updatedDate:\s*"?([\d-]+)"?/m) ?? src.match(/^pubDate:\s*"?([\d-]+)"?/m);
if (date) postDates.set(file.replace(/\.md$/, ''), date[1]);
```

Fertig, wenn `dist/sitemap-0.xml` für den Leinen-Artikel `2026-11-14` zeigt.

**1.4 Fehlende Querverweise (F7)**

1. `/preise/` auf `/hundeschule-kosten/`, ein Satz in der Art "Wie die Preise im Vergleich liegen".
2. `/anamnesegesprach/` auf `/problemhund/`.
3. `/welpengruppe/` auf `/welpe-beisst/`.
4. `/grunderziehungsgruppe/` auf `/rueckruf-hund-kommt-nicht/`.
5. `/social-walk/`: erste Nennung von Kiel und Rendsburg im Fließtext auf die Stadtseite verlinken, Anker "Hundeschule Kiel" und "Hundeschule Rendsburg".
6. Stadtseite Rendsburg: der Welpen-Hinweis verlinkt mit Anker "Welpenkurs Rendsburg" auf `/welpengruppe/` (heute Anker "Welpen").

**1.5 Alt-Texte ehrlich machen (F4)**

Die Props `anamneseAlt`, `einzelAlt`, `welpenAlt`, `grundAlt` aus `CityPage.astro` und den vier `hundeschule-*.astro` entfernen. Jedes Bild bekommt einen festen Alt-Text, der beschreibt, was zu sehen ist (Bild vorher ansehen). `routeImageAlt` je Seite nur dann mit Ort, wenn das Foto dort entstanden ist, sonst neutral. Nebenbei notieren, nicht ändern: Das Hero-Bild der Kiel-Seite heißt `hundeschule_in_sehestedt.webp`.

**1.6 Titles ohne Ortszusatz (F8)**

| Datei | Neu |
|---|---|
| `src/pages/einzelstunde.astro:66` | Einzeltraining für Hunde: Hundetrainer kommt zu dir |
| `src/pages/social-walk.astro:142` | Social Walk für Hunde & Pöbel-Walk \| WolfsKnigge |
| `src/pages/anamnesegesprach.astro:60` | Verhaltensberatung Hund: Verhaltensanalyse bei dir zuhause |
| `src/pages/blog/index.astro:14` | Hunde-Blog: Tipps vom Hundetrainer \| WolfsKnigge |
| `src/content/blog/5-unschlagbare-gassi-tipps.md` | `title`: 5 unschlagbare Gassi-Tipps für entspannte Spaziergänge. `seoTitle`: 5 Gassi-Tipps für entspannte Spaziergänge \| WolfsKnigge |

Die Orte bleiben in Description und Fließtext. `/welpengruppe/` und `/grunderziehungsgruppe/` behalten Title und Ort unverändert, die Kurse finden dort statt.

**1.7 Schema (F11)**

1. `[slug].astro`: `author: { "@type": "Person", "@id": "https://wolfsknigge.de/ueber-mich/#rene", name: post.data.author, url: "https://wolfsknigge.de/ueber-mich/" }`.
2. `/ueber-mich/`: JSON-LD `ProfilePage` mit `mainEntity` Person (`@id` wie oben, `name`, `jobTitle`, `worksFor` mit `@id` `https://wolfsknigge.de/#hundeschule`, `sameAs` aus dem LocalBusiness der Startseite). Dieselbe `@id` beim `founder` in `index.astro`.
3. Stadtseiten: `@id` des LocalBusiness auf `https://wolfsknigge.de/#hundeschule` setzen, `url` auf `https://wolfsknigge.de/`. `areaServed` bleibt. So beschreibt alles dasselbe Unternehmen.
4. Nicht einbauen: `aggregateRating` oder `Review`. Eigene Bewertungen sind für LocalBusiness nicht zulässig. FAQ-Markup bleibt, wird aber nicht erweitert.

### Paket 2: Suchbegriffe auf den Leistungsseiten (F9)

Texte nach `voice.md`. Die großen H1-Zeilen bleiben. Der Suchbegriff kommt als kleine Vorzeile in das H1, Muster: `src/pages/welpengruppe.astro:139`. Nach dem Schreiben René den Wortlaut zeigen.

1. **`/anamnesegesprach/`** (wichtigste Seite dieses Pakets): Vorzeile "Verhaltensberatung & Verhaltensanalyse für Hunde". Ein kurzer neuer Abschnitt, der die Suchenden abholt: Viele suchen einen Hundepsychologen oder eine Verhaltenstherapie, gemeint ist meist genau das, was die Verhaltensanalyse leistet. René ist Hundetrainer mit Erlaubnis nach § 11 TierSchG, kein Psychologe, das muss der Text klar sagen. "Problemverhalten" zwei- bis dreimal im Fließtext. Einzugsgebiet einmal nennen, mit Links auf die vier Stadtseiten. Eine FAQ-Frage in der Art "Brauche ich einen Hundepsychologen oder einen Hundetrainer?".
2. **`/grunderziehungsgruppe/`**: Die Gruppe ist laut René nicht das Junghunde-Angebot. Title bleibt. Nur die Vorzeile "Grunderziehung in der Gruppe in Kiel & Rendsburg" und einmal der wahre Hinweis, dass der Einstieg ab 8 Monaten möglich ist. Nicht als Junghundekurs benennen.
3. **`/einzelstunde/`**: Vorzeile "Einzeltraining für Hunde bei dir zuhause". "Einzeltraining", "mobiler Hundetrainer" und "privater Hundetrainer" je ein- bis zweimal natürlich im Text.
4. **`/social-walk/`**: Vorzeile "Social Walk für Hunde in Kiel & Rendsburg".
5. **`/hund-angst-silvester/`**, bis 25.11.2026, weil jetzt gesucht wird: Varianten "Angst vor Silvester" und "Silvesterangst" in einer H2 und der Description prüfen, zusätzliche Links von der Startseite (saisonaler Hinweis) und von `/problemhund/`. `updatedDate` setzen.
6. **Junghundegruppe**: neue Seite `/junghundegruppe/` nach dem Muster von `welpengruppe.astro`. Eckdaten von René (14.11.2026):
   - Für Hunde von 5 Monaten bis 2 Jahren. Direkter Übergang aus der Welpengruppe, Einstieg von außen möglich.
   - Samstag und Sonntag, 10:00 Uhr.
   - Ort wechselt: Bredenbek, Kiel, am Nord-Ostsee-Kanal, auch andere Orte. Den Treffpunkt gibt es bei der Anmeldung. (René hat per Diktat "Bremenbeck" gesagt, gemeint ist nach meiner Deutung Bredenbek. Beim Zeigen des Textes bestätigen lassen.)
   - 25 € pro Termin oder über die 10er-Mehrfachkarte. Preis der Karte von `/preise/` übernehmen, nicht raten.
   - 5 bis 10 Teams.
   - Anmeldung per WhatsApp, Button wie im Hero der Startseite mit passender Textvorlage. Kein Portal-Link, kein Formular.
   - Title "Junghundekurs & Junghundegruppe | WolfsKnigge" (kein fester Ort im Title, weil er wechselt). H1-Vorzeile "Junghundegruppe für Hunde von 5 Monaten bis 2 Jahren". Die Orte im Fließtext nennen, Kiel mit Link auf die Stadtseite.
   - Eintrag im Menü, Karte auf `/preise/`, Links von `/welpengruppe/` ("Wie es nach dem Welpenkurs weitergeht") und `/grunderziehungsgruppe/` (Abgrenzung: Grunderziehung ab 8 Monaten).
   - Themen der Gruppe laut René (14.11.2026, "unter anderem"): Wiederholungen unter erhöhter Ablenkung, Frustration, Impulskontrolle (vor dem Hintergrund, dass sich das Gehirn im Junghundealter umbaut), Nervosität, Aufgeregtheit, Konsequenz, Konflikte. Daraus den Abschnitt "Was ihr in der Junghundegruppe übt" schreiben. Den Gehirnumbau nur so allgemein erklären, wie René ihn nennt, keine Fachdetails oder Studien ergänzen, die er nicht geliefert hat.
   - Sonst keine Angaben erfinden. Den fertigen Text René gegenlesen lassen.

### Paket 3: Stadtseiten entdoppeln (F3)

Größtes Strukturthema, aber auch das heikelste: Die Stadtseiten sind Zielseiten für Google Ads (`landingPage`-Prop in `CityPage.astro`, siehe `docs/audits/AUDIT-ADS-FUNNEL-2026-11-09.md`). Hero, Kundenstimmen, Angebote und Kontaktwege bleiben unverändert. René hat den Umbau am 14.11.2026 freigegeben (E3).

Ziel: je Stadtseite mindestens 50 % eigene Sätze (Messung mit dem Skript in Abschnitt 7) und weniger als 20 % Überschneidung mit der Startseite. Stand 14.11.2026 laut Skript: Kiel 29 % eigen und 37 % gleich mit der Startseite, Rendsburg 19 % und 41 %, Eckernförde 22 % und 40 %, Neumünster 18 % und 41 %.

1. Blöcke, die wortgleich auf der Startseite stehen und erklären statt verkaufen, auf den Stadtseiten streichen oder auf zwei Sätze mit Link kürzen: der Vergleich "Sitz auf dem Hundeplatz", "Fünf Gründe", "In vier Schritten". Das Audit vom 09.11. nennt die Seiten ohnehin zu lang (rund 20 Bildschirme).
2. FAQ: Von 8 Fragen sind 7 identisch. Auf den Stadtseiten nur noch vier ortsbezogene Fragen (Anfahrt und Anfahrtskosten für den Ort, wo trainiert wird, wo Welpenkurs und Gruppe stattfinden, wie schnell ein Termin vor Ort möglich ist). Die allgemeinen Fragen stehen auf `/faq/`.
3. Fallgeschichten je Stadt: nicht Teil dieses Plans. René hat aktuell keine Fälle und liefert sie später nach.
4. Reihenfolge: Kiel zuerst (größter Markt, schwächste Position), dann Eckernförde, Neumünster. Rendsburg nur Punkt 1 und 2.
5. Kiel-Seite: Altenholz und Kronshagen als Einsatzorte nennen (hundeschule altenholz 140 Suchen im Monat), sofern René dort fährt.
6. Keine weiteren Stadtseiten anlegen. Kleinere Orte (Gettorf, Nortorf, Bordesholm, Büdelsdorf) als Aufzählung auf der passenden bestehenden Seite.

### Paket 4: Indexierung und alte Kopie

1. Nach dem Deploy von Paket 1: in der Search Console über die URL-Prüfung die Indexierung beantragen für `/hund-poebelt-an-der-leine/` und `/welpe-beisst/`. Das geht nur in der Oberfläche, René macht es selbst oder gibt es für den Browser frei.
2. Alte Netlify-Site (F5): René hat sie gelöscht, `https://wolfsknigge.netlify.app/` antwortet am 14.11.2026 mit 404. Nur noch die wirkungslose Regel in `public/_redirects` Zeile 1 und 2 entfernen.
3. Kontrolle 14 Tage nach dem Antrag per `batch_url_inspection` für beide URLs.

### Paket 5: Verweise von außen (René, kein Code)

Ausgangslage: 6 verweisende Domains. Für Kiel ist das neben den doppelten Inhalten der wahrscheinlichste Engpass. Die Umsetzungs-Sitzung liefert dafür nur eine Liste mit fertigem Eintragstext (Name, Adresse, Telefon in identischer Schreibweise: WolfsKnigge - Mobile Hundeschule, Katzheide 24, 24796 Bredenbek, 0151 47736042).

1. VHS-Dozentenseiten mit Link auf wolfsknigge.de: Förde-vhs Kiel, VHS Rendsburg, VHS Felde, Melsdorf. René fragt bei den Ansprechpartnern nach.
2. Verzeichnisse, die selbst auf Seite 1 stehen: gelbeseiten.de (Platz 4 für "hundeschule kiel"), hundeschulen.derhund.de (Platz 3 für "hundeschule eckernförde"), dogorama.app (Platz 9). Eintrag anlegen oder vervollständigen.
3. Verlorenen Eintrag bei hundeschulen-verzeichnis.com erneuern.
4. Lokale Partner mit eigener Website: Tierärzte, Hundesalons, Vereine, mit denen René ohnehin zu tun hat.
5. Im Buchungsportal (123hundeschule) die Links auf `/agb/`, `/dsgvo/`, `/impressum/` mit Schrägstrich am Ende eintragen.

### Paket 6: Neue Inhalte, zurückgestellt

René hat die Hundestrand-Artikel am 14.11.2026 auf die To-do-Liste gesetzt. Nicht Teil dieser Umsetzung, erst auf seine Ansage. Dann mit dem Skill `wolfsknigge-blog`.

1. "Hundestrand Eckernförde" (2.400 Suchen im Monat, Ads-Wettbewerb 0,03) und "Hundestrand Kiel" (kiel hundestrand 590, hundestrand kiel 390, hundestrände kiel 260). Ehrliche Erwartung: viel Verkehr von Urlaubern, wenige Kunden. Der Nutzen liegt in lokaler Relevanz und in Links auf die Stadtseiten. Fakten (Abschnitte, Leinenpflicht, Saisonzeiten) per Websuche belegen und von René gegenlesen lassen. Veröffentlichen bis März 2027.
2. Verworfen: "Kiel mit Hund", "Ausflugsziele Kiel mit Hund", "Hundewiese Kiel" (zusammen unter 100 Suchen im Monat).

## 5. Entscheidungen für René

Entschieden am 14.11.2026:

| Nr. | Frage | Renés Entscheidung |
|---|---|---|
| E1 | "Hundepsychologe" beschreibend auf der Seite Verhaltensanalyse? | Ja |
| E2 | Ist die Grunderziehungsgruppe das Junghunde-Angebot? | Nein. Junghunde sind bei René 5 Monate bis 2 Jahre. Die Grunderziehungsgruppe ist ab 8 Monaten möglich. |
| E3 | Doppelte Erklärblöcke auf den Stadtseiten raus? | Ja |
| E4 | Alte Netlify-Site löschen? | Erledigt, von René gelöscht |
| E5 | Hundestrand-Artikel? | To-do-Liste, später |

Offen:

| Nr. | Frage |
|---|---|
| O1 | Nichts mehr offen. Die Eckdaten der Junghundegruppe stehen in Paket 2.6, alles andere hat René am 14.11.2026 als umsetzbar bestätigt. Beim Text der neuen Seite nur noch den Ortsnamen Bredenbek bestätigen und den fertigen Wortlaut gegenlesen lassen. |

## 6. Prüfung und Fertig-Kriterien

1. `npm run build` ohne Fehler, Seitenzahl unverändert (heute 33, mit `/welpe-beisst/`).
2. Linkprüfung über `dist/`: keine kaputten internen Links und Anker.
3. Je Seite genau ein H1, alle Titles höchstens 60 Zeichen, keine doppelten Titles.
4. Alt-Texte: keine Datei mehr mit unterschiedlichen Ortsangaben je Seite.
5. Stadtseiten: Skript aus Abschnitt 7 zeigt die Zielwerte aus Paket 3.
6. Geänderte Seiten mobil bei 375 px und Desktop bei 1440 px ansehen.
7. Nichts committen oder veröffentlichen ohne Renés Freigabe.

Vergleichswerte für die Wirkungskontrolle (Search Console, 16.08. bis 13.11.2026, Dimension `query`):

| Suchanfrage | Impressionen | Klicks | Position |
|---|---:|---:|---:|
| hundeschule kiel | 329 | 1 | 16,2 |
| hundetrainer kiel | 237 | 0 | 11,6 |
| hundetraining kiel | 159 | 0 | 15,9 |
| welpenschule kiel | 116 | 1 | 19,8 |
| hundeschule eckernförde | 1.856 | 16 | 8,3 |
| hundeschule neumünster | 295 | 4 | 7,1 |
| hundeschule rendsburg | 426 | 6 | 12,2 |
| hundetrainer rendsburg | 183 | 3 | 2,7 |
| hundeschule in der nähe | 241 | 8 | 7,9 |

Seitenwerte: `/hundeschule-kiel/` Ø Position 32,9 (18.08. bis 30.09.) und 14,6 (01.10. bis 13.11.). `/anamnesegesprach/` 51 Impressionen. `/hund-poebelt-an-der-leine/` 0 Impressionen. Nächste Messung frühestens drei Wochen nach Ende des Core Updates, gleiche Abfragen.

## 7. Messskript für Paket 3

Nach `npm run build` ausführen, außerhalb von `src/` speichern. Gibt je Stadtseite den Anteil eigener Sätze aus.

```python
import re, sys, itertools
from html.parser import HTMLParser
sys.stdout.reconfigure(encoding="utf-8")
ORTE = {"kiel": "Kiel", "rendsburg": "Rendsburg", "eckernfoerde": "Eckernförde", "neumuenster": "Neumünster"}
class Main(HTMLParser):
    def __init__(s): super().__init__(); s.st = []; s.t = []
    def handle_starttag(s, tag, a): s.st.append(tag)
    def handle_endtag(s, tag):
        if tag in s.st:
            while s.st.pop() != tag: pass
    def handle_data(s, d):
        if "main" in s.st and not {"script", "style", "svg", "nav", "footer", "header"} & set(s.st): s.t.append(d)
def saetze(pfad):
    p = Main(); p.feed(open(pfad, encoding="utf-8").read())
    text = " ".join(" ".join(p.t).split())
    for o in ORTE.values(): text = text.replace(o, "§")
    return {x.strip() for x in re.split(r"(?<=[.!?])\s+", text) if len(x.strip()) > 25}
S = {k: saetze(f"dist/hundeschule-{k}/index.html") for k in ORTE}
start = saetze("dist/index.html")
for k in ORTE:
    andere = set().union(*[S[j] for j in ORTE if j != k])
    eigen = len(S[k] - andere - start) / len(S[k])
    print(f"{ORTE[k]:12s} eigene Sätze {eigen:.0%}, gleich mit Startseite {len(S[k] & start) / len(S[k]):.0%}")
```

## 8. Was Google 2026 geändert hat (geprüft am 14.11.2026)

1. Core Update seit 10.11.2026, noch nicht abgeschlossen. Davor Spam-Updates am 24.03., 24.06., 18.08. und 24.09. (bis etwa 07.10.), Core Updates am 27.03. und 21.05.
2. FAQ-Rich-Results erscheinen seit 07.05.2026 nicht mehr, die Dokumentation wurde am 15.06.2026 entfernt.
3. Review-Snippets: Eigene Bewertungen machen LocalBusiness-Seiten für Sterne unzulässig. Neu ist das ausdrückliche Verbot erfundener und nicht gekennzeichneter belohnter Bewertungen, Verstöße können eine manuelle Maßnahme auslösen.
4. Spam-Richtlinien: "Doorway abuse" (Seiten für ähnliche Suchanfragen), "Scaled content abuse" (viele Seiten ohne Mehrwert, auch per KI), Keyword-Stuffing. Die Richtlinien gelten auch für KI-Antworten in der Suche.

Quellen:
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- https://developers.google.com/search/docs/appearance/structured-data/faqpage
- https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history

## 9. Nicht tun

1. Keine Bewertungssterne per Schema, kein Ausbau des FAQ-Markups.
2. Keine neuen Stadtseiten.
3. `/hundeschule-kosten/` und `/problemhund/` nicht weiter ausbauen.
4. Die Kiel-Entflechtung vom 24.09. und 14.10. nicht zurückdrehen.
5. Ton und große H1-Zeilen nicht ändern, nur die Vorzeile ergänzen.
6. Keine URL umbenennen (auch nicht `/anamnesegesprach/`).

## 10. Nicht geprüft

Google-Unternehmensprofil und Local Pack, Suchergebnisse am Standort (außer den 10 Keywords im Seobility-Projekt), Backlinks der Mitbewerber, saisonale Verläufe, echte Nutzerdaten zu den Core Web Vitals.
