// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const closeButton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
closeButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	closeButton.classList.toggle('show');
});

// week 4 assignment: Dynamically show images inside of cars
// Loop through the array and create temples cards by displaying each property


const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Oakland California",
		location: "Oakland, Caliifornia",
		dedicated: "1964, November, 17",
		area: 80157,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-5000-thumb.jpg"
	},
	{
		templeName: "Laie Hawaii",
		location: "Laie, Hawaii",
		dedicated: "1919, November, 30",
		area: 42100,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-35271-thumb.jpg"
	},
	{
		templeName: "Salt Lake City Utah",
		location: "Salt Lake City, Utah",
		dedicated: "1853, February, 14",
		area: 74792,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
	},
];

const templesOld = document.querySelector('#old');
const templesNew = document.querySelector('#new');
const templesLarge = document.querySelector('#large');
const templesSmall = document.querySelector('#small');
const templesHome = document.querySelector('#home');

createTempleCard(temples);

templesOld.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.dedicated.includes("1900") || parseInt(temple.dedicated.split(",")[0]) < 1900
	));
});

templesNew.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.dedicated.includes("2000") || parseInt(temple.dedicated.split(",")[0]) > 2000
	));
});

templesLarge.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.area > 90000
	));
});

templesSmall.addEventListener("click", () => {
	createTempleCard(temples.filter((temple) => temple.area < 10000
	));
});

templesHome.addEventListener("click", () => {
	console.log('home');
	createTempleCard(temples);
});
	
function createTempleCard(filteredTemples) {
	document.querySelector('.picture-grid').innerHTML = '';
	filteredTemples.forEach((temple) => {	
		const templeCard = document.createElement('div');
		templeCard.classList.add('temple-card');

		const img = document.createElement('img');
		img.setAttribute('src', temple.imageUrl);
		img.setAttribute('alt', temple.templeName);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('width', '400');
		img.setAttribute('height', '250');

		const templeInfo = document.createElement('div');
		templeInfo.classList.add('temple-info');
		templeInfo.innerHTML = `
			<h2>${temple.templeName}</h2>
			<p>${temple.location}</p>
			<p>${temple.dedicated}</p>
			<p>${temple.area}</p>
		`;

		templeCard.appendChild(img);
		templeCard.appendChild(templeInfo);

		document.querySelector('.picture-grid').appendChild(templeCard);
	});
}


