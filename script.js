// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ================= MOBILE MENU TOGGLE =================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ================= SMOOTH SCROLL FOR NAV LINKS =================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        navLinks.classList.remove("active");
    });
});


// ================= ACTIVE NAV LINK ON SCROLL =================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================= SECTION REVEAL ANIMATION =================
const revealSections = document.querySelectorAll(
    ".about, .features, .portfolio, .contact, .cta"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

revealSections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";
    revealObserver.observe(section);
});


// ================= TYPING EFFECT =================
const typingElement = document.querySelector(".typing");

if (typingElement) {

    const text = typingElement.textContent;
    typingElement.textContent = "";

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 40);
        }
    }

    typeEffect();
}


// ================= HERO BUTTON SCROLL =================
const hireBtn = document.querySelector(".btn-primary");
const viewWorkBtn = document.querySelector(".btn-outline");

if (hireBtn) {
    hireBtn.addEventListener("click", () => {
        document.querySelector("#contact")
            .scrollIntoView({ behavior: "smooth" });
    });
}

if (viewWorkBtn) {
    viewWorkBtn.addEventListener("click", () => {
        document.querySelector("#portfolio")
            .scrollIntoView({ behavior: "smooth" });
    });
}


// ================= BACK TO TOP =================
const backTop = document.querySelector(".back-top");

if (backTop) {
    backTop.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#home")
            .scrollIntoView({ behavior: "smooth" });
    });
}