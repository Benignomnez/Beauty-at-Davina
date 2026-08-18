/**
 * Site-wide scroll animations — GSAP + ScrollTrigger.
 *
 * One consistent animation engine drives every scroll-triggered effect on
 * the site: the hero image's scale/fade entrance, every single-element
 * [data-reveal] section, and every staggered [data-reveal-stagger] grid.
 * Deliberately kept in its own file, separate from main.js, since this is
 * the one part of the site that depends on GSAP being loaded — main.js
 * still owns everything that has to work with or without it (nav,
 * mobile menu, testimonial carousel, gallery chips, the contact form).
 *
 * Resilience: [data-reveal]/[data-reveal-stagger]/[data-hero-scroll-image]
 * elements start at opacity:0 in CSS (see style.css) so there's no flash of
 * fully-visible content before the animation takes over. If GSAP or
 * ScrollTrigger fails to load, or the visitor prefers reduced motion, this
 * script reveals everything instantly instead of leaving it invisible.
 */
(function () {
  function revealInstantly() {
    Array.prototype.slice.call(document.querySelectorAll('[data-reveal], [data-hero-scroll-image]'))
      .forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; });
    Array.prototype.slice.call(document.querySelectorAll('[data-reveal-stagger]'))
      .forEach(function (group) {
        Array.prototype.slice.call(group.children).forEach(function (child) {
          child.style.opacity = 1;
          child.style.transform = 'none';
        });
      });
  }

  function init() {
    if (!window.gsap || !window.ScrollTrigger) {
      // CDN failed to load, offline, blocked, etc. — degrade to fully
      // visible content rather than leaving the page half-hidden.
      revealInstantly();
      return;
    }

    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      revealInstantly();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var EASE = 'power3.out';

    // Hero image — scale down + fade in as it enters the viewport.
    var heroImage = document.querySelector('[data-hero-scroll-image]');
    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { scale: 1.08, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroImage,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Single-element section reveals: fade up + settle from a slight scale,
    // matching the site's established entrance language.
    Array.prototype.slice.call(document.querySelectorAll('[data-reveal]')).forEach(function (el) {
      gsap.fromTo(
        el,
        { y: 64, scale: 0.94, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: EASE,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Staggered grid reveals: each direct child of a [data-reveal-stagger]
    // container cascades in rather than the whole grid popping in at once.
    Array.prototype.slice.call(document.querySelectorAll('[data-reveal-stagger]')).forEach(function (group) {
      var children = Array.prototype.slice.call(group.children);
      if (!children.length) return;
      gsap.fromTo(
        children,
        { y: 52, scale: 0.95, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: EASE,
          stagger: 0.09,
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ScrollTrigger recalculates on window resize on its own. The one gap
    // that leaves is layout that settles after the initial measurement —
    // web fonts swapping in, images finishing decode — which can shift
    // where these trigger points actually land. A single refresh once
    // everything has truly loaded closes that gap.
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
