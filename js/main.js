/* ==========================================================
   EDev Learning — shared front-end behavior
   1. Mobile hamburger menu toggle
   2. Hero headline typewriter loop
   3. Scroll reveal animation (IntersectionObserver)
   4. Lightweight client-side form validation
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Mobile menu toggle ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the menu after a link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Hero typewriter loop ---------- */
  var twHeading = document.getElementById('heroTypewriter');
  if (twHeading) {
    var twTextEl = twHeading.querySelector('.tw-text');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Full phrase, with \n marking the line break and **...** marking the accent-colored word
    var fullText = 'Learn Web **Development**\nFrom Scratch';
    var plain = fullText.replace(/\*\*/g, '');
    var accentStart = plain.indexOf('Development');
    var accentEnd = accentStart + 'Development'.length;
    var chars = fullText.replace(/\*\*/g, '').split('');

    function escapeHtml(ch) {
      if (ch === '&') return '&amp;';
      if (ch === '<') return '&lt;';
      if (ch === '>') return '&gt;';
      return ch;
    }

    function renderUpTo(len) {
      var html = '';
      for (var i = 0; i < len; i++) {
        var ch = chars[i];
        var out = ch === '\n' ? '<br>' : escapeHtml(ch);
        if (i >= accentStart && i < accentEnd) {
          out = '<span class="accent">' + out + '</span>';
        }
        html += out;
      }
      twTextEl.innerHTML = html;
    }

    if (reduceMotion) {
      renderUpTo(chars.length);
    } else {
      var TYPE_SPEED = 55;
      var END_PAUSE = 1600;
      var RESTART_PAUSE = 500;

      (function typeLoop() {
        var i = 0;
        (function tick() {
          i++;
          renderUpTo(i);
          if (i < chars.length) {
            setTimeout(tick, TYPE_SPEED);
          } else {
            setTimeout(function () {
              renderUpTo(0);
              setTimeout(typeLoop, RESTART_PAUSE);
            }, END_PAUSE);
          }
        })();
      })();
    }
  }

  /* ---------- 3. Scroll reveal animation ---------- */
  var revealSelectors = [
    '.about-card', '.about-text', '.service-card', '.design-card',
    '.contact-form', '.contact-info', '.stat-row .stat'
  ];
  var revealEls = document.querySelectorAll(revealSelectors.join(','));

  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.transitionDelay = (i % 6) * 60 + 'ms';
        observer.observe(el);
      });
    } else {
      // No IntersectionObserver support — just show everything
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }
  }

  /* ---------- 4. Form validation ---------- */
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        var errorId = field.id + '-error';
        var msg = document.getElementById(errorId);
        var filled = field.value.trim().length > 0;
        var isEmail = field.type === 'email';
        var emailOk = !isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());

        if (!filled || !emailOk) {
          valid = false;
          field.classList.add('field-invalid');
          if (!msg) {
            msg = document.createElement('div');
            msg.id = errorId;
            msg.className = 'field-error';
            field.insertAdjacentElement('afterend', msg);
          }
          msg.textContent = !filled ? 'This field is required.' : 'Enter a valid email address.';
        } else {
          field.classList.remove('field-invalid');
          if (msg) msg.remove();
        }
      });

      // Extra check: confirm password must match password (sign-up form)
      var pass = form.querySelector('#supassword');
      var confirm = form.querySelector('#suconfirm');
      if (pass && confirm) {
        var confirmErrorId = confirm.id + '-mismatch';
        var confirmMsg = document.getElementById(confirmErrorId);
        if (confirm.value && pass.value !== confirm.value) {
          valid = false;
          confirm.classList.add('field-invalid');
          if (!confirmMsg) {
            confirmMsg = document.createElement('div');
            confirmMsg.id = confirmErrorId;
            confirmMsg.className = 'field-error';
            confirm.insertAdjacentElement('afterend', confirmMsg);
          }
          confirmMsg.textContent = 'Passwords do not match.';
        } else if (confirmMsg) {
          confirmMsg.remove();
        }
      }

      var successEl = form.querySelector('.form-success');
      if (valid) {
        if (successEl) {
          successEl.hidden = false;
          clearTimeout(form._successTimer);
          form._successTimer = setTimeout(function () {
            successEl.hidden = true;
          }, 15000);
        }
        form.reset();
        form.querySelectorAll('.field-error').forEach(function (m) { m.remove(); });
      } else if (successEl) {
        successEl.hidden = true;
      }
    });
  });

});