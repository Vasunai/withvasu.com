// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide) => slide.style.transform = `translateX(-${index*100}%)`);
    slides.forEach((slide,i)=> slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prev.addEventListener('click', () => {
    currentSlide = (currentSlide===0)? slides.length-1 : currentSlide-1;
    showSlide(currentSlide);
});

next.addEventListener('click', () => {
    currentSlide = (currentSlide===slides.length-1)?0:currentSlide+1;
    showSlide(currentSlide);
});

// Auto slide every 5s
setInterval(() => {
    currentSlide = (currentSlide===slides.length-1)?0:currentSlide+1;
    showSlide(currentSlide);
},5000);

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        const target=document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    });
});

// Contact form alert
const form=document.querySelector('form');
form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
    form.reset();
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in, .service-card, .project-card, .client-logos img');
const appearOptions={threshold:0.2, rootMargin:"0px 0px -50px 0px"};
const appearOnScroll = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader=> appearOnScroll.observe(fader));

// Initialize slider
showSlide(currentSlide);
