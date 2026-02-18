gsap.registerPlugin(ScrollTrigger);

gsap.from("#logoText", {
  y:120,
  opacity:0,
  duration:1.4,
  ease:"power4.out"
});

gsap.from(".subtitle", {
  y:60,
  opacity:0,
  duration:1.4,
  delay:.2,
  ease:"power4.out"
});

gsap.utils.toArray(".card").forEach((card,i)=>{
  gsap.from(card,{
    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    },
    y:80,
    opacity:0,
    duration:1,
    delay:i*.15,
    ease:"power3.out"
  });
});

/* subtle parallax glow */
gsap.to("body::after",{
  backgroundPosition:"40% 40%,60% 60%",
  duration:20,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut"
});
