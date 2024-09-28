// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const closeButton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
closeButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	closeButton.classList.toggle('show');
});

