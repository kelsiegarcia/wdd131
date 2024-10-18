const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastmodified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

modified.innerHTML = `Last Modified: ${document.lastModified}`

const visitDisplay = document.getElementById('visits');
let visits = localStorage.getItem('visits') || 0;

if (visits === null) {
	visits = 0;
}	else {
	visitDisplay.textContent = `You have visited this page ${visits} times.`;
} 

visits++; 

localStorage.setItem('visits', visits); 