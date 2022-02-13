
// function for mobile hamburger menu 
const hamburger =  document.getElementById('hamburger');
const navItem =  document.getElementById('nav-item');

hamburger.addEventListener("click", function hamburger() {
  navItem.classList.toggle('show');
});

// function to greet user on homepage

const input = document.getElementById("input");
const greet = document.getElementById("greet");
const button = document.getElementById("button");

if(button) { //checks button is not null before adding eventlistener
  button.addEventListener ('click', () => greetingUser());
}

function greetingUser(){

  if(input.value == "") { //if the user enters an Empty string
    alert("Oops, I'm Joe. What's your name?");
  } else {
    greet.textContent = `Nice to meet you, ${input.value}! 
    Click me to find out more`
  }
}


