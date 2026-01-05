console.log("withvasu.com loaded");

const back = document.querySelector('.back');
const mid = document.querySelector('.mid');
const front = document.querySelector('.front');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  back.style.transform = `translateZ(-300px) translateY(${scrollY * 0.1}px)`;
  mid.style.transform = `translateZ(0px) translateY(${scrollY * 0.25}px)`;
  front.style.transform = `translateZ(150px) translateY(${scrollY * 0.4}px)`;
});
