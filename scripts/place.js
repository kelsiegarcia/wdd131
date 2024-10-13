// Footer 
const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastmodified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

modified.innerHTML = `Last Modified: ${document.lastModified}`

const temp = 81;
const wind = 13;
const conditions = document.querySelector("#conditions").innerHTML = `Conditions: Mostly cloudy`;
const humidity = document.querySelector("#humidity").innerHTML = `Humidity: 68%`;
document.querySelector("#temp").innerHTML = `Temperature: ${temp}\u00B0F`;
document.querySelector("#wind").innerHTML = `Wind: ${wind}mph`;


function calculateWindChill(temp, wind) {
    return Math.round(35.74 + (0.6215 * temp) + (0.4275 * temp - 35.75) * Math.pow(wind, 0.16));
}

if (temp <= 50 && wind > 3) {
    const windChill = calculateWindChill(temp, wind);
		const windChillFactor = document.querySelector("#wind-chill").innerHTML = `Windchill: ${windChill}\u00B0F`;
} else {
		const windChill = "N/A";
    const windChillFactor = document.querySelector("#wind-chill").innerHTML = `Windchill: ${windChill}`;
}


// write a function to
// find all images without alternate text
// and give them a red border





