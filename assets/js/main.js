// Show or hide the navigation menu
const toggleMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

toggleMenu("nav-toggle", "nav-menu");

// Highlight active link on scroll
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(currentSectionId)) {
      link.classList.add("active");
    }
  });
});

// Hide menu on mobile after clicking a link
const navMenu = document.getElementById("nav-menu");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Copy email to clipboard
const copyEmailBtn = document.getElementById("copy");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("zulfiqarshaikhofficial92@gmail.com");
    copyEmailBtn.innerHTML = "Copied";
    setTimeout(() => {
      copyEmailBtn.innerHTML = "";
    }, 1000);
  });
}

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 800,
  reset: true,
});

// Home section animations
sr.reveal(".home-title");
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

// About section animations
sr.reveal(".about-img");
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

// Skills section animations
sr.reveal(".skills-subtitle");
sr.reveal(".skills-text");
sr.reveal(".skills-data", { interval: 100 });
// sr.reveal(".skills-img", { delay: 600 }); // Uncomment if needed

// Projects section animations
sr.reveal(".project-img", { interval: 200 });

// Contact section animations
// sr.reveal(".contact-input", { interval: 200 }); // Uncomment if needed
