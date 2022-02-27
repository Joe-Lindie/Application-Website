const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".carousel-button-next");
const prevButton = document.querySelector(".carousel-button-prev");

// Gives node-list of all slides
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
//console.log(slides);

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
  count += 1; // add one to count
  numOfLikes.textContent = count;
}

function dislikes() {
  count -= 1; // minus one from count
  numOfLikes.textContent = count;
}

// Comment Box My Projects Page

const commentBoxStr = document.getElementById("comment-box");
const commentBtn = document.getElementById("comment-button");
const comments = document.getElementById("comments");
const remove = document.getElementById("remove");

commentBtn.addEventListener("click", () => leaveComment());

/* use .createElement(), .createTextNode(). and .prepend()*/

function leaveComment() {
  if (commentBoxStr.value == "") {
    // if input string empty
    alert("Don't forget to write something!");
  } else {
    const newList = document.createElement("li");
    const newContent = document.createTextNode(commentBoxStr.value);
    const date = new Date().toDateString();

    newList.prepend(newContent);
    comments.prepend(newList, date);
    // inserts string before first child. - opposite to appendChild() - last child

    console.log(newList);
    console.log(newContent);
  }

  // if input string is NOT empty  == if input string is full
  if (commentBoxStr.value !== "") {
    remove.remove(); // removes placeholder 'No Comments..'
  }
  // clears user input str after btn clicked
  if ((commentBtn.click = true)) {
    commentBoxStr.value = "";
  }
}
