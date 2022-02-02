// slides - My Projects page

const slides = document.getElementsByClassName('carousel-item'); 
const carouselButtonNext = document.getElementById("carousel-button-next");
const carouselButtonPrev = document.getElementById("carousel-button-prev");

let slidePosition = 0; 
const totalSlides = slides.length;


carouselButtonNext.addEventListener ('click', () => moveToNextSlide());
carouselButtonPrev.addEventListener ('click', () => moveToPreviousSlide());

// Function to update slides
function updateSlide() {

  for (let slide of slides) {

    slide.classList.remove ('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
  slides[slidePosition].classList.add ('carousel-item-visible');
}

// Function to move to next slide
function moveToNextSlide() {

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
  slidePosition++;
  }

  updateSlide()
}

// Function to move to previous slide
function moveToPreviousSlide() {

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
  slidePosition--;
  }

  updateSlide()
}

