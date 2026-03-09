// nav.js — shared navigation for all pages

export const yakLogoSVG = `
<svg class="nav-logo-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Stylized Yak head / Tibetan knot emblem -->
  <circle cx="22" cy="22" r="20" stroke="rgba(196,151,58,.7)" stroke-width="1"/>
  <!-- Dharma wheel simplified -->
  <circle cx="22" cy="22" r="8" stroke="rgba(196,151,58,.9)" stroke-width="1.2"/>
  <line x1="22" y1="7"  x2="22" y2="37" stroke="rgba(196,151,58,.5)" stroke-width="1"/>
  <line x1="7"  y1="22" x2="37" y2="22" stroke="rgba(196,151,58,.5)" stroke-width="1"/>
  <line x1="11.5" y1="11.5" x2="32.5" y2="32.5" stroke="rgba(196,151,58,.3)" stroke-width="1"/>
  <line x1="32.5" y1="11.5" x2="11.5" y2="32.5" stroke="rgba(196,151,58,.3)" stroke-width="1"/>
  <circle cx="22" cy="22" r="3" fill="rgba(196,151,58,.8)"/>
</svg>`;

export function injectNav(activePage = 'home') {
  const navHTML = `
    <nav id="nav">
      <div class="nav-inner">
        <a href="/index.html" class="nav-logo">
          ${yakLogoSVG}
          <div class="nav-logo-text">
            <span class="nav-logo-name">Yak Hotel</span>
            <span class="nav-logo-sub">& Restaurant · Namche Bazar</span>
          </div>
        </a>

        <div class="nav-links nav-desktop">
          <a href="/index.html"   class="nav-link ${activePage === 'home'    ? 'active' : ''}">Home</a>
          <a href="/rooms.html"   class="nav-link ${activePage === 'rooms'   ? 'active' : ''}">Rooms</a>
          <a href="/contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
        </div>

        <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="nav-mobile" id="mobileMenu">
      <a href="/index.html"   class="nav-link ${activePage === 'home'    ? 'active' : ''}">Home</a>
      <a href="/rooms.html"   class="nav-link ${activePage === 'rooms'   ? 'active' : ''}">Rooms</a>
      <a href="/contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  initNav();
}

export function injectFooter() {
  const year = new Date().getFullYear();
  const footerHTML = `
    <footer>
      <div class="prayer-flags">
        <span class="f1"></span>
        <span class="f2"></span>
        <span class="f3"></span>
        <span class="f4"></span>
        <span class="f5"></span>
        <span class="f1"></span>
        <span class="f2"></span>
        <span class="f3"></span>
        <span class="f4"></span>
        <span class="f5"></span>
      </div>
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/index.html" class="nav-logo">
            <div class="nav-logo-text">
              <span class="nav-logo-name">Yak Hotel & Restaurant</span>
              <span class="nav-logo-sub">Namche Bazar, Nepal</span>
            </div>
          </a>
          <p class="footer-tagline">
            Nestled in the heart of Namche Bazar, gateway<br>
            to the roof of the world.
          </p>
          <div class="footer-contact-info">
            <a href="tel:+977XXXXXXXXXX">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 .01h3a2 2 0 012 1.72c.13 1 .39 2 .78 2.95a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.12-1.12a2 2 0 012.11-.45c.95.39 1.95.65 2.95.78A2 2 0 0122 16.92z"/>
              </svg>
              +977 — (phone number here)
            </a>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Namche Bazar, Khumbu, Nepal
            </span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/rooms.html">Rooms</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>The Region</h4>
          <ul>
            <li><a href="#">Namche Bazar</a></li>
            <li><a href="#">Everest Base Camp</a></li>
            <li><a href="#">Sagarmatha Park</a></li>
            <li><a href="#">Local Trekking</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© ${year} Yak Hotel & Restaurant. All rights reserved.</span>
        <span>Namche Bazar, Khumbu Pasang Lhamu, Nepal</span>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll handler
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

// Scroll-reveal observer
export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Mountain SVG path
export const mountainSVG = `
<svg class="page-header-mountain" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M0,120 L0,80 L60,55 L120,75 L200,30 L280,65 L360,20 L420,50 L500,10 L560,40 L640,0 L700,30 L760,8 L820,35 L900,15 L960,45 L1040,22 L1100,55 L1180,35 L1260,60 L1320,40 L1380,65 L1440,45 L1440,120 Z" fill="white" fill-opacity="1"/>
</svg>`;
