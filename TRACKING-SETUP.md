# Conversion-Tracking Setup: Google Ads + GTM (Stand 08.07.2026)

Container: GTM-NQ89PJT2 · GA4: G-3K8W7MPKXE · Domain: wolfsknigge.de

## Was die Website jetzt liefert (Code, bereits erledigt)

1. `/danke` = nur noch Buchungsbestätigung (123Hundeschule leitet nach Kauf hierhin)
2. `/thanks-formular` = Bestätigung Kontaktformular (Formular zeigt wieder hierhin, wie früher bei Hostinger)
3. Klick-Events landen im dataLayer: `contact_call` (tel:), `contact_whatsapp` (wa.me), `contact_email` (mailto:), `booking_portal_click` (Link zum 123Hundeschule-Portal)
4. CSP erlaubt alle Google-Ads-Domains (inkl. frame-src td.doubleclick.net, das fehlte vorher komplett)
5. Datenschutzerklärung hat jetzt einen Google-Ads-Abschnitt

Wichtig: GTM lädt erst nach Klick auf "Akzeptieren" im Cookie-Banner. Ohne Einwilligung wird nichts gemessen (bewusste DSGVO-Entscheidung, siehe letzter Abschnitt).

## Schritt 1: Conversion-Aktionen in Google Ads anlegen

Google Ads → Ziele → Conversions → Zusammenfassung → "+ Neue Conversion-Aktion" → "Website" → Domain scannen → unten "Conversion-Aktionen manuell hinzufügen". Vier Aktionen anlegen:

| # | Name | Kategorie | Wert (Vorschlag) | Zählung |
|---|------|-----------|------------------|---------|
| 1 | Buchung | Termin buchen (oder Kauf) | 80 € | Jede |
| 2 | Formular-Anfrage | Lead einreichen | 25 € | Eine |
| 3 | Anruf-Klick | Kontakt | 25 € | Eine |
| 4 | WhatsApp-Klick | Kontakt | 25 € | Eine |

Werte sind Schätzwerte für Smart Bidding, keine Pflicht; lieber grobe Werte als keine.

Danach bei jeder Aktion: "Tag selbst einrichten" → "Google Tag Manager verwenden" → **Conversion-ID** (AW-XXXXXXXXX, bei allen gleich) und **Conversion-Label** (pro Aktion unterschiedlich) notieren.

Hinweis: Anrufe direkt aus der Anzeige (Anruf-Assets) trackt Google Ads separat, dafür ist nichts nötig. Aktion 3 misst Klicks auf die Telefonnummer auf der Website.

## Schritt 2: GTM — Conversion Linker (Pflicht)

tagmanager.google.com → Container GTM-NQ89PJT2 → Tags → Neu:

1. Tag-Typ: "Conversion-Verknüpfung" (Conversion Linker)
2. Trigger: "Alle Seiten" (All Pages)
3. Name: `Conversion Linker – Alle Seiten` → Speichern

Ohne dieses Tag wird der Klick auf die Anzeige (gclid) nicht als Cookie gespeichert und die Conversions auf /danke können der Kampagne nicht zugeordnet werden.

## Schritt 3: GTM — vier Google-Ads-Conversion-Tags

Für jede Aktion aus Schritt 1: Tags → Neu → Tag-Typ "Google Ads-Conversion-Tracking" → Conversion-ID + jeweiliges Label eintragen. Trigger:

| Tag | Trigger-Typ | Bedingung |
|-----|-------------|-----------|
| Ads – Buchung | Seitenaufruf | Page Path enthält `/danke` (vorhandenen Trigger wiederverwenden) |
| Ads – Formular | Seitenaufruf | Page Path enthält `/thanks-formular` (vorhandenen Trigger wiederverwenden) |
| Ads – Anruf-Klick | Benutzerdefiniertes Ereignis | Ereignisname `contact_call` |
| Ads – WhatsApp-Klick | Benutzerdefiniertes Ereignis | Ereignisname `contact_whatsapp` |

## Schritt 4 (empfohlen): GA4-Events für die Klicks

Zwei neue Tags vom Typ "Google Analytics: GA4-Ereignis", Mess-ID `G-3K8W7MPKXE`:

1. Ereignisname `contact_call`, Trigger: benutzerdefiniertes Ereignis `contact_call`
2. Ereignisname `contact_whatsapp`, Trigger: benutzerdefiniertes Ereignis `contact_whatsapp`

Optional genauso: `contact_email` und `booking_portal_click` (nur Reporting, keine Ads-Conversion).
In GA4 unter Verwaltung → Ereignisse: `buchung_erhalten`, `formular_abschluss`, `contact_call`, `contact_whatsapp` als Schlüsselereignisse markieren.

## Schritt 5: Microsoft Clarity (läuft jetzt)

Das Clarity-Tag (Projekt `wlrewsfmyd`) liegt bereits im Container und feuert auf allen Seiten. Die CSP hat clarity.ms bisher blockiert, das ist jetzt freigegeben (`www.clarity.ms`, `*.clarity.ms`, `c.bing.com`). Datenschutzerklärung hat einen Clarity-Abschnitt. Nach dem nächsten Deploy liefert Clarity Heatmaps und Session-Recordings, sobald Besucher den Banner akzeptieren. Nichts weiter zu tun, nur im Tag-Assistant kurz prüfen, dass keine clarity.ms-Requests mehr blockiert werden.

## Schritt 5b: Meta-Pixel einrichten

Der Meta-Pixel ist bisher NICHT installiert (die alte Datenschutzerklärung nannte ihn nur). CSP und DSE sind vorbereitet.

1. business.facebook.com → Events-Manager → Datenquellen → falls noch kein Pixel: "+ Verknüpfen" → Web → Pixel benennen (z.B. "Wolfsknigge Website"). **Pixel-ID notieren** (15-16 Ziffern).
2. GTM → Tags → Neu → Tag-Typ "Individuelles HTML". Basis-Pixel-Code aus dem Events-Manager einfügen (der `fbq('init', 'DEINE-PIXEL-ID'); fbq('track','PageView');`-Block). Trigger: "All Pages". Consent-Einstellungen des Tags: "Zusätzliche Einwilligung erforderlich für: ad_storage" setzen.
3. Optional Events wie beim Ads-Tracking: Individuelles-HTML-Tag mit `fbq('track','Lead');` auf Trigger `/thanks-formular`, und `fbq('track','Contact');` auf `contact_call` / `contact_whatsapp`.

Meta-Pixel und Google Ads teilen sich dieselben dataLayer-Events, du kannst also dieselben Trigger wiederverwenden.

## Schritt 6: Testen mit Tag Assistant, dann VERÖFFENTLICHEN

1. GTM → "In Vorschau ansehen" → `https://wolfsknigge.de` verbinden
2. Cookie-Banner mit "Akzeptieren" bestätigen (sonst lädt GTM gar nicht!)
3. Telefonnummer anklicken → im Tag Assistant muss Event `contact_call` erscheinen und "Ads – Anruf-Klick" feuern
4. WhatsApp-Button genauso prüfen
5. Kontaktformular testweise absenden → landet auf /thanks-formular → "Ads – Formular" feuert
6. `/danke` direkt aufrufen → "Ads – Buchung" feuert (für den Test ok)
7. Oben rechts **"Senden" → Veröffentlichen**. Häufigster Fehler: Änderungen nur gespeichert, nie veröffentlicht.

## Schritt 7: 123Hundeschule-Weiterleitung verifizieren

Im Portal-Admin prüfen: Weiterleitung nach erfolgreicher Buchung/Zahlung = `https://wolfsknigge.de/danke`. Am besten einmal mit einer Testbuchung durchspielen (vorher Cookie-Banner auf wolfsknigge.de akzeptiert haben).

## Schritt 8: Google Ads auf Conversions umstellen

1. Ziele → Conversions: Status der vier Aktionen muss nach den Tests auf "Aktiv" wechseln (bis zu 24 h Verzögerung)
2. Buchung, Formular-Anfrage, Anruf-Klick, WhatsApp-Klick als **primäre** Aktionen belassen (zählen in die Spalte "Conversions")
3. Kampagne → Einstellungen → Gebotsstrategie → "Conversions maximieren". Faustregel: Smart Bidding arbeitet ab ca. 15-30 Conversions pro Monat vernünftig. Solange weniger ankommt, bei "Klicks maximieren" bleiben und Conversions nur beobachten.

## Bekannte Grenze: Basic Consent Mode

GTM lädt nur nach aktiver Einwilligung. Realistisch fehlen dadurch 30-50 % der Conversions (Banner abgelehnt oder ignoriert). Alternative wäre der "Advanced Consent Mode": GTM lädt immer, sendet ohne Einwilligung nur cookielose Pings, Google modelliert fehlende Conversions hoch. Bringt deutlich mehr Signal für Smart Bidding, ist in Deutschland aber rechtlich umstritten. Aktuell bleibt die strikte Variante; Umbau wäre klein, Entscheidung liegt bei dir.
