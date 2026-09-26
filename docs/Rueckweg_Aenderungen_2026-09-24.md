# Änderungen 24./25.09.2026 und wie du sie zurücknimmst

Erster Check: 08.10.2026 (Kalender-Erinnerung). Vorher nichts anfassen, Google braucht rund 2 Wochen zum Lernen.

Woran du merkst, dass etwas schiefläuft (Google Ads → Kampagnen, Zeitraum „letzte 14 Tage“ gegen die 14 Tage davor):
- Kontakte (Conversions) fallen deutlich, obwohl Klicks gleich bleiben
- Kosten pro Kontakt steigen über 20 €
- Kiel oder Einzeltraining bekommen kaum noch Einblendungen

## Google Ads

| Nr. | Was geändert | Vorher | Rückweg |
|---|---|---|---|
| 1 | Anzeigengruppen Welpen, Problemverhalten & Aggression, Rückruf & Jagen pausiert (Kampagne „Themen & Leistungen“) | aktiv | Kampagnen → Anzeigengruppen → Häkchen setzen → Bearbeiten → Aktivieren |
| 2 | Gemeinsames Budget „WK Regionen + Themen (gemeinsam)“ 5,00 €/Tag für Regionen und Themen | Regionen 3,30 €, Themen 1,50 € einzeln | Kampagne → Einstellungen → Budget → „Individuelles Kampagnenbudget verwenden“ → 3,30 bzw. 1,50 € eintragen. Danach Tools → Gemeinsame Budgets → Liste entfernen |
| 3 | Neumünster: Phrase-Keywords pausiert („hundeschule neumünster“, „hundetrainer neumünster“, „hundetraining neumünster“, „mobiler hundetrainer neumünster“). Exact-Keywords laufen weiter | aktiv | Keywords → Suche „neum“ → Häkchen → Bearbeiten → Aktivieren |
| 4 | Brand Safe: Budget 0,50 €/Tag, Gebotsstrategie „Anteil an möglichen Impressionen, ganz oben, 90 %, max. CPC 0,50 €“ | 0,20 €/Tag, „Klicks maximieren“ mit max. CPC 1,00 € | Kampagne Brand Safe → Einstellungen → Budget 0,20 €, Gebote → „Klicks“, max. CPC 1,00 € |
| 5 | Keywords „hundetrainerin …“ (6 Stück) pausiert, Phrase-Keyword „hundeschule kiel“ pausiert (Exact bleibt) | aktiv | Keywords → Suche → Häkchen → Bearbeiten → Aktivieren |
| 6 | Neue Anzeigen mit Du-Ansprache in 8 Anzeigengruppen, alte Anzeigen pausiert (nicht gelöscht) | alte Sie-/Wir-Texte | Kampagnen → Anzeigen → alte Anzeige aktivieren, neue pausieren |
| 7 | Ausschlussliste „WK Ausschluesse Suche 2026-09“ (30 Begriffe) an Regionen + Themen | keine Liste | Tools → Gemeinsam genutzte Bibliothek → Ausschlusslisten → Liste öffnen → einzelne Begriffe entfernen oder Liste von der Kampagne lösen |

## Google Tag Manager

| Was | Vorher | Rückweg |
|---|---|---|
| Version 4: Clarity feuert nur noch mit Einwilligung (analytics_storage) | Version 3 („Conversion-Tracking GA4+Klicks+Meta“) | tagmanager.google.com → Container wolfsknigge.de → Versionen → Version 3 → Aktionen → Veröffentlichen. Nur zurücknehmen, wenn auch der Consent-Commit (unten) zurückgenommen ist, sonst würde Clarity ohne Einwilligung laufen |

## Website (Ordner „Neue Website“, erst live nach deinem Push)

| Commit | Was | Rückweg (Terminal im Ordner) |
|---|---|---|
| 57e058d | Titles/Descriptions/H1 der Stadtseiten, Stadt-Links im Startseiten-Hero | `git revert 57e058d` dann `git push` |
| 80f7658 | Startseiten-Title „Mobile Hundeschule Schleswig-Holstein“ statt „Kiel & Umgebung“ | `git revert 80f7658` dann `git push` |
| 3a3107c | Advanced Consent Mode (GTM lädt immer, cookielose Pings) + Datenschutzerklärung | `git revert 3a3107c` dann `git push` |

Jeder Commit lässt sich einzeln zurücknehmen. Netlify spielt den Revert automatisch aus.

## Offen / später

- In 2 bis 4 Wochen: Gebotsstrategie „Regionen“ und „Themen“ auf „Conversions maximieren“, wenn pro Monat mindestens 15 Conversions gezählt werden
- Kiel-Seite: nach 4 bis 8 Wochen in der Search Console prüfen, ob /hundeschule-kiel/ für „hundeschule kiel“ nach vorn kommt. Wenn die Startseite nur abrutscht und die Kiel-Seite nicht aufholt: Commit 80f7658 zurücknehmen
- Kontohinweis „Confirmation of advertising funding source required“ (Google Ads → Verwaltung) selbst erledigen

## Nachtrag 25.09.2026

| Was | Rückweg |
|---|---|
| Alle 8 neuen Anzeigen auf Anzeigeneffektivität „Sehr gut“ gebracht: mehr Keyword-Titel (z. B. „Hundetraining Kiel“, „Hundeschule Gettorf“, „Hundetrainer Einzelstunden“), bei Bredenbek Textzeilen mit Ortsnamen | Alte Anzeige der jeweiligen Gruppe aktivieren, neue pausieren |
| Brand Safe: Sitelinks FAQ, Instagram, Kontakt & Termin ergänzt (vorher 3, jetzt 6) | Kampagne Brand Safe → Assets → Sitelinks → die drei entfernen |

Sitelink „Über René WolfsKnigge“ in Regionen, Themen und Brand: Zeile „Ihr zertifizierter Trainer.“ ersetzt durch „Dein Hundetrainer aus Bredenbek.“ (Rückweg: Assets → Sitelink bearbeiten). Google Ads verlangt bis 15.10. einen Passkey für sensible Aktionen (Banner in Google Ads → „Passkey erstellen“, selbst erledigen).
