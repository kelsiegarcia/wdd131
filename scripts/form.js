const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// populate the select element with the product names and average ratings

const select = document.getElementById('prodName');


products.forEach(product => { 
	const option = document.createElement('option');
	option.textContent = `${product.name} (${product.averagerating} Star Average Rating)`;
	option.value = product.id;
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
	
	window.location.href = 'review.html';
});


const visitDisplay = document.getElementById('visits');
let visits = localStorage.getItem('visits') || 0;

if (visits === null) {
	visits = 0;
}	else {
	visitDisplay.textContent = `You have visited this page ${visits} times.`;
} 

visits++; 

localStorage.setItem('visits', visits); 