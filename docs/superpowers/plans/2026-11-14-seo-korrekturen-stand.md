# Umsetzungsstand SEO-Korrekturen (Plan 2026-11-14)

Protokoll der Umsetzungs-Sitzung. Nichts committet, nichts veröffentlicht. Uncommittete Herkunfts-Änderungen in `CityPage.astro` und `Layout.astro` sind erhalten.

## Erledigt

### 1.1 Leinen-Artikel sichtbar machen
- Dateien: `src/content/blog/hund-poebelt-an-der-leine.md`, `src/components/CityPage.astro`, `src/pages/index.astro`, `src/pages/social-walk.astro`, `src/pages/anamnesegesprach.astro`
- Title alt: "Hund pöbelt an der Leine? Ursachen & Training | WolfsKnigge"
- Title neu: "Leinenaggression: Hund pöbelt an der Leine? | WolfsKnigge" (57 Zeichen)
- Description beginnt mit "Leinenaggression:", `updatedDate: 2026-11-14`. "Leinenaggression" im Intro, in der Überschrift "Leinenaggression: Nicht jeder Hund pöbelt aus dem gleichen Grund" (Artikel nutzt `###` für alle Abschnitte) und im Schluss. "bellt andere Hunde an" im zweiten Absatz.
- Links: Wegweiser-Satz "Leinenpöbeln" auf Startseite und allen 4 Stadtseiten, Pöbel-Walk-Karte auf `/social-walk/`, Liste "Für wen" auf `/anamnesegesprach/` (beide Listen jetzt `set:html`).
- Build ok, 33 Seiten. Eingehende Links aus Inhalten: 10 Seiten (Ziel 8).

### 1.2 Weiterlesen nach Kategorie
- Dateien: `src/pages/[slug].astro` (Logik laut Plan, 3 Karten, Raster `md:grid-cols-3`), dazu Fließtext-Links, weil die Kategorien Welpen und Ratgeber nur je 2 Artikel haben: `5-unschlagbare-gassi-tipps.md` auf Rückruf, `wie-du-den-richtigen-hundetrainer...md` auf Hundeschule-Kosten, `hundeschule-kosten.md` auf Ab-wann-Welpenschule.
- Build ok. Jeder veröffentlichte Artikel hat jetzt mindestens 2 Links von anderen Artikeln.

### 1.3 Sitemap-Datum
- Datei: `astro.config.mjs`. `updatedDate` vor `pubDate`.
- Build ok, Sitemap zeigt für den Leinen-Artikel 2026-11-14.

### 1.4 Querverweise
- Dateien: `preise.astro` (Satz unter Einstieg auf /hundeschule-kosten/), `anamnesegesprach.astro` (Für-wen-Intro auf /problemhund/), `welpengruppe.astro` (Beißhemmung-Satz auf /welpe-beisst/), `grunderziehungsgruppe.astro` (Karte Rückruf, jetzt `set:html`), `social-walk.astro` (FAQ "Wo finden die Walks statt" mit Ankern Hundeschule Kiel/Rendsburg; FAQ jetzt `set:html`, JSON-LD ohne Tags), `hundeschule-rendsburg.astro` (Welpen-Punkt Anker "Welpenkurs Rendsburg").
- Social Walk hat keinen Fließtext mit Kiel/Rendsburg, daher FAQ-Antwort ergänzt.
- Build ok.

### 1.5 Alt-Texte
- Dateien: `CityPage.astro` (Props `anamneseAlt`, `einzelAlt`, `welpenAlt`, `grundAlt` entfernt, feste Alt-Texte nach Bildinhalt), `hundeschule-kiel/-rendsburg/-eckernfoerde/-neumuenster.astro` (Props raus, `routeImageAlt` neu).
- routeImageAlt: Kiel "René beim Hundetraining mit einem Hund auf einer Wiese" (Foto zeigt keine Förde), Rendsburg "Gruppentraining am Nord-Ostsee-Kanal" (Dateiname hundetraining_am_nok), Neumünster "Gruppentraining am Wasser" (gleiches NOK-Foto, vorher "Einfelder See"), Eckernförde "Social Walk mit Hunden am Strand" (Ort unbekannt).
- Notiz: Hero-Bild der Kiel-Seite heißt `hundeschule_in_sehestedt.webp` (nicht geändert).
- Build ok. `npx astro check` nicht gelaufen, weil es ein Paket nachinstallieren will.

