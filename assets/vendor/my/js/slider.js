document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const controls = document.querySelectorAll(".slider-controls button");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    controls[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    controls[currentSlide].classList.add("active");
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  controls.forEach((control) => {
    control.addEventListener("click", function () {
      stopSlideShow();
      const index = Number(this.getAttribute("data-index"));
      goToSlide(index);
      startSlideShow();
    });
  });

  nextBtn.addEventListener("click", () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
  });
  prevBtn.addEventListener("click", () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
  });

  const slider = document.getElementById("dissolveSlider");
  slider.addEventListener("mouseenter", stopSlideShow);
  slider.addEventListener("mouseleave", startSlideShow);

  startSlideShow();
});
