# Kontaktseite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `src/pages/kontakt.astro` matching the approved mockup, and update Header.astro to link to `/kontakt`.

**Architecture:** Single Astro page using `Layout.astro` as wrapper. Two sections: full-screen hero with background image + hero-reveal JS animation (identical pattern to `einzelstunde.astro`), followed by a split section with contact info left and form right. No form backend — static HTML only.

**Tech Stack:** Astro, Tailwind CSS (custom tokens already defined), vanilla JS (hero-reveal + IntersectionObserver already in Layout.astro)

---

### Task 1: Update Header.astro — link CTA to `/kontakt`

**Files:**
- Modify: `src/components/Header.astro:69` and `src/components/Header.astro:119`

The "Jetzt starten" buttons currently link to `https://wolfsknigge.de/kontakt`. Change both to `/kontakt`.

- [ ] **Step 1: Edit desktop CTA button**

In [src/components/Header.astro](src/components/Header.astro), line 69, change:
```html
<a href="https://wolfsknigge.de/kontakt" class="shine inline-flex items-center rounded-full bg-orange hover:bg-orange-dark text-white text-sm font-semibold font-display px-6 py-2.5 transition-all hover:scale-[1.04]">
```
to:
```html
<a href="/kontakt" class="shine inline-flex items-center rounded-full bg-orange hover:bg-orange-dark text-white text-sm font-semibold font-display px-6 py-2.5 transition-all hover:scale-[1.04]">
```

- [ ] **Step 2: Edit mobile CTA button**

In [src/components/Header.astro](src/components/Header.astro), line 119, change:
```html
<a href="https://wolfsknigge.de/kontakt" class="block mt-4 text-center rounded-full bg-orange hover:bg-orange-dark text-white font-semibold font-display px-5 py-3.5 text-[15px]">
```
to:
```html
<a href="/kontakt" class="block mt-4 text-center rounded-full bg-orange hover:bg-orange-dark text-white font-semibold font-display px-5 py-3.5 text-[15px]">
```

---

### Task 2: Create `src/pages/kontakt.astro` — Hero section

**Files:**
- Create: `src/pages/kontakt.astro`

- [ ] **Step 1: Create the file with frontmatter + Layout wrapper + Hero**

Create `src/pages/kontakt.astro` with the following full content (hero section only first, split section added in Task 3):

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Kontakt – WolfsKnigge Hundeschule Bredenbek" description="Kontaktiere WolfsKnigge – mobiles Hundetraining in Kiel, Rendsburg, Neumünster & Eckernförde. Kostenloser Erstkontakt, Antwort in 24h.">

  <!-- HERO -->
  <section class="relative overflow-clip" style="min-height: 100svh; background: #000;">

    <div class="absolute inset-0">
      <img
        src="/images/rene-hero.webp"
        alt=""
        aria-hidden="true"
        id="hero-bg-img"
        class="w-full h-full object-cover"
        style="object-position: center 30%; transform-origin: center; will-change: transform;"
        width="1920" height="1280"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[rgba(10,10,11,0.5)] to-[rgba(10,10,11,0.1)]"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.75)] via-[rgba(10,10,11,0.3)] to-transparent"></div>

    <div class="absolute -top-[200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none blob-float" style="background: radial-gradient(circle, rgba(249,115,22,.15), transparent 70%);"></div>

    <div class="relative flex flex-col justify-end text-white" style="min-height: 100svh; padding-bottom: env(safe-area-inset-bottom, 0px);">
      <div class="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-32 lg:pb-28">

        <div class="hero-reveal inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/12 text-white font-medium text-[13px] px-4 py-2 rounded-full mb-7">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 ping-slow"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
          </span>
          Kostenlos kennenlernen · Unverbindlich
        </div>

        <h1 class="font-display font-extrabold tracking-[-0.04em] leading-[0.92] mb-7">
          <span class="hero-reveal hero-reveal-d1 block text-[clamp(3rem,9vw,7.5rem)] text-white">Schreib mir.</span>
          <span class="hero-reveal hero-reveal-d2 block text-[clamp(3rem,9vw,7.5rem)] text-gradient-orange italic">Ich antworte.</span>
        </h1>

        <p class="hero-reveal hero-reveal-d3 text-[clamp(1rem,2vw,1.25rem)] text-white/60 mb-9 leading-relaxed max-w-[540px] font-light">
          Das erste Gespräch ist kostenlos und unverbindlich.
          <span class="text-white font-medium">Ich antworte innerhalb von 24 Stunden.</span>
        </p>

        <div class="hero-reveal hero-reveal-d4 flex flex-col sm:flex-row gap-3.5 mb-12">
          <a href="#formular" class="shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange text-white font-display font-semibold px-8 py-4 text-[15px] transition-all shadow-[0_0_60px_rgba(249,115,22,0.35)] active:scale-95 sm:hover:scale-[1.03] sm:hover:bg-orange-dark">
            Anfrage schreiben
            <svg class="w-[18px] h-[18px] sm:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="tel:+4915147736042" class="inline-flex items-center justify-center gap-2 rounded-full bg-white/6 backdrop-blur border border-white/15 text-white font-display font-semibold px-8 py-4 text-[15px] transition-all sm:hover:bg-white/12">
            📞 0151 47736042
          </a>
          <a href="https://wa.me/4915147736042" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold px-8 py-4 text-[15px] transition-all sm:hover:opacity-90" style="background: #25d366; color: #fff;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.5.5 0 0 0 .614.614l5.638-1.47A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.376l-.36-.214-3.724.97.993-3.63-.234-.374A9.797 9.797 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
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

      const heroBg = document.getElementById('hero-bg-img') as HTMLImageElement | null;
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

