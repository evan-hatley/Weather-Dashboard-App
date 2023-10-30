// List variables so I can concatenate the fetch API
const APIKey = '841ae18f93498c5371706f226872863a';
var city;
const openWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=841ae18f93498c5371706f226872863a';
let searchHistory = []


// Added eventListener so user can type in their city and click a search button
document.querySelector('.btn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;

    searchHistory.push(city);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
// sets the fetch for the Current Weather. Iused two separate fetch requests to get different results for this and the five day forecast
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
            document.getElementById('temperature').innerText = temperature + ' degrees';
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
  // Created new HTML elements for each piece of data, then dynamically adding the API info to each div. Then finally using append.child to update the text fields i nthe divs.
  const dateElement = document.createElement('div');
  const tempElement = document.createElement('div');
  const humidityElement = document.createElement('div');
  const windElement = document.createElement('div');

  dateElement.innerText = dailyForecast[i].dt_txt.split(' ')[0];
  tempElement.innerText = 'Temperature: ' + dailyForecast[i].main.temp + ' degrees';
  humidityElement.innerText = 'Humidity: ' + dailyForecast[i].main.humidity + '%';
  windElement.innerText = 'Wind Speed: ' + dailyForecast[i].wind.speed + ' MPH';

  const forecastDayDiv = document.getElementById(`day${i + 1}`);
  forecastDayDiv.appendChild(dateElement);
  forecastDayDiv.appendChild(tempElement);
  forecastDayDiv.appendChild(humidityElement);
  forecastDayDiv.appendChild(windElement);
}
  });
});
// IN PROGRESS - Debug the querySelector so that the button will appear.
document.querySelector('.btn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    // This next code snippet was to ensure that each city would be displayed in the search history once
    if (!searchHistory.includes(city)) {
      searchHistory.push(city);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      // This is supposed to create a new button elemnent to the HTML but even after hours of debugging, I can't get it to render
      const btn = document.createElement('button');
      btn.textContent = city;
      btn.addEventListener('click', function() {
      });
      document.getElementById('searchHistoryContainer').appendChild(btn);
    }
  });