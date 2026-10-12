//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik selain side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (checkout <= checkin) {
    alert("Tarikh Check-out mesti selepas tarikh Check-in.");
    return;
  }

  function formatDate(value) {
    return new Date(value + "T12:00:00").toLocaleDateString("en-MY", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  const message =
    `Asalamualaikum puan, saya ingin membuat tempahan.\n\n` +
    `Nama: ${name}\n` +
    `No. Telefon: ${phone}\n` +
    `Check-in: ${formatDate(checkin)}\n` +
    `Check-out: ${formatDate(checkout)}\n\n` +
    `Boleh saya tahu kekosongan pada tarikh tersebut? Terima kasih.`;

  const whatsappNumber = "60194872098";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappURL;
});

// About Us slideshow: automatic rotation, arrows and dots
(() => {
  const slider = document.querySelector('.about-slider');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.about-slide')];
  const dots = [...slider.querySelectorAll('.slide-dots button')];
  let current = 0;
  let timer;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }
  function restart() {clearInterval(timer); timer = setInterval(() => show(current + 1), 4000);}
  slider.querySelector('.prev').addEventListener('click', () => {show(current - 1);restart();});
  slider.querySelector('.next').addEventListener('click', () => {show(current + 1);restart();});
  dots.forEach((dot, i) => dot.addEventListener('click', () => {show(i);restart();}));
  restart();
})();
