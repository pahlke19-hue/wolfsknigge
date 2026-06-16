# Über-Mich & Grunderziehungsgruppe Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Beide Seiten (`ueber-mich.astro` und `grunderziehungsgruppe.astro`) vollständig auf den dark-Style der `einzelstunde.astro` umstellen — neue Sektionsreihenfolge, neue Sektionen, Bilder, FAQ-Akkordeon, Soft-Bridge.

**Architecture:** Beide Seiten sind eigenständige Astro-Pages ohne gemeinsame Komponenten. Alle Änderungen bleiben in den jeweiligen `.astro`-Dateien. Kein neuer Build-Step, keine neuen Dependencies.

**Tech Stack:** Astro (Static Site Generator), Tailwind CSS v4 (utility-first, custom properties in `global.css`), Vanilla JS (Parallax, Reveal, Akkordeon)

---

## File Map

| Datei | Aktion |
|---|---|
| `src/pages/ueber-mich.astro` | Vollständig ersetzen (neue Sektionsreihenfolge + dark-Style) |
| `src/pages/grunderziehungsgruppe.astro` | Vollständig ersetzen (neues Design, neue Sektionen) |

Keine anderen Dateien werden geändert. `global.css` und `Layout.astro` bleiben unberührt.

---

## Referenz: Wichtige Klassen aus `global.css`

Diese Klassen sind in `global.css` definiert und können direkt genutzt werden:
- `.reveal` / `.reveal-delay-1/2/3/4` — Scroll-Reveal (opacity+translateY, triggered via IntersectionObserver in Layout)
- `.reveal-scale` — Scroll-Reveal mit scale-Effekt
- `.blob-float` / `.blob-float-rev` — Float-Animation für Hintergrund-Blobs
- `.animate-marquee` — Endlos-Marquee (60s, 30s mobile)
- `.text-gradient-orange` — Animierter Orange-Gradient-Text
- `.shine` — Shine-Sweep-Hover auf Buttons
- `.ping-slow` — Pulsing-Ring für die Tag-Pill-Dots
- `.noise` — Rauschtextur-Overlay (falls in Layout definiert — prüfen)

Tailwind Custom Colors: `orange`, `orange-dark`, `anthrazit`, `anthrazit-2`, `anthrazit-3`, `anthrazit-4`, `tuerkis`, `tuerkis-dark`

---

## Task 1: `ueber-mich.astro` — Hero + Big Statement

**Files:**
- Modify: `src/pages/ueber-mich.astro` (komplett ersetzen, beginnend mit Frontmatter + Hero + Big Statement)

- [ ] **Schritt 1: Frontmatter + Datenkonstanten ersetzen**

Ersetze den gesamten Inhalt von `ueber-mich.astro` mit folgendem Start (Frontmatter + Daten, die in späteren Tasks ergänzt werden):

```astro
---
import Layout from "../layouts/Layout.astro";

const skills = [
  { icon: "🎓", title: "1,5 Jahre Ausbildung", text: "Intensivausbildung bei Kynologisch gGmbH – wissenschaftlich fundiert, nicht nur Theorie." },
  { icon: "⚖️", title: "§ 11 Sachkunde", text: "Geprüfter Sachkundenachweis nach § 11 TSchG. Nicht jeder Trainer hat das." },
  { icon: "🔬", title: "Lerntheorie-Basis", text: "Alle vier Quadranten der Lerntheorie – situationsgerecht und ohne Dogmatismus." },
  { icon: "📈", title: "150+ Teams", text: "Über 150 erfolgreich begleitete Hunde-Mensch-Teams seit Gründung der Hundeschule." },
  { icon: "🐺", title: "Problemverhalten", text: "Leinenaggression, Angst, Jagdverhalten – genau da, wo andere Trainer aufhören." },
  { icon: "🔄", title: "Ständige Weiterbildung", text: "Aggressionsverhalten, Körpersprache, Frustrationstoleranz – Stillstand ist Rückschritt." },
];

const weiterbildung = [
  { datum: "April 2025", titel: "Aggressionsverhalten", art: "Praxisseminar" },
  { datum: "August 2025", titel: "Körpersprache Hund", art: "Praxisseminar" },
  { datum: "August 2025", titel: "Frustrationstoleranz", art: "Intensiv-Onlinekurs" },
];

const dozenten = [
  "Michael Eichhorn & Ute Heberer",
  "Dr. Marie Nitzschner",
  "Nora Brede & Charly Arzberger",
  "Franziska Ferenz u.v.m.",
];

const angebote = [
  { icon: "🎯", title: "Einzelstunde", text: "1:1, mobil, dort wo's brennt.", href: "/einzelstunde" },
  { icon: "👥", title: "Grunderziehungsgruppe", text: "Kleine Gruppe, alltagsnah, max. 7 Teams.", href: "/grunderziehungsgruppe" },
  { icon: "💬", title: "Anamnesegespräch", text: "Noch unsicher? Erstgespräch, kostenlos.", href: "/anamnesegespraech" },
];
---
```

- [ ] **Schritt 2: Hero-Section einfügen**

Füge direkt nach dem Frontmatter-Block ein:

