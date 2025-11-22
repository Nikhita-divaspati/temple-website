function initSlider(trackId, arrowLeft, arrowRight) {
  let track = document.getElementById(trackId);
  let slides = track.querySelectorAll(".slide");

  let index = 0;
  let slidesPerView = 2;
  let totalSlides = slides.length;
  let maxIndex = Math.ceil(totalSlides / slidesPerView) - 1;

  arrowRight.onclick = function () {
    if (index < maxIndex) {
      index++;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  arrowLeft.onclick = function () {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  };
}

// Row 1
initSlider(
  "sliderTrack1",
  document.querySelector('.arrow-left[data-slider="1"]'),
  document.querySelector('.arrow-right[data-slider="1"]')
);

// Row 2
initSlider(
  "sliderTrack2",
  document.querySelector('.arrow-left[data-slider="2"]'),
  document.querySelector('.arrow-right[data-slider="2"]')
);
