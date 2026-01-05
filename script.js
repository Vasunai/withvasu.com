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
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.3,
    vx: Math.random() * 0.2 - 0.1,
    vy: Math.random() * 0.2 - 0.1,
    o: Math.random() * 0.4 + 0.1
  });
}

let mouseX = 0, mouseY = 0;
window.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* 3D SCENE */
const scene = document.getElementById("scene");
const back = document.querySelector(".back");
const mid = document.querySelector(".mid");
const front = document.querySelector(".front");

/* LOGO FLOAT */
const logo = document.querySelector(".logo span");

let currentScroll = 0;
let targetScroll = 0;

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
});

/* REVEAL */
const reveals = document.querySelectorAll(".reveal");

function checkReveal() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      el.classList.add("active");
    }
  });
}

/* LOOP */
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
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${p.o})`;
    ctx.fill();
  });

  currentScroll += (targetScroll - currentScroll) * 0.08;

  back.style.transform = `translateZ(-300px) translateY(${currentScroll*0.1}px)`;
  mid.style.transform = `translateY(${currentScroll*0.25}px)`;
  front.style.transform = `translateZ(150px) translateY(${currentScroll*0.4}px)`;

  scene.style.transform =
    `rotateX(${-(mouseY/h-0.5)*10}deg)
     rotateY(${(mouseX/w-0.5)*10}deg)`;

  logo.style.transform =
    `translateY(${Math.sin(Date.now()/800)*6}px)`;

  checkReveal();
  requestAnimationFrame(animate);
}

animate();
