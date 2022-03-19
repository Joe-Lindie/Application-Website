// FUNCTION FOR MOBILE HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navItem = document.getElementById("nav-item");
//console.log(hamburger);

hamburger.addEventListener("click", function hamburger() {
  navItem.classList.toggle("show"); //show class CSS line 62
  //console.log(typeof navItem.classList.toggle("show"))
});

//GREET USER ON HOMEPAGE
const input = document.getElementById("input");
const greet = document.getElementById("greet");
const quote = document.getElementById("quote");
const button = document.getElementById("button");
let anchor = document.createElement("a"); // create anchor tag
anchor.href = "whyme.html";

if (button) {
  //checks button is not null before adding eventlistener
  // (prev error) Cannot read properties of null
  button.addEventListener("click", () => greetUser());
  button.addEventListener("click", () => quoteOfTheDay());
}

// FUNCTION TO GREET USER ON HOMEPAGE
const greetUser = () => {
  greet.appendChild(anchor);
  const currentTime = new Date().getHours();
  //returns number between 0 -23 representing hours
  //console.log(CurrentTime);

  const introSentence = `Nice to meet you. 🤝 Coding can be hard. Here's your positive quote of the day. 🙌 
  Click me to find out more.`;

  //previously used: if / else if
  input.value == "" //if the user enters an Empty string
    ? alert("Oops, I'm Joe. What's your name?")
    : currentTime < 12
    ? (anchor.textContent = `👋 Good morning, ${input.value}! ${introSentence}`)
    : currentTime < 17
    ? (anchor.textContent = `👋 Good afternoon, ${input.value}! ${introSentence}`)
    : (anchor.textContent = `👋 Good evening, ${input.value}! ${introSentence}`);
};

// ARRAY OF POSITIVE QUOTES
const quotes = [
  ` “Only in the darkness can you see the stars.” - Martin Luther King, Jr.`,
  ` “In a gentle way, you can shake the world.” - Mahatma Gandhi`,
  ` “Those who don’t believe in magic will never find it.” - Roald Dahl`,
  ` “No act of kindness, no matter how small, is ever wasted.” - Aesop`,
  ` “No matter what people tell you, words and ideas can change the world.” - Robin Williams`,
  ` if (sad() === true) { \n sad().stop(); \n beAwesome(); \n } - Unknown `,
  ` “Whoever is happy will make others happy too.” - Anne Frank`,
  ` "Life is like riding a bicycle. To keep your balance, you must keep moving.” - Albert Einstein.`,
  ` “Choose to be optimistic, it feels better.” - Dalai Lama`,
  ` “The mind is everything. What you think you become.” - Buddha`,
];
//FUNCTION TO GENERATE RANDOM QUOTE
const quoteOfTheDay = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  if (button.click && input.value != "") {
    quote.innerText = quotes[randomNumber];
    //console.log(quotes[randomNumber]);
  }

  // clears user input (name) after btn clicked
  if (button.click) {
    input.value = "";
  }
};
