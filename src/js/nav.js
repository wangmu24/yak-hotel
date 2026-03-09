// Shared nav logic
export function initNav() {
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.nav-menu-btn');
  const mobileNav = document.querySelector('.nav-mobile');

  // Scroll behavior
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Active link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === path || (path.endsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
      a.classList.add('active');
    }
    if (path === '/' && a.getAttribute('href') === 'index.html') a.classList.add('active');
  });
}
