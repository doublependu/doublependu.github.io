---
layout: page
title: Games
subtitle: Web games - play in the browser
permalink: /games/
---

The shots on each card come from actually playing these in a browser. Click a
card to play it, or use the links under it — the game first, then its source on
GitHub where there is one. Pastel Nuketown is the one exception: its host has
the site paused, so the card is dimmed and the link won't load.

<!-- Page-specific styles and behaviour live inline on purpose.
     GitHub Pages serves HTML and assets with independent 10-minute
     caches, so a visitor can otherwise land on new markup with a stale
     stylesheet and get an unstyled wall of screenshots. -->
<style>
/* --- Games gallery -------------------------------------------------- */

/* One card per row on a phone, two in a narrow window, three across on a
   desktop. The theme's column is ~800px, so at three across the gallery
   breaks out and re-centres -- capped at 1200px, which keeps each card near
   the 800px asset width at 2x. */
.game-grid {
  --gg-gap: 1.1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gg-gap);
  margin: 1.75rem 0 2.75rem;
  padding: 0;
  list-style: none;
}

@media (min-width: 600px) { .game-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

@media (min-width: 1100px) {
  .game-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: min(1200px, calc(100vw - 3rem));
    margin-left: calc(50% - min(1200px, calc(100vw - 3rem)) / 2);
  }
}

.game-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1B2430;
  box-shadow: 0 1px 3px rgba(27, 36, 48, 0.18);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.game-card:hover,
.game-card:focus-within {
  transform: translateY(-3px);
  box-shadow: 0 10px 22px rgba(27, 36, 48, 0.28);
}

.gc-hit {
  display: block;
  color: inherit;
  text-decoration: none;
}

.gc-hit:hover,
.gc-hit:focus { text-decoration: none; }

.gc-shots {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  background: #0F161F;
}

/* Screenshots are stacked and cross-faded by the script at the end of this page */
.gc-shots img,
.gc-shots video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;                 /* overrides the article img rule above */
  border-radius: 0;
  object-fit: cover;
  display: block;
}

.gc-shots img {
  opacity: 0;
  transition: opacity 0.65s ease;
}

.gc-shots img.is-on { opacity: 1; }

.gc-name {
  display: block;
  padding: 0.7rem 0.85rem 0.35rem;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 600;
  color: #E8EDF2;
  background: #1B2430;
}

