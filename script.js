const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade, .words").forEach(el => observer.observe(el));
