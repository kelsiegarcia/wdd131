// Footer 
const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastmodified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

modified.innerHTML = `Last Modified: ${document.lastModified}`

// Wind Chill Factor Function
const temp = document.querySelector("#temp").innerHTML = `Temperature: 81\u00B0F`;
const conditions = document.querySelector("#conditions").innerHTML = `Conditions: Mostly cloudy`;
const wind = document.querySelector("#wind").innerHTML = `Wind: 13mph`;
const humidity = document.querySelector("#humidity").innerHTML = `Humidity: 68%`;

function calculateWindChill(temp, wind) {
    return Math.round(35.74 + (0.6215 * temp) + (0.4275 * temp - 35.75) * Math.pow(wind, 0.16));
}

if (temp <= 50 && wind > 3) {
    const windChill = calculateWindChill(temp, wind);
    console.log(`The wind chill factor for temp "${temp}" and wind speed "${wind}" is "${windChill}\u00B0F"`);
		const windChillFactor = document.querySelector("#wind-chill").innerHTML = `Windchill:${windChill}\u00B0F`;
} else {
		const windChill = "N/A";
    const windChillFactor = document.querySelector("#wind-chill").innerHTML = `Windchill: ${windChill}`;
}





