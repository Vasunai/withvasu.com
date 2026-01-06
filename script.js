/* FADE IN ON SCROLL */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* REMOVE #content / ANY HASH CAUSED BY EMBEDS */
function cleanHash() {
  if (window.location.hash) {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  }
}

/* Run after embeds load */
window.addEventListener("load", () => {
  setTimeout(cleanHash, 500);
});

/* Prevent future hash injection */
window.addEventListener("hashchange", () => {
  cleanHash();
});
