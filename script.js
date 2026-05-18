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

/* FORM SUBMISSION TO N8N */

const appointmentForm =
  document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };

  try {

    const response = await fetch(
      "https://rakhirakhi879.app.n8n.cloud/webhook/appointment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if(response.ok){

      alert("Appointment submitted successfully!");

      appointmentForm.reset();

    } else {

      alert("Submission failed.");

    }

  } catch(error){

    console.error(error);

    alert("Something went wrong.");

  }

});
