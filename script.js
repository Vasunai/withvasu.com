console.log("withvasu.com loaded");

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.2 + 0.4,
    vx: Math.random() * 0.15 - 0.075,
    vy: Math.random() * 0.15 - 0.075,
    o: Math.random() * 0.5 + 0.2
  });
}

let mouseX = 0, mouseY = 0;
window.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* SCROLL + REVEAL */
const reveals = document.querySelectorAll(".reveal");

function animate() {
  ctx.clearRect(0,0,w,h);

  particles.forEach(p => {
    p.x += p.vx + (mouseX - w/2) * 0.00001;
    p.y += p.vy + (mouseY - h/2) * 0.00001;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.o})`;
    ctx.fill();
  });

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      el.classList.add("active");
    }
  });

  requestAnimationFrame(animate);
}

animate();