```astro
<Layout title="Über mich – René Pahlke | WolfsKnigge" description="Hundetrainer für Kiel, Rendsburg, Neumünster & Eckernförde. Spezialisiert auf Problemverhalten — fair, fundiert, gewaltfrei. §11 Sachkunde, 150+ Teams.">

  <!-- HERO -->
  <section class="relative overflow-clip" style="min-height: 100svh; background: #000;">

    <div class="absolute inset-0">
      <img
        src="/images/hundeschule_in_sehestedt.webp"
        alt=""
        aria-hidden="true"
        id="hero-bg-img-ueber"
        class="w-full h-full object-cover"
        style="object-position: center 30%; transform-origin: center; will-change: transform;"
        width="1920" height="1280"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[rgba(10,10,11,0.65)] to-[rgba(10,10,11,0.15)]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.9)] via-[rgba(10,10,11,0.35)] to-transparent"></div>
    <div class="absolute -top-[200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none blob-float" style="background: radial-gradient(circle, rgba(249,115,22,.15), transparent 70%);"></div>

    <div class="relative flex flex-col justify-end text-white" style="min-height: 100svh; padding-bottom: env(safe-area-inset-bottom, 0px);">
      <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-32 lg:pb-28">

        <div class="hero-reveal inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/12 text-white font-medium text-[13px] px-4 py-2 rounded-full mb-7">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 ping-slow"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
          </span>
          Dein Trainer · Kiel · Rendsburg · Neumünster · Eckernförde
        </div>

        <h1 class="font-display font-extrabold tracking-[-0.04em] leading-[0.92] mb-7">
          <span class="hero-reveal hero-reveal-d1 block text-[clamp(3rem,9vw,7.5rem)] text-white">Hi, ich bin</span>
          <span class="hero-reveal hero-reveal-d2 block text-[clamp(3rem,9vw,7.5rem)] text-gradient-orange italic">René.</span>
        </h1>

        <p class="hero-reveal hero-reveal-d3 text-[clamp(1rem,2vw,1.25rem)] text-white/60 mb-9 leading-relaxed max-w-[540px] font-light">
          Hundetrainer für Kiel, Rendsburg, Neumünster & Eckernförde.
          <span class="text-white font-medium">Spezialisiert auf Problemverhalten — fair, fundiert, gewaltfrei.</span>
        </p>

        <div class="hero-reveal hero-reveal-d4 flex flex-col sm:flex-row gap-3.5 mb-12">
          <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange text-white font-display font-semibold px-8 py-4 text-[15px] transition-all shadow-[0_0_60px_rgba(249,115,22,0.35)] active:scale-95 sm:hover:scale-[1.03] sm:hover:bg-orange-dark">
            Kennenlerngespräch
            <svg class="w-[18px] h-[18px] sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#geschichte" class="inline-flex items-center justify-center gap-2 rounded-full bg-white/6 backdrop-blur border border-white/15 text-white font-display font-semibold px-8 py-4 text-[15px] transition-all sm:hover:bg-white/12">
            Meine Geschichte
          </a>
        </div>

        <div class="hero-reveal hero-reveal-d5 flex items-center gap-8 pt-7 border-t border-white/8">
          <div>
            <div class="text-gradient-orange font-display font-extrabold text-2xl leading-none mb-0.5">1,5J</div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Ausbildung</div>
          </div>
          <div class="w-px h-9 bg-white/10"></div>
          <div>
            <div class="font-display font-extrabold text-2xl text-white leading-none mb-0.5">150<span class="text-orange">+</span></div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Teams</div>
          </div>
          <div class="w-px h-9 bg-white/10"></div>
          <div>
            <div class="font-display font-extrabold text-2xl text-white leading-none mb-0.5">§<span class="text-orange">11</span></div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Sachkunde</div>
          </div>
        </div>

      </div>
    </div>
  </section>

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
      const heroBg = document.getElementById('hero-bg-img-ueber') as HTMLImageElement | null;
      if (heroBg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const onScroll = () => {
          const scrollY = window.scrollY;
          const heroEl = heroBg.closest('section');
          if (!heroEl) return;
          if (scrollY > heroEl.offsetHeight) return;
          const p = scrollY / heroEl.offsetHeight;
          heroBg.style.transform = `scale(1.12) translateY(${p * 100}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }
    })();
  </script>
```

- [ ] **Schritt 3: Big Statement einfügen**

Direkt nach dem `</script>`-Tag:

```astro
  <!-- BIG STATEMENT -->
  <section class="relative py-32 md:py-48 bg-anthrazit overflow-hidden noise">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(249,115,22,.08), transparent 60%);"></div>
    <div class="relative max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
      <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-5">Mein Antrieb</span>
      <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(2rem,6vw,4.5rem)] font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
        Nicht durch Bücher gelernt.
        <span class="block text-gradient-orange mt-2">Sondern durch das Leben.</span>
      </h2>
      <p class="reveal reveal-delay-2 text-[clamp(1rem,2vw,1.35rem)] text-white/50 max-w-[700px] mx-auto leading-relaxed font-light">
        Ich war selbst mal überfordert mit meinem Hund. Genau deshalb verstehe ich, was du gerade durchmachst — und genau deshalb verurteile ich niemanden.
      </p>
    </div>
  </section>
```

- [ ] **Schritt 4: Dev-Server starten und Hero visuell prüfen**

```bash
cd wolfsknigge && npm run dev
```

Öffne `http://localhost:4321/ueber-mich`. Prüfe: Parallax-BG sichtbar, Tag-Pill mit Pulsing-Dot, H1 zweizeilig, Stat-Strip, Big Statement dunkel mit orange Text.

---

## Task 2: `ueber-mich.astro` — Lehrmeister Elix & Suka (mit Fotos)

**Files:**
- Modify: `src/pages/ueber-mich.astro`

- [ ] **Schritt 1: Lehrmeister-Sektion einfügen**

Nach dem Big-Statement-Block:

