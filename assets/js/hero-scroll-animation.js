/**
 * Hero image scroll-entrance animation — GSAP + ScrollTrigger.
 *
 * Kept in its own file, deliberately separate from the site's general
 * vanilla-JS reveal system in main.js: this is the one effect on the site
 * that depends on GSAP being loaded, so it owns its own module rather than
 * being tangled into code that has to work with or without the library.
 *
 * Behavior: the hero image starts very slightly scaled up and transparent,
 * then settles to its resting scale and full opacity as it enters the
 * viewport. Reverses if the visitor scrolls back above the trigger point.
 */
(function () {
  function init() {
    // GSAP/ScrollTrigger failed to load (CDN blocked, offline, etc.) —
    // fail silently. The image is still fully visible via its plain CSS
    // state, just without the entrance animation.
    if (!window.gsap || !window.ScrollTrigger) return;

    var target = document.querySelector('[data-hero-scroll-image]');
    if (!target) return;

    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      target,
      { scale: 1.08, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // ScrollTrigger already recalculates trigger positions on window
    // resize on its own. The one gap that leaves is layout that settles
    // *after* the initial measurement — web fonts swapping in, images
    // finishing decode — which can shift where "top 85%" actually lands.
    // A single refresh once everything has truly loaded closes that gap
    // without any extra resize-handling code of our own.
    window.addEventListener('load', function () {
      ScrollTrigger.refresh();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
