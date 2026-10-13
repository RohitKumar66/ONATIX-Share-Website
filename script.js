const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

const RELEASE = {
  windowsUrl: '',
  androidUrl: '',
  githubUrl: ''
};

const markUnavailable = (link, message) => {
  link.setAttribute('aria-disabled', 'true');
  link.classList.add('is-unavailable');
  link.removeAttribute('href');
  link.textContent = message;
  link.addEventListener('click', (event) => event.preventDefault());
};

document.querySelectorAll('[data-download="windows"]').forEach((link) => {
  if (RELEASE.windowsUrl) {
    link.href = RELEASE.windowsUrl;
  } else {
    markUnavailable(link, 'Windows build coming soon');
  }
});

document.querySelectorAll('[data-download="android"]').forEach((link) => {
  if (RELEASE.androidUrl) {
    link.href = RELEASE.androidUrl;
  } else {
    markUnavailable(link, 'Android build coming soon');
  }
});

const revealItems = document.querySelectorAll(
  '.hero-copy, .section-heading, .feature-card, .showcase-item, .step, .platform-card, .faq-list details, .cta-panel'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.transitionDelay = `${(index % 4) * 70}ms`;
    revealObserver.observe(item);
  });
}