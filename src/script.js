document.addEventListener("DOMContentLoaded", function () {
  const slideWidth = 300; // Largura de cada slide
  let slideIndex = 0;

  function showSlide(index) {
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  document.querySelector(".btn-prev").addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = 0;
    showSlide(slideIndex);
  });

  document.querySelector(".btn-next").addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll(".slides img").length)
      slideIndex = 0;
    showSlide(slideIndex);
  });

  // Mostrar o primeiro slide inicialmente
  showSlide(slideIndex);
});
