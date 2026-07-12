// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');

revealEls.forEach((el, i) => {
  if (!el.style.getPropertyValue('--delay')) {
    el.style.setProperty('--delay', el.dataset.delay || 0);
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ===== Dot nav active state =====
const dots = document.querySelectorAll('.dotnav .dot');
const sections = document.querySelectorAll('section, footer');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      dots.forEach(d => d.classList.remove('active'));
      const match = document.querySelector(`.dotnav a[href="#${id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => { if (s.id) navObserver.observe(s); });

// ===== Ambient glow color follows project section =====
const glow = document.getElementById('glow');
const projectSections = document.querySelectorAll('.project');

const glowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const accentSoft = getComputedStyle(entry.target).getPropertyValue('--accent-soft').trim();
      if (accentSoft) glow.style.background = `radial-gradient(circle, ${accentSoft} 0%, transparent 65%)`;
    }
  });
}, { threshold: 0.4 });

projectSections.forEach(s => glowObserver.observe(s));

// reset glow at hero/contact
const resetZones = document.querySelectorAll('#hero, #contact, #about');
const resetObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      glow.style.background = `radial-gradient(circle, #ffd40018 0%, transparent 65%)`;
    }
  });
}, { threshold: 0.4 });
resetZones.forEach(s => resetObserver.observe(s));

// ===== Parallax on giant project numbers =====
const numbers = document.querySelectorAll('.project-number');
window.addEventListener('scroll', () => {
  numbers.forEach(num => {
    const rect = num.parentElement.getBoundingClientRect();
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const shift = (progress - 0.5) * 60;
    num.style.transform = `translate(-50%, calc(-8% + ${shift}px))`;
  });
}, { passive: true });
