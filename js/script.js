// js/script.js

// Load header/footer for pages that don't include fetch (index does fetch separately)
window.addEventListener('load', function(){
  // add small helper: highlight active nav link
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a => {
    if (a.href === location.href || location.href.includes(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});

// Modal donate logic (header.html has donateBtn and donateModal)
document.addEventListener('click', function(e){
  const modal = document.getElementById('donateModal');
  const donateBtn = document.getElementById('donateBtn');
  const close = document.getElementById('closeModal');

  if (donateBtn && e.target === donateBtn) {
    if (modal) modal.style.display = 'flex';
  }
  if (close && e.target === close) {
    if (modal) modal.style.display = 'none';
  }
});

// Close modal by clicking outside
window.addEventListener('click', function(e){
  const modal = document.getElementById('donateModal');
  if (modal && e.target === modal) modal.style.display = 'none';
});

// Footer year and callback form simple handler
window.addEventListener('load', ()=> {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;

  const form = document.getElementById('callbackForm');
  if (form) {
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      alert('Thank you! We received your request. The temple office will contact you.');
      form.reset();
    });
  }
});
// Smooth scroll animation (optional, if you want extra effect)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Toggle Pooja Booking Section
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("togglePoojaBtn");
  const list = document.getElementById("poojaList");

  if (btn) {
    btn.addEventListener("click", () => {
      if (list.style.display === "block") {
        list.style.display = "none";
        btn.textContent = "Book Your Pooja Slot";
      } else {
        list.style.display = "block";
        btn.textContent = "Hide Pooja List";
      }
    });
  }
});
// -------- BOOK POOJA FORM POPUP ----------
const poojaModal = document.getElementById("poojaModal");
const closePooja = document.getElementById("closePooja");

// Open on BOOK button click
document.querySelectorAll(".seva-book-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    poojaModal.style.display = "flex";
  });
});

// Close popup
closePooja.addEventListener("click", () => {
  poojaModal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === poojaModal) {
    poojaModal.style.display = "none";
  }
});

// Form (you can connect payment later)
document.getElementById("poojaForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Proceeding to payment...");
});
// FAQ Expand/Collapse
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
