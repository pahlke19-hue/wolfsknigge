# Review SEO-Korrekturen 14.11.2026

Unabhängige Prüfung aller uncommitteten Änderungen (24 geänderte Dateien plus `src/pages/junghundegruppe.astro`) gegen Plan `docs/superpowers/plans/2026-11-14-seo-korrekturen.md` und Protokoll `...-stand.md`. Nur gelesen, gebaut und angesehen, nichts geändert.

Ergebnis: **Commit ok.** Kein Punkt blockiert. Die Punkte unter "Kann nachgezogen werden" sind klein und lassen sich vor oder nach dem Commit erledigen.

## Teil 1: Prüfung

### Muss vor Commit behoben werden

Nichts.

Hinweis zum Commit selbst: Nur die 24 geänderten Dateien und `src/pages/junghundegruppe.astro` aufnehmen (optional die beiden Plan-Dateien). Nicht `git add -A`: Im Ordner liegen weitere ungetrackte Dateien (`docs/AGB-ENTWURF-2026-10-14.md`, `docs/lead-app/`, `docs/analysen/`, GBP-Beiträge), die nicht zu diesem Commit gehören. Das Repo liegt auf GitHub.

### Kann nachgezogen werden

1. **Person-Schema `sameAs`** (`src/pages/ueber-mich.astro`, neuer JSON-LD-Block): Die Liste enthält Instagram, Facebook, TikTok von WolfsKnigge und den Google-Eintrag `kgmid=/g/11m65ly_rs`. Das sind Profile des Unternehmens, nicht der Person. Damit sagt das Schema "René ist identisch mit dem Google-Unternehmenseintrag". Vorschlag: `sameAs` bei der Person weglassen, die Verknüpfung steht schon über `worksFor`. Aufwand 2 Minuten. Der Plan hatte es so vorgegeben, inhaltlich ist es trotzdem schief.
2. **Neumünster, doppelter Satz** (`hundeschule-neumuenster.astro`): "rund eine halbe Stunde über die A7" steht im Vorteil-Absatz und im neuen Absatz der Trainingsorte. Im neuen Absatz den ersten Satz auf "Auch Bordesholm gehört zu meinem Gebiet ..." kürzen.
3. **Verwaiste CSS in `CityPage.astro`**: Nach dem Entfernen von `#warum` und `#fahrplan` sind die Regeln `.quote`, `.vs*`, `.etappen`, `.et*`, `.et-num`, `.free` (Zeilen ca. 689 bis 702 und 739 bis 745) ungenutzt. Scoped, also ohne Wirkung, aber Ballast.
4. **Startseite, Silvester-Link**: Muss nach Neujahr raus (steht im Protokoll). Besser gleich mit Ablaufdatum versehen, siehe Teil 2 Punkt 3.
5. **Gassi-Artikel**: Title geändert, `updatedDate` steht auf 2026-11-09. Für eine Title-Kürzung kein neues Datum nötig, nur zur Kenntnis.
6. **Junghundegruppe**: Dauer pro Termin fehlt weiter (René nachliefern, falls gewünscht).

### Geprüft, in Ordnung

