const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=58e3f8364b021f968ae0720b303c2f01&units=metric";

fetch(weatherUrl)
.then(res =>res.json())
.then(data => {
    document.getElementById('weather').textContent = `Cancun: ${Math.round(data.main.temp)} \u00B0`;
})
.catch(() => {
    document.getElementById('weather').textContent = 'Weather Not Available';
});