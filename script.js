// Slider
let currentSlide=0;
const slides=document.querySelectorAll('.slide');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
function showSlide(index){slides.forEach((slide)=>slide.style.transform=`translateX(-${index*100}%)`);slides.forEach(slide=>slide.classList.remove('active'));slides[index].classList.add('active');}
prev.addEventListener('click',()=>{currentSlide=(currentSlide===0)?slides.length-1:currentSlide-1;showSlide(currentSlide);});
next.addEventListener('click',()=>{currentSlide=(currentSlide===slides.length-1)?0:currentSlide+1;showSlide(currentSlide);});
// Auto slide every 5s
setInterval(()=>{currentSlide=(currentSlide===slides.length-1)?0:currentSlide+1;showSlide(currentSlide);},5000);

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(link=>{link.addEventListener('click',e=>{e.preventDefault();document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});});});

// Contact form alert
const form=document.querySelector('form');
form.addEventListener('submit',e=>{e.preventDefault();alert('Message sent! We will contact you soon.');form.reset();});

// Scroll fade-in animations
const faders=document.querySelectorAll('.fade-in,.service-card,.project-card,.client-logos img');
const appearOptions={threshold:0.2,rootMargin:"0px 0px -50px 0px"};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('visible');observer.unobserve(entry.target);});},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Animated counters
const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const updateCounter=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText.replace(/,/g,'');
    const increment=target/200;
    if(count<target){
      counter.innerText=Math.ceil(count+increment).toLocaleString();
      setTimeout(updateCounter,20);
    } else {counter.innerText=target.toLocaleString();}
  };
  updateCounter();
});

// Initialize slider
showSlide(currentSlide);
