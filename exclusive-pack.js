// =========================
// Exclusive Pack JS
// =========================

// Modal setup
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const exclusiveImages = Array.from(document.querySelectorAll(".gallery-scroll:nth-child(2) .scroll-container img"));
let currentIndex = 0;

// Open Modal
function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
  currentIndex = exclusiveImages.findIndex(img => img.src.includes(src));
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
}

// Modal Navigation
document.getElementById("prevBtn").onclick = () => {
  currentIndex = (currentIndex - 1 + exclusiveImages.length) % exclusiveImages.length;
  modalImg.src = exclusiveImages[currentIndex].src;
};

document.getElementById("nextBtn").onclick = () => {
  currentIndex = (currentIndex + 1) % exclusiveImages.length;
  modalImg.src = exclusiveImages[currentIndex].src;
};

// =========================
// GSAP Animations
// =========================
gsap.from("#logoText", { y:50, opacity:0, duration:1.2, ease:"power3.out" });
gsap.from(".subtitle", { y:40, opacity:0, duration:1.2, delay:0.2, ease:"power3.out" });

// Optional: Modal image hover cinematic effect
exclusiveImages.forEach(img => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale:1.05, duration:0.3, boxShadow:"0 0 35px rgba(255,106,0,0.6),0 0 70px rgba(255,106,0,0.3)" });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale:1, duration:0.3, boxShadow:"0 0 15px rgba(255,255,255,0.1),0 0 30px rgba(255,106,0,0.15)" });
  });
});
