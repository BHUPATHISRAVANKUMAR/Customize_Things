let currentSlide = 1;
const slides = document.querySelectorAll('.slide');
const cupsButton = document.getElementById('cups-button');
const tshirtsButton = document.getElementById('tshirts-button');
const phoneCasesButton = document.getElementById('phoneCases-button');

setInterval(() => {
  slides[currentSlide - 1].style.display = 'none';
  currentSlide = (currentSlide % slides.length) + 1;
  slides[currentSlide - 1].style.display = 'block';
}, 3000);

/*document.querySelectorAll('.product button').forEach(button => {
	button.addEventListener('click', () => {
		window.location.href = 'cups.html';
		//const designs = button.nextElementSibling;
		//designs.style.display = designs.style.display === 'none' ? 'block' : 'none';
	});
});*/

cupsButton.addEventListener('click', () => {
	// Add your home page URL here
	window.location.href = 'cups.html';
  });

  tshirtsButton.addEventListener('click', () => {
	// Add your home page URL here
	window.location.href = 'tshirts.html';
  });

  phoneCasesButton.addEventListener('click', () => {
	// Add your home page URL here
	window.location.href = 'phoneCases.html';
  });