1. **Build**: `npm run build` fehlerfrei, 34 Seiten (33 plus `/junghundegruppe/`).
2. **Links und Anker** in `dist/` (eigenes Skript, alle 34 Seiten): keine kaputten internen Links, keine fehlenden Anker, keine Links ohne Schrägstrich. Keine Verweise auf die entfernten Anker `#warum` und `#fahrplan` in `src/` oder `public/`.
3. **H1**: genau eins je Seite. Die neuen Vorzeilen sitzen im H1 als `span`, wie auf `/welpengruppe/`.
4. **Titles**: alle höchstens 60 Zeichen, keine Dubletten. Descriptions höchstens 160 Zeichen.
5. **JSON-LD**: alle Blöcke parsen. Unternehmens-@id auf Startseite und allen vier Stadtseiten `https://wolfsknigge.de/#hundeschule`, `founder`, `worksFor` und Blog-`author` zeigen auf `https://wolfsknigge.de/ueber-mich/#rene`, `/ueber-mich/` hat `ProfilePage` mit dieser Person. Kein `aggregateRating`, kein `Review`. FAQ-JSON ohne HTML-Tags (Tags werden vor `JSON.stringify` entfernt).
6. **FAQ-Markup**: Stadtseiten von 8 auf 4 Fragen reduziert, `/anamnesegesprach/` um eine Frage ergänzt (vom Plan in 2.1 verlangt), sonst nichts ausgebaut. Junghundegruppe ohne FAQ.
7. **Sitemap**: `/junghundegruppe/` enthalten, ohne `lastmod` wie alle statischen Seiten (gewolltes Verhalten laut `astro.config.mjs`). Leinen- und Silvester-Artikel zeigen `2026-11-14`, übrige Artikel `updatedDate` sonst `pubDate`.
8. **Eingehende Links**: Leinen-Artikel jetzt 11 Seiten aus Inhalten (Ziel 8), Junghundegruppe 4 plus Menü, Silvester 7.
9. **`set:html`** auf Listen und FAQs (Anamnese "Für wen", Social-Walk-Karten und -FAQ, Grunderziehung-Inhalte, Stadt-FAQ, Rendsburg-Feature): Alle Quellen sind feste Strings im Code, keine Nutzereingaben, also kein Sicherheitsrisiko. Ein `&` wird jetzt roh ausgegeben ("Nähe & Distanz"), das ist gültiges HTML und wird korrekt angezeigt. Die Feature-Überschrift mit Link auf der Rendsburg-Seite wird über das bestehende `set:html` gerendert, richtig.
10. **CityPage, Ads-Zielseiten**: Hero, Kundenstimmen, Angebote (Wegweiser), Kontaktwege und `landingPage`-Logik unverändert. Abschnittsfolge wechselt weiter sauber zwischen `bg-1` und `bg-2`. Formular postet jetzt auf `/thanks-formular/` statt `/danke/`: Das ist richtig und behebt den Nebenbefund aus dem Audit 09.11. (Formularanfragen zählten sonst als Buchung, siehe `TRACKING-SETUP.md`).
11. **Herkunfts-Erfassung**: CityPage-Skript (Pfad/Referrer und Anzeige ja/nein, wie auf `/kontakt/`) und Layout-Skript (Code A/M/P/G/I/S/D) schreiben nacheinander ins Feld `herkunft`, Ergebnis z. B. "google.com | Anzeige: ja | Code: A". `sessionStorage` erst nach Einwilligung, ohne Einwilligung nur URL und Referrer. Feld steht im statischen HTML, Netlify erkennt es.
12. **Zeilenenden**: `core.autocrlf=true`, Index ist LF. Die git-Warnungen betreffen nur den Checkout, der Diff enthält keine Ganzdatei-Änderungen (243 Zeilen hinzu, 202 weg). Kein Handlungsbedarf.
13. **Mobil 375 px**: alle 14 geänderten Seiten ohne horizontale Überbreite (scrollWidth 375). Junghundegruppe-Hero, Stadt-FAQ Kiel angesehen. WhatsApp-Button der Junghundegruppe liegt bei 625 px, also im ersten Bildschirm.
14. **Desktop 1440 px**: Preise-Raster Gruppen 3 gleich breite Karten in einer Reihe, "Weiterlesen" 3 Karten nebeneinander.
15. **Stadtseiten-Messung** (Skript Abschnitt 7): Kiel 52 % eigen / 17 % Startseite, Rendsburg 44 / 19, Eckernförde 50 / 17, Neumünster 50 / 17. Ziele erreicht, Rendsburg laut Plan bewusst nur Punkt 1 und 2.
16. **Fakten**: Anfahrt (25 km frei, 30 Cent je km, Hin- und Rückweg) deckt sich mit `/preise/`, `/faq/` und AGB. "A210/A215, rund 20 Minuten" und "A7, halbe Stunde" standen schon auf den Seiten. Welpengruppe "wechselnde Orte rund um Kiel und Rendsburg", Grunderziehung "Kieler und Rendsburger Gruppe", Junghundegruppe (Alter, Sa/So 10 Uhr, 5 bis 10 Teams, 25 €, 10er-Karte 225 €, Bredenbek/Kiel/NOK), Altenholz, Kronshagen, Nortorf, Gettorf, Bordesholm, Alt-Texte Eckernförde/Rendsburg: alles durch Renés Freigabe vom 14.11. gedeckt. Nichts Erfundenes gefunden.
17. **Ton**: Du-Ansprache, René spricht selbst, kurze Sätze, keine Gedankenstriche in neuen Texten. Passt zu `voice.md`.
18. **§ 11 TierSchG**: in keiner neuen Zeile. "Hundepsychologe ist kein geschützter Begriff" ist sachlich richtig und ehrlich formuliert.
19. **Leitlinien Plan Abschnitt 9**: keine neue Seite außer Junghundegruppe, keine URL umbenannt, große H1-Zeilen unverändert, `/hundeschule-kosten/` und `/problemhund/` nur je ein Linksatz, Kiel-Entflechtung nicht zurückgedreht.
20. **Nicht geprüft**: `npx astro check` (will ein Paket nachladen), echte Formularabsendung auf Netlify, Lighthouse.