.game-card:hover .gc-name,
.gc-hit:focus .gc-name { color: #4DD0C7; }

/* Full URLs under each card, outside the play link -- nested anchors are
   invalid. Long paths wrap rather than truncate so the whole address stays
   readable at any card width. */
.gc-links {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0 0.85rem 0.75rem;
  background: #1B2430;
}

.gc-url {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.72rem;
  line-height: 1.45;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-decoration: none;
}

.gc-url-play { color: #7FE3DC; }
.gc-url-src { color: #93A3B4; }

.gc-url:hover,
.gc-url:focus {
  color: #FFFFFF;
  text-decoration: underline;
}

/* An offline game keeps its screenshot but is dimmed and labelled, so the
   card never implies the link still works. */
.game-card.is-offline .gc-shots img {
  filter: grayscale(0.45) brightness(0.55);
}

.game-card.is-offline .gc-shots::after {
  content: "offline";
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #E8EDF2;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.75);
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .game-card { transition: none; }
  .game-card:hover, .game-card:focus-within { transform: none; }
  .gc-shots img { transition: none; }
}
</style>

# Source available and open to adaptation

<div class="game-grid">

  <div class="game-card">
    <a class="gc-hit" href="https://starknightt.github.io/operation-ironhold/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/operation-ironhold/1.jpg' | relative_url }}" alt="Operation Ironhold" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/operation-ironhold/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/operation-ironhold/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/operation-ironhold/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Operation Ironhold</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://starknightt.github.io/operation-ironhold/" target="_blank" rel="noopener">https://starknightt.github.io/operation-ironhold/</a>
      <a class="gc-url gc-url-src" href="https://github.com/StarKnightt/operation-ironhold" target="_blank" rel="noopener">https://github.com/StarKnightt/operation-ironhold</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://v0.maize.live/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <video src="{{ '/assets/games/dp-paintball/loop.mp4' | relative_url }}" poster="{{ '/assets/games/dp-paintball/poster.jpg' | relative_url }}" loop muted playsinline preload="none" aria-label="Central Park Paintball"></video>
      </span>
      <span class="gc-name">Central Park Paintball</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://v0.maize.live/" target="_blank" rel="noopener">https://v0.maize.live/</a>
      <a class="gc-url gc-url-src" href="https://github.com/doublependu/dp-paintball" target="_blank" rel="noopener">https://github.com/doublependu/dp-paintball</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://raimanx.github.io/forbidden-city-paintball/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/forbidden-city-paintball/1.jpg' | relative_url }}" alt="Forbidden City Paintball" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/forbidden-city-paintball/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/forbidden-city-paintball/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/forbidden-city-paintball/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Forbidden City Paintball</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://raimanx.github.io/forbidden-city-paintball/" target="_blank" rel="noopener">https://raimanx.github.io/forbidden-city-paintball/</a>
      <a class="gc-url gc-url-src" href="https://github.com/raimanx/forbidden-city-paintball" target="_blank" rel="noopener">https://github.com/raimanx/forbidden-city-paintball</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://apexformularacing.com/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/apex-formula/1.jpg' | relative_url }}" alt="Apex Formula 2026" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/apex-formula/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/apex-formula/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/apex-formula/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Apex Formula 2026</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://apexformularacing.com/" target="_blank" rel="noopener">https://apexformularacing.com/</a>
      <a class="gc-url gc-url-src" href="https://github.com/ahacker-1/apex-formula-2026" target="_blank" rel="noopener">https://github.com/ahacker-1/apex-formula-2026</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://sakura.gh.maize.live/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <video src="{{ '/assets/games/sakura-crossing/loop.mp4' | relative_url }}" poster="{{ '/assets/games/sakura-crossing/poster.jpg' | relative_url }}" loop muted playsinline preload="none" aria-label="Sakura Crossing"></video>
      </span>
      <span class="gc-name">Sakura Crossing</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://sakura.gh.maize.live/" target="_blank" rel="noopener">https://sakura.gh.maize.live/</a>
      <a class="gc-url gc-url-src" href="https://github.com/doublependu/dp-sakura-crossing" target="_blank" rel="noopener">https://github.com/doublependu/dp-sakura-crossing</a>
      <a class="gc-url gc-url-src" href="https://github.com/Kenton-GMI/sakura-crossing" target="_blank" rel="noopener">https://github.com/Kenton-GMI/sakura-crossing</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://v3.maize.live/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <video src="{{ '/assets/games/corn-field/loop.mp4' | relative_url }}" poster="{{ '/assets/games/corn-field/poster.jpg' | relative_url }}" loop muted playsinline preload="none" aria-label="A Field of Corn"></video>
      </span>
      <span class="gc-name">A Field of Corn</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://v3.maize.live/" target="_blank" rel="noopener">https://v3.maize.live/</a>
      <a class="gc-url gc-url-src" href="https://github.com/doublependu/corn-field" target="_blank" rel="noopener">https://github.com/doublependu/corn-field</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://winchxyz.github.io/moon-rover/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/moon-rover/1.jpg' | relative_url }}" alt="Regolith" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/moon-rover/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/moon-rover/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/moon-rover/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Regolith</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://winchxyz.github.io/moon-rover/" target="_blank" rel="noopener">https://winchxyz.github.io/moon-rover/</a>
      <a class="gc-url gc-url-src" href="https://github.com/winchxyz/moon-rover" target="_blank" rel="noopener">https://github.com/winchxyz/moon-rover</a>
    </div>
  </div>

</div>

## Just the source

- <https://github.com/achimala/TheLongSilence>
- <https://github.com/mshumer/Claude-of-Duty>

# Source available

<div class="game-grid">

  <div class="game-card is-offline">
    <a class="gc-hit" href="https://nuketown.luckeysystems.com/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/pastel-nuketown/1.jpg' | relative_url }}" alt="Pastel Nuketown" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Pastel Nuketown</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://nuketown.luckeysystems.com/" target="_blank" rel="noopener">https://nuketown.luckeysystems.com/</a>
      <a class="gc-url gc-url-src" href="https://github.com/luckeyfaraday/pastel-nuketown" target="_blank" rel="noopener">https://github.com/luckeyfaraday/pastel-nuketown</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://wave-racer.vercel.app/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/wave-racer/1.jpg' | relative_url }}" alt="Ink Tide" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/wave-racer/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/wave-racer/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/wave-racer/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Ink Tide</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://wave-racer.vercel.app/" target="_blank" rel="noopener">https://wave-racer.vercel.app/</a>
      <a class="gc-url gc-url-src" href="https://github.com/Vyom-26/Wave-Racer" target="_blank" rel="noopener">https://github.com/Vyom-26/Wave-Racer</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://bmx-racer.vercel.app/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/bmx-racer/1.jpg' | relative_url }}" alt="Descent" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/bmx-racer/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/bmx-racer/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/bmx-racer/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Descent</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://bmx-racer.vercel.app/" target="_blank" rel="noopener">https://bmx-racer.vercel.app/</a>
      <a class="gc-url gc-url-src" href="https://github.com/Vyom-26/BMX_Racer" target="_blank" rel="noopener">https://github.com/Vyom-26/BMX_Racer</a>
    </div>
  </div>

</div>

# The rest of web games

<div class="game-grid">

  <div class="game-card">
    <a class="gc-hit" href="https://doodleshooter.vercel.app/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/doodle-shooter/1.jpg' | relative_url }}" alt="Doodle District" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/doodle-shooter/2.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/doodle-shooter/3.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
        <img src="{{ '/assets/games/doodle-shooter/4.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Doodle District</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://doodleshooter.vercel.app/" target="_blank" rel="noopener">https://doodleshooter.vercel.app/</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://v1.maize.live/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <video src="{{ '/assets/games/maize-v1/loop.mp4' | relative_url }}" poster="{{ '/assets/games/maize-v1/poster.jpg' | relative_url }}" loop muted playsinline preload="none" aria-label="Maize.Live 3x3"></video>
      </span>
      <span class="gc-name">Maize.Live 3&times;3</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://v1.maize.live/" target="_blank" rel="noopener">https://v1.maize.live/</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://whiteout.plgb.chatgpt.site/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <img class="is-on" src="{{ '/assets/games/whiteout/1.jpg' | relative_url }}" alt="Whiteout" loading="lazy" decoding="async">
      </span>
      <span class="gc-name">Whiteout</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://whiteout.plgb.chatgpt.site/" target="_blank" rel="noopener">https://whiteout.plgb.chatgpt.site/</a>
    </div>
  </div>

  <div class="game-card">
    <a class="gc-hit" href="https://v2.maize.live/" target="_blank" rel="noopener">
      <span class="gc-shots">
        <video src="{{ '/assets/games/maize-v2/loop.mp4' | relative_url }}" poster="{{ '/assets/games/maize-v2/poster.jpg' | relative_url }}" loop muted playsinline preload="none" aria-label="Billboard Road"></video>
      </span>
      <span class="gc-name">Billboard Road</span>
    </a>
    <div class="gc-links">
      <a class="gc-url gc-url-play" href="https://v2.maize.live/" target="_blank" rel="noopener">https://v2.maize.live/</a>
    </div>
  </div>

</div>

<script>
/* Games gallery: cross-fade each card's screenshots, and only let the
   maize.live video loops run while they're actually on screen. */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOLD = 2600;   // ms each shot stays up
  var FADE = 650;    // must match the CSS transition on .gc-shots img

  document.querySelectorAll('.gc-shots').forEach(function (media, i) {
    var shots = media.querySelectorAll('img');
    if (reduced || shots.length < 2) return;

    var at = 0;
    var z = 1;

    function advance() {
      if (document.hidden) return;
      var prev = shots[at];
      at = (at + 1) % shots.length;
      var next = shots[at];
      // Fade the incoming shot in *over* the outgoing one. Cutting the old
      // one first would show the card background through the gap.
      next.style.zIndex = ++z;
      next.classList.add('is-on');
      setTimeout(function () { prev.classList.remove('is-on'); }, FADE + 50);
    }

    // stagger the cards so the grid doesn't flip in unison
    setTimeout(function () { setInterval(advance, HOLD); }, (i % 6) * 430);
  });

  var videos = document.querySelectorAll('.gc-shots video');
  if (!videos.length) return;

  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.play().catch(function () {}); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { v.play().catch(function () {}); }
      else { v.pause(); }
    });
  }, { rootMargin: '150px' });

  videos.forEach(function (v) { io.observe(v); });
})();
</script>
