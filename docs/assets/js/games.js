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
