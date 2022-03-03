// function for mobile hamburger menu
const hamburger = document.getElementById("hamburger");
const navItem = document.getElementById("nav-item");

hamburger.addEventListener("click", function hamburger() {
  navItem.classList.toggle("show");
});

// function to greet user on homepage

const input = document.getElementById("input");
const greet = document.getElementById("greet");
const button = document.getElementById("button");

if (button) {
  //checks button is not null before adding eventlistener (prev error)
  button.addEventListener("click", () => greetUser());
}

const greetUser = () => {
  const CurrentTime = new Date().getHours();
  //returns number between 0 -23 representing hours
  console.log(CurrentTime);

  if (input.value == "") {
    //if the user enters an Empty string
    alert("Oops, I'm Joe. What's your name?");
  } else if (CurrentTime < 12) {
    greet.textContent = `👋 Good morning, ${input.value}! Nice to meet you. 🤝 Click me to find out more.`;
  } else if (CurrentTime < 17) {
    greet.textContent = `👋 Good afternoon, ${input.value}! Nice to meet you. 🤝 Click me to find out more.`;
  } else {
    greet.textContent = `👋 Good evening, ${input.value}! Nice to meet you. 🤝 Click me to find out more.`;
  }
};
