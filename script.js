let slides = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlide();
}, 5000);
