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
function displayCards() {
	const cardContainer = document.getElementById('cardGrid');
	let html = "";
	for (let card in cards) {
		html += `<div class="card">
			<h2 class="card-name">${cards[card].name}</h2>
			<p class="card-price">${cards[card].price}</p>
			<p class="card-description">${cards[card].description}</p>
			<button class="card-button">Book Now</button>
		</div>`;
	}
	cardContainer.innerHTML = html;
}
displayCards();


const cardButtons = document.querySelectorAll('.card-button');
cardButtons.forEach(button => {
	button.addEventListener('click', () => {
		window.location.href = "reservation.html";
	});
});

const cardDescriptions = document.querySelectorAll('.card-description');
cardDescriptions[1].style.marginBottom = "1.9rem";
cardDescriptions[2].style.marginBottom = "1.9rem";