### 1.6 Titles ohne Ortszusatz
| Datei | Alt | Neu |
|---|---|---|
| einzelstunde.astro | Einzeltraining & Hausbesuche \| Hundetrainer Kiel & Rendsburg | Einzeltraining für Hunde: Hundetrainer kommt zu dir |
| social-walk.astro | Social Walks \| WolfsKnigge Kiel & Rendsburg | Social Walk für Hunde & Pöbel-Walk \| WolfsKnigge |
| anamnesegesprach.astro | Verhaltensberatung & Anamnese für Hunde \| Kiel & Umgebung | Verhaltensberatung Hund: Verhaltensanalyse bei dir zuhause |
| blog/index.astro | Blog – WolfsKnigge \| Hundetrainer Kiel & Umgebung | Hunde-Blog: Tipps vom Hundetrainer \| WolfsKnigge |
| 5-unschlagbare-gassi-tipps.md title | 5 unschlagbare Gassi-Tipps für entspannte Spaziergänge in Kiel und Umgebung | 5 unschlagbare Gassi-Tipps für entspannte Spaziergänge |
| 5-unschlagbare-gassi-tipps.md seoTitle | 5 unschlagbare Gassi-Tipps – Kiel & Umgebung \| WolfsKnigge | 5 Gassi-Tipps für entspannte Spaziergänge \| WolfsKnigge |
- Build ok. Descriptions unverändert (Orte bleiben dort).

### 1.7 Schema
- Dateien: `[slug].astro` (author mit @id/url), `Layout.astro` (founder mit @id `/ueber-mich/#rene`, worksFor-Verweis auf `/#hundeschule`), `ueber-mich.astro` (neues ProfilePage-JSON-LD), vier Stadtseiten (@id `https://wolfsknigge.de/#hundeschule`, url `https://wolfsknigge.de/`, areaServed unverändert).
- Kein aggregateRating, kein Review, FAQ-Markup nicht erweitert.
- Build ok, alle JSON-LD-Blöcke im Build parsen fehlerfrei.

**Paket 1 komplett.**

