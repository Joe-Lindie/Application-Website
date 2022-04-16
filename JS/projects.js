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
const numOfLikes = document.querySelector(".num-of-likes");
const numOfLikes1 = document.querySelector(".num-of-likes-1");
const numOfLikes2 = document.querySelector(".num-of-likes-2");
const numOfLikes3 = document.querySelector(".num-of-likes-3");

//console.log(thumbsDown);
console.log(thumbsUp);
//console.log(numOfLikes);

let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;

for (let i = 0; i < thumbsUp.length; i++) {
  thumbsUp[i].addEventListener("click", function likesCount() {
    if (thumbsUp[0]) {
      count += 1; // add one to count
      numOfLikes.textContent = count;
      console.log(thumbsUp[0]);
      console.log(count);
    }

    if (thumbsUp[1]) {
      count1 += 1; // add one to count
      numOfLikes1.textContent = count1;
      console.log(thumbsUp[1]);
      console.log(count1);
    }

    /* 
    count2 += 1; // add one to count
    numOfLikes2.textContent = count2;

    count3 += 1; // add one to count
    numOfLikes3.textContent = count3;
    */

    console.log("like this");
  });
}

thumbsDown.forEach((dislike) => {
  dislike.addEventListener("click", function dislikesCount() {
    count -= 1; // minus one from count

    console.log("dislike this");
  });
});

/*
thumbsUp.addEventListener("click", () => {
  count += 1; // add one to count
  numOfLikes.textContent = count;
});

thumbsDown.addEventListener("click", () => {
  count -= 1; // minus one from count
  numOfLikes.textContent = count;
});

*/

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
