// FUNCTION FOR MOBILE HAMBURGER MENU
const closeNavBar = document.getElementById("myNav")
const openNavBar = document.getElementById("myNav")
const openBtn = document.getElementById("openBtn")

// Fn to close Navbar
closeNavBar.addEventListener("click", function closeNav() {
  closeNavBar.style.width = "0%"
})

// Fn to open Navbar
openBtn.addEventListener("click", function openNav() {
  openNavBar.style.width = "100%"
})

//GREET USER ON HOMEPAGE
const input = document.getElementById("input")
const greet = document.getElementById("greet")
const quote = document.getElementById("quote")
const button = document.getElementById("button")
const anchor = document.createElement("a") // create anchor tag
anchor.href = "whyme.html"

if (button) {
  //checking if any value asigned to button
  //checks button is not null before adding eventlistener
  //(prev error) Cannot read properties of null
  //https://idiallo.com/javascript/uncaught-typeerror-cannot-read-property-of-null
  button.addEventListener("click", () => greetUser())
  button.addEventListener("click", () => quoteOfTheDay())
}

// FUNCTION TO GREET USER ON HOMEPAGE
const greetUser = () => {
  greet.appendChild(anchor)
  const currentTime = new Date().getHours()
  //returns number between 0 -23 representing hours
  //console.log(currentTime)

  const introSentence = `Nice to meet you. π€ Coding can be tricky. Here's your positive quote of the day. π 
  Click me to find out more.`

  //previously used: if / else if
  input.value == "" //if the user enters an Empty string
    ? alert("Oops, I'm Joe. What's your name?")
    : currentTime < 12
    ? (anchor.textContent = `π Good morning, ${input.value}! ${introSentence}`)
    : currentTime < 17
    ? (anchor.textContent = `π Good afternoon, ${input.value}! ${introSentence}`)
    : (anchor.textContent = `π Good evening, ${input.value}! ${introSentence}`)
}

// ARRAY OF POSITIVE QUOTES
const quotes = [
  ` βOnly in the darkness can you see the stars.β - Martin Luther King, Jr.`,
  ` βIn a gentle way, you can shake the world.β - Mahatma Gandhi`,
  ` βThose who donβt believe in magic will never find it.β - Roald Dahl`,
  ` βNo act of kindness, no matter how small, is ever wasted.β - Aesop`,
  ` βNo matter what people tell you, words and ideas can change the world.β - Robin Williams`,
  ` if (sad() === true) { \n sad().stop(); \n beAwesome(); \n } - Unknown `,
  ` βWhoever is happy will make others happy too.β - Anne Frank`,
  ` "Life is like riding a bicycle. To keep your balance, you must keep moving.β - Albert Einstein.`,
  ` βChoose to be optimistic, it feels better.β - Dalai Lama`,
  ` βThe mind is everything. What you think you become.β - Buddha`,
  ` "Nothing is impossible. The word itself says, Iβm possible!" - Audrey Hepburn`,
  ` "Try to be a rainbow in someoneβs cloud." - Maya Angelou `,
]

//FUNCTION TO GENERATE RANDOM QUOTE
const quoteOfTheDay = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  //console.log(Math.floor(5.8)) // output 5 -
  //rounds number downwards to nearest integer
  //console.log(Math.random())
  //returns random number between 0 - 1
  //console.log(Math.floor(Math.random() * 10))
  //returns random number in this range

  if (button.click && input.value != "") {
    quote.innerText = quotes[randomNumber]
    //console.log(quotes[randomNumber]);
  }

  // clears user input (name) after btn clicked
  if (button) {
    input.value = ""
  }
}
