// Split text into words
document.querySelectorAll(".animate").forEach(el => {
  const words = el.innerText.split(" ");
  el.innerHTML = words.map(w => `<span class="word">${w}&nbsp;</span>`).join("");
});

const stories = document.querySelectorAll(".story");

window.addEventListener("scroll", () => {
  stories.forEach(section => {
    const rect = section.getBoundingClientRect();
    const progress = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);

    const words = section.querySelectorAll(".word");
    words.forEach((word, i) => {
      const delay = i / words.length;
      const visible = progress - delay;

      if (visible > 0) {
        word.style.opacity = Math.min(visible * 2, 1);
        word.style.transform = `translateY(${16 - visible * 16}px)`;
      } else {
        word.style.opacity = 0;
        word.style.transform = "translateY(16px)";
      }
    });
  });
});
