/* ===========================================================
   DARK MODE TOGGLE
   =========================================================== */
const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon depending on mode
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";  // Light mode icon
    } else {
        toggleBtn.textContent = "🌙";  // Dark mode icon
    }
});


/* ===========================================================
   FADE-IN SCROLL ANIMATION
   =========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
});
