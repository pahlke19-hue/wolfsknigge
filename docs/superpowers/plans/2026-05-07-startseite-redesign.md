# Startseite Redesign (Verkaufsfunnel) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Startseite zu einer 14-Sektionen-Verkaufsfunnel-Seite umbauen, die Besucher emotional abholt, durch Problemverhalten-USP positioniert und zum Kontakt führt.

**Architecture:** Vollständige Neufassung von `src/pages/index.astro` in Sektionsreihenfolge (Hero → Press → Pain Points → Statement → Vergleich → Features → Social Proof → Trainer → Prozess → Angebote → Standorte → FAQ → Marquee → CTA). Kleines Update in `src/components/Header.astro` für Blog-Link. Kein neues CSS, keine neuen Abhängigkeiten — nur bestehende Design-Tokens und Klassen.

**Tech Stack:** Astro 4, Tailwind CSS (utility-first über bestehende Config), TypeScript, Vanilla JS für Animationen

---

## Dateien

| Datei | Aktion |
|-------|--------|
| `src/components/Header.astro` | Modify: Blog-Link in Desktop-Nav + Mobile-Menu |
| `src/pages/index.astro` | Full rewrite |

---

## Task 1: Blog-Link in Header.astro

**Files:**
- Modify: `src/components/Header.astro:50-51` (Desktop-Nav nach FAQ-Link)
- Modify: `src/components/Header.astro:103-104` (Mobile-Menu nach FAQ-Link)

- [ ] **Step 1: Blog-Link in Desktop-Nav einfügen**

In `src/components/Header.astro`, nach Zeile 51 (`<a href="/faq" ...>FAQ</a>`), neuen Link einfügen:

```html
<a href="https://wolfsknigge.de/blog" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Blog</a>
```

- [ ] **Step 2: Blog-Link in Mobile-Menu einfügen**

Nach Zeile 104 (`<a href="/faq" ...>FAQ</a>` im Mobile-Bereich), einfügen:

```html
<a href="https://wolfsknigge.de/blog" class="block px-3 py-3 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-orange">Blog</a>
```

- [ ] **Step 3: Visuell prüfen**

`npm run dev` starten (Port 4321). Navigation aufklappen — "Blog"-Link erscheint nach "FAQ", Desktop und Mobile. Klick führt zur Blog-URL.

---

## Task 2: index.astro — Frontmatter & Datenarrays

**Files:**
- Rewrite: `src/pages/index.astro` (Datei komplett neu beginnen — bestehenden Inhalt ersetzen)

- [ ] **Step 1: Frontmatter + alle Datenarrays schreiben**

`src/pages/index.astro` mit folgendem Inhalt beginnen (ersetzt die gesamte bisherige Datei):

