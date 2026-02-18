// GSAP animations for Exclusive Pack
gsap.from("#logoText", { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" });
gsap.from(".subtitle", { y: 40, opacity: 0, duration: 1.2, delay: 0.2, ease: "power3.out" });

// Scroll gallery images floating effect
gsap.utils.toArray(".scroll-container img").forEach((img, i) => {
  gsap.from(img, {
    y: 20,
    opacity: 0,
    delay: i * 0.1,
    duration: 1,
    ease: "power2.out"
  });

  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, boxShadow: "0 0 25px rgba(255,106,0,0.5),0 0 50px rgba(255,106,0,0.35)", duration: 0.3 });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, boxShadow: "0 0 15px rgba(255,255,255,0.1),0 0 30px rgba(255,106,0,0.15)", duration: 0.3 });
  });
});

// Modal open animation
function openModal(src){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
  gsap.fromTo(modalImg, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
}

// Modal close
function closeModal(){
  const modal = document.getElementById("modal");
  gsap.to(modal.querySelector("#modalImg"), { scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
    modal.style.display = "none";
  }});
}

// Floating subtle motion for cards
gsap.utils.toArray(".card").forEach(card => {
  gsap.to(card, {
    y: 5,
    repeat: -1,
    yoyo: true,
    duration: 3 + Math.random()*2,
    ease: "sine.inOut"
  });
});
