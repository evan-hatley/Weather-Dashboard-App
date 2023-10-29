// List variables so I can concatenate the fetch API
const APIKey = '841ae18f93498c5371706f226872863a';
var city;
const openWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=841ae18f93498c5371706f226872863a';

// Added eventListener so user can type in their city and click a search button
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

// Adjusts the text in html to display the weather API's results
            document.getElementById('cityName').innerText = cityName;
            document.getElementById('currentDate').innerText = currentDate;
            document.getElementById('temperature').innerText = temperature + 'degrees';
            document.getElementById('humidity').innerText = humidity + '%';
            document.getElementById('windSpeed').innerText = windSpeed + 'MPH';
            console.log(data);
        })

// Created a separate fetch function within the eventListener to reach the forecast. I chose 12:00 as an ideal forecast time since it's the middle of the day and most likely the average time a user would expect.
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey + '&units=imperial')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const dailyForecast = data.list.filter(function(forecast) {
        return forecast.dt_txt.includes('12:00:00');
    });
// Created the for loop to get each date's conditions. I'm still working on adjusting the date to display in MM/DD/YYYY format
    for (let i = 0; i < dailyForecast.length; i++) {
        const date = dailyForecast[i].dt_txt.split(' ')[0];
        const temperature = dailyForecast[i].main.temp;
        const humidity = dailyForecast[i].main.humidity;
        const windSpeed = dailyForecast[i].wind.speed;
        
    document.getElementById(`day${i + 1}`).innerHTML =
    date +
    'Temperature: ' + temperature + 'degrees' +
    'humidity: ' + humidity + '%' +
    'windSpeed: ' + windSpeed + 'MPH' 
    }
  });
});
// TODO: Use Local Storage to create a Search History set of buttons that will then display those cities again
