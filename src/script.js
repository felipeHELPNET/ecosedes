document.addEventListener("DOMContentLoaded", function () {
  const slideWidth = 300; // Largura de cada slide
  let slideIndex = 0;

  function showSlide(index) {
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  document.querySelector("#btn-prev").addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = 0;
    showSlide(slideIndex);
  });

  document.querySelector("#btn-next").addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll(".slides img").length)
      slideIndex = 0;
    showSlide(slideIndex);
  });

  // Mostrar o primeiro slide inicialmente
  showSlide(slideIndex);
});

// MODAL =

document.getElementById("abrirModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

// Quando o usuário clica fora do modal ou no botão fechar
window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// Função para fechar o modal quando o botão fechar é clicado
document.querySelector(".fechar").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

// Fim Modal
