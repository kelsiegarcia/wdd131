const data = JSON.parse(localStorage.getItem('formData'));
const display = document.getElementById('display');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

if (data) {
	const date = new Date(data.dateTime);
	const formattedDate = date.toLocaleString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
	p1.textContent = `Name: ${data.firstLastName}`
	p2.textContent = `Phone: ${data.phoneNumber}`;
	p3.textContent = `Court and players: ${data.name}`;
	p4.textContent = `Date and Time: ${formattedDate}.`;
} else {
	p1.textContent = 'Court name is not available';
	p2.textContent = 'Please check your booking details.';
}

if (display) {
	display.appendChild(p1);
	display.appendChild(p2);
	display.appendChild(p3);
	display.appendChild(p4);
} else {
	console.error('Display element not found');
}

