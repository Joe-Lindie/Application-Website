// function for mobile hamburger menu
const hamburger = document.getElementById("hamburger");
const navItem = document.getElementById("nav-item");
//console.log(hamburger);

hamburger.addEventListener("click", function hamburger() {
  navItem.classList.toggle("show"); //show class CSS line 62
});

// function to greet user on homepage

const input = document.getElementById("input");
const greet = document.getElementById("greet");
const button = document.getElementById("button");

if (button) {
  //checks button is not null before adding eventlistener
  // (prev error) Cannot read properties of null
  button.addEventListener("click", () => greetUser());
}

//previously used: if / else if

const greetUser = () => {
  const CurrentTime = new Date().getHours();
  //returns number between 0 -23 representing hours
  console.log(CurrentTime);

  input.value == "" //if the user enters an Empty string
    ? alert("Oops, I'm Joe. What's your name?")
    : CurrentTime < 12
    ? (greet.textContent = `👋 Good morning, ${input.value}! Nice to meet you. 🤝 Click me to find out more.`)
    : CurrentTime < 17
    ? (greet.textContent = `👋 Good afternoon, ${input.value}! Nice to meet you. 🤝 Click me to find out more.`)
    : (greet.textContent = `👋 Good evening, ${input.value}! Nice to meet you. 🤝 Click me to find out more.`);
};
