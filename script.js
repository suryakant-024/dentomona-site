document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll(
    '.video-section, .hero-left, .hero-right, .about-image, .about-content, .services, .service-card, .appointment, .appointment-form, .timing-box, .contact-left, .contact-map, .footer'
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  animatedItems.forEach((item) => observer.observe(item));
});

/* MOBILE NAVBAR HIDE/SHOW */

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if(currentScroll > lastScrollTop){
    navbar.classList.add('hide-nav');
  } else {
    navbar.classList.remove('hide-nav');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});