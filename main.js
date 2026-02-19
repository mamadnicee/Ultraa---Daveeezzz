// ========================= GLOBAL MODAL & LIGHTBOX =========================
const images = document.querySelectorAll('.scroll-container img');

images.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<div class="modal-overlay"></div>
                       <img src="${img.src}" class="modal-content">`;
    document.body.appendChild(modal);

    modal.querySelector('.modal-overlay').addEventListener('click', () => {
      modal.remove();
    });
  });
});

// ========================= SUBTLE GIF-LIKE MOTION (for all galleries) =========================
function animateGallery() {
  const galleryImgs = document.querySelectorAll('.scroll-container img');
  galleryImgs.forEach(img => {
    const x = (Math.random() - 0.5) * 4; // -2 to +2px
    const y = (Math.random() - 0.5) * 4;
    const r = (Math.random() - 0.5) * 1; // -0.5deg to +0.5deg
    img.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  });
}
setInterval(animateGallery, 1800);

// ========================= NEON VAULT STREAM AUTOMATED MOVEMENT =========================
const neonVaultContainer = document.querySelector('#neonVaultStream .scroll-container');
if (neonVaultContainer) {
  const neonImgs = neonVaultContainer.querySelectorAll('img');

  function animateNeonVault() {
    neonImgs.forEach(img => {
      const x = (Math.random() - 0.5) * 30; // +/-15px horizontal
      const y = (Math.random() - 0.5) * 20; // +/-10px vertical
      const r = (Math.random() - 0.5) * 5;  // +/-2.5deg rotation
      const scale = 0.9 + Math.random() * 0.2; // scale 0.9 - 1.1
      img.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg) scale(${scale})`;
    });
  }

  // Run animation smoothly
  setInterval(animateNeonVault, 1500);

  // Optional: Hover effect intensifies the motion
  neonImgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transition = 'transform 0.3s ease-out';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transition = 'transform 0.8s ease-in-out';
    });
  });
}

// ========================= OPTIONAL: Smooth scroll for neon vault =========================
let scrollAmount = 0;
function autoScrollNeonVault() {
  if (!neonVaultContainer) return;
  scrollAmount += 0.6; // adjust speed here
  if (scrollAmount >= neonVaultContainer.scrollWidth) scrollAmount = 0;
  neonVaultContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}
setInterval(autoScrollNeonVault, 50); // every 50ms for smooth effect
