const visitDisplay = document.getElementById('visits');
let visits = localStorage.getItem('visits') || 0;

if (visits === null) {
	visits = 0;
}	else {
	visitDisplay.textContent = `You have visited this page ${visits} times.`;
} 

visits++; 

localStorage.setItem('visits', visits); 