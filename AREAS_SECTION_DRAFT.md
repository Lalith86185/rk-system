# RK System — "Areas we serve" section draft (prepared 2026-10-10, NOT deployed)

Purpose: item 3 from the ideas list sent 2026-10-09 ("Areas-we-serve section — local searches like 'water level controller Yelahanka' are how nearby customers find you"). Drafted so that if Lalith picks it, deployment is one paste + the language-dictionary entries below. Nothing here is live; publishing a site change needs his go-ahead.

## Area list — what is confirmed vs what needs his word
- CONFIRMED on record: Madhugirihalli, Yelahanka, Bengaluru (business address he supplied 2026-10-09; site JSON-LD areaServed = Bengaluru; Google Business Profile service areas = Bengaluru and Yelahanka).
- PROPOSED in the 2026-10-09 ideas message, NOT confirmed by him: Hebbal, Jakkur, Attur, Thanisandra.
- Rule: deploy only with the areas he confirms. If he serves all of Bengaluru, say that instead of a neighbourhood list — a wrong/too-narrow list costs real customers.

## Ready-to-paste HTML (site section style, insert after the "How booking works" section, before "What customers say")
```html
  <section class="s" id="areas">
    <div class="wrap">
      <div class="sh"><h2>Areas we serve</h2><p>Installation, repair and annual maintenance for automatic water level controllers across north Bengaluru.</p></div>
      <div class="feat">
        <article><h3>Yelahanka</h3><p>Including Madhugirihalli, Yelahanka New Town and Yelahanka Old Town.</p></article>
        <article><h3>Hebbal &amp; Jakkur</h3><p>Hebbal, Jakkur, Amruthahalli and nearby layouts.</p></article>
        <article><h3>Attur &amp; Thanisandra</h3><p>Attur Layout, Thanisandra, Kogilu and nearby areas.</p></article>
        <article><h3>Elsewhere in Bengaluru?</h3><p>Call 72046 38853 — if we can reach you, we will.</p></article>
      </div>
    </div>
  </section>
```
(The neighbourhood groupings inside each card are also part of what he must confirm — they are written from the proposed list, not from his records.)

## SEO pairing (do both in the same deploy)
- JSON-LD `areaServed`: change the single City entry to also list the confirmed localities as `Place`/`AdministrativeArea` entries, matching the visible section word for word (Google penalises schema that the page doesn't show).
- Meta description already says "Yelahanka & nearby areas" — no change needed unless the confirmed list changes.

## Kannada switcher note
New visible strings need entries in the site's EN/ಕನ್ನಡ dictionary in the same deploy, or the section stays English when a customer switches (stored data stays English either way, per the existing design). Draft the Kannada lines at deploy time and verify the switch both ways, as was done for the header buttons.

## Deployment checklist (when he picks it)
1. He confirms/edits the area list (one reply is enough).
2. Paste section + JSON-LD change into index.html, deploy to BOTH copies (GitHub Pages lalith86185.github.io/rk-system and the liveblog365 customer-facing copy) — the two copies must not drift.
3. Live-verify: section renders, Kannada switch works both ways, a test booking still passes end to end.
4. Log it on the RK System tracking item.
