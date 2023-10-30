# Weather-Dashboard-App

## Description
This is an application using the OpenWeatherMap API to fetch the latest weather data conditions as well as a 5 day forecast based on a user's input. It's a simple weather service designed to learn how to fetch server side APIs through the use of API keys. The Current Weather section includes:
- Date  
- City  
- Temperature  
- Humidity  
- Wind Speed  

The Five Day Forecast lists the same properties.

## User Story
AS A traveler  
I WANT to see the weather outlook for multiple cities  
SO THAT I can plan a trip accordingly  

## Acceptance Criteria
GIVEN a weather dashboard with form inputs  
WHEN I search for a city  
THEN I am presented with current and future conditions for that city and that city  is added to the search history  
WHEN I view current weather conditions for that city  
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed  
WHEN I view future weather conditions for that city  
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity  
WHEN I click on a city in the search history  
THEN I am again presented with current and future conditions for that city  

## How to Use
This is a simple weather app where the user just needs to input a city, and the API will use the geographic coordinates to display the current and future weather.

## Limitations
As of now, the application is lacking the ability to save user's search information and display previous search buttons. Most of the Local Storage code is written, but I'm working to debug the createElement button.

## Application Link
The deployed application can be found at 
