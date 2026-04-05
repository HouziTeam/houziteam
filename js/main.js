// ══════════════════════════════════════
//  HOUZI TEAM — main.js
// ══════════════════════════════════════

// ── Carrito ──
let cartCount = 0;

function addToCart(btn) {
  cartCount++;
  document.querySelector('.cart-count').textContent = cartCount;
  btn.textContent = '✓';
  btn.style.background = '#00c8ff';
  btn.style.color = '#060a0e';
  setTimeout(() => {
    btn.textContent = '+';
    btn.style.background = '';
    btn.style.color = '';
  }, 1200);
}

// ── Menú hamburguesa (móvil) ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── Animación al hacer scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cat-card, .prod-card, .event-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});