</Layout>
```

- [ ] **Step 2: Verify the dev server shows the hero**

Run `npm run dev` in `wolfsknigge/` and open `http://localhost:4321/kontakt`. Confirm:
- Background image `rene-hero.webp` visible through overlays
- "Schreib mir." + italic orange "Ich antworte." headline animate in
- Three buttons visible (orange CTA, phone, green WhatsApp)

---

### Task 3: Add split section (contact info + form) to `kontakt.astro`

**Files:**
- Modify: `src/pages/kontakt.astro` — add section before `</Layout>`

- [ ] **Step 1: Insert split section between the closing `</script>` and `</Layout>`**

After the `</script>` block (just before `</Layout>`), insert:

```astro
  <!-- SPLIT: CONTACT INFO + FORM -->
  <section id="formular" class="bg-anthrazit py-24 md:py-32">
    <div class="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

        <!-- LEFT: Contact info -->
        <div>
          <span class="reveal inline-block text-orange font-semibold uppercase text-[13px] tracking-[0.3em] mb-5">Direkt in Kontakt</span>
          <h2 class="reveal reveal-delay-1 font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.05] tracking-tight mb-6">
            Wie darf ich<br><span class="text-gradient-orange italic">dich erreichen?</span>
          </h2>
          <p class="reveal reveal-delay-2 text-white/55 text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed max-w-[460px] mb-10 font-light">
            Schreib mir eine Nachricht, ruf an oder schick mir eine WhatsApp. Ich melde mich innerhalb von 24 Stunden – meistens deutlich schneller.
          </p>

          <!-- Contact cards -->
          <div class="reveal reveal-delay-3 flex flex-col gap-4 mb-10">
            <a href="tel:+4915147736042" class="group flex items-center gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-4 transition-all sm:hover:bg-white/7 sm:hover:border-white/15">
              <div class="w-11 h-11 rounded-xl bg-orange/15 border border-orange/25 flex items-center justify-center text-orange text-xl flex-shrink-0">📞</div>
              <div>
                <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium mb-0.5">Telefon</div>
                <div class="text-white font-semibold text-[15px]">0151 47736042</div>
              </div>
              <svg class="ml-auto w-4 h-4 text-white/25 sm:group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="https://wa.me/4915147736042" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-4 transition-all sm:hover:bg-white/7 sm:hover:border-white/15">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background: rgba(37,211,102,0.15); border: 1px solid rgba(37,211,102,0.3); color: #25d366;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.5.5 0 0 0 .614.614l5.638-1.47A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.376l-.36-.214-3.724.97.993-3.63-.234-.374A9.797 9.797 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                </svg>
              </div>
              <div>
                <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium mb-0.5">WhatsApp</div>
                <div class="text-white font-semibold text-[15px]">0151 47736042</div>
              </div>
              <svg class="ml-auto w-4 h-4 text-white/25 sm:group-hover:text-[#25d366] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="mailto:kontakt@wolfsknigge.de" class="group flex items-center gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-4 transition-all sm:hover:bg-white/7 sm:hover:border-white/15">
              <div class="w-11 h-11 rounded-xl bg-orange/15 border border-orange/25 flex items-center justify-center text-orange text-xl flex-shrink-0">✉️</div>
              <div>
                <div class="text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium mb-0.5">E-Mail</div>
                <div class="text-white font-semibold text-[15px]">kontakt@wolfsknigge.de</div>
              </div>
              <svg class="ml-auto w-4 h-4 text-white/25 sm:group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Opening hours -->
          <div class="reveal reveal-delay-4 bg-white/3 border border-white/8 rounded-2xl p-5">
            <div class="text-[11px] text-orange font-semibold uppercase tracking-[0.2em] mb-4">Erreichbarkeit</div>
            <div class="space-y-2.5">
              <div class="flex justify-between items-center">
                <span class="text-white/60 text-sm">Mo – Fr</span>
                <span class="text-white font-medium text-sm">9:00 – 18:00 Uhr</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/60 text-sm">Sa</span>
                <span class="text-white font-medium text-sm">9:00 – 14:00 Uhr</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/60 text-sm">So</span>
                <span class="text-white/40 text-sm">Geschlossen</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Form card -->
        <div class="reveal bg-white/4 border border-white/10 rounded-3xl p-7 sm:p-9">
          <div class="text-[11px] text-orange font-semibold uppercase tracking-[0.2em] mb-2">Anfrage senden</div>
          <h3 class="font-display font-extrabold text-white text-xl mb-6">Erzähl mir von dir und deinem Hund</h3>

          <form action="#" method="POST" class="flex flex-col gap-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label for="name" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Dein Name *</label>
                <input type="text" id="name" name="name" required placeholder="Max Mustermann"
                  class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="hundename" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Name des Hundes *</label>
                <input type="text" id="hundename" name="hundename" required placeholder="Bello"
                  class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all" />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label for="hunderasse" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Rasse *</label>
                <input type="text" id="hunderasse" name="hunderasse" required placeholder="z.B. Labrador"
                  class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="stadt" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Deine Stadt *</label>
                <input type="text" id="stadt" name="stadt" required placeholder="z.B. Kiel"
                  class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all" />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label for="email" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">E-Mail *</label>
                <input type="email" id="email" name="email" required placeholder="deine@mail.de"
                  class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="telefon" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Telefon <span class="text-white/25 normal-case tracking-normal">(optional)</span></label>
                <input type="tel" id="telefon" name="telefon" placeholder="0151 …"
                  class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all" />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="interesse" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Worum geht es? *</label>
              <select id="interesse" name="interesse" required
                class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all appearance-none" style="color: rgba(255,255,255,0.7);">
                <option value="" disabled selected style="background:#1a1a1a;">Bitte wählen …</option>
                <option value="einzelstunde" style="background:#1a1a1a;">Einzelstunde</option>
                <option value="anamnesegespraech" style="background:#1a1a1a;">Anamnesegespräch</option>
                <option value="social-walk" style="background:#1a1a1a;">Social Walk</option>
                <option value="welpengruppe" style="background:#1a1a1a;">Welpengruppe</option>
                <option value="grunderziehung" style="background:#1a1a1a;">Grunderziehung</option>
                <option value="sonstiges" style="background:#1a1a1a;">Sonstiges</option>
              </select>
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="nachricht" class="text-[12px] text-white/50 font-medium uppercase tracking-[0.08em]">Deine Nachricht</label>
              <textarea id="nachricht" name="nachricht" rows="4" placeholder="Beschreib kurz, womit du und dein Hund gerade kämpfst …"
                class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-orange/50 focus:bg-white/7 transition-all resize-none"></textarea>
            </div>

            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" name="datenschutz" required
                class="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-orange flex-shrink-0" />
              <span class="text-white/45 text-[13px] leading-relaxed">
                Ich habe die <a href="/datenschutz" class="text-orange underline hover:text-orange-dark">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
              </span>
            </label>

            <button type="submit" class="shine inline-flex items-center justify-center gap-2.5 rounded-full bg-orange hover:bg-orange-dark text-white font-display font-semibold px-8 py-4 text-[15px] transition-all shadow-[0_0_40px_rgba(249,115,22,0.25)] active:scale-95 sm:hover:scale-[1.02] mt-2">
              Anfrage senden
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>

            <p class="text-white/30 text-xs text-center">* Pflichtfelder · Antwort innerhalb von 24h</p>
          </form>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify in browser**

Scroll past hero — confirm:
- Left column: eyebrow, h2, 3 contact cards, opening hours block
- Right column: form card with all fields, GDPR checkbox, submit button
- `.reveal` animations trigger on scroll

---

### Task 4: Smoke-check on mobile viewport

- [ ] **Step 1: Open browser DevTools → toggle device toolbar → iPhone 390px wide**

Confirm:
- Hero fills screen, buttons stack vertically, text is readable
- Split section stacks (form below contact info on mobile)
- Form inputs are full-width, tap targets ≥ 44px

- [ ] **Step 2: Fix any stacking / overflow issues found**

If the grid doesn't collapse on mobile, ensure the section uses `lg:grid-cols-[...]` (not `md:`) so mobile gets a single column.