```astro
---
import Layout from "../layouts/Layout.astro";

const painPoints = [
  { icon: "😤", title: "Leinenpöbeln", text: "Kaum ein anderer Hund in Sicht und dein Hund dreht komplett durch. Jeder Spaziergang ein Nervenspiel." },
  { icon: "😰", title: "Angst und Panik", text: "Gewitter, Böller, fremde Menschen. Was für andere normal ist, löst bei deinem Hund puren Stress aus." },
  { icon: "🏃", title: "Kein Rückruf", text: "Er kommt. Aber nur wenn er Lust hat. In dem Moment, wo es zählt, ist er weg." },
  { icon: "🌆", title: "Reizüberflutung in der Stadt", text: "Radfahrer, Kinderwagen, Skater. Alles wird zum Trigger. Entspanntes Stadtleben? Fehlanzeige." },
  { icon: "😤", title: "Basics funktionieren nicht", text: "Sitz klappt zu Hause prima. Auf der Straße ist er wie ausgewechselt. Du weißt nicht warum." },
  { icon: "🤷", title: "Überfordert als Ersthundebesitzer", text: "Niemand hat dir erklärt wie das wirklich geht. YouTube-Videos bringen dich nicht weiter." },
];

const features = [
  { nr: "01", icon: "◎", title: "Mobil bei dir vor Ort", text: "Training in deiner Straße, deinem Park. Nicht auf einem fernen Hundeplatz." },
  { nr: "02", icon: "⬡", title: "Spezialist für schwierige Felle", text: "Leinenaggression, Angst, Jagdverhalten. Genau da, wo andere aufhören." },
  { nr: "03", icon: "△", title: "Moderne Lerntheorie", text: "Fair, gewaltfrei und klar. Keine Gewaltmethoden, keine reine Leckerli-Show." },
  { nr: "04", icon: "◐", title: "Welpenstart mit Plan", text: "Sozialisierung im echten Stadtleben statt isolierter Welpenspielgruppe." },
  { nr: "05", icon: "◇", title: "1:1 Coaching", text: "Voller Fokus auf dich und deinen Hund. Maßgeschneidert, nicht von der Stange." },
  { nr: "06", icon: "⊕", title: "4 Standorte, 1 Trainer", text: "Kiel, Rendsburg, Eckernförde, Neumünster. Überall dieselbe Qualität." },
];

const angebote = [
  { title: "Anamnese", subtitle: "Verhaltensberatung", text: "Ausführliche Bestandsaufnahme & individuelle Trainingsplanung.", href: "/anamnesegespraech", image: "/images/anamnese.webp", price: "130 €" },
  { title: "Einzelstunde", subtitle: "1:1 Coaching", text: "Persönliches Training. Flexibel, lösungsorientiert, direkt im Alltag.", href: "/einzelstunde", image: "/images/einzelstunde.webp", price: "90 €" },
  { title: "Welpengruppe", subtitle: "Der perfekte Start", text: "Sozialisierung, Grunderziehung und Gewöhnung an das echte Stadtleben.", href: "/welpengruppe", image: "/images/welpengruppe.webp", price: "25 €" },
  { title: "Grunderziehung", subtitle: "Kleingruppe", text: "Leinenführigkeit, Rückruf und Co. für einen entspannten Alltag.", href: "/grunderziehungsgruppe", image: "/images/grunderziehung.webp", price: "25 €" },
];

const standorte = [
  { city: "Kiel", href: "/", text: "Kiellinie, Schrevenpark, Holtenauer.", image: "/images/kiel.webp" },
  { city: "Rendsburg", href: "/hundeschule-rendsburg", text: "Nord-Ostsee-Kanal, Büdelsdorf, Fockbek.", image: "/images/rendsburg.webp" },
  { city: "Eckernförde", href: "/hundeschule-eckernfoerde", text: "Hafen, Promenade, Hundestrand.", image: "/images/eckernfoerde.webp" },
  { city: "Neumünster", href: "/hundeschule-neumuenster", text: "Einfelder See, Stadtwald, Großflecken.", image: "/images/neumuenster.webp" },
];

const prozess = [
  { step: "01", title: "Kennenlernen", text: "Kostenloses Erstgespräch per Telefon. Wir schauen, ob wir zueinander passen." },
  { step: "02", title: "Anamnese", text: "Ausführliche Bestandsaufnahme bei dir vor Ort. Ich lerne euch im Alltag kennen." },
  { step: "03", title: "Trainingsplan", text: "Individueller Plan mit klaren Zielen, Methoden und realistischem Zeithorizont." },
  { step: "04", title: "Umsetzung", text: "Training dort, wo das Problem entsteht. Konsequent, fair, mit System." },
];

const testimonials = [
  { name: "Jori K.", text: "Die Trainingsanreize haben schnell geholfen und René nimmt sich wirklich Zeit für einen." },
  { name: "Susanne H.", text: "Als Ersthundebesitzer hatten wir viele Fragen, die uns schlüssig beantwortet wurden." },
  { name: "Daniela B.", text: "Dank des Trainings können wir endlich wieder entspannt Gassi gehen." },
  { name: "Jens", text: "Wir bekamen die Leinenaggression bei unserer Herdenschützerin super in den Griff." },
  { name: "Nicole H.", text: "Das Training hat schnell geholfen, sodass bei uns wieder Harmonie herrscht." },
  { name: "Sophia S.", text: "Dank des konsequenten Trainings klappt der Rückruf jetzt perfekt." },
  { name: "Mathias", text: "Wir lernen so viel Wichtiges, das uns super und schnell weiterhilft." },
  { name: "Claudia R.", text: "René hat uns geholfen, die Fehler im Umfeld zu sehen. Jetzt ist der Kleine entspannter." },
];

const vergleich = [
  { topic: "Trainingsort", hundeplatz: "Immer derselbe Hundeplatz", mobil: "Bei dir vor Ort. Dort, wo Probleme entstehen." },
  { topic: "Reizlage", hundeplatz: "Isoliert und eingezäunt", mobil: "Echter Alltag mit Joggern, Autos, anderen Hunden." },
  { topic: "Transfer", hundeplatz: "Funktioniert oft nur auf dem Platz", mobil: "Training findet direkt im Alltag statt." },
  { topic: "Betreuung", hundeplatz: "Große Gruppen, wenig Zeit pro Team", mobil: "1:1 oder kleine Gruppen. Voller Fokus." },
  { topic: "Methodik", hundeplatz: "Schema F für alle Hunde", mobil: "Individueller Plan nach moderner Lerntheorie." },
];

const faq = [
  {
    frage: "Ist mein Hund wirklich ein Fall für einen Trainer?",
    antwort: "Kurze Antwort: Ja, wahrscheinlich. Viele Halter warten zu lange. Ob Leinenpöbeln, Angst oder einfach keine Basics — je früher du anfängst, desto einfacher wird es. Ein kurzes Telefonat kostet nichts und bringt Klarheit."
  },
  {
    frage: "Ich war schon woanders. Warum sollte das hier anders sein?",
    antwort: "Weil wir nicht auf einem Hundeplatz trainieren. Dein Hund lernt genau dort, wo das Problem auftaucht: in deiner Straße, deinem Park, deiner Stadt. Kein Übungsplatz-Effekt, kein Schema F. Was hier funktioniert, funktioniert im echten Leben."
  },
  {
    frage: "Mein Hund ist sehr aggressiv. Geht das überhaupt?",
    antwort: "Genau das ist mein Schwerpunkt. Ich habe mich auf Problemverhalten spezialisiert und jahrelang in diesem Bereich gearbeitet. Aggression hat immer eine Ursache. Die finden wir, und dann gehen wir systematisch ran."
  },
  {
    frage: "Was kostet das Kennenlerngespräch?",
    antwort: "Nichts. Das erste Gespräch ist kostenlos. Wir schauen gemeinsam, ob und wie ich euch helfen kann. Erst dann entscheidest du, ob du weitermachen möchtest."
  },
  {
    frage: "Ich wohne nicht direkt in Kiel. Kommt ihr auch zu mir?",
    antwort: "Ja. Ich bin mobil in einem Umkreis von ca. 35 km rund um Bredenbek aktiv. Das deckt Kiel, Rendsburg, Eckernförde und Neumünster ab. Ruf kurz an, wir klären das."
  },
  {
    frage: "Wie lange dauert es, bis ich Ergebnisse sehe?",
    antwort: "Das hängt vom Problem und deiner Konsequenz ab. Erste Verbesserungen sind oft nach wenigen Einheiten spürbar. Tiefergehende Verhaltensänderungen brauchen Zeit. Ich sage dir nach der Anamnese ehrlich, was realistisch ist."
  },
];
---
```

