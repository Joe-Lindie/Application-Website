const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".carousel-button-next");
const prevButton = document.querySelector(".carousel-button-prev");
//console.log(slides); // Gives nodelist/array of all slides(0 index)

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
  //console.log(slide); //call back fn for each element in array
});

// Functions -  Next button/Previous button

let slideCounter = 0;

nextButton.addEventListener("click", function () {
  slideCounter++; // increment slideCounter by 1
  imageCarousel();
});

prevButton.addEventListener("click", function () {
  slideCounter--; //decrement slideCounter by 1
  imageCarousel();
});

// imageCarousel function
function imageCarousel() {
  // slides functionality next button removed.
  if (slideCounter < slides.length - 1) {
    console.log(slideCounter);
    console.log(slides.length);
    nextButton.style.display = "block"; //is displayed
  } else {
    nextButton.style.display = "none"; // not displayed
  }

  // slides functionality prev button removed.
  if (slideCounter > 0) {
    prevButton.style.display = "block"; //is displayed
  } else {
    prevButton.style.display = "none"; // not displayed
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${slideCounter * 100}%)`;
  }); // move in X direction - (-) negative move to left
}
prevButton.style.display = "none";

// LIKES COUNTER - THUMBS UP/DOWN MY PROJECTS PAGE  - START

const thumbsDown = document.querySelectorAll(".fa-thumbs-down");
const thumbsUp = document.querySelectorAll(".fa-thumbs-up");

const counts = {
  1: 0, //First image
  2: 0, // Second Image
  3: 0, // Third Image
  4: 0, // Fourth Iimage
};

for (let i = 0; i < thumbsUp.length; i++) {
  thumbsUp[i].addEventListener("click", function likesCount(event) {
    const thumbsUpButton = event.currentTarget;
    const thumbsDiv = thumbsUpButton.parentNode;

    counts[thumbsDiv.id] += 1;

    const numOfLikes = thumbsDiv.querySelector("h3");
    numOfLikes.textContent = counts[thumbsDiv.id];

    //console.log("like this");
  });
}

for (let i = 0; i < thumbsDown.length; i++) {
  thumbsDown[i].addEventListener("click", function likesCount(event) {
    const thumbsDownButton = event.currentTarget;
    const thumbsDiv = thumbsDownButton.parentNode;

    counts[thumbsDiv.id] -= 1;

    const numOfLikes = thumbsDiv.querySelector("h3");
    numOfLikes.textContent = counts[thumbsDiv.id];

    //console.log("like this");
  });
}

// COMMENT BOX MY PROJECTS PAGE - START

const commentBoxStr = document.getElementById("comment-box");
const commentBtn = document.getElementById("comment-button");
const comments = document.getElementById("comments");
const dummyPlaceholder = document.getElementById("remove");

commentBtn.addEventListener("click", () => leaveComment());

/* use .createElement(), .createTextNode(). and .prepend()*/

const leaveComment = () => {
  if (commentBoxStr.value == "") {
    // if input string empty
    alert("Don't forget to write something!");
  } else {
    const newList = document.createElement("div"); //new div
    newList.classList.add("comment");

    const line = document.createElement("hr"); // new line

    const deleteBtn = document.createElement("button"); //new button
    deleteBtn.classList.add("delete_btn");
    deleteBtn.innerText = "X"; //button name

    const newContent = document.createTextNode(
      commentBoxStr.value +
        ` @ ${new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`
    );

    newList.prepend(newContent);
    comments.prepend(newList, deleteBtn, line);
    // inserts string before first child. - opposite to appendChild() - last child

    //console.log(newList);
    console.log(typeof comments);

    //event listener added for delete button to remove comments
    deleteBtn.addEventListener("click", function deleteFn() {
      if ((deleteBtn.click = true)) {
        newList.remove();
        line.remove();
        deleteBtn.remove();
        // console.log(currentTime);
      }
      if (deleteBtn.click === true) {
        //adds dummy placeholder after deletebtn clicked
        dummyPlaceholder.style.display = "block";
      }
    });
  }

  // if input string is NOT empty = if input string is full
  if (commentBoxStr.value !== "") {
    //removes dummy placeholder 'No Comments..'
    dummyPlaceholder.style.display = "none";
  }

  if (comments)
    if ((commentBtn.click = true)) {
      // clears user input str after btn clicked
      commentBoxStr.value = "";
    }
};
