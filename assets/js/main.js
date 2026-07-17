(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  onReady(function () {
    var qa = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

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

    // Reveal-on-scroll
    var revealEls = qa('[data-reveal]');
    if ('IntersectionObserver' in window) {
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
