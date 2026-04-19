/**
 * CampusToAI Academy — Shared Components
 * ----------------------------------------
 * Defines nav, footer and WhatsApp float as HTML template strings.
 * Each page only needs:
 *   <div id="nav-placeholder"></div>
 *   <div id="footer-placeholder"></div>
 *   <script src="js/components.js"></script>
 *
 * To update nav or footer: edit this file only — all pages update automatically.
 */

(function () {

  /* ─────────────────────────────────────────────
     SHARED LOGO SVG  (hex + neural network + CampusToAI ACADEMY)
     Uses unique IDs per instance to avoid conflicts
     when both nav and footer appear on same page.
  ───────────────────────────────────────────── */
  function logoSVG(prefix) {
    return `<svg class="nav-logo-svg" viewBox="0 0 218 58" xmlns="http://www.w3.org/2000/svg" aria-label="CampusToAI Academy">
      <defs>
        <radialGradient id="${prefix}hexFill" cx="38%" cy="32%" r="72%">
          <stop offset="0%"   stop-color="#1a4fd8"/>
          <stop offset="55%"  stop-color="#0d2d8a"/>
          <stop offset="100%" stop-color="#060e38"/>
        </radialGradient>
        <linearGradient id="${prefix}shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#f0c040" stop-opacity="0"/>
          <stop offset="40%"  stop-color="#f0c040" stop-opacity="1"/>
          <stop offset="100%" stop-color="#f0c040" stop-opacity="0.3"/>
        </linearGradient>
        <linearGradient id="${prefix}nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="#60aaff"/>
          <stop offset="100%" stop-color="#2d6be4"/>
        </linearGradient>
        <filter id="${prefix}glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="${prefix}hexAura" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="${prefix}aiGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Hex outer aura -->
      <polygon points="53,29 41,8 17,8 5,29 17,50 41,50" fill="#2d6be4" opacity="0.2" filter="url(#${prefix}hexAura)"/>
      <!-- Hex body -->
      <polygon points="53,29 41,8 17,8 5,29 17,50 41,50" fill="url(#${prefix}hexFill)"/>
      <!-- Hex border -->
      <polygon points="53,29 41,8 17,8 5,29 17,50 41,50" fill="none" stroke="#f0c040" stroke-width="1.6" stroke-linejoin="round"/>
      <!-- Top shine -->
      <polygon points="17,8 41,8 29,21" fill="#ffffff" opacity="0.07"/>

      <!-- ── Neural Network inside hex ── -->
      <!-- Layer connections: input → hidden -->
      <line x1="14" y1="21" x2="28" y2="16" stroke="#90b8ff" stroke-width="0.9" opacity="0.45"/>
      <line x1="14" y1="21" x2="28" y2="29" stroke="#90b8ff" stroke-width="0.9" opacity="0.45"/>
      <line x1="14" y1="21" x2="28" y2="42" stroke="#90b8ff" stroke-width="0.9" opacity="0.25"/>
      <line x1="14" y1="37" x2="28" y2="16" stroke="#90b8ff" stroke-width="0.9" opacity="0.25"/>
      <line x1="14" y1="37" x2="28" y2="29" stroke="#90b8ff" stroke-width="0.9" opacity="0.45"/>
      <line x1="14" y1="37" x2="28" y2="42" stroke="#90b8ff" stroke-width="0.9" opacity="0.45"/>
      <!-- Layer connections: hidden → output (gold — AI output) -->
      <line x1="28" y1="16" x2="42" y2="29" stroke="#f0c040" stroke-width="1"   opacity="0.55"/>
      <line x1="28" y1="29" x2="42" y2="29" stroke="#f0c040" stroke-width="1"   opacity="0.7"/>
      <line x1="28" y1="42" x2="42" y2="29" stroke="#f0c040" stroke-width="1"   opacity="0.55"/>

      <!-- Input nodes (blue) -->
      <circle cx="14" cy="21" r="2.6" fill="url(#${prefix}nodeGrad)" filter="url(#${prefix}glow)"/>
      <circle cx="14" cy="37" r="2.6" fill="url(#${prefix}nodeGrad)" filter="url(#${prefix}glow)"/>
      <!-- Hidden nodes (lighter blue) -->
      <circle cx="28" cy="16" r="2.2" fill="#7ab8ff" opacity="0.9"/>
      <circle cx="28" cy="29" r="2.2" fill="#7ab8ff" opacity="0.9"/>
      <circle cx="28" cy="42" r="2.2" fill="#7ab8ff" opacity="0.9"/>
      <!-- Output node (gold = AI result) -->
      <circle cx="42" cy="29" r="3.4" fill="#f0c040" filter="url(#${prefix}aiGlow)"/>
      <circle cx="42" cy="29" r="1.6" fill="#ffffff"/>

      <!-- Circuit ticks at hex vertices -->
      <line x1="41" y1="3"  x2="41" y2="8"  stroke="#f0c040" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="41" cy="3"  r="2"   fill="#f0c040"/>
      <line x1="0"  y1="29" x2="5"  y2="29" stroke="#f0c040" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="0"  cy="29" r="2"   fill="#f0c040"/>
      <line x1="41" y1="50" x2="41" y2="55" stroke="#f0c040" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="41" cy="55" r="2"   fill="#f0c040"/>
      <circle cx="53" cy="29" r="1.4" fill="#f0c040" opacity="0.35"/>
      <circle cx="17" cy="8"  r="1.4" fill="#f0c040" opacity="0.35"/>
      <circle cx="17" cy="50" r="1.4" fill="#f0c040" opacity="0.35"/>

      <!-- ── Wordmark: CampusToAI ── -->
      <text x="63" y="31" font-family="Arial,sans-serif" font-weight="800" letter-spacing="-0.3">
        <tspan font-size="22" fill="#ffffff">Campus</tspan><tspan font-size="22" fill="#c8dfff">To</tspan><tspan font-size="22" fill="#f0c040">AI</tspan>
      </text>

      <!-- Shimmer underline -->
      <rect x="63" y="34" width="130" height="1.6" rx="1" fill="url(#${prefix}shimmer)"/>
    </svg>
    <span class="nav-slogan">Learn Real. Get Hired.</span>`;
  }

  /* ─────────────────────────────────────────────
     NAVIGATION
  ───────────────────────────────────────────── */
  const NAV = `
<div class="top-bar">
  <div class="container top-bar-inner">
    <span class="top-bar-text">📚 India's #1 Program for Fresh Graduates — Only 5 Seats Per Batch</span>
    <a href="https://wa.me/919023388910" target="_blank" rel="noopener" class="top-bar-wa">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      +91 90233 88910
    </a>
  </div>
</div>
<nav class="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      ${logoSVG('nav_')}
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="placement.html">Placement</a></li>
      <li><a href="faq.html">FAQ</a></li>
      <li><a href="contact.html">Contact</a></li>
<li><a href="course-brochure.html" target="_blank" class="btn btn-sm nav-cta" style="background:rgba(240,192,64,.15);color:var(--yellow);border:1.5px solid rgba(240,192,64,.4);">📄 Course Brochure</a></li>
      <li><a href="enroll.html" class="btn btn-primary btn-sm nav-cta">Enroll Now →</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  /* ─────────────────────────────────────────────
     FOOTER
  ───────────────────────────────────────────── */
  const FOOTER = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">
          ${logoSVG('ftr_')}
        </a>
        <p style="color:#a8c4ff;">Learn Real. Get Hired.<br>The fastest path from college to a job-ready Full-Stack Java + Cloud + AI Developer.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="courses.html">Courses</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="placement.html">Placement</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="enroll.html">Enroll Now</a></li>
          <li><a href="enroll.html#how-to-enroll">How to Enroll</a></li>
<li><a href="course-brochure.html" target="_blank" style="color:var(--yellow);">📄 Course Brochure</a></li>
          <li><a href="enroll.html#how-to-enroll" style="color:var(--yellow);">⬇ Enrollment Form</a></li>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-phone">
          📞 <a href="tel:+919023388910" style="color:inherit;">+91 90233 88910</a>
        </div>
        <div class="footer-phone" style="margin-top:8px;">
          ✉️ <a href="mailto:info.campustoai@gmail.com" style="color:inherit;">info.campustoai@gmail.com</a>
        </div>
        <a href="https://wa.me/919023388910" target="_blank" rel="noopener" class="wa-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 CampusToAI Academy. All rights reserved.</span>
      <span>Learn Real. Get Hired.</span>
    </div>
  </div>
</footer>`;

  /* ─────────────────────────────────────────────
     WHATSAPP FLOATING BUTTON
  ───────────────────────────────────────────── */
  const WA_FLOAT = `
<a href="https://wa.me/919023388910" target="_blank" rel="noopener" class="wa-float" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.836.74 5.497 2.035 7.8L.057 32l8.394-2.199A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.771-1.848l-.486-.29-5.034 1.32 1.344-4.902-.317-.503A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.874c-.398-.2-2.356-1.163-2.72-1.296-.364-.133-.629-.2-.894.2-.265.398-1.028 1.296-1.26 1.562-.232.265-.464.298-.862.1-.398-.2-1.682-.62-3.204-1.978-1.184-1.056-1.984-2.361-2.217-2.759-.233-.398-.025-.614.175-.812.18-.178.4-.465.598-.697.2-.233.265-.4.398-.665.133-.265.066-.498-.033-.697-.1-.2-.894-2.156-1.226-2.951-.322-.774-.65-.67-.894-.682-.232-.01-.497-.013-.762-.013-.265 0-.697.1-1.062.498-.364.398-1.393 1.362-1.393 3.317s1.426 3.848 1.625 4.114c.2.265 2.806 4.284 6.797 6.009.95.41 1.69.655 2.268.838.953.304 1.82.261 2.505.158.764-.113 2.356-.963 2.688-1.893.333-.93.333-1.728.233-1.893-.1-.166-.364-.265-.762-.465z"/>
  </svg>
</a>`;

  /* ─────────────────────────────────────────────
     INJECT & INITIALISE
  ───────────────────────────────────────────── */
  function inject() {
    // Nav
    const navEl = document.getElementById('nav-placeholder');
    if (navEl) navEl.outerHTML = NAV;

    // Footer
    const footerEl = document.getElementById('footer-placeholder');
    if (footerEl) footerEl.outerHTML = FOOTER;

    // WhatsApp float (append to body if not already present)
    if (!document.querySelector('.wa-float')) {
      document.body.insertAdjacentHTML('beforeend', WA_FLOAT);
    }

    // ── Highlight active nav link based on current filename ──
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a[href]').forEach(function (a) {
      if (a.getAttribute('href') === page) {
        a.classList.add('active');
      }
    });

    // ── Hamburger toggle ──
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
      });
      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active');
        });
      });
    }
  }

  // Run after DOM is ready — guard against double-execution
  if (window.__campusNavLoaded) return;
  window.__campusNavLoaded = true;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
