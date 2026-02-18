gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "images/sample1.jpg",
  "images/sample2.jpg",
  "images/sample3.jpg",
  "images/sample4.jpg"
];

let currentIndex = 0;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(index){
  currentIndex = index;
  modal.style.display = "flex";
  modalImg.src = galleryImages[currentIndex];
}

function closeModal(){
  modal.style.display = "none";
}

function prevImage(){
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex];
}

function nextImage(){
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex];
}

/* HERO & cards animations */
gsap.from(".hero", { y:10, repeat:-1, yoyo:true, ease:"sine.inOut", duration:4 });
gsap.utils.toArray(".card").forEach((card,i)=>{
  gsap.from(card,{ scrollTrigger:{trigger:card, start:"top 85%"}, y:80, opacity:0, delay:i*0.2, duration:1.2, ease:"power3.out" });
});
