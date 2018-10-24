var slides = document.querySelectorAll('.example__slide');
var sliderNavigation = document.querySelectorAll('.example__toggle-status');
var sliderToggle = document.querySelector('.example__toggle-button');

  slides = Array.prototype.slice.call(slides);
  if (slides.length > 0) {
  sliderNavigation = Array.prototype.slice.call(sliderNavigation);

  if (document.documentElement.clientWidth <= 767) {
    function changeToBeforeSlide() {
      slides[1].classList.remove('example__slide--active');
      slides[0].classList.add('example__slide--active');
      sliderToggle.classList.remove('example__toggle-button--right');
      sliderToggle.classList.add('example__toggle-button--left');
    }

    function changeToAfterSlide() {
      slides[0].classList.remove('example__slide--active');
      slides[1].classList.add('example__slide--active');
      sliderToggle.classList.remove('example__toggle-button--left');
      sliderToggle.classList.add('example__toggle-button--right');
    }

    sliderNavigation[0].addEventListener('click', function(evt) {
      evt.preventDefault();

      changeToBeforeSlide();
    });

    sliderNavigation[1].addEventListener('click', function(evt) {
      evt.preventDefault();

      changeToAfterSlide();
    });

    sliderToggle.addEventListener('click', function(evt) {
      evt.preventDefault();

      if(sliderToggle.classList.contains('example__toggle-button--left')) {
        changeToAfterSlide();
      } else {
        changeToBeforeSlide();
      }
    });
  } else {
    function changeToBeforeSlide() {
      slides[0].classList.remove('example__slide--hide');
      slides[0].classList.add('example__slide--full');
      slides[1].classList.add('example__slide--hide');
    }

    function changeToAfterSlide() {
      slides[1].classList.remove('example__slide--hide');
      slides[1].classList.add('example__slide--full');
      slides[0].classList.add('example__slide--hide');
    }

    sliderNavigation[0].addEventListener('click', function(evt) {
      evt.preventDefault();

      changeToBeforeSlide();
    });

    sliderNavigation[1].addEventListener('click', function(evt) {
      evt.preventDefault();

      changeToAfterSlide();
    });
  }
}
