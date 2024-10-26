const courtsSelecton = [
  {
    name: "Sigma Court",
		players: "up to 10"
  },
  {
    name: "Jester Court",
		players: "up to 2"
  },
  {
    name: "Royalty Court",
		players: "up to 6"
  }
];


const select = document.getElementById('courtName');

courtsSelecton.forEach(court => { 
	const option = document.createElement('option');
	option.textContent = `${court.name} (${court.players} players)`;
	select.appendChild(option);
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const formData = new FormData(form);
	const data = {};
	
	for (const [key, value] of formData) {
		data[key] = value;
		console.log(key, value);
	}
	
	localStorage.setItem('formData', JSON.stringify(data));
	
	window.location = 'confirmation.html';
});
