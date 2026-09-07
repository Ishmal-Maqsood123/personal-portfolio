// mobile nav toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

// experience tabs
const tabs = document.querySelectorAll("#expTabs button");
const panels = document.querySelectorAll(".exp-panel");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelector(`.exp-panel[data-panel="${tab.dataset.tab}"]`)
      .classList.add("active");
  });
});

// typing effect in terminal
const phrases = [
  "'clean code';",
  "'good design';",
  "'solving bugs';",
  "'the open web';",
];
const el = document.getElementById("typed-line");
let pi = 0,
  ci = 0,
  deleting = false;

function typeLoop() {
  const current = phrases[pi];
  if (!deleting) {
    ci++;
    el.textContent = current.slice(0, ci);
    if (ci === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    ci--;
    el.textContent = current.slice(0, ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// scroll reveal
const revealEls = document.querySelectorAll("[data-reveal]");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

// subtle glow follows mouse in hero
const glow = document.querySelector(".glow");
document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${(e.clientX - window.innerWidth / 2) * 0.05}px, ${(e.clientY - window.innerHeight / 2) * 0.05}px)`;
});
const sayHelloBtn = document.getElementById("sayHelloBtn");
const contactForm = document.getElementById("contactForm");
const closeForm = document.getElementById("closeForm");

sayHelloBtn.addEventListener("click", function (e) {
    e.preventDefault();
    contactForm.style.display = "flex";
});

closeForm.addEventListener("click", function () {
    contactForm.style.display = "none";
});
   // Contact Form
const contactFormElement = document.getElementById("contactFormElement");
const formStatus = document.getElementById("formStatus");

contactFormElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const sendButton = contactFormElement.querySelector(".send-btn");

    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    try {
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        });

        const data = await response.json();

       if (response.ok) {
    formStatus.textContent = "Message sent successfully! ✓";
    formStatus.style.color = "#00ffff";

    // Clear the form fields
    contactFormElement.reset();

    // Close the form after 2.5 seconds
    setTimeout(() => {
        contactForm.style.display = "none";

        // Reset success message
        formStatus.textContent = "";
    }, 2500);
}
        else {
            formStatus.textContent = data.message || "Something went wrong.";
            formStatus.style.color = "red";
        }

    } catch (error) {
        console.error(error);

        formStatus.textContent =
            "Unable to send message. Please try again.";
        formStatus.style.color = "red";

    } finally {
        sendButton.disabled = false;
        sendButton.textContent = "Send Message";
    }
});