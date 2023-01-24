# Weather-Dashboard

## Project Title

To build a browser based weather dashboard that enables a user to enter a city name and in real-time see weather data from the 'Open weather maps' web application. The web application returns current day weather information and a five day weather forecast for the city entered.  It also displays a search history.

## APIs Used

### Third-Party APIs

- CSS Framework: BootStrap

- JavaScript Library: jQuery

### Server-Side APIs

Get longitude(lon) & latitude(lat)
- "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;

Get weather details
- "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + APIKey + "&units=metric";

Get weather icon, "ironcode" variable containing pathway to icon field 
- "http://openweathermap.org/img/w/" + iconcode + ".png";

## Weather Dashboard

The Weather Dashboard web application is an easy-to-use visual tool for displaying current and (5 day) forecast weather information in response to a city name entered by the user. It retrieves information from the https://openweathermap.org/ web application through API's. This required me to get an API key for access. 

The web page has been purposedly designed to meet several web-page requirements, having a clean and functional appearance and meeting usability standards. A weather icon is also retrieved and displayed for each day, providing an instant visual representation.

The web page consists of the following:

- An input box for entering the city name.
- A search button to activate the search.
- A large card that displays the current days weather information.
- Five smaller cards, one for each day of the five-day forecast.
- Information displayed includes:    
    - city (current day only)
    - date
    - weather icon
    - temperature (Celsius)
    - wind-speed
    - humidity

- When the user conducts a search the city name is added to the search history, which is displayed beneath the search button.

## Project Description

The main objective of this project was to be able to retrieve specified weather data from the https://openweathermap.org/ web application through API's and display it on a web-page. This not only involved being able to retrieve information through an API, but to work-out the correct pathway to retrieve information that is located in subdirectories.

A major challenge of this project, was that firstly the longitude (lon) and latitude (lat) of the city being searched had to be retrieved. These coordinates were then used to retrieve the weather information.

**Note**: A description of how to use the completed web application appears in the 'Usage' section below.

The structure of the coding and what each section does is as follows:

1. Prepare HTML coding including links to jQuery & Bootstrap. 

2. Include and name id's and classes to enable interactivity.

3. Complete structure of the page, including search box/button and cards.

4. Conduct research and after a number of amendments get correct URL pathways - successfully call information.

5. Use API to get current days weather data and output required information onto web page.
    
6. This included the icon which required a separate URL.

7. Use API and set-up a 'for loop' to get and display five day forecast and output each onto a separate card.

8. Set-up local storage.

9. Complete coding to display search history list.

## Installation

N/A

## Usage

As an easy-to-use visual tool for displaying the current day and a five day weather forecast the Weather Dashboard has many real-life uses. These include tracking both good and bad weather, planning outside activities, or preparing for high winds/storms or very hot days.

Upon opening the application the dashboard with all cards empty is displayed. In the input box below the heading "Search for a City:" the user types in the city they choose to search and clicks on the search button. Almost instantaneously the cards are populated with the weather information for the current day and the next five days. In addition the cities searched (before being cleared) are listed in a vertical list on the side.

## Deployed Application and Screenshots

### Link to the deployed application

Link:  https://nealeaust.github.io/Weather-Dashboard/

### Screenshot

![image](https://user-images.githubusercontent.com/115671306/214214457-08872339-104e-4a1b-8716-a3cc31ac4bf3.png)

## Licence

https://github.com/NealeAust/Weather-Dashboard/blob/main/LICENSE



