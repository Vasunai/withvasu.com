// Split text into words
function splitWords(element) {
  const words = element.innerText.split(" ");
  element.innerHTML = words
    .map(word => `<span class="word">${word}&nbsp;</span>`)
    .join("");
}

document.querySelectorAll("h1, h2, .sub").forEach(splitWords);

// Observe sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const words = entry.target.querySelectorAll(".word");

      if (entry.isIntersecting) {
        words.forEach((word, i) => {
          setTimeout(() => word.classList.add("show"), i * 40);
        });
      } else {
        words.forEach((word, i) => {
          setTimeout(() => word.classList.remove("show"), i * 20);
        });
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach(section => observer.observe(section));
