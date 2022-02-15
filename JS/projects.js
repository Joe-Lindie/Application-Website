const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".carousel-button-next");
const prevButton = document.querySelector(".carousel-button-prev");

// Gives node-list of all slides
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// Functions -  Next button/Previous button

let slideCounter = 0;

nextButton.addEventListener("click", function () {
  slideCounter++;
  imageCarousel();
});

prevButton.addEventListener("click", function () {
  slideCounter--;
  imageCarousel();
});

// imageCarousel function
function imageCarousel() {
  // slides functionality remove/add slide buttons
  if (slideCounter < slides.length - 1) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }

  if (slideCounter > 0) {
    prevButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${slideCounter * 100}%)`;
  });
}
prevButton.style.display = "none";

// Likes Conter - Thumbs up/down My Projects Page

const thumbsDown = document.querySelector(".fa-thumbs-down");
const thumbsUp = document.querySelector(".fa-thumbs-up");
const numOfLikes = document.querySelector(".num-of-likes");

let count = 0; // initialise the likes at zero

thumbsUp.addEventListener("click", () => likes());
thumbsDown.addEventListener("click", () => dislikes());

function likes() {
  count += 1;
  numOfLikes.textContent = count;
}

function dislikes() {
  count -= 1;
  numOfLikes.textContent = count;
}