- [ ] **Step 2: Dev-Server starten und prüfen, dass die Datei kompiliert**

```bash
cd wolfsknigge && npm run dev
```

Erwartetes Ergebnis: Astro Dev-Server startet auf http://localhost:4321 ohne Compile-Fehler. Seite zeigt leere Seite oder Layout-Skeleton — noch kein HTML-Inhalt.

---

## Task 3: Hero-Sektion

**Files:**
- Modify: `src/pages/index.astro` — nach dem schließenden `---` des Frontmatter, Layout-Tag + Hero-Sektion einfügen

- [ ] **Step 1: Hero-HTML einfügen**

Direkt nach dem schließenden `---` des Frontmatter in `index.astro`:

```astro
<Layout title="Mobiles Hundetraining in Kiel | WolfsKnigge">

  <!-- HERO -->
  <section id="hero" class="relative overflow-clip" style="min-height: 100svh; background: #000;">

    <div class="absolute inset-0">
      <img
        src="/images/rene-hero.webp"
        alt=""
        aria-hidden="true"
        id="hero-bg-img"
        class="w-full h-full object-cover"
        style="object-position: center 15%; transform-origin: center; will-change: transform;"
        width="1920" height="1280"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[rgba(10,10,11,0.7)] to-[rgba(10,10,11,0.2)]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.85)] via-[rgba(10,10,11,0.3)] to-transparent"></div>
    <div class="absolute -top-[200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none blob-float" style="background: radial-gradient(circle, rgba(249,115,22,.15), transparent 70%);"></div>

    <div class="relative flex flex-col justify-end" style="min-height: 100svh; padding-bottom: env(safe-area-inset-bottom, 0px);">
      <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-32 lg:pb-28">

        <div id="hero-badge" class="hero-reveal inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/12 text-white font-medium text-[13px] px-4 py-2 rounded-full mb-7">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 ping-slow"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
          </span>
          Mobile Hundeschule · Schleswig-Holstein
        </div>

        <h1 class="font-display font-extrabold tracking-[-0.04em] leading-[0.92] mb-7">
          <span id="hero-line1" class="hero-reveal hero-reveal-d1 block text-[clamp(3rem,9vw,7.5rem)] text-white">Dein Hund dreht durch?</span>
          <span id="hero-line2" class="hero-reveal hero-reveal-d2 block text-[clamp(3rem,9vw,7.5rem)] text-gradient-orange italic">Gut.</span>
          <span id="hero-line3" class="hero-reveal hero-reveal-d3 block text-[clamp(3rem,9vw,7.5rem)] text-white">Dafür bin ich da.</span>
        </h1>

        <p id="hero-sub" class="hero-reveal hero-reveal-d4 text-[clamp(1rem,2vw,1.25rem)] text-white/60 mb-9 leading-relaxed max-w-[540px] font-light">
          Mobiles Hundetraining in Kiel, Rendsburg, Eckernförde &amp; Neumünster.<br class="hidden sm:inline"/>
          <span class="text-white font-medium">Spezialisiert auf Problemverhalten. Mobil in deinem Alltag.</span>
        </p>

        <div id="hero-ctas" class="hero-reveal hero-reveal-d5 flex flex-col sm:flex-row gap-3.5 mb-12">
          <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange text-white font-display font-semibold px-8 py-4 text-[15px] transition-all shadow-[0_0_60px_rgba(249,115,22,0.35)] active:scale-95 sm:hover:scale-[1.03] sm:hover:bg-orange-dark">
            Kostenloses Kennenlernen
            <svg class="w-[18px] h-[18px] sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#angebote" class="inline-flex items-center justify-center gap-2 rounded-full bg-white/6 backdrop-blur border border-white/15 text-white font-display font-semibold px-8 py-4 text-[15px] transition-all sm:hover:bg-white/12">
            Angebote ansehen
          </a>
        </div>

        <div id="hero-stats" class="hero-reveal hero-reveal-d6 flex items-center gap-8 pt-7 border-t border-white/8">
          <div>
            <div class="text-gradient-orange font-display font-extrabold text-2xl leading-none mb-0.5">
              <span class="hero-counter" data-target="150" data-suffix="+">0+</span>
            </div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Kunden-Teams</div>
          </div>
          <div class="w-px h-9 bg-white/10"></div>
          <div>
            <div class="flex items-center gap-1.5 mb-0.5">
              <span class="text-gradient-orange font-display font-extrabold text-2xl leading-none hero-counter" data-target="5" data-decimal="1" data-suffix="">0</span>
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Google</div>
          </div>
          <div class="w-px h-9 bg-white/10"></div>
          <div>
            <div class="font-display font-extrabold text-2xl text-white leading-none mb-0.5">
              <span class="hero-counter" data-target="24" data-suffix="">0</span><span class="text-orange">h</span>
            </div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Antwortzeit</div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 right-6 sm:right-8 text-white/40 flex flex-col items-center gap-1.5">
      <div class="w-px h-10 bg-gradient-to-b from-transparent to-white/30 scroll-line-anim"></div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

http://localhost:4321 — Hero erscheint fullscreen mit Hintergrundbild, Headline "Dein Hund dreht durch? / Gut. / Dafür bin ich da.", Badges, Stats. Noch keine weiteren Sektionen.

---

## Task 4: Bekannt-aus-Strip

**Files:**
- Modify: `src/pages/index.astro` — nach Hero-Sektion, vor Pain Points

> **Hinweis:** Diese Sektion benötigt Logo-Bilddateien. Lege diese in `public/images/` ab:
> - `press-rtl-nord.svg` (oder `.webp`) — RTL Nord Logo
> - `press-landeszeitung.svg` (oder `.webp`) — Landeszeitung Logo
> - `press-kieler-nachrichten.svg` (oder `.webp`) — Kieler Nachrichten Logo
>
> Solange die Dateien fehlen, erscheinen leere `<img>`-Slots. Das ist ok für die Entwicklung.

- [ ] **Step 1: Bekannt-aus-Strip einfügen**

Direkt nach der schließenden `</section>` des Hero:

```astro
  <!-- BEKANNT AUS -->
  <section class="py-10 bg-anthrazit-2 border-b border-white/4">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
      <p class="text-center text-[11px] uppercase tracking-[0.25em] text-white/30 font-semibold mb-8">Bekannt aus</p>
      <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {[
          { src: "/images/press-rtl-nord.svg", alt: "RTL Nord" },
          { src: "/images/press-landeszeitung.svg", alt: "Landeszeitung" },
          { src: "/images/press-kieler-nachrichten.svg", alt: "Kieler Nachrichten" },
        ].map((logo) => (
          <div class="bg-white/4 backdrop-blur border border-white/8 rounded-2xl px-8 py-4 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              class="h-8 w-auto"
              style="filter: grayscale(1) brightness(1.8);"
              loading="lazy"
              width="120" height="32"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

Strip erscheint unter Hero mit drei Glasmorphism-Kästchen. Logos zeigen (wenn Dateien vorhanden) oder leere Slots. Korrekte Höhe und Abstände.

---

## Task 5: Pain Points Sektion

**Files:**
- Modify: `src/pages/index.astro` — nach Bekannt-aus-Strip

- [ ] **Step 1: Pain Points Sektion einfügen**

Nach der schließenden `</section>` des Bekannt-aus-Strips:

```astro
  <!-- PAIN POINTS -->
  <section class="py-16 md:py-32 bg-anthrazit-2">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center max-w-[700px] mx-auto mb-14">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Kommt dir das bekannt vor?</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(2rem,5vw,3.8rem)] font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Du bist nicht allein.
          <span class="block text-gradient-orange">Fast alle starten so.</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {painPoints.map((p, i) => (
          <div class={`reveal reveal-delay-${(i % 3) + 1} group relative bg-anthrazit-3 rounded-[20px] p-7 border border-white/4 hover:border-orange/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden`}>
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange to-orange-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="text-4xl mb-4">{p.icon}</div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-orange transition-colors">{p.title}</h3>
            <p class="text-[14px] text-white/50 leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <div class="text-center">
        <p class="text-white/40 text-base mb-6 font-light">Du musst das nicht alleine durchkämpfen.</p>
        <a href="https://wolfsknigge.de/kontakt" class="inline-flex items-center gap-2 text-orange font-semibold font-display text-[15px] hover:text-orange-dark transition-colors">
          Lass uns kurz reden
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

6 Pain-Point-Karten erscheinen im 3-Spalten-Grid (Desktop), 2-Spalten (Tablet), 1-Spalte (Mobile). Hover-Effekt (orange Top-Border) funktioniert. Texte sind umgangssprachlich, kein m-Dash.

---

## Task 6: Big Statement + Vergleich

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Big Statement einfügen**

Nach Pain Points:

```astro
  <!-- BIG STATEMENT -->
  <section class="relative py-20 md:py-48 bg-anthrazit overflow-hidden noise">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(249,115,22,.08), transparent 60%);"></div>
    <div class="relative max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
      <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-5">Die Idee</span>
      <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(2rem,6vw,4.5rem)] font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
        Dein Hund lebt nicht auf einem Hundeplatz.
        <span class="block text-gradient-orange mt-2">Also trainieren wir auch nicht dort.</span>
      </h2>
      <p class="reveal reveal-delay-2 text-[clamp(1rem,2vw,1.35rem)] text-white/50 max-w-[700px] mx-auto leading-relaxed font-light">
        WolfsKnigge ist mobile Hundeschule aus Überzeugung. Wir trainieren in deiner Straße, deinem Park, deiner City. Genau da, wo dein Hund entspannt funktionieren muss.
      </p>
    </div>
  </section>

  <!-- VERGLEICH -->
  <section class="relative py-16 md:py-32 bg-anthrazit-2 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at top, rgba(249,115,22,.1), transparent 60%);"></div>
    <div class="relative max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Warum mobil?</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1] mb-4">
          Hundeplatz <span class="text-white/30 font-light">vs.</span> <span class="text-gradient-orange">Mobiles Training</span>
        </h2>
      </div>
      <div class="reveal flex flex-col gap-0.5 rounded-[20px] overflow-hidden">
        {vergleich.map((v) => (
          <div class="grid grid-cols-2 bg-anthrazit-3">
            <div class="p-5 border-r border-white/4">
              <div class="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1.5 font-semibold">{v.topic}</div>
              <div class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-white/25 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 16 16"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>
                <span class="text-sm text-white/40">{v.hundeplatz}</span>
              </div>
            </div>
            <div class="p-5" style="background: linear-gradient(135deg, rgba(249,115,22,.08), transparent);">
              <div class="text-[10px] uppercase tracking-[0.15em] text-orange mb-1.5 font-semibold">{v.topic}</div>
              <div class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 16 16"><path d="M3 9l3.5 3.5L13 5"/></svg>
                <span class="text-sm text-white font-medium">{v.mobil}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

Big Statement zentriert auf dunklem Hintergrund mit noise-Textur. Vergleichstabelle darunter: linke Spalte ausgegraut mit X, rechte Spalte orange mit Checkmark.

---

## Task 7: Features mit Big-Number-Pattern

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Features Sektion einfügen**

Nach Vergleich-Sektion:

```astro
  <!-- FEATURES -->
  <section class="py-16 md:py-32 bg-anthrazit">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="max-w-[600px] mb-14">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Was mich anders macht</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          Sechs Gründe, warum <span class="text-gradient-orange">WolfsKnigge</span> funktioniert.
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div class={`reveal reveal-delay-${(i % 3) + 1} group relative bg-anthrazit-2 rounded-3xl p-8 border border-white/5 hover:border-orange/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden`}>
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-orange-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute -bottom-4 -right-4 font-display font-extrabold text-[6rem] leading-none text-white/5 select-none pointer-events-none">{f.nr}</div>
            <div class="relative">
              <div class="text-[32px] mb-5 text-orange/80 font-light">{f.icon}</div>
              <h3 class="font-display font-bold text-xl text-white mb-2.5 group-hover:text-orange transition-colors">{f.title}</h3>
              <p class="text-[15px] text-white/50 leading-relaxed">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

6 Feature-Karten im 3-Spalten-Grid. Riesige halbtransparente Nummern (01-06) im Hintergrund jeder Card sichtbar. Hover zeigt orange Top-Border-Gradient. Kein Überlappen des Texts durch die Nummer.

---

## Task 8: Social Proof Strip mit Google-Logo

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Social Proof Strip einfügen**

Nach Features-Sektion:

```astro
  <!-- SOCIAL PROOF STRIP -->
  <section class="relative bg-anthrazit-2 border-y border-white/4 py-10 overflow-hidden">
    <div class="text-center mb-6">
      <div class="inline-flex items-center gap-2.5">
        <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div class="flex gap-[3px]">
          {[1,2,3,4,5].map(() => (
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          ))}
        </div>
        <span class="text-white font-semibold text-sm">5,0 auf Google · Über 150 betreute Teams</span>
      </div>
    </div>
    <div class="relative">
      <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-anthrazit-2 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-anthrazit-2 to-transparent z-10 pointer-events-none"></div>
      <div class="flex gap-3 animate-marquee whitespace-nowrap">
        {[...testimonials, ...testimonials].map((t) => (
          <div class="inline-flex items-start gap-3 bg-white/4 border border-white/6 rounded-2xl px-5 py-4 min-w-[300px] max-w-[300px] flex-shrink-0">
            <div class="flex-shrink-0 w-9 h-9 rounded-full bg-orange/15 border border-orange/25 flex items-center justify-center text-orange font-display font-bold text-sm">
              {t.name.charAt(0)}
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <div class="flex gap-0.5">
                  {[1,2,3,4,5].map(() => (
                    <svg class="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <span class="text-white text-xs font-semibold">{t.name}</span>
              </div>
              <p class="text-white/55 text-[13px] leading-snug whitespace-normal">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

Google-Logo (4-farbiges SVG) + 5 gelbe Sterne + Text erscheinen über dem Testimonial-Marquee. Marquee scrollt automatisch von rechts nach links. Edge-Fades (links/rechts) blenden Karten weich aus.

---

## Task 9: Trainer Intro + Prozess

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Trainer Intro einfügen**

Nach Social Proof Strip:

```astro
  <!-- TRAINER INTRO -->
  <section class="py-16 md:py-32 bg-anthrazit-2 overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div class="reveal-scale relative">
        <div class="absolute -inset-4 rounded-[28px] blur-[30px] pointer-events-none" style="background: linear-gradient(135deg, rgba(249,115,22,.15), transparent);"></div>
        <img src="/images/rene-hero.webp" alt="René Pahlke mit seinen Hunden" class="relative rounded-3xl w-full" style="aspect-ratio: 4/5; object-fit: cover; object-position: center 15%;" width="600" height="750" loading="lazy" />
        <div class="absolute -bottom-5 -right-5 bg-anthrazit-3 rounded-[20px] p-6 border border-white/6 max-w-[200px] hidden md:block">
          <div class="text-gradient-orange font-display font-extrabold text-4xl">150+</div>
          <div class="text-[13px] text-white/50 mt-1">Teams erfolgreich begleitet</div>
        </div>
      </div>
      <div>
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Dein Trainer</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(2rem,5vw,3.8rem)] font-display font-extrabold text-white tracking-tight mb-7 leading-[1.05]">
          Hi, ich bin <span class="text-gradient-orange">René</span>.
        </h2>
        <div class="space-y-4 text-white/60 leading-relaxed text-base md:text-[16px] reveal reveal-delay-2">
          <p>Ich war selbst mal überfordert. Mein erster Hund Elix hatte drei Vorbesitzer, war in einem schlechten Zustand und ich hatte keine Ahnung was ich tat.</p>
          <p>Heute weiß ich: Kein Hund ist hoffnungslos. Und kein Halter ist schuld, wenn niemand ihm erklärt hat, wie es wirklich geht. <span class="text-orange font-semibold">Genau hier setze ich an.</span></p>
          <p>Über <strong class="text-white">150 betreute Teams</strong> später bin ich spezialisiert auf das, wo andere aufhören. Leinenaggression, Angst, Jagdverhalten. Fair, gewaltfrei und klar.</p>
        </div>
        <a href="/ueber-mich" class="reveal reveal-delay-3 inline-flex items-center gap-2 mt-6 text-orange hover:text-orange-dark font-semibold font-display text-base transition-colors">
          Mehr über mich <span>→</span>
        </a>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Prozess einfügen**

Direkt nach Trainer Intro:

```astro
  <!-- PROZESS -->
  <section class="py-16 md:py-32 bg-anthrazit relative overflow-hidden">
    <div class="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(249,115,22,.08), transparent 60%);"></div>
    <div class="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">So läufts ab</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          In <span class="text-gradient-orange">vier Schritten</span> zum entspannten Alltag.
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        <div class="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent"></div>
        {prozess.map((p, i) => (
          <div class={`reveal reveal-delay-${i+1} text-center`}>
            <div class="relative w-24 h-24 mx-auto mb-6">
              <div class="absolute inset-0 bg-orange/20 rounded-full blur-xl"></div>
              <div class="relative w-24 h-24 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-[28px] font-display font-extrabold text-white shadow-[0_0_60px_rgba(249,115,22,0.25)]">
                {p.step}
              </div>
            </div>
            <h3 class="font-display font-bold text-[22px] text-white mb-2">{p.title}</h3>
            <p class="text-sm text-white/45 leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Im Browser prüfen**

Trainer Intro: Bild links (4/5 Aspect Ratio), Text rechts. Float-Card "150+" sichtbar (Desktop). Prozess-Sektion: 4 Orb-Nummern mit Glow, horizontale Linie verbindet sie auf Desktop.

---

## Task 10: Angebote + Standorte

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Angebote einfügen**

Nach Prozess-Sektion:

```astro
  <!-- ANGEBOTE -->
  <section id="angebote" class="py-16 md:py-32 bg-anthrazit-2">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Meine Angebote</span>
          <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Training, das zu euch <span class="text-gradient-orange">passt</span>.
          </h2>
        </div>
        <a href="/preise" class="reveal reveal-delay-2 text-orange font-semibold text-[15px]">Alle Preise →</a>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {angebote.map((a, i) => (
          <a href={a.href} class={`reveal reveal-delay-${(i % 4) + 1} group relative bg-anthrazit-3 rounded-[20px] overflow-hidden border border-white/4 hover:-translate-y-1.5 transition-all duration-500`}>
            <div class="aspect-[4/5] overflow-hidden relative">
              <img src={a.image} alt={a.title} class="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,11,0.85)] via-[rgba(10,10,11,0.2)] to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 p-5">
                <div class="text-[11px] uppercase tracking-[0.15em] text-orange-glow font-semibold mb-1">{a.subtitle}</div>
                <h3 class="font-display font-bold text-xl sm:text-2xl text-white">{a.title}</h3>
              </div>
              <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3.5 py-1.5 text-[13px] font-display font-bold text-white">
                ab {a.price}
              </div>
            </div>
            <div class="p-5">
              <p class="text-sm text-white/50 leading-relaxed">{a.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Standorte einfügen**

Direkt nach Angebote:

```astro
  <!-- STANDORTE -->
  <section class="py-16 md:py-32 bg-anthrazit">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Mobil unterwegs</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1] mb-3">
          Deine Stadt. <span class="text-gradient-orange">Dein Trainer.</span>
        </h2>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {standorte.map((s, i) => (
          <a href={s.href} class={`reveal reveal-delay-${(i % 4) + 1} group relative rounded-[20px] overflow-hidden aspect-[3/4] hover:-translate-y-1.5 transition-all duration-500`}>
            <img src={s.image} alt={`Hundeschule ${s.city}`} class="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,11,0.9)] via-[rgba(10,10,11,0.4)] to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-orange/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div class="absolute inset-x-0 bottom-0 p-5">
              <h3 class="font-display font-extrabold text-2xl md:text-[28px] text-white mb-1">{s.city}</h3>
              <p class="text-[13px] text-white/60 mb-2 hidden sm:block">{s.text}</p>
              <span class="text-orange-glow font-semibold text-[13px] inline-block group-hover:translate-x-1 transition-transform">Mehr →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Im Browser prüfen**

Angebote: 4 Karten mit Bild, Price-Badge oben rechts, Hover-Scale. Standorte: 4 Stadtkarten, Orange-Overlay beim Hover, Arrow-Animation.

---

## Task 11: FAQ Sektion

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: FAQ Sektion einfügen**

Nach Standorte-Sektion:

```astro
  <!-- FAQ -->
  <section class="py-24 md:py-32 bg-anthrazit-2">
    <div class="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Häufige Fragen</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          Alles, was du <span class="text-gradient-orange">wissen willst.</span>
        </h2>
      </div>
      <div class="reveal space-y-3">
        {faq.map((item) => (
          <details class="group bg-anthrazit-3 border border-white/6 rounded-2xl overflow-hidden open:border-orange/30 transition-all">
            <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-display font-semibold text-white text-base md:text-lg group-open:text-orange transition-colors">
              {item.frage}
              <svg class="w-5 h-5 flex-shrink-0 text-white/40 group-open:rotate-45 group-open:text-orange transition-all duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <div class="px-6 pb-6 text-white/60 leading-relaxed text-[15px]">
              {item.antwort}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Im Browser prüfen**

6 FAQ-Einträge als Accordion. Klick öffnet Antwort, Border wechselt zu Orange, Plus-Icon dreht sich zu X. Texte sind direkt und umgangssprachlich, keine m-Dashes.

---

## Task 12: Marquee-Strip + Final CTA + alle Scripts

**Files:**
- Modify: `src/pages/index.astro` — letzte Sektionen + alle `<script>`-Blöcke + schließendes `</Layout>`

- [ ] **Step 1: Marquee-Strip einfügen**

Nach FAQ:

```astro
  <!-- MARQUEE STRIP -->
  <div class="bg-orange py-4 overflow-hidden">
    <div class="flex animate-marquee whitespace-nowrap gap-0">
      {["Mobil", "Alltagsnah", "Problemverhalten", "Kein Schema F", "150+ Teams", "Gewaltfrei", "Kiel", "Rendsburg", "Eckernförde", "Neumünster", "Mobil", "Alltagsnah", "Problemverhalten", "Kein Schema F", "150+ Teams", "Gewaltfrei", "Kiel", "Rendsburg", "Eckernförde", "Neumünster"].map((word) => (
        <span class="inline-block font-display font-extrabold text-white uppercase tracking-widest text-lg px-8">
          {word} <span class="text-white/40 mx-4">·</span>
        </span>
      ))}
    </div>
  </div>
```

- [ ] **Step 2: Final CTA einfügen**

Nach Marquee-Strip:

```astro
  <!-- FINAL CTA -->
  <section class="relative py-24 md:py-48 bg-anthrazit overflow-hidden noise">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at center, rgba(249,115,22,.18), transparent 60%);"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blob-float pointer-events-none" style="background: rgba(249,115,22,.06);"></div>
    <div class="relative max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
      <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-6">Kostenlos kennenlernen</span>
      <h2 class="reveal reveal-delay-1 text-4xl md:text-[clamp(2.5rem,7vw,5.5rem)] font-display font-extrabold text-white mb-6 tracking-tight leading-[0.95]">
        Bereit, etwas zu<br/>
        <span class="text-gradient-orange">verändern</span>?
      </h2>
      <p class="reveal reveal-delay-2 text-[clamp(1rem,2vw,1.3rem)] text-white/50 mb-10 font-light">Das Kennenlerngespräch ist kostenlos. Antwort innerhalb von 24 Stunden.</p>
      <div class="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3.5 justify-center">
        <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange hover:bg-orange-dark text-white font-display font-semibold px-10 py-[18px] text-[17px] transition-all shadow-[0_0_80px_rgba(249,115,22,0.3)] hover:scale-[1.03] active:scale-95">
          Jetzt loslegen
          <svg class="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <a href="tel:015147736042" class="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 text-white font-display font-semibold px-10 py-[18px] text-[17px] transition-all hover:bg-white/10">
          📞 0151 47736042
        </a>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Scripts + schließendes Layout-Tag einfügen**

Nach Final CTA, alle JS-Animationen und schließendes Tag:

```astro
  <script>
    (() => {
      const els = document.querySelectorAll<HTMLElement>('.hero-reveal');
      els.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
      });

      const animate = () => {
        els.forEach((el) => {
          el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => requestAnimationFrame(animate)));
      } else {
        requestAnimationFrame(() => requestAnimationFrame(animate));
      }

      const heroBg = document.getElementById('hero-bg-img') as HTMLImageElement | null;
      if (heroBg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const onScroll = () => {
          const scrollY = window.scrollY;
          const heroEl = document.getElementById('hero');
          if (!heroEl) return;
          if (scrollY > heroEl.offsetHeight) return;
          const p = scrollY / heroEl.offsetHeight;
          heroBg.style.transform = `scale(1.15) translateY(${p * 120}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }

      const counters = document.querySelectorAll<HTMLElement>('.hero-counter');
      const runCounter = (el: HTMLElement) => {
        const target = parseFloat(el.dataset.target || '0');
        const suffix = el.dataset.suffix ?? '';
        const decimals = parseInt(el.dataset.decimal || '0', 10);
        const duration = 1400;
        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          el.textContent = current.toFixed(decimals).replace('.', ',') + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      setTimeout(() => counters.forEach(runCounter), 750);
    })();
  </script>

</Layout>
```

- [ ] **Step 4: Vollständige Seite im Browser prüfen**

`npm run dev` — komplette Seite von oben nach unten durchscrollen:
- Hero mit Animation läuft
- Bekannt-aus-Strip vorhanden
- Pain-Point-Cards mit Hover
- Big Statement + Vergleichstabelle
- Feature-Cards mit Nummern im Hintergrund
- Testimonial-Marquee mit Google-Logo
- Trainer-Split mit Float-Card
- Prozess-Orbs
- Angebots-Grid
- Standorte-Grid
- FAQ Accordion (aufklappbar)
- Orange Marquee-Strip
- Final CTA mit Buttons

- [ ] **Step 5: Astro Build prüfen**

```bash
npm run build
```

Erwartetes Ergebnis: Build endet ohne Fehler. Warnungen über fehlende Bilder (press-logos) sind ok.

---

## Spec-Abgleich

| Spec-Anforderung | Task |
|-----------------|------|
| Hero mit emotionalem H1 | Task 3 |
| Bekannt-aus-Strip (RTL Nord, Landeszeitung, KN) | Task 4 |
| Pain Points 6 Karten, Problemverhalten-fokussiert | Task 5 |
| Big Statement "Dein Hund lebt nicht auf einem Hundeplatz" | Task 6 |
| Vergleich Hundeplatz vs. Mobil | Task 6 |
| Features mit Big-Number-Pattern | Task 7 |
| Social Proof Strip mit Google-Logo SVG | Task 8 |
| Trainer Intro mit Float-Card "150+" | Task 9 |
| Prozess 4 Schritte mit Orbs | Task 9 |
| Angebote 4 Karten | Task 10 |
| Standorte 4 Städte | Task 10 |
| FAQ Accordion 6 Fragen | Task 11 |
| Marquee-Strip orange | Task 12 |
| Final CTA | Task 12 |
| Blog-Link in Nav | Task 1 |
| Kein m-Dash in Texten | alle Tasks |
| Umgangssprachlicher Ton | alle Tasks |