### Paket 3 Kiel (wirkt teilweise auf alle Stadtseiten)
- `CityPage.astro`: Abschnitte "Ein Sitz auf dem Hundeplatz" (#warum) und "In vier Schritten" (#fahrplan) samt Daten `vergleich`/`prozess` entfernt. "Fünf Gründe" bleibt, weil die Punkte je Stadt eigene Texte haben. Allgemeine 8er-FAQ entfernt, neue Prop `ortsFaq` (4 Fragen je Stadt), Überschrift "Fragen zum Training in {Stadt}", Hinweis mit Link auf /faq/. FAQ-Antworten `set:html`, JSON-LD ohne Tags. Abschnitt "Strecke" neu formuliert (vorher wortgleich mit Startseite, dazu "Anfahrt inklusive" im Widerspruch zur 25-km-Regel), Städtekarten-Texte neu.
- `hundeschule-kiel.astro`: eigene FAQ (Anfahrt, Trainingsorte inkl. Altenholz und Kronshagen, Welpenkurs/Gruppe, Termin).
- Rendsburg, Eckernförde, Neumünster: `ortsFaq` mit ortsbezogenen Fragen (Punkt 1 und 2 damit auch dort erledigt). Kleinorte: Nortorf (Rendsburg), Gettorf (Eckernförde), Bordesholm (Neumünster).
- Messung nach Build: Kiel 51 % eigen / 17 % Startseite (Ziel erreicht). Rendsburg 33 / 19, Eckernförde 32 / 18, Neumünster 27 / 19 (Startseiten-Ziel erreicht, eigene Sätze noch unter 50 %).
- Build ok.

### 2.1 Verhaltensanalyse (/anamnesegesprach/)
- Datei: `anamnesegesprach.astro`. H1-Vorzeile "Verhaltensberatung & Verhaltensanalyse für Hunde". Neuer Abschnitt "Du suchst einen Hundepsychologen?" vor "Transparent. Kein Kleingedrucktes." (3 Absätze, Problemverhalten 2x plus 1x in FAQ, Links auf die vier Stadtseiten). Neue erste FAQ-Frage "Brauche ich einen Hundepsychologen oder einen Hundetrainer?".
- § 11 TierSchG bewusst nicht genannt (Renés Regel: nicht damit werben), nur "Hundetrainer, kein Psychologe und kein Tierarzt".
- Build ok, ein H1.

### 2.5 Silvester
- Dateien: `hund-angst-silvester.md` (Description mit "Silvesterangst", Überschrift "Silvesterangst: Was du ab heute anders machen kannst", `updatedDate: 2026-11-14`; "Angst vor Silvester" stand schon in Title, Description und einer Überschrift), `index.astro` (Symptom-Karte "Angst und Panik" mit saisonalem Link "Silvester steht vor der Tür: So bereitest du deinen Hund vor"), `problemhund.md` (Linksatz im Angst-Absatz).
- Title unverändert. Hinweis: Titel sagt "Vorbereitung im Oktober beginnt", jetzt ist November.
- Build ok. Saisonlink auf der Startseite nach Silvester wieder entfernen.

### 2.6 Junghundegruppe (Sitzung 2)
- Neue Datei `src/pages/junghundegruppe.astro` nach Muster `welpengruppe.astro`: Hero mit WhatsApp-Anmeldung (Textvorlage Alter, Wohnort, Wunschtag Sa/So), Abschnitt "Warum gerade jetzt" (Gehirnumbau nur allgemein), Eckdaten, Raster "Was ihr in der Junghundegruppe übt" (6 Themen laut René), Abschnitt "Für wen die Gruppe ist und wo wir trainieren" (Übergang Welpengruppe, Einstieg von außen, Abgrenzung Grunderziehung ab 8 Monaten, Orte Bredenbek, Kiel mit Link, Nord-Ostsee-Kanal, andere Orte), 3 Schritte, Preis-Karte (25 € oder 10er-Karte 225 €, umgerechnet 22,50 €), Final-CTA nur WhatsApp und Telefon. Kein Portal-Link, kein Formular, keine FAQ, kein FAQPage-Schema.
- Title "Junghundekurs & Junghundegruppe | WolfsKnigge" (45 Zeichen), Description 160 Zeichen. H1-Vorzeile "Junghundegruppe für Hunde von 5 Monaten bis 2 Jahren". Hero-Bild `hundetraining_am_nok.webp` (dekorativ, alt leer wie bei Welpengruppe).
- Nicht angegeben und deshalb weggelassen: Dauer pro Termin.
- Menü: `Header.astro` Desktop und mobil nach Welpengruppe. Breadcrumb: `routeLabels` in `Layout.astro`.
- `preise.astro`: Karte "Junghundegruppe" im Array `gruppen`, Raster jetzt `md:grid-cols-2 lg:grid-cols-3`.
- Links: `welpengruppe.astro` neue Zwischenüberschrift "Wie es nach dem Welpenkurs weitergeht" im Abschnitt Welpenschule vor Ort; `grunderziehungsgruppe.astro` Satz unter den Eckdaten.
- Build ok, 34 Seiten (eine neue).

### 2.2 bis 2.4 Vorzeilen
- `grunderziehungsgruppe.astro`: Vorzeile "Grunderziehung in der Gruppe in Kiel & Rendsburg", Satz "Einstieg ab 8 Monaten. Für jüngere Hunde ab 5 Monaten gibt es die Junghundegruppe." Nicht als Junghundekurs benannt. Title unverändert.
- `einzelstunde.astro`: Vorzeile "Einzeltraining für Hunde bei dir zuhause". "Einzeltraining" und "mobiler Hundetrainer" standen schon im Text, neu im Statement-Absatz: "Für diese Stunde bin ich dein privater Hundetrainer, nur für euch zwei."
- `social-walk.astro`: Vorzeile "Social Walk für Hunde in Kiel & Rendsburg".
- Build ok, je ein H1.

### Paket 3 Eckernförde und Neumünster
- Nur Props in `hundeschule-eckernfoerde.astro` und `hundeschule-neumuenster.astro`, `CityPage.astro` unverändert. Hero, Kundenstimmen, Angebote, Kontaktwege unverändert.
- Umformuliert, weil wortgleich mit anderen Stadtseiten: Features 2, 4, 5 (Feature 5 sagte "In kleinen Gruppen", obwohl dort meist Einzeltraining läuft), Vorstellungssatz, 300-Teams-Satz, "Der Vorteil"-Satz (Eckernförde), Schlusssatz Intro (Neumünster), alle vier `ortsFaq`, `anamneseText`.
- Neu: Eckernförde ein Absatz zu Gettorf, Neumünster ein Absatz zu Lage (A7, rund eine halbe Stunde), Bordesholm und Stufenaufbau Dosenmoor, Einfelder See, Innenstadt. Nur Fakten, die schon auf den Seiten standen.
- Eckernförde-FAQ verlinkt jetzt auch die Junghundegruppe (trifft sich unter anderem in Bredenbek).
- Messung nach Build: Kiel 51,8 % eigen / 17 % Startseite, Rendsburg 43,6 / 19, Eckernförde 50,5 / 17, Neumünster 50,4 / 17. Ziel für Eckernförde und Neumünster erreicht, Rendsburg war laut Plan nur Punkt 1 und 2.

### Prüfungen Abschnitt 6 (14.11.2026, nach letztem Build)
1. `npm run build` fehlerfrei, 34 Seiten (33 plus `/junghundegruppe/`).
2. Linkprüfung über `dist/` (Skript prüft interne Links und Anker): 0 Fehler.
3. Je Seite genau ein H1, alle Titles höchstens 60 Zeichen, keine Dubletten, Descriptions höchstens 160 Zeichen.
4. Alt-Texte: alle Bilder haben ein alt-Attribut. Einzige Datei mit zwei Alt-Texten: `hundetraining_am_nok-1200.webp` ("Gruppentraining am Nord-Ostsee-Kanal" Rendsburg, "Gruppentraining am Wasser" Neumünster). Nur eine davon nennt einen Ort, also kein Widerspruch.
5. Messskript: Werte siehe Paket 3 oben.
6. Sichtprüfung: alle geänderten Seiten bei 375 px ohne horizontale Überbreite (scrollWidth 375). Junghundegruppe bei 375 px (Hero, Inhalte, Preis) und 1440 px (Hero) angesehen, Preise-Raster mit drei Karten bei 1440 px angesehen. Vorzeilen gleiche Klassen wie Welpengruppe.
7. Nichts committet, nichts veröffentlicht. `npx astro check` nicht gelaufen (will Paket nachladen).

### Renés Freigabe 14.11.2026
- Punkte 1 bis 4, 6, 7, 11, 12 freigegeben wie umgesetzt. Punkt 9: Silvester-Title bleibt. Punkt 10: Bredenbek richtig.
- Punkt 5: Strandfoto ist in Eckernförde, NOK-Foto in Rendsburg entstanden. Alt-Texte ergänzt: "Social Walk mit Hunden am Strand von Eckernförde", "Gruppentraining am Nord-Ostsee-Kanal in Rendsburg". Neumünster bleibt neutral.
- Punkt 8: Satz ergänzt, dass "Hundepsychologe" kein geschützter Begriff ist und René bewusst darauf verzichtet (Abschnitt und FAQ auf /anamnesegesprach/).
- Punkt 13: Grunderziehung trifft sich immer in Kiel oder in Rendsburg und Umgebung, auch für deutlich ältere Hunde. Ergänzt auf /grunderziehungsgruppe/ und im Abgrenzungs-Absatz von /junghundegruppe/.
- Build ok, 34 Seiten. Offen nur noch: Commit und Veröffentlichung, jeweils mit Renés Freigabe.

### 4.2 Alte Netlify-Regel
- `public/_redirects`: wirkungslose Regel für wolfsknigge.netlify.app entfernt (Site von René gelöscht). Build ok.
- 4.1: Indexierung für /welpe-beisst/ hat René am 14.11. beantragt. /hund-poebelt-an-der-leine/ erst nach dem Deploy beantragen. 4.3: Kontrolle 14 Tage nach dem Antrag.

## Für René
1. Neue Sätze im Leinen-Artikel gegenlesen: "Leinenpöbelei, oft auch Leinenaggression genannt, sehe ich ständig." und "Leinenaggression verschwindet nicht, indem man sie wegdrückt."
2. Pöbel-Walk-Karte: "Woher das kommt, erkläre ich im Artikel zur Leinenaggression."
3. Neue Linksätze: Vetting-Artikel "Was realistisch ist, habe ich unter Was kostet eine Hundeschule? aufgeschlüsselt." und Kosten-Artikel "Ab wann das sinnvoll ist, liest du unter Ab wann in die Welpenschule?, wie es bei mir abläuft, bei meiner Welpengruppe."
4. Neue Sätze: Preise "Wie die Preise im Vergleich liegen, liest du unter Was kostet eine Hundeschule?", Verhaltensanalyse "Wie ich mit Aggression und Angst arbeite, liest du im Ratgeber Problemhund.", Grunderziehung "Warum der Rückruf oft scheitert", Social-Walk-FAQ "Einzeltraining vor Ort gibt es bei der Hundeschule Kiel und der Hundeschule Rendsburg."
5. Alt-Texte: Ist `hundeschule_isz_am_strand` in Eckernförde entstanden? Dann Alt dort wieder mit Ort. Ist `hundetraining_am_nok` wirklich am Kanal bei Rendsburg?
6. Kiel-FAQ: Fährst du nach Altenholz und Kronshagen? Steht jetzt drin. Stadt-FAQs nennen außerdem Nortorf, Gettorf, Bordesholm. Bitte bestätigen.
7. Neue Stadt-FAQs gegenlesen (Anfahrt nach 25-km-Regel, "innerhalb von 24 Stunden hörst du von mir", Gruppen nur rund um Kiel und Rendsburg, in Eckernförde und Neumünster meist Einzeltraining).
8. Verhaltensanalyse: neuen Abschnitt "Du suchst einen Hundepsychologen?" und die neue FAQ-Antwort gegenlesen. Plan wollte § 11 TierSchG im Text, ich habe es wegen deiner Regel weggelassen.
9. Silvester-Artikel: Title "... Warum die Vorbereitung im Oktober beginnt" wirkt im November veraltet. Ändern? Startseiten-Link nach Neujahr wieder raus.
10. Junghundegruppe gegenlesen, ganze Seite `/junghundegruppe/`. Besonders: Ort "Bredenbek" (im Diktat "Bremenbeck"), Hero "Gestern saß es noch. Heute ist alles neu.", "Im Junghundealter baut sich das Gehirn deines Hundes um. Was im Welpenkurs geklappt hat, wackelt plötzlich.", "Wer jetzt aufhört, fängt später oft von vorn an.", die sechs Themenkarten, "Der Ortswechsel ist Absicht: Dein Hund soll nicht nur auf einem bekannten Platz funktionieren, sondern überall." Dauer pro Termin fehlt, bitte nachliefern, falls sie drauf soll.
11. Preise-Karte Junghundegruppe: "5 bis 10 Teams an wechselnden Orten. Direkt nach der Welpengruppe oder als Einstieg von außen." 10er-Karte von der Gruppenstunden-Karte übernommen (225 €, 10 % Ersparnis). Gilt die 10er-Karte auch für die Junghundegruppe?
12. Welpengruppe neu: "Nach den 8 Terminen ist nicht Schluss. Ab 5 Monaten geht es direkt in der Junghundegruppe weiter, samstags und sonntags um 10:00 Uhr. Dort üben wir unter mehr Ablenkung, mit Themen wie Impulskontrolle und Frust, die im Junghundealter dazukommen."
13. Grunderziehung neu: "Einstieg ab 8 Monaten. Für jüngere Hunde ab 5 Monaten gibt es die Junghundegruppe." Einzelstunde neu: "Für diese Stunde bin ich dein privater Hundetrainer, nur für euch zwei."
14. Eckernförde und Neumünster: neue Features, Vorstellungssätze, FAQ und Absätze gegenlesen. Neu sind u. a. "Neumünster liegt am südlichen Rand meines Einzugsgebiets, rund eine halbe Stunde über die A7 von Bredenbek entfernt." (A7 und halbe Stunde standen schon auf der Seite), Bordesholm, Gettorf ("Dort geht es ruhiger zu als an der Promenade"), Stufenaufbau Dosenmoor, Einfelder See, Innenstadt.

## Offen
- Nichts aus dem Plan offen. Alle Texte stehen unter "Für René" zur Freigabe, danach Commit und Veröffentlichung nur mit Renés Freigabe.
- Saisonlink Silvester auf der Startseite nach Neujahr entfernen.
