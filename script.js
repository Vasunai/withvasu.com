console.log("withvasu.com loaded");

// Elements
const scene = document.getElementById("scene");
const back = document.querySelector(".back");
const mid = document.querySelector(".mid");
const front = document.querySelector(".front");

// Scroll smoothing
let currentScroll = 0;
let targetScroll = 0;

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
});

// Mouse tilt
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
});

// Animation loop
function animate() {
  // Smooth scroll
  currentScroll += (targetScroll - currentScroll) * 0.08;

  back.style.transform =
    `translateZ(-300px) translateY(${currentScroll * 0.1}px)`;
  mid.style.transform =
    `translateZ(0px) translateY(${currentScroll * 0.25}px)`;
  front.style.transform =
    `translateZ(150px) translateY(${currentScroll * 0.4}px)`;

  // Scene tilt (3D / 4D feel)
  scene.style.transform =
    `rotateX(${-mouseY}deg) rotateY(${mouseX}deg)`;

  requestAnimationFrame(animate);
}

animate();
