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

  for (let slide of slides) { // loops through object values

    slide.classList.remove ('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');

  }
  slides[slidePosition].classList.add ('carousel-item-visible');
  //when carousel items visable / call likes() and dislikes()
 
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

// Likes Conter - Thumbs up/down My Projects Page

const thumbsDown = document.getElementById("thumbs-down")
const thumbsUp = document.getElementById("thumbs-up")
const numOfLikes =document.getElementById ("num-of-likes")

let count = 0; // initialise the likes at zero 

thumbsUp.addEventListener('click',  () => likes())
thumbsDown.addEventListener('click', () => dislikes())

function likes() {

  count  += 1
  numOfLikes.textContent = count; 

}

  function dislikes() {

   count  -= 1
   numOfLikes.textContent = count; 
 
  }
