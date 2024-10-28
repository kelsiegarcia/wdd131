// create a new object to store the data
const cards = {
	card1: {
		name: "Sigma Court",
		price: "$65/hr up to 10 players",
		description: "All inclusive: balls, paddles, towels and water",
	},
	card2: {
		name: "Jester Court",
		price: "$30/hr up to 4 players",
		description: "Includes: balls, paddles, towels"
	},
	card3: {
		name: "Royal Court",
		price: "$45/hr up to 6 players",
		description: "Includes: balls, paddles, towels"
	}
};
// create a function to display the data
function displayCards() {
	// get the element with the id of "cards"
	const cardContainer = document.getElementById('cardGrid');
	// create a variable to store the HTML
	let html = "";
	// loop through the object
	for (let card in cards) {
		// add the data to the HTML
		html += `<div class="card">
			<h2 class="card-name">${cards[card].name}</h2>
			<p class="card-price">${cards[card].price}</p>
			<p class="card-description">${cards[card].description}</p>
			<button class="card-button">Book Now</button>
		</div>`;
	}
	// add the HTML to the element
	cardContainer.innerHTML = html;
}
// call the function
displayCards();


// add an event listener to the button that takes them to the form html
const cardButtons = document.querySelectorAll('.card-button');
cardButtons.forEach(button => {
	button.addEventListener('click', () => {
		window.location.href = "reservation.html";
	});
});

// remove just the padding from the class card description of card1 and card2 in the array
const cardDescriptions = document.querySelectorAll('.card-description');
// add margin bottom to the first card description
cardDescriptions[1].style.marginBottom = "1.9rem";
cardDescriptions[2].style.marginBottom = "1.9rem";









