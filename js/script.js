// 1. Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Show/Hide menu
  });
}

// 2. Contact form validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from submitting immediately

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errorMsg = "";

    if (name === "") {
      errorMsg += "⚠️ Name is required.\n";
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMsg += "⚠️ Enter a valid email address.\n";
    }

    if (message === "") {
      errorMsg += "⚠️ Message cannot be empty.\n";
    }

    if (errorMsg !== "") {
      alert(errorMsg); // show error messages
    } else {
      alert("✅ Thank you for contacting us, " + name + "! We’ll get back to you soon.");
      contactForm.reset(); // clear form after success
    }
  });
}

// ========================
// 3. SCROLL TO TOP BUTTON
// ========================
const scrollBtn = document.getElementById("scroll-top");

if (scrollBtn) {
  // Show button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========================
// 4. SIMPLE FADE-IN ANIMATION ON SCROLL
// ========================
const fadeEls = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);