```astro
  <!-- LEHRMEISTER ELIX & SUKA -->
  <section id="geschichte" class="relative py-24 md:py-32 bg-anthrazit-2 text-white overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.10),transparent_60%)]"></div>
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-orange/8 rounded-full blur-3xl blob-float"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-4">Meine größten Lehrmeister</span>
        <h2 class="reveal reveal-delay-1 text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] mb-6">
          Zwei Hunde. <span class="text-gradient-orange">Unendlich viel</span> gelernt.
        </h2>
        <p class="reveal reveal-delay-2 text-lg text-white/50 font-light">
          Keine Bücher haben mich so viel gelehrt wie diese zwei. Sie sind der Grund, warum ich heute tue, was ich tue.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <!-- Elix -->
        <div class="reveal group relative bg-anthrazit-3 rounded-3xl overflow-hidden border border-white/5 hover:border-orange/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange/10">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-orange-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src="/images/elix_mit_maulkorb.webp"
            alt="Elix – Deutscher Schäferhund mit Maulkorb"
            class="w-full object-cover rounded-t-3xl"
            style="aspect-ratio: 4/3;"
            loading="lazy"
            width="800" height="600"
          />
          <div class="p-8 md:p-10">
            <div class="flex items-start justify-between mb-6">
              <div>
                <div class="text-xs uppercase tracking-[0.3em] text-orange font-semibold mb-2">Lehrmeister #01</div>
                <h3 class="font-display font-extrabold text-3xl md:text-4xl text-white">Elix</h3>
                <p class="text-white/40 mt-1">Deutscher Schäferhund · Sommer 2021</p>
              </div>
              <div class="text-7xl md:text-8xl font-display font-extrabold text-white/5 select-none leading-none -mt-2">01</div>
            </div>
            <div class="space-y-4 text-white/60 leading-relaxed">
              <p>Als Elix in mein Leben trat, hatte er bereits eine Odyssee hinter sich. In seinen ersten zwei Lebensjahren hatte er <strong class="text-white">drei Vorbesitzer</strong> und war in einem schlechten körperlichen Zustand.</p>
              <p>Ich hatte damals wenig Erfahrung und war – ehrlich gesagt – <strong class="text-orange">völlig überfordert</strong>. Durch ihn musste ich lernen, echte Führung zu übernehmen, ohne unfair zu werden.</p>
            </div>
            <div class="mt-6 inline-flex items-center gap-2 text-orange text-sm font-semibold">
              <span class="w-5 h-px bg-orange"></span>
              Der Überforderer
            </div>
          </div>
        </div>

        <!-- Suka -->
        <div class="reveal reveal-delay-1 group relative bg-anthrazit-3 rounded-3xl overflow-hidden border border-white/5 hover:border-tuerkis/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-tuerkis/10">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tuerkis to-tuerkis-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src="/images/suka_am_strand.webp"
            alt="Suka – Malinois am Strand"
            class="w-full object-cover rounded-t-3xl"
            style="aspect-ratio: 4/3;"
            loading="lazy"
            width="800" height="600"
          />
          <div class="p-8 md:p-10">
            <div class="flex items-start justify-between mb-6">
              <div>
                <div class="text-xs uppercase tracking-[0.3em] text-tuerkis font-semibold mb-2">Lehrmeisterin #02</div>
                <h3 class="font-display font-extrabold text-3xl md:text-4xl text-white">Suka</h3>
                <p class="text-white/40 mt-1">Malinois-Hündin · Ehemaliger Polizeianwärter</p>
              </div>
              <div class="text-7xl md:text-8xl font-display font-extrabold text-white/5 select-none leading-none -mt-2">02</div>
            </div>
            <div class="space-y-4 text-white/60 leading-relaxed">
              <p>Suka kam mit knapp 1,5 Jahren zu mir, nachdem sie ca. 4–5 Monate eine <strong class="text-white">polizeiliche Grundausbildung</strong> durchlaufen hatte, aber aus gesundheitlichen Gründen ausgemustert wurde.</p>
              <p>Sie brachte den „Arbeitsmodus" in den Alltag und stellte mich vor ganz neue Herausforderungen. <strong class="text-tuerkis">Ruhe zu lernen</strong>, wenn man eigentlich für Action gezüchtet wurde, ist ein harter Weg.</p>
            </div>
            <div class="mt-6 inline-flex items-center gap-2 text-tuerkis text-sm font-semibold">
              <span class="w-5 h-px bg-tuerkis"></span>
              Die Spezialistin
            </div>
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div class="reveal mt-12 max-w-3xl mx-auto text-center">
        <blockquote class="text-2xl md:text-3xl font-display font-bold text-white/80 leading-[1.3]">
          "Meine Hunde haben mich gelehrt, dass es kein <span class="text-gradient-orange">'Schema F'</span> gibt. Genau deshalb verurteile ich niemanden, der Probleme hat."
        </blockquote>
        <cite class="not-italic text-white/30 mt-4 inline-block text-sm uppercase tracking-wider">— René Pahlke</cite>
      </div>
    </div>
  </section>
```

- [ ] **Schritt 2: Visuell prüfen**

Beide Cards sichtbar mit Fotos oben, Text unten, Hover-Border orange/türkis.

---

## Task 3: `ueber-mich.astro` — Erfahrung + Marquee + Ausbildung

**Files:**
- Modify: `src/pages/ueber-mich.astro`

- [ ] **Schritt 1: Erfahrung mit Problemhunden einfügen**

Nach der Lehrmeister-Sektion:

```astro
  <!-- ERFAHRUNG MIT PROBLEMHUNDEN -->
  <section class="py-24 md:py-32 bg-anthrazit overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-4">Praxiserfahrung</span>
        <h2 class="reveal reveal-delay-1 text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.05] mb-8">
          Mich schockt so schnell
          <span class="block text-gradient-orange">nichts mehr.</span>
        </h2>
        <div class="space-y-5 text-white/60 leading-relaxed text-lg reveal reveal-delay-2">
          <p>Jahrelange Arbeit in einer renommierten <strong class="text-white">Hundeschule & Pension</strong> sowie im <strong class="text-white">Tierschutz</strong> haben mich geprägt.</p>
          <p>Ich habe Besitzer begleitet, die durch <strong class="text-white">Beißvorfälle</strong> völlig überfordert waren. Ich habe Hunde gesehen, die aufgegeben wurden – und Hunde, die noch eine Chance bekommen haben.</p>
          <p>Diese Erfahrung macht den Unterschied. Nicht nur Theorie, sondern echtes <em class="text-orange not-italic font-semibold">Hands-on-Training</em> in der Praxis.</p>
        </div>
      </div>
      <div class="reveal-scale relative">
        <div class="absolute -inset-4 bg-gradient-to-br from-orange/15 to-transparent rounded-3xl blur-2xl"></div>
        <img
          src="/images/rene_mit_tierschutzhund.webp"
          alt="Training mit einem Tierschutzhund"
          class="relative rounded-3xl shadow-2xl w-full"
          style="aspect-ratio: 4/5; object-fit: cover;"
          loading="lazy"
          width="600" height="750"
        />
      </div>
    </div>
  </section>
```

- [ ] **Schritt 2: Marquee Strip einfügen**

```astro
  <!-- MARQUEE STRIP -->
  <div class="bg-orange py-4 overflow-hidden">
    <div class="flex animate-marquee whitespace-nowrap gap-0">
      {["Fair", "Fundiert", "Individuell", "Mobil", "Gewaltfrei", "Wissenschaftlich", "Ehrlich", "Alltagsnah", "Fair", "Fundiert", "Individuell", "Mobil", "Gewaltfrei", "Wissenschaftlich", "Ehrlich", "Alltagsnah"].map((word) => (
        <span class="inline-block font-display font-extrabold text-white uppercase tracking-widest text-lg px-8">
          {word} <span class="text-white/40 mx-4">·</span>
        </span>
      ))}
    </div>
  </div>
```

- [ ] **Schritt 3: Ausbildung & Qualifikation einfügen**

