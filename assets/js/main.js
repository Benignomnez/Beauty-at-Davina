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

    // Hero parallax: the media column drifts slower than the page scroll,
    // capped so it stays subtle and never drifts far once you're past the hero.
    // Lives on its own inner wrapper so it doesn't fight the [data-reveal]
    // entrance transform on the outer .home-hero__media.
    var heroMedia = document.querySelector('[data-hero-parallax]');
    if (heroMedia && !reduceMotion) {
      var parallaxTicking = false;
      var applyParallax = function () {
        var offset = Math.min(window.scrollY * 0.15, 70);
        heroMedia.style.transform = 'translateY(' + offset + 'px)';
        parallaxTicking = false;
      };
      window.addEventListener('scroll', function () {
        if (!parallaxTicking) {
          window.requestAnimationFrame(applyParallax);
          parallaxTicking = true;
        }
      }, { passive: true });
      applyParallax();
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

    // Reveal-on-scroll
    var revealEls = qa('[data-reveal]');
    if (!reduceMotion && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // Staggered grid reveal — same fade-up, but each child of a
    // [data-reveal-stagger] container gets an incremental delay so grids
    // cascade in rather than popping in as one block.
    var staggerGroups = qa('[data-reveal-stagger]');
    if (!reduceMotion && 'IntersectionObserver' in window) {
      var stagIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            Array.prototype.slice.call(entry.target.children).forEach(function (child, i) {
              child.style.transitionDelay = Math.min(i * 90, 540) + 'ms';
              child.classList.add('is-visible');
            });
            stagIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      staggerGroups.forEach(function (el) { stagIo.observe(el); });
    } else {
      staggerGroups.forEach(function (el) {
        Array.prototype.slice.call(el.children).forEach(function (child) { child.classList.add('is-visible'); });
      });
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
