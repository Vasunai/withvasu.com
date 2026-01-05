console.log("withvasu.com cinematic mode");

const back = document.querySelector(".depth-back");
const mid = document.querySelector(".depth-mid");
const front = document.querySelector(".depth-front");

let current = 0;
let target = 0;

window.addEventListener("scroll", () => {
  target = window.scrollY;
});

function loop() {
  current += (target - current) * 0.07;

  back.style.transform =
    `translateZ(-400px) translateY(${current * 0.08}px)`;

  mid.style.transform =
    `translateZ(0px) translateY(${current * 0.18}px)`;

  front.style.transform =
    `translateZ(200px) translateY(${current * 0.35}px)`;

  requestAnimationFrame(loop);
}

loop();
