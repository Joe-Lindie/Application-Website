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
  // slides functionality next button removed.
  if (slideCounter < slides.length - 1) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }

  // slides functionality prev button removed.
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

let count = 0;

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

// Comment Box My Projects Page

const commentBoxStr = document.getElementById("comment-box");
const commentBtn = document.getElementById("comment-button");
const comments = document.getElementById("comments");

commentBtn.addEventListener("click", () => leaveComment());

/* use .createElement(), .createTextNode(). and .appendChild()*/

function leaveComment() {
  if (commentBoxStr.value == "") {
    //if the user enters an Empty string
    alert("Don't forget to write something!");
  } else {
    const newList = document.createElement("li");
    const newContent = document.createTextNode(commentBoxStr.value);

    newList.appendChild(newContent);
    comments.appendChild(newList);

    console.log(newList);
    console.log(newContent);
  }
}
