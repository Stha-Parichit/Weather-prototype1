const API_KEY = "3d31d6eb0c2f06167c2dc3c9c7c13a6f";
const search = document.querySelector("form");
const searchInput = document.querySelector('#search');
const locations = document.querySelector('#location');
const conditions= document.querySelector('#condition');
const dates = document.querySelector('#date');
const Temp = document.querySelector('#temperature');
const hydro = document.querySelector('#rain');
const anemo = document.querySelector('#wind');
const humidityelem= document.querySelector('#humidity');

function fetchWeatherData(location) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3d31d6eb0c2f06167c2dc3c9c7c13a6f&units=metric`;   

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        locations.textContent = data.name;
        conditions.textContent = data.weather[0].description;
        dates.textContent = new Date().toLocaleDateString();
        Temp.textContent = `Temperature: ${data.main.temp}°C`;
        hydro.textContent = `Rain: ${data.rain ? data.rain['1h'] : 0}mm`;
        anemo.textContent = `Wind: ${data.wind.speed} m/s`;
        humidityelem.textContent = `Humidity: ${data.main.humidity}%`;

        const iconImgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const weatherIcon = document.querySelector('#condition-icon');
        weatherIcon.src = iconImgSrc;
    })
    .catch(error => {
        console.log(error);
        alert('Could not fetch weather data');
    })
}
    fetchWeatherData('Stockton-on-tees');

    search.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = searchInput.value;
    fetchWeatherData(location);
});