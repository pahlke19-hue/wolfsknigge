# WolfsKnigge Design Guidelines

Visuelle Regeln für wolfsknigge.de. Sprache & Tonalität: siehe `voice.md`.

> **Source of Truth für alle Design-Tokens** (Farben, Fonts): der `@theme`-Block in
> `src/styles/global.css`. Konkrete Werte immer dort nachschlagen — hier stehen nur die
> Einsatz-Regeln, damit nichts driften kann.

---

## 🎨 Farb-Einsatz

Die Website ist **dark-first**: Anthrazit-Basis (Stufen `--color-anthrazit` bis `--color-anthrazit-4`), heller Text.

- **Orange** (`--color-orange` / `-dark` / `-glow`): Der Eyecatcher — strategisch, nicht flächig. Für CTAs, Akzente, Highlights. `-dark` für Hover/Active, `-glow` für sekundäre Akzente.
- **Anthrazit-Stufen**: Hintergründe und Sektions-Trennung — vertrauenerweckend, Klarheit-fokussiert.
- **Türkis** (`--color-tuerkis` / `-dark`): Sparsam, nur für spezielle Highlights; `-dark` bei Kontrastbedarf.
- **Gradients** (Orange → Orange-Glow): für moderne Bewegung, v.a. in Headlines und CTAs.

## 🔤 Typografie

- **Headings**: `--font-display`, weight 700, letter-spacing `-0.02em` (global gesetzt in `global.css`).
- **Body**: `--font-sans`, weight 400. Emphasis: 500–600. Sekundäre Infos: 300–400.
- **Labels/Tags**: uppercase mit Tracking `0.2em–0.3em`.
- **Größen**: fluid via `clamp()` bzw. responsive Tailwind-Klassen — keine festen px-Hierarchien pflegen; an bestehenden Seiten orientieren.

## 🎭 Design-Prinzipien

- **Modern & Bewegung**: Animierte Gradients, Floating Blobs, Scroll-Reveals.
- **Vertrauen durch Klarheit**: Großzügiger Whitespace, klare Hierarchien.
- **Premium ohne Arroganz**: Qualität, aber nahbar.
- **Dark-first**: Dunkle Anthrazit-Flächen als Grundstimmung, Orange als gezielter Kontrast.

## 🎬 Motion & Animation

Prinzip: sanft, langsam, nicht aufdringlich. Timings/Easings stehen im CSS — nicht hier duplizieren.

Vorhandene Klassen in `src/styles/global.css`:

| Klasse | Zweck |
|---|---|
| `.reveal`, `.reveal-delay-1…4`, `.reveal-scale` | Scroll-Reveals (opacity + translateY / Scale) |
| `.hero-reveal-d1…d6` (inkl. `d2b`, `d4b`) | Gestaffelte Hero-Einblendungen |
| `.blob-float`, `.blob-float-rev` | Floating Blobs im Hintergrund |
| `.shine` | Hover-Light-Sweep auf Buttons/Cards |
| `.link-sweep` | Underline-Animation auf Links |
| `.animate-marquee`, `.animate-marquee-fast` | Marquee-Laufband |
| `.ping-slow` | Subtiles Pulsieren |
| `.scroll-progress`, `.scroll-line-anim` | Scroll-Indikatoren |
| `.noise` | Textur-Overlay |
| `.text-gradient-orange`, `.text-gradient-white` | Gradient-Text (Orange / Weiß auf dunkel) |
| `.prose-blog`, `.prose-legal` | Longform-Textstile (Blog / Rechtstexte) |

**Pflicht**: `prefers-reduced-motion` respektieren — Animationen deaktivieren bei Bedarf (ist in `global.css` umgesetzt; bei neuen Animationen beibehalten).

## 🧩 Komponenten-Muster

Referenz sind die bestehenden Komponenten (`src/pages/index.astro`, `src/components/CityPage.astro`):

- **Cards**: großzügige Radien (`rounded-3xl`), Hover-Feedback (Shadow/Scale/Shine).
- **CTA-Buttons**: Orange, `rounded-full`, Text + Icon, leichter Scale-up on hover.
- **Prozess/Timeline**: nummerierte Schritte mit Orange-Gradient-Kreisen.
- **Iconografie**: Emoji-basiert (🚐 🎯 🧠 🐾 💛 📍) — playful, aber professionell. Alternativ SVG für Arrow, Check, X, Star.

## 📐 Layout & Spacing

- **Container**: `max-w-7xl`, mobile-first (Standard-Tailwind-Breakpoints).
- **Whitespace**: großzügig, nicht gequetscht — Luft zwischen visuellen Elementen ist Teil der Marke.
- **Rhythmus**: an bestehenden Sektionen orientieren statt feste px-Werte zu pflegen.

## 🖼️ Bildstil

- **Echte Situationen**: Hunde im Park, auf der Straße, mit Trainer — nicht inszeniert, keine Stockfotos.
- **Naturlicht** bevorzugt, ehrlich, keine Studio-Setups.
- **People**: René mit seinen Hunden, Trainer mit Kunden-Teams.
- **Bearbeitung**: hochwertig, aber naturalistisch; Filter subtil, warmtonig.

### Logo
- Schwarz-/Anthrazit-Variante für Print.
- Einfach, merkbar, funktioniert in klein.

## ✅ Design-Checkliste für neue Seiten/Sektionen

- [ ] Headline nutzt Orange-Gradient oder Bold Orange
- [ ] Dark-first: Anthrazit-Basis, Orange strategisch als Akzent
- [ ] Bilder zeigen echte Szenen (nicht Stock)
- [ ] Layout nutzt Whitespace & Hierarchie (nicht vollgepflastert)
- [ ] Scroll-Reveals (`.reveal`-Klassen) eingesetzt, `prefers-reduced-motion` funktioniert
