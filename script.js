let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Auto-slide every 6s (instead of ~3s)
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}, 6000);

// Manual controls
document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

showSlide(slideIndex);