## Teil 2: Was ich zusätzlich ändern würde

Sortiert nach Wirkung pro Aufwand. S = unter 15 Minuten, M = bis 1 Stunde.

1. **Nach dem Deploy sofort Indexierung für `/hund-poebelt-an-der-leine/` und `/junghundegruppe/` beantragen** (Search Console, URL-Prüfung). Die Junghundegruppe ist neu und hat nur 4 eingehende Inhaltslinks, ohne Antrag dauert es Wochen. S, René.
2. **Junghundegruppe in den Wegweiser** der Startseite und der Stadtseiten (`index.astro` Array der Angebote, `CityPage.astro` Block "Ich habe einen Welpen" oder "Alltag und Basics"): eine weitere Zeile "Junghundegruppe, 5 Monate bis 2 Jahre, 25 €". Das ist der Ort, an dem mobile Besucher Angebote wählen, und bringt der neuen Seite starke interne Links von 5 Seiten. Die Ads-Zielseiten bekommen damit nur eine Zeile mehr, Hero und Kontaktwege bleiben gleich. S bis M.
3. **Silvester-Link mit Ablaufdatum**: Im Startseiten-Array `link` nur ausgeben, solange das Build-Datum vor dem 02.01. liegt, gleiche Logik wie die Welpenkurs-Termine. Dann vergisst ihn niemand. S.
4. **Social Walk weiter schwach verlinkt** (F7 bleibt offen: 1 Inhaltslink, nur von `/preise/`). Ein Satz im Schluss des Leinen-Artikels: "Wer sehen will, dass er nicht allein ist: Im Pöbel-Walk trainieren 3 bis 4 Teams mit genau diesem Thema." mit Link auf `/social-walk/`. Der Artikel bekommt gerade Indexierung und Aufmerksamkeit, der Link passt thematisch genau. S.
5. **Description `/anamnesegesprach/` nachziehen**: Der Title hat den Ort verloren, die Description nennt weder Ort noch "Verhaltensberatung" und spricht in der Wir-Form. Vorschlag: "Verhaltensberatung für Hunde bei dir zuhause: Ich analysiere Problemverhalten wie Leinenaggression oder Angst. Kiel, Rendsburg, Eckernförde, Neumünster." (148 Zeichen). S, René freigeben lassen.
6. **Person-`sameAs` bereinigen** (Teil 1 Punkt 1) und **Blog-`publisher`** in `[slug].astro` auf `{ "@id": "https://wolfsknigge.de/#hundeschule" }` umstellen statt einer eigenen namenlosen Organization. Dann hängt jeder Artikel am selben Unternehmen wie Startseite und Stadtseiten. S.
7. **Junghundegruppe-Hero leichter**: Statt `hundetraining_am_nok.webp` (376 KB, 1920 x 2560) die vorhandene `hundetraining_am_nok-1200.webp` (201 KB) nehmen. Halbiert das größte Element im ersten Bildschirm auf Mobil. S.
8. **Kleinigkeiten aus Teil 1** (Neumünster-Doppelsatz, verwaiste CSS) im selben Zug. S.
9. **Nicht tun, obwohl naheliegend**: Rendsburg nicht auf 50 % eigene Sätze treiben (Standort Rendsburg Platz 1 bis 4, Plan sagt halten), keine Course- oder Event-Schemas für die Junghundegruppe (kein Nutzen ohne feste Termine, mehr Pflegeaufwand), keine weitere FAQ auf der Junghundegruppe.
10. **Wirkung messen**: Vergleichswerte aus Plan Abschnitt 6 frühestens drei Wochen nach Ende des Core Updates neu ziehen, zusätzlich die Suchanfragen "junghundekurs", "junghundegruppe", "hundepsychologe" und "leinenaggression" als neue Basis aufnehmen.
