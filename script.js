const welcomeMessage = document.getElementById('welcome-message');
const welcomeMessage1 = document.getElementById('welcome-message1');
const homeButton = document.getElementById('home-button');
const text = 'Welcome to our Customized Gifts..!';
const text1 ='Created by @SRAVAN(:';
let index = 0;
function animateText() {
  welcomeMessage.textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(animateText, 150);
  }
}
animateText();

let index1 = 0;
function animateText1() {
  welcomeMessage1.textContent += text1[index1];
  index1++;
  if (index1 < text1.length) {
    setTimeout(animateText1, 250);
  }
}
animateText1();

homeButton.addEventListener('click', () => {
  // Add your home page URL here
  window.location.href = 'home.html';
});