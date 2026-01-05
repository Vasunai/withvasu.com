console.log("withvasu.com loaded");

const back = document.querySelector(".back");
const mid = document.querySelector(".mid");
const front = document.querySelector(".front");

let currentScroll = 0;
let targetScroll = 0;

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
});

function animate() {
  currentScroll += (targetScroll - currentScroll) * 0.08;

  back.style.transform =
    `translateZ(-350px) translateY(${currentScroll * 0.1}px)`;

  mid.style.transform =
    `translateZ(0px) translateY(${currentScroll * 0.25}px)`;

  front.style.transform =
    `translateZ(200px) translateY(${currentScroll * 0.45}px)`;

  requestAnimationFrame(animate);
}

animate();