```astro
  <!-- AUSBILDUNG & QUALIFIKATION -->
  <section class="py-24 md:py-32 bg-anthrazit-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-4">Qualifikation & Philosophie</span>
        <h2 class="reveal reveal-delay-1 text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Fair, fundiert <br/>
          <span class="text-gradient-orange">& individuell.</span>
        </h2>
        <p class="reveal reveal-delay-2 text-lg text-white/50 mt-6 font-light">Hundetraining ist kein geschützter Begriff – Qualität aber schon. Meine Arbeit basiert auf einer 1,5-jährigen Intensivausbildung und ständiger Weiterentwicklung.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <div class={`reveal reveal-delay-${(i % 4) + 1} group relative bg-anthrazit-3 rounded-3xl p-8 border border-white/4 hover:border-orange/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden`}>
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-orange/0 rounded-full group-hover:bg-orange/8 transition-colors blur-2xl"></div>
            <div class="relative">
              <div class="text-5xl mb-6 inline-block transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">{s.icon}</div>
              <h3 class="font-display font-bold text-2xl text-white mb-3 group-hover:text-orange transition-colors">{s.title}</h3>
              <p class="text-white/50 leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="mt-10 grid md:grid-cols-2 gap-6">
        <div class="reveal bg-anthrazit-3 rounded-3xl p-8 md:p-10 border-l-4 border-orange">
          <div class="text-xs uppercase tracking-[0.3em] text-orange font-semibold mb-3">Geprüfter Experte (§11)</div>
          <h3 class="font-display font-bold text-2xl text-white mb-4">1,5 Jahre · Kynologisch gGmbH</h3>
          <p class="text-white/50 mb-4">Wissenschaftlich fundierte Theorie kombiniert mit intensiver Praxis bei renommierten Dozenten:</p>
          <ul class="space-y-2">
            {dozenten.map((d) => (
              <li class="flex items-center gap-3 text-white/70">
                <svg class="w-4 h-4 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div class="reveal reveal-delay-1 bg-anthrazit-3 rounded-3xl p-8 md:p-10 border-l-4 border-tuerkis">
          <div class="text-xs uppercase tracking-[0.3em] text-tuerkis font-semibold mb-3">Stillstand ist Rückschritt</div>
          <h3 class="font-display font-bold text-2xl text-white mb-4">Weiterbildungen 2025</h3>
          <p class="text-white/50 mb-4">Ich ruhe mich nicht auf meiner Ausbildung aus:</p>
          <div class="space-y-3">
            {weiterbildung.map((w) => (
              <div class="flex items-start gap-4 p-3 bg-anthrazit-4 rounded-xl">
                <div class="text-xs font-semibold text-white/40 uppercase tracking-wider whitespace-nowrap mt-0.5">{w.datum}</div>
                <div>
                  <div class="font-semibold text-white text-sm">{w.titel}</div>
                  <div class="text-xs text-white/40">{w.art}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
```

---

## Task 4: `ueber-mich.astro` — Philosophie + Warum WolfsKnigge

**Files:**
- Modify: `src/pages/ueber-mich.astro`

- [ ] **Schritt 1: Philosophie / 4 Quadranten einfügen**

```astro
  <!-- PHILOSOPHIE -->
  <section class="relative py-24 md:py-32 bg-anthrazit overflow-hidden">
    <div class="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl"></div>
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-6">Mein Ansatz</span>
      <h2 class="reveal reveal-delay-1 text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-10">
        Alle Möglichkeiten nutzen.<br/>
        <span class="text-gradient-orange">Kein Dogmatismus.</span>
      </h2>
      <div class="reveal reveal-delay-2 max-w-3xl">
        <p class="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-8">
          Ich nutze flexibel alle vier Quadranten der wissenschaftlichen Lerntheorie. Wer Prinzipien ausschließt, schränkt seinen Handlungsspielraum ein.
        </p>
        <p class="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
          Dabei ist ein <strong class="text-white font-semibold">positiver, respektvoller und gewaltfreier</strong> Umgang für mich die Basis – nicht das Ziel, das ich manchmal erreiche.
        </p>
      </div>
      <div class="reveal reveal-delay-3 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Positive Verstärkung", "Negative Verstärkung", "Positive Strafe", "Negative Strafe"].map((q, i) => (
          <div class="bg-anthrazit-3 rounded-2xl p-4 text-center border border-white/6 hover:border-orange/30 hover:bg-orange/5 transition-all">
            <div class="text-2xl font-display font-extrabold text-orange mb-1">R{i + 1}</div>
            <div class="text-xs font-semibold text-white/70">{q}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Schritt 2: Warum WolfsKnigge einfügen**

```astro
  <!-- WARUM WOLFSKNIGGE -->
  <section class="relative py-24 md:py-32 bg-anthrazit-2 text-white overflow-hidden noise">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.15),transparent_60%)]"></div>
    <div class="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange/10 rounded-full blur-3xl blob-float-rev"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-4">Der Name</span>
        <h2 class="reveal reveal-delay-1 text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] mb-6">
          Warum eigentlich <span class="text-gradient-orange">"WolfsKnigge"</span>?
        </h2>
        <p class="reveal reveal-delay-2 text-lg text-white/50 font-light">
          Der Name ist kein Zufall. Er verbindet zwei zentrale Aspekte des Trainings: das Ursprüngliche und das gelebte Miteinander.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <div class="reveal group relative bg-gradient-to-br from-orange/20 to-anthrazit-3 rounded-3xl p-8 md:p-10 border border-orange/20 hover:border-orange/50 transition-all hover:-translate-y-1 duration-500">
          <div class="text-6xl mb-4">🐺</div>
          <h3 class="font-display font-extrabold text-3xl text-orange mb-4">Der Wolf</h3>
          <p class="text-white/60 leading-relaxed text-lg">Steht für das <strong class="text-white">natürliche Verhalten</strong> unserer Hunde. Ihre Authentizität, Instinkte und ihr tief verwurzeltes Sozialverhalten.</p>
        </div>
        <div class="reveal reveal-delay-1 group relative bg-gradient-to-br from-tuerkis/10 to-anthrazit-3 rounded-3xl p-8 md:p-10 border border-tuerkis/20 hover:border-tuerkis/40 transition-all hover:-translate-y-1 duration-500">
          <div class="text-6xl mb-4">📖</div>
          <h3 class="font-display font-extrabold text-3xl text-tuerkis mb-4">Der Knigge</h3>
          <p class="text-white/60 leading-relaxed text-lg">Symbolisiert den <strong class="text-white">Verhaltenskodex im Alltag</strong>. Die Fähigkeit, Regeln zu verstehen und sich in unsere Gesellschaft zu integrieren.</p>
        </div>
      </div>

      <p class="reveal reveal-delay-2 text-center text-white/40 mt-10 text-lg italic max-w-2xl mx-auto">
        WolfsKnigge steht für die Balance aus <span class="text-white not-italic font-medium">natürlichem Ausdruck</span> und <span class="text-white not-italic font-medium">alltagstauglicher Erziehung</span>.
      </p>
    </div>
  </section>
