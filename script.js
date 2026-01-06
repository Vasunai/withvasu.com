/* REMOVE HASH ON LOAD */
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname);
}

/* REMOVE HASH IF EMBEDS TRY TO ADD IT */
window.addEventListener('hashchange', () => {
  history.replaceState(null, '', window.location.pathname);
});

/* FADE ANIMATION (UP & DOWN) */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));
