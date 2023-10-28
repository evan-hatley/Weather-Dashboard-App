// List variables
const APIKey = '841ae18f93498c5371706f226872863a';
var city;
const openWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=841ae18f93498c5371706f226872863a";

document.querySelector('.btn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=imperial')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const cityName = data.name;
            const currentDate = new Date().toLocaleDateString(); 


            document.getElementById('cityName').innerText = cityName;
            document.getElementById('currentDate').innerText = currentDate;
            document.getElementById('temperature').innerText = temperature;
            document.getElementById('humidity').innerText = humidity;
            document.getElementById('windSpeed').innerText = windSpeed;
            console.log(data);
        })
})

// When user searches for the city, display current conditions and 5-day forecast. Both need to include city name, date, icon of weather conditions, temp, humidity, and wind speed



// Create a set of clickable search history buttons below the search bar that list previous searches using local storage.