```

---

## Task 5: `ueber-mich.astro` — Soft-Bridge + Final CTA + Abschluss

**Files:**
- Modify: `src/pages/ueber-mich.astro`

- [ ] **Schritt 1: Soft-Bridge Angebote einfügen**

```astro
  <!-- SOFT-BRIDGE ANGEBOTE -->
  <section class="py-24 md:py-32 bg-anthrazit-2">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Meine Angebote</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          Wo kann ich <span class="text-gradient-orange">für euch da sein</span>?
        </h2>
      </div>
      <div class="grid md:grid-cols-3 gap-5">
        {angebote.map((a, i) => (
          <a
            href={a.href}
            class={`reveal ${i > 0 ? `reveal-delay-${i}` : ''} group relative bg-anthrazit-3 rounded-3xl p-8 border border-white/4 hover:border-orange/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden block`}
          >
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-orange-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="text-4xl mb-5">{a.icon}</div>
            <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-orange transition-colors">{a.title}</h3>
            <p class="text-[14px] text-white/45 leading-relaxed mb-4">{a.text}</p>
            <div class="inline-flex items-center gap-1.5 text-orange text-sm font-semibold">
              Mehr erfahren
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Schritt 2: Final CTA + schließendes `</Layout>`-Tag einfügen**

```astro
  <!-- FINAL CTA -->
  <section class="relative py-32 md:py-48 bg-anthrazit text-white overflow-hidden noise">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.25),transparent_60%)]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange/10 rounded-full blur-3xl blob-float"></div>
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="reveal text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-8 tracking-tight leading-[0.95]">
        Bereit, etwas zu <br/>
        <span class="text-gradient-orange">verändern</span>?
      </h2>
      <p class="reveal reveal-delay-1 text-xl md:text-2xl text-white/50 mb-12 font-light">Das Kennenlerngespräch ist kostenlos. Antwort innerhalb von 24 Stunden.</p>
      <div class="reveal reveal-delay-2 flex flex-wrap gap-4 justify-center">
        <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange-dark text-white font-semibold px-10 py-5 text-lg transition-all shadow-2xl shadow-orange/40 hover:scale-[1.03]">
          Jetzt Kennenlernen
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <a href="tel:015147736042" class="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur border border-white/20 hover:bg-white/10 text-white font-semibold px-10 py-5 text-lg transition-all">
          📞 0151 47736042
        </a>
      </div>
    </div>
  </section>

</Layout>
```

- [ ] **Schritt 3: Seite vollständig visuell prüfen**

Öffne `http://localhost:4321/ueber-mich`. Scroll durch alle 10 Sektionen. Prüfe:
- Kein helles `bg-white` / `bg-gray-50` sichtbar
- Reveal-Animationen triggern beim Scrollen
- Soft-Bridge-Cards klickbar, Hover-Effekte funktionieren
- Alle Bilder laden (Sehestedt, Elix, Suka, Tierschutzhund)

---

## Task 6: `grunderziehungsgruppe.astro` — Hero + Big Statement + Eckdaten

**Files:**
- Modify: `src/pages/grunderziehungsgruppe.astro` (komplett ersetzen)

- [ ] **Schritt 1: Frontmatter + Datenkonstanten**

```astro
---
import Layout from "../layouts/Layout.astro";

const inhalte = [
  { icon: "🐾", title: "Zuverlässige Basics", text: "Sitz, Platz, Bleib – auch unter steigender Ablenkung." },
  { icon: "📣", title: "Sicherer Rückruf", text: "Dein Hund kommt freudig und zuverlässig zurück – auch wenn Ablenkung lockt." },
  { icon: "🐕", title: "Leinenführigkeit", text: "Entspannte Spaziergänge, auch bei Hundebegegnungen und anderen Reizen." },
  { icon: "🧠", title: "Impulskontrolle", text: "Warten lernen, Reizen widerstehen, Frustration aushalten." },
  { icon: "💬", title: "Klare Kommunikation", text: "Körpersprache, Abbruchsignal, Nähe & Distanz verstehen." },
  { icon: "🌆", title: "Alltagstauglichkeit", text: "Café, Stadtbummel, medizinische Kontrolle – Ruhe in allen Situationen." },
  { icon: "🤝", title: "Begegnungstraining", text: "Andere Hunde, Menschen, Radfahrer – gelassen und sicher bleiben." },
  { icon: "🎯", title: "Bindung & Vertrauen", text: "Die Basis für alles, was danach kommt." },
];

const unterschiede = [
  { nr: "01", titel: "Kleine Gruppe", text: "Max. 7 Teams. Jeder bekommt echte Aufmerksamkeit — nicht nur einen Platz in der Reihe." },
  { nr: "02", titel: "Echte Alltagsorte", text: "Kein isolierter Hundeplatz. Training dort, wo euer Alltag stattfindet — Straße, Park, Stadt." },
  { nr: "03", titel: "Spezialist statt Generalist", text: "Auf Problemverhalten spezialisiert. Das merkst du — auch wenn dein Hund 'nur' Grunderziehung braucht." },
  { nr: "04", titel: "Kein starres Programm", text: "Die Gruppe bestimmt das Tempo. Kein Schema F, das alle gleich behandelt." },
];

const schritte = [
  { step: "01", title: "Kurz telefonieren", text: "Wir sprechen durch, was du dir vorstellst und was dein Hund mitbringt." },
  { step: "02", title: "Empfehlung", text: "Direkt in die Gruppe — oder erst eine Einzelstunde zum Kennenlernen. Gemeinsam entschieden." },
  { step: "03", title: "Einfach mitlaufen", text: "Einstieg jederzeit. Kein Block, keine Mindestlaufzeit." },
];

const faq = [
  {
    frage: "Mein Hund ist nicht ganz verträglich — passt er überhaupt in eine Gruppe?",
    antwort: "Das klären wir im Vorfeld-Telefonat. Nicht jeder Hund ist sofort gruppenreif — manchmal braucht es zuerst ein paar Einzelstunden, um eine sichere Basis zu schaffen. Ehrlichkeit ist uns wichtiger als eine schnelle Anmeldung."
  },
  {
    frage: "Ich habe keine Erfahrung. Bin ich hier richtig?",
    antwort: "Ja. Die Gruppe ist ausdrücklich für Halter aller Erfahrungsstufen. Anfänger sind willkommen — du musst nichts wissen, nur bereit sein zu lernen."
  },
  {
    frage: "Wann lohnt sich die Gruppe, wann eine Einzelstunde?",
    antwort: "Die Gruppe eignet sich gut für Grundlagen, Alltagssituationen und den sozialen Kontext mit anderen Hunden. Die Einzelstunde ist besser, wenn dein Hund ein konkretes, intensives Problem hat (z. B. starke Leinenaggression) oder du 100 % individuelle Aufmerksamkeit brauchst. Im Zweifel: kurz anrufen — gemeinsam finden wir das Richtige."
  },
  {
    frage: "Ich war schon in einer anderen Hundeschule — was ist hier anders?",
    antwort: "Kein Schema F. Die Gruppe wird an ihre Teilnehmer angepasst, nicht umgekehrt. Außerdem trainieren wir an echten Alltagsorten, nicht auf einem isolierten Übungsplatz — das macht den Unterschied zwischen Training und echtem Können."
  },
  {
    frage: "Muss ich vorher Einzelstunden nehmen, oder kann ich direkt einsteigen?",
    antwort: "Direkteinstieg ist möglich. Ein kurzes Telefonat vorab hilft uns einzuschätzen, was sinnvoll ist. Manchmal empfehlen wir eine vorherige Einzelstunde — aber das ist keine Voraussetzung."
  },
];

const testimonials = [
  { name: "Jori K.", text: "Die Trainingsanreize haben schnell geholfen und es wird sich wirklich Zeit genommen." },
  { name: "Susanne H.", text: "Als Ersthundebesitzer hatten wir viele Fragen, die uns schlüssig beantwortet wurden." },
  { name: "Daniela B.", text: "Dank des Trainings können wir endlich wieder entspannt Gassi gehen." },
  { name: "Jens", text: "Wir bekamen die Leinenaggression bei unserer Herdenschützerin super in den Griff." },
  { name: "Nicole H.", text: "Das Training hat schnell geholfen, sodass bei uns wieder Harmonie herrscht." },
  { name: "Sophia S.", text: "Dank des konsequenten Trainings klappt der Rückruf jetzt perfekt." },
  { name: "Mathias", text: "Wir lernen so viel Wichtiges, das uns super und schnell weiterhilft." },
  { name: "Claudia R.", text: "Es wurde geholfen, die Fehler im Umfeld zu sehen. Jetzt ist der Kleine entspannter." },
];
---
```

- [ ] **Schritt 2: Hero einfügen**

```astro
<Layout title="Grunderziehungsgruppe (AlltagsKnigge) | WolfsKnigge Kiel & Rendsburg" description="Grunderziehungsgruppe AlltagsKnigge in Kiel & Rendsburg. Max. 7 Teams, alltagsnahe Orte, Spezialist für Problemverhalten. Einstieg jederzeit möglich.">

  <!-- HERO -->
  <section class="relative overflow-clip" style="min-height: 100svh; background: #000;">

    <div class="absolute inset-0">
      <img
        src="/images/grunderziehungsgruppe.webp"
        alt=""
        aria-hidden="true"
        id="hero-bg-img-grund"
        class="w-full h-full object-cover"
        style="object-position: center 40%; transform-origin: center; will-change: transform;"
        width="1920" height="1280"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[rgba(10,10,11,0.65)] to-[rgba(10,10,11,0.15)]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.9)] via-[rgba(10,10,11,0.35)] to-transparent"></div>
    <div class="absolute -top-[200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none blob-float" style="background: radial-gradient(circle, rgba(249,115,22,.15), transparent 70%);"></div>

    <div class="relative flex flex-col justify-end text-white" style="min-height: 100svh; padding-bottom: env(safe-area-inset-bottom, 0px);">
      <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-32 lg:pb-28">

        <div class="hero-reveal inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/12 text-white font-medium text-[13px] px-4 py-2 rounded-full mb-7">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 ping-slow"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
          </span>
          AlltagsKnigge · Kiel · Rendsburg
        </div>

        <h1 class="font-display font-extrabold tracking-[-0.04em] leading-[0.92] mb-7">
          <span class="hero-reveal hero-reveal-d1 block text-[clamp(3rem,9vw,7.5rem)] text-white">Entspannter Alltag.</span>
          <span class="hero-reveal hero-reveal-d2 block text-[clamp(3rem,9vw,7.5rem)] text-gradient-orange italic">Echtes Team.</span>
          <span class="hero-reveal hero-reveal-d3 block text-[clamp(3rem,9vw,7.5rem)] text-white">Kleine Gruppe.</span>
        </h1>

        <p class="hero-reveal hero-reveal-d4 text-[clamp(1rem,2vw,1.25rem)] text-white/60 mb-9 leading-relaxed max-w-[540px] font-light">
          Max. 7 Teams. Alltagsnahe Orte.
          <span class="text-white font-medium">Ein Spezialist, der wirklich hinschaut.</span>
        </p>

        <div class="hero-reveal hero-reveal-d5 flex flex-col sm:flex-row gap-3.5 mb-12">
          <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange text-white font-display font-semibold px-8 py-4 text-[15px] transition-all shadow-[0_0_60px_rgba(249,115,22,0.35)] active:scale-95 sm:hover:scale-[1.03] sm:hover:bg-orange-dark">
            Jetzt anmelden
            <svg class="w-[18px] h-[18px] sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#einstieg" class="inline-flex items-center justify-center gap-2 rounded-full bg-white/6 backdrop-blur border border-white/15 text-white font-display font-semibold px-8 py-4 text-[15px] transition-all sm:hover:bg-white/12">
            Wie läuft's ab?
          </a>
        </div>

        <div class="hero-reveal hero-reveal-d6 flex items-center gap-8 pt-7 border-t border-white/8">
          <div>
            <div class="text-gradient-orange font-display font-extrabold text-2xl leading-none mb-0.5">Max. 7</div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Teams</div>
          </div>
          <div class="w-px h-9 bg-white/10"></div>
          <div>
            <div class="font-display font-extrabold text-2xl text-white leading-none mb-0.5">60<span class="text-orange">′</span></div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Pro Einheit</div>
          </div>
          <div class="w-px h-9 bg-white/10"></div>
          <div>
            <div class="font-display font-extrabold text-2xl text-white leading-none mb-0.5">5,0<span class="text-orange">★</span></div>
            <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">Google</div>
          </div>
        </div>

      </div>
    </div>
  </section>

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
      const heroBg = document.getElementById('hero-bg-img-grund') as HTMLImageElement | null;
      if (heroBg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const onScroll = () => {
          const scrollY = window.scrollY;
          const heroEl = heroBg.closest('section');
          if (!heroEl) return;
          if (scrollY > heroEl.offsetHeight) return;
          const p = scrollY / heroEl.offsetHeight;
          heroBg.style.transform = `scale(1.12) translateY(${p * 100}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }
    })();
  </script>
```

- [ ] **Schritt 3: Big Statement + Eckdaten-Strip einfügen**

```astro
  <!-- BIG STATEMENT -->
  <section class="relative py-32 md:py-48 bg-anthrazit overflow-hidden noise">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(249,115,22,.08), transparent 60%);"></div>
    <div class="relative max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
      <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-5">Das Ziel</span>
      <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(2rem,6vw,4.5rem)] font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
        Spaziergang ohne Stress.
        <span class="block text-gradient-orange mt-2">Alltag, der funktioniert.</span>
      </h2>
      <p class="reveal reveal-delay-2 text-[clamp(1rem,2vw,1.35rem)] text-white/50 max-w-[700px] mx-auto leading-relaxed font-light">
        Wenn dein Hund entspannt neben dir läuft, im Café ruhig liegt und auf Begegnungen gelassen reagiert — das ist kein Glück. Das ist Training.
      </p>
    </div>
  </section>

  <!-- ECKDATEN-STRIP -->
  <section class="py-16 bg-anthrazit-2">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Gruppengröße", value: "Max. 7 Teams" },
          { label: "Pro Einheit", value: "60 Minuten" },
          { label: "Kurssystem", value: "Einstieg jederzeit" },
          { label: "Standorte", value: "Kiel & Rendsburg" },
        ].map((d) => (
          <div class="reveal bg-anthrazit-3 rounded-[20px] p-6 border border-white/4 text-center">
            <div class="text-[11px] uppercase tracking-[0.2em] text-orange font-semibold mb-2">{d.label}</div>
            <div class="font-display font-bold text-white text-lg">{d.value}</div>
          </div>
        ))}
      </div>
      <p class="mt-5 text-white/40 text-sm text-center">Kieler Gruppe in Kiel · Rendsburger Gruppe rund um Rendsburg</p>
    </div>
  </section>
