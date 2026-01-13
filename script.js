// Split all reveal text into words
document.querySelectorAll(".reveal").forEach(el => {
  const text = el.innerText.trim();
  const words = text.split(" ");
  el.innerHTML = words
    .map(word => `<span class="word">${word}&nbsp;</span>`)
    .join("");
});

// Observe each screen
const screens = document.querySelectorAll(".screen");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const words = entry.target.querySelectorAll(".word");

      if (entry.isIntersecting) {
        words.forEach((word, i) => {
          setTimeout(() => {
            word.classList.add("show");
            word.classList.remove("hide");
          }, i * 35);
        });
      } else {
        words.forEach((word, i) => {
          setTimeout(() => {
            word.classList.remove("show");
            word.classList.add("hide");
          }, i * 20);
        });
      }
    });
  },
  { threshold: 0.45 }
);

screens.forEach(screen => observer.observe(screen));
