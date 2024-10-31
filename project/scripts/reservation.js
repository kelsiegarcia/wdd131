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


const submit = document.getElementById('form');
submit.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const formData = new FormData(submit);
	const data = {};
	
	for (const [key, value] of formData.entries()) {
		data[key] = value;
		console.log(key, value);
	}

	console.log('Form data to be saved:', data); 
	
	localStorage.setItem('formData', JSON.stringify(data));

	console.log('Data saved to localStorage:', localStorage.getItem('formData')); 
	
	window.location.href = 'confirmation.html'; 
});