```

---

## Task 7: `grunderziehungsgruppe.astro` — Social Proof + Trainingsinhalte + Marquee

**Files:**
- Modify: `src/pages/grunderziehungsgruppe.astro`

- [ ] **Schritt 1: Social Proof Marquee einfügen**

```astro
  <!-- SOCIAL PROOF MARQUEE -->
  <section class="relative bg-anthrazit-2 border-y border-white/4 py-10 overflow-hidden">
    <div class="text-center mb-6">
      <div class="inline-flex items-center gap-2.5">
        <!-- Google Logo SVG -->
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

- [ ] **Schritt 2: Trainingsinhalte einfügen**

```astro
  <!-- TRAININGSINHALTE -->
  <section class="py-24 md:py-32 bg-anthrazit-2">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Trainingsinhalte</span>
        <h2 class="reveal reveal-delay-1 text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Womit wir<br/>
          <span class="text-gradient-orange">arbeiten.</span>
        </h2>
        <p class="reveal reveal-delay-2 text-lg text-white/50 mt-6 font-light">Das sind die Schwerpunkte — deine Situation bestimmt, was wir vertiefen.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {inhalte.map((t, i) => (
          <div class={`reveal reveal-delay-${(i % 4) + 1} group relative bg-anthrazit-3 rounded-[20px] p-7 border border-white/4 hover:bg-anthrazit-4 hover:-translate-y-1 transition-all duration-500 overflow-hidden`}>
            <div class="absolute -top-8 -right-8 w-24 h-24 bg-orange/0 rounded-full group-hover:bg-orange/8 transition-colors blur-xl pointer-events-none"></div>
            <div class="relative">
              <div class="text-4xl mb-5 inline-block transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">{t.icon}</div>
              <h3 class="font-display font-bold text-lg text-white mb-2.5 group-hover:text-orange transition-colors">{t.title}</h3>
              <p class="text-[14px] text-white/45 leading-relaxed">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Schritt 3: Marquee Strip einfügen**

```astro
  <!-- MARQUEE STRIP -->
  <div class="bg-orange py-4 overflow-hidden">
    <div class="flex animate-marquee whitespace-nowrap gap-0">
      {["Klein", "Alltagsnah", "Spezialist", "Individuell", "Kein Schema F", "Max. 7 Teams", "Gewaltfrei", "Rendsburg & Kiel", "Klein", "Alltagsnah", "Spezialist", "Individuell", "Kein Schema F", "Max. 7 Teams", "Gewaltfrei", "Rendsburg & Kiel"].map((word) => (
        <span class="inline-block font-display font-extrabold text-white uppercase tracking-widest text-lg px-8">
          {word} <span class="text-white/40 mx-4">·</span>
        </span>
      ))}
    </div>
  </div>
