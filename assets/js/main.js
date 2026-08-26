(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  onReady(function () {
    var qa = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lucide icons
    var runIcons = function () { try { window.lucide && window.lucide.createIcons(); } catch (e) {} };
    runIcons(); setTimeout(runIcons, 400); setTimeout(runIcons, 1200);

    // Nav: active link, scroll shrink, mobile menu
    var nav = document.querySelector('[data-nav]');
    var page = document.body.getAttribute('data-page');
    if (page) {
      var current = document.querySelector('[data-page-link="' + page + '"]');
      if (current) {
        current.classList.add('is-active');
        current.setAttribute('aria-current', 'page');
      }
    }
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle('is-scrolled', window.scrollY > 20);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    var burger = document.querySelector('[data-burger]');
    var mobileMenu = document.querySelector('[data-mobile-menu]');
    if (burger && mobileMenu) {
      burger.addEventListener('click', function () {
        mobileMenu.classList.toggle('is-open');
        runIcons();
      });
      qa('[data-mobile-menu] a').forEach(function (a) {
        a.addEventListener('click', function () { mobileMenu.classList.remove('is-open'); });
      });
    }

    // Reveal-on-scroll (single [data-reveal] elements and staggered
    // [data-reveal-stagger] grids) is handled entirely by GSAP/ScrollTrigger
    // in assets/js/scroll-animations.js, for one consistent animation engine
    // across the whole site instead of splitting it between two systems.

    // Home hero carousel: auto-advancing full-bleed image rotation every 3s,
    // with prev/next arrows and dot navigation. Each change drops the
    // incoming image in from above while dissolving the outgoing one —
    // done with GSAP (already loaded sitewide) when available, falling
    // back to a plain CSS dissolve otherwise. Pauses on hover/focus, and
    // stays on the first slide (no rotation) if the visitor prefers
    // reduced motion.
    var heroCarousel = document.querySelector('[data-hero-carousel]');
    if (heroCarousel) {
      var heroSlides = qa('[data-hero-slide]');
      var heroDots = qa('[data-hero-dot]');
      var heroCurrent = 0;
      var heroTimer = null;

      var heroGoTo = function (index) {
        var outgoing = heroSlides[heroCurrent];
        heroDots[heroCurrent].classList.remove('is-active');
        heroCurrent = (index + heroSlides.length) % heroSlides.length;
        var incoming = heroSlides[heroCurrent];
        heroDots[heroCurrent].classList.add('is-active');

        if (window.gsap && !reduceMotion) {
          // GSAP drives opacity/position directly via inline styles here,
          // so the CSS dissolve transition (the no-GSAP fallback) needs to
          // step aside rather than also reacting to every value GSAP sets.
          outgoing.style.transition = 'none';
          incoming.style.transition = 'none';
          window.gsap.to(outgoing, {
            opacity: 0,
            duration: 0.6,
            ease: 'power1.out',
            onComplete: function () { outgoing.classList.remove('is-active'); }
          });
          incoming.classList.add('is-active');
          window.gsap.fromTo(incoming,
            { opacity: 0, y: -36 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }
          );
        } else {
          outgoing.classList.remove('is-active');
          incoming.classList.add('is-active');
        }
      };
      var heroStart = function () {
        if (reduceMotion || heroSlides.length < 2) return;
        heroStop();
        heroTimer = setInterval(function () { heroGoTo(heroCurrent + 1); }, 3000);
      };
      var heroStop = function () { if (heroTimer) { clearInterval(heroTimer); heroTimer = null; } };

      heroDots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { heroGoTo(i); heroStart(); });
      });
      var heroPrevBtn = document.querySelector('[data-hero-prev]');
      var heroNextBtn = document.querySelector('[data-hero-next]');
      if (heroPrevBtn) heroPrevBtn.addEventListener('click', function () { heroGoTo(heroCurrent - 1); heroStart(); });
      if (heroNextBtn) heroNextBtn.addEventListener('click', function () { heroGoTo(heroCurrent + 1); heroStart(); });
      heroCarousel.addEventListener('mouseenter', heroStop);
      heroCarousel.addEventListener('mouseleave', heroStart);
      heroCarousel.addEventListener('focusin', heroStop);
      heroCarousel.addEventListener('focusout', heroStart);
      heroStart();
    }

    // Testimonial carousel: auto-advancing crossfade, pauses on hover/focus,
    // and stays on a single slide (no rotation) if the visitor prefers reduced motion.
    var carousel = document.querySelector('[data-testimonial-carousel]');
    if (carousel) {
      var slides = qa('[data-testimonial-slide]');
      var dots = qa('[data-testimonial-dot]');
      var current = 0;
      var timer = null;

      var goTo = function (index) {
        slides[current].classList.remove('is-active');
        dots[current].classList.remove('is-active');
        dots[current].setAttribute('aria-selected', 'false');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('is-active');
        dots[current].classList.add('is-active');
        dots[current].setAttribute('aria-selected', 'true');
      };
      var start = function () {
        if (reduceMotion || slides.length < 2) return;
        stop();
        timer = setInterval(function () { goTo(current + 1); }, 6500);
      };
      var stop = function () { if (timer) { clearInterval(timer); timer = null; } };

      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); start(); });
      });
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
      carousel.addEventListener('focusin', stop);
      carousel.addEventListener('focusout', start);
      start();
    }

    // Gallery filter chips: visual active state only (no data-side category filter)
    var chips = qa('[data-chip]');
    if (chips.length) {
      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          chips.forEach(function (c) { c.classList.remove('is-active'); });
          chip.classList.add('is-active');
        });
      });
      chips[0].classList.add('is-active');
    }

    // Contact form: client-side only — show a thank-you note, no data is sent
    var form = document.querySelector('[data-form]');
    if (form) {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        // Honeypot: a real visitor never sees or fills this field. If it's
        // filled, silently drop the submission instead of showing success —
        // revealing the catch just teaches bots to skip that field next time.
        var honeypot = form.querySelector('input[name="company"]');
        if (honeypot && honeypot.value) return;
        var note = form.querySelector('[data-formnote]');
        if (note) note.classList.add('is-visible');
        Array.prototype.slice.call(form.querySelectorAll('input, textarea, select, button'))
          .forEach(function (el) { el.setAttribute('disabled', ''); });
      });
    }
  });
})();
