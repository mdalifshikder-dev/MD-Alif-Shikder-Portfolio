/* =========================================================
   ALIF PORTFOLIO — JAVASCRIPT
   Small interactions for the navigation and scroll effects.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Display the current year in the footer.
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Update the navigation bar when the page is scrolled.
  const navbar = document.querySelector(".custom-nav");
  function updateNavbar() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 35);
    }
  }
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // Reveal elements smoothly as they enter the viewport.
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    // Show all reveal elements in browsers without IntersectionObserver.
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }

  // Close the mobile menu after a navigation link is selected.
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navMenu = document.getElementById("mainNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu && navMenu.classList.contains("show") && window.bootstrap) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });
});
