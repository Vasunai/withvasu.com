const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    e.target.classList.toggle("visible",e.isIntersecting)
  })
},{threshold:0.25})

document.querySelectorAll(".fade,.words").forEach(el=>observer.observe(el))

// reserved for future animations
