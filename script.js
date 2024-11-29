// script.js
const apiKey = '37cf00f8c72c6494a1df41bec752ea33'; // Replace with your OpenWeather API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
    weatherInfo.style.display = 'block';
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Condition: ${weather[0].description}</p>
  `;
  weatherInfo.style.display = 'block';
}
