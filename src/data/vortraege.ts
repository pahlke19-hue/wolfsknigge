// Vorträge an Volkshochschulen – zentrale Datenquelle für /vortraege/
//
// PFLEGE:
// - Neuer Termin: Zeile im passenden `veranstalter.termine`-Array ergänzen.
// - Vergangene Termine müssen NICHT gelöscht werden, sie werden automatisch
//   ausgeblendet (beim Build und zusätzlich clientseitig im Browser).
// - `buchungsUrl`: direkter Link zur Kursseite der VHS. Solange leer, wird der
//   Termin ohne Link gerendert (kein toter Link).

export interface Termin {
  /** ISO-Datum, z. B. "2026-10-26" */
  datum: string;
  /** Startzeit, 24h, z. B. "18:00" */
  von: string;
  /** Endzeit, 24h, z. B. "19:30" */
  bis: string;
  /** Muss einem `slug` aus `themen` entsprechen */
  thema: string;
  /** Direkter Link zur Kursseite der VHS (optional) */
  buchungsUrl?: string;
  /** Abweichender Zusatz, z. B. Rahmenveranstaltung */
  hinweis?: string;
}

export interface Veranstalter {
  name: string;
  strasse: string;
  plz: string;
  ort: string;
  /** Allgemeine Website / Kursbereich der VHS */
  website?: string;
  termine: Termin[];
}

export interface Thema {
  slug: string;
  /** Kurzbezeichnung, wie sie im VHS-Programm steht */
  kurz: string;
  /** Werbliche Überschrift */
  headline: string;
  teaser: string;
  inhalte: string[];
}

export const themen: Thema[] = [
  {
    slug: "leinenaggression",
    kurz: "Ursachen & Gründe für Leinenaggression",
    headline: "Warum dein Hund an der Leine ausrastet",
    teaser:
      "Kein böser Hund. Ein überforderter Hund. Wir schauen uns die häufigsten Ursachen hinter Leinenaggression an und was sie über deinen Hund verraten.",
    inhalte: [
      "Was hinter dem Gepöbel steckt: Angst, Frust, Unsicherheit oder schlicht Gelerntes",
      "Warum die Leine das Verhalten verstärkt und derselbe Hund frei oft ganz anders reagiert",
      "Was du in der Begegnung tun kannst und was die Lage nur schlimmer macht",
    ],
  },
  {
    slug: "lernverhalten",
    kurz: "Lernverhalten Hund",
    headline: "So lernt dein Hund wirklich",
    teaser:
      "Warum klappt eine Übung zu Hause, aber nicht mehr auf dem Feldweg? Ein Blick darauf, wie Hunde Zusammenhänge speichern und was Training tatsächlich festigt.",
    inhalte: [
      "Wie Hunde Zusammenhänge knüpfen und warum Wiederholung allein nicht reicht",
      "Warum Gelerntes im Wohnzimmer bleibt und draußen verschwindet",
      "Timing, Belohnung, Kontext: die drei Stellschrauben, die den Unterschied machen",
    ],
  },
  {
    slug: "mensch-hund",
    kurz: "Mensch-Hund-Kommunikation",
    headline: "Dein Hund hört zu. Sendest du auch klar?",
    teaser:
      "Hunde lesen Körpersprache, nicht Wörter. Die meisten Missverständnisse im Alltag entstehen, weil Mensch und Hund aneinander vorbeireden, nicht weil der Hund nicht hört.",
    inhalte: [
      "Was dein Hund tatsächlich liest, während du redest",
      "Die häufigsten Missverständnisse im Alltag und wie sie entstehen",
      "Wie du dich so verständlich machst, dass dein Hund dir folgen kann",
    ],
  },
  {
    slug: "hund-hund",
    kurz: "Hund-Hund-Kommunikation",
    headline: "Was dein Hund seinem Spielpartner wirklich sagt",
    teaser:
      "Knurren ist nicht immer Streit. Beschwichtigung, Spiel und Drohung sehen sich zum Verwechseln ähnlich. Wer die Signale kennt, greift im richtigen Moment ein.",
    inhalte: [
      "Beschwichtigung, Spielaufforderung und Drohung sicher auseinanderhalten",
      "Warum Knurren oft das Gegenteil von Eskalation ist",
      "Wann du eingreifen solltest und wann du dich besser raushältst",
    ],
  },
  {
    slug: "welpe-senior",
    kurz: "Vom Welpen zum Senior",
    headline: "Jede Lebensphase stellt neue Fragen",
    teaser:
      "Vom ersten Tag im neuen Zuhause bis zum grauen Fang: Was dein Hund in welchem Alter braucht und wie du ihn sicher durch jede Phase begleitest.",
    inhalte: [
      "Was der Welpe in den ersten Wochen wirklich braucht und was warten kann",
      "Warum die Pubertät alles auf den Kopf stellt und wieder vorbeigeht",
      "Wie sich Bedürfnisse im Alter verändern und woran du das früh merkst",
    ],
  },
];

