const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    let currentSlide = 0;

    function updateCarousel() {
      const offset = -currentSlide * 100;
      carousel.style.transform = `translateX(${offset}%)`;

      const images = document.querySelectorAll(".slide img");
      images.forEach(img => {
        img.style.height = "auto";
        img.style.maxHeight = "300px";
        img.style.width = "auto";
        img.style.objectFit = "contain";
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateCarousel();
    }

    rightArrow.addEventListener("click", nextSlide);
    leftArrow.addEventListener("click", prevSlide);

    updateCarousel();