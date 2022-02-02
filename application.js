
// function for mobile hamburger menu 
const hamburger =  document.getElementById('hamburger');
const navItem =  document.getElementById('nav-item');

hamburger.addEventListener("click", function hamburger() {
  navItem.classList.toggle('show');
});

// function to greet user on homepage
const input = document.getElementById("input");
const button = document.getElementById("button");
const greet = document.getElementById("greet");


button.addEventListener ("click", greetingUser);

function greetingUser(event) {
  event.preventDefault(); // Does not send/submit form tag in index.html page

  if(input.value === "") { //if the user enters an Empty string
    alert("Oops, I'm Joe. Who are you?");
  } else {
    greet.textContent = `Nice to meet you, ${input.value}! 
    Click me to find out more`
  }
}