export const veranstalter: Veranstalter[] = [
  {
    name: "Förde-vhs Kiel",
    strasse: "Muhliusstraße 29–31",
    plz: "24103",
    ort: "Kiel",
    website: "https://www.foerde-vhs.de/",
    termine: [
      {
        datum: "2026-10-26",
        von: "18:00",
        bis: "19:30",
        thema: "hund-hund",
        buchungsUrl:
          "https://www.foerde-vhs.de/9/kurs/Die-Sprache-der-Hunde-Verhalten-richtig-erkennen-und-verstehen-I/26H12770",
      },
      {
        datum: "2026-11-23",
        von: "18:00",
        bis: "19:30",
        thema: "mensch-hund",
        buchungsUrl:
          "https://www.foerde-vhs.de/9/kurs/Die-Sprache-der-Hunde-Verhalten-richtig-erkennen-und-verstehen-II/26H12771",
      },
      {
        datum: "2026-12-14",
        von: "18:00",
        bis: "19:30",
        thema: "lernverhalten",
        buchungsUrl:
          "https://www.foerde-vhs.de/9/kurs/Die-Sprache-der-Hunde-Verhalten-richtig-erkennen-und-verstehen-III/26H12772",
      },
    ],
  },
  {
    name: "VHS Felde",
    strasse: "Dorfstraße 93",
    plz: "24242",
    ort: "Felde",
    website: "https://www.amt-achterwehr.de/gemeinden/felde/gemeindeeinrichtungen/volkshochschule/kurse/",
    termine: [
      { datum: "2026-10-07", von: "19:00", bis: "20:30", thema: "lernverhalten" },
      { datum: "2026-11-04", von: "19:00", bis: "20:30", thema: "mensch-hund" },
      { datum: "2026-11-27", von: "19:00", bis: "20:30", thema: "welpe-senior" },
    ],
  },
  {
    name: "VHS Rendsburger Ring",
    strasse: "Arsenalstraße 2–10",
    plz: "24768",
    ort: "Rendsburg",
    website: "https://www.vhs-rendsburg.de/",
    termine: [
      { datum: "2026-08-30", von: "13:00", bis: "14:30", thema: "hund-hund", hinweis: "Rendsburger Herbst" },
      { datum: "2026-10-28", von: "19:00", bis: "20:30", thema: "mensch-hund" },
      {
        datum: "2026-11-25",
        von: "19:00",
        bis: "21:00",
        thema: "lernverhalten",
        buchungsUrl:
          "https://www.vhs-rendsburg.de/kurssuche/kurs/Vortrag-Wie-Hunde-lernen-und-warum-sie-manchmal-nicht-hoeren/26H10416",
      },
    ],
  },
  {
    name: "VHS Melsdorf",
    strasse: "Karkkamp 4",
    plz: "24109",
    ort: "Melsdorf",
    website: "https://www.vhs-melsdorf.de/",
    termine: [
      { datum: "2026-10-30", von: "19:00", bis: "20:30", thema: "leinenaggression" },
    ],
  },
];

/** VHS, bei denen Termine feststehen, aber noch nicht ausgeschrieben sind */
export const ausblick = {
  häuser: ["VHS Neumünster", "VHS Bordesholm"],
  ab: "Februar 2027",
};