```

---

## Task 8: `grunderziehungsgruppe.astro` — Differenzierung + Trainer-Split + Einstieg

**Files:**
- Modify: `src/pages/grunderziehungsgruppe.astro`

- [ ] **Schritt 1: Differenzierung einfügen**

```astro
  <!-- DIFFERENZIERUNG -->
  <section class="relative py-24 md:py-32 bg-anthrazit overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_60%)]"></div>
    <div class="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Warum WolfsKnigge?</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          Was uns von anderen <span class="text-gradient-orange">Gruppen unterscheidet.</span>
        </h2>
      </div>
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        {unterschiede.map((u, i) => (
          <div class={`reveal ${i > 0 ? `reveal-delay-${i}` : ''} group relative bg-anthrazit-3 rounded-3xl overflow-hidden border border-white/5 hover:border-orange/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange/10`}>
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-orange-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="p-8 md:p-10">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <h3 class="font-display font-extrabold text-2xl md:text-3xl text-white group-hover:text-orange transition-colors">{u.titel}</h3>
                </div>
                <div class="text-7xl md:text-8xl font-display font-extrabold text-white/5 select-none leading-none -mt-2">{u.nr}</div>
              </div>
              <p class="text-white/60 leading-relaxed text-base">{u.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
```

- [ ] **Schritt 2: Trainer-Split einfügen**

```astro
  <!-- TRAINER SPLIT -->
  <section class="py-16 md:py-32 bg-anthrazit-2 overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div class="reveal-scale relative">
        <div class="absolute -inset-4 rounded-[28px] blur-[30px] pointer-events-none" style="background: linear-gradient(135deg, rgba(249,115,22,.15), transparent);"></div>
        <img
          src="/images/rene_mit_tierschutzhund.webp"
          alt="Hundetrainer im Training"
          class="relative rounded-3xl w-full"
          style="aspect-ratio: 4/5; object-fit: cover; object-position: center top;"
          width="600" height="750"
          loading="lazy"
        />
        <div class="absolute -bottom-5 -right-5 bg-anthrazit-3 rounded-[20px] p-6 border border-white/6 max-w-[200px] hidden md:block">
          <div class="text-gradient-orange font-display font-extrabold text-4xl">150+</div>
          <div class="text-[13px] text-white/50 mt-1">Teams erfolgreich begleitet</div>
        </div>
      </div>
      <div>
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Dein Trainer</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(2rem,5vw,3.8rem)] font-display font-extrabold text-white tracking-tight mb-7 leading-[1.05]">
          Spezialisiert auf das, <span class="text-gradient-orange">was andere übersehen.</span>
        </h2>
        <div class="space-y-4 text-white/60 leading-relaxed text-base md:text-[16px] reveal reveal-delay-2">
          <p>Nicht jeder Hund, der Grunderziehung braucht, hat ein einfaches Problem. Wer täglich mit Leinenaggression, Angst und Jagdverhalten arbeitet, sieht auch in der Gruppe Dinge, die anderen entgehen.</p>
          <p>Fair, gewaltfrei und klar. <span class="text-orange font-semibold">Nicht nach Schema F — sondern nach dem, was euch wirklich weiterbringt.</span></p>
        </div>
        <a href="/ueber-mich" class="reveal reveal-delay-3 inline-flex items-center gap-2 mt-8 text-orange hover:text-orange-dark font-semibold font-display text-base transition-colors">
          Mehr erfahren <span>→</span>
        </a>
      </div>
    </div>
  </section>
```

- [ ] **Schritt 3: Einstieg / 3 Steps einfügen**

```astro
  <!-- EINSTIEG / 3 STEPS -->
  <section id="einstieg" class="py-16 md:py-32 bg-anthrazit relative overflow-hidden">
    <div class="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(249,115,22,.06), transparent 60%);"></div>
    <div class="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">So läuft's ab</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          In <span class="text-gradient-orange">drei Schritten</span> dabei.
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div class="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent"></div>
        {schritte.map((s, i) => (
          <div class={`reveal reveal-delay-${i + 1} text-center`}>
            <div class="relative w-24 h-24 mx-auto mb-6">
              <div class="absolute inset-0 bg-orange/20 rounded-full blur-xl"></div>
              <div class="relative w-24 h-24 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-[28px] font-display font-extrabold text-white shadow-[0_0_60px_rgba(249,115,22,0.25)]">
                {s.step}
              </div>
            </div>
            <h3 class="font-display font-bold text-[22px] text-white mb-2">{s.title}</h3>
            <p class="text-sm text-white/45 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
```

---

## Task 9: `grunderziehungsgruppe.astro` — FAQ + Preis + Final CTA

**Files:**
- Modify: `src/pages/grunderziehungsgruppe.astro`

- [ ] **Schritt 1: FAQ-Akkordeon einfügen**

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
      <div class="reveal space-y-3" id="faq-list">
        {faq.map((item, i) => (
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

- [ ] **Schritt 2: Preis-Sektion einfügen** (XX € als Platzhalter — Beträge vor Go-Live ersetzen)

```astro
  <!-- PREIS -->
  <section class="py-16 md:py-24 bg-anthrazit">
    <div class="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-4">Investition</span>
        <h2 class="reveal reveal-delay-1 text-3xl md:text-[clamp(1.8rem,5vw,3.5rem)] font-display font-extrabold text-white tracking-tight leading-[1.1]">
          Transparent. <span class="text-gradient-orange">Kein Kleingedrucktes.</span>
        </h2>
      </div>
      <div class="reveal bg-anthrazit-3 rounded-[24px] border border-white/6 overflow-hidden">
        <div class="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="text-[11px] uppercase tracking-[0.2em] text-orange font-semibold mb-4">AlltagsKnigge · Grunderziehungsgruppe</div>
            <div class="space-y-4 mb-6">
              <div>
                <div class="flex items-end gap-2 mb-1">
                  <span class="text-5xl font-display font-extrabold text-white">XX</span>
                  <span class="text-2xl font-display font-bold text-orange mb-1">€</span>
                </div>
                <div class="text-white/40 text-sm">pro Trainingseinheit (Einzeltermin)</div>
              </div>
              <div class="bg-anthrazit-4 rounded-2xl p-4 border border-orange/20">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-3xl font-display font-extrabold text-white">XX</span>
                  <span class="text-xl font-display font-bold text-orange">€</span>
                  <span class="ml-auto inline-flex items-center bg-orange/15 text-orange text-xs font-bold px-2.5 py-1 rounded-full">10 % gespart</span>
                </div>
                <div class="text-white/40 text-sm">10er-Karte</div>
              </div>
            </div>
            <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center gap-2.5 rounded-full bg-orange text-white font-display font-semibold px-7 py-3.5 text-[15px] transition-all shadow-[0_0_40px_rgba(249,115,22,0.25)] sm:hover:scale-[1.03] sm:hover:bg-orange-dark">
              Jetzt anmelden
              <svg class="w-4 h-4 sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div class="space-y-3">
            {[
              "60 Minuten Training pro Einheit",
              "Alltagsnahe Orte in Kiel & Rendsburg",
              "Max. 7 Teams pro Einheit",
              "Einstieg jederzeit möglich",
              "Fahrtkosten nach Absprache",
            ].map((item) => (
              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-orange flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 16 16"><path d="M3 9l3.5 3.5L13 5"/></svg>
                <span class="text-[14px] text-white/60">{item}</span>
              </div>
            ))}
            <div class="pt-3 mt-3 border-t border-white/6">
              <a href="/preise" class="text-orange text-sm font-semibold hover:text-orange-dark transition-colors">Alle Preise ansehen →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Schritt 3: Final CTA + `</Layout>` einfügen**

```astro
  <!-- FINAL CTA -->
  <section class="relative py-32 md:py-48 bg-anthrazit text-white overflow-hidden noise">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.22),transparent_60%)]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange/8 rounded-full blur-3xl blob-float"></div>
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="reveal inline-block text-orange font-semibold uppercase text-sm tracking-[0.3em] mb-6">Kostenlos kennenlernen</span>
      <h2 class="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-8 tracking-tight leading-[0.95]">
        Bereit für einen<br/>
        <span class="text-gradient-orange">entspannten Alltag</span>?
      </h2>
      <p class="reveal reveal-delay-2 text-xl md:text-2xl text-white/50 mb-12 font-light">Kurzer Anruf genügt. Wir schauen gemeinsam, was passt.</p>
      <div class="reveal reveal-delay-3 flex flex-wrap gap-4 justify-center">
        <a href="https://wolfsknigge.de/kontakt" class="shine group inline-flex items-center gap-2 rounded-full bg-orange hover:bg-orange-dark text-white font-semibold px-10 py-5 text-lg transition-all shadow-2xl shadow-orange/40 hover:scale-[1.03]">
          Jetzt anmelden
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <a href="tel:015147736042" class="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur border border-white/20 hover:bg-white/10 text-white font-semibold px-10 py-5 text-lg transition-all">
          📞 0151 47736042
        </a>
      </div>
    </div>
  </section>

</Layout>
```

- [ ] **Schritt 4: Gesamte Seite visuell prüfen**

Öffne `http://localhost:4321/grunderziehungsgruppe`. Scroll durch alle 12 Sektionen. Prüfe:
- FAQ `<details>`/`<summary>` öffnen und schließen korrekt (kein JS nötig)
- Testimonial-Marquee läuft durch
- Google-Logo SVG sichtbar
- Preis-Box zeigt zwei Optionen (XX € als Platzhalter sichtbar)
- Alle Bilder laden

---

## Offene Punkte (nicht blockierend für Implementierung)

- **Preise:** `XX €` in `grunderziehungsgruppe.astro` — Platzhalter, vor Go-Live durch echte Beträge ersetzen
- **Gruppenspezifische Testimonials:** `testimonials`-Array in `grunderziehungsgruppe.astro` mit echten Gruppenkundenstimmen ersetzen sobald verfügbar
- **FAQ-Antworten:** Texte sind vom Trainer formuliert — bei Bedarf inhaltlich anpassen
