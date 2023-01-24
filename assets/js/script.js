// Assign API key number to a const variable, to save
// re-typing & possible mistyping.
const APIKey = "74ad0572a84c4528b742eb829895e376";

// Obtain City Name from Search Input
var submitButtonEl = document.querySelector("#submit");
submitButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  var city = document.querySelector("#cityName").value.trim();

  // Get saved search history, and check if empty  
  var cityList = JSON.parse(localStorage.getItem("listcities"))
  if (cityList === null) {
    cityList = [];

  }

  // Called latititute(lat) and longitude(lon) for city searched using API
  // Display city name + lat & lon in console.log
  var geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;

  fetch(geoUrl)
    .then(function (response) {
      return response.json();

    })

    .then(function (data) {
      console.log(data);
      console.log(data[0].name);
      const lat = data[0].lat;
      const lon = data[0].lon;
      console.log(lat);
      console.log(lon);

    
      //Called current days weather details 'openweathermap' by building URL with parameters
      const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + APIKey + "&units=metric";
      console.log(weatherUrl);

      fetch(weatherUrl)
        .then(function (response) {
          return response.json();

        })

        .then(function (data) {

          // Display city searched and current date
          var cityWeather = $("#cityWeather")
          cityWeather.text(data.city.name);
          var currentDate = document.querySelector("h2");
          currentDate.textContent = dayjs().format("(MM/DD/YYYY)");

          // Called and displayed weather icon
          const iconcode = data.list[0].weather[0].icon
          var iconUrl = "https://openweathermap.org/img/w/" + iconcode + ".png";
          $("#weatherIcon").attr("src", iconUrl);

          console.log(data);

          // Display current day weather information on dashboard
          var temp = $("#temperature");
          temp.text("Temp:  " + data.list[0].main.temp + "  \u00B0C");

          var wind = $("#windSpeed");
          wind.text("Wind:  " + data.list[0].wind.speed + "  KMH");

          var humidity = $("#humidity");
          humidity.text("Humidity:  " + data.list[0].main.humidity + "  %");
        
          // Five day weather forecast
          // Used for loop to get details for each day
          // "Fcst" is an abbreviation for "Forecast"
          for (var i = 1; i <= 5; i++) {

            // Get and display each days date
            var dateFcst = $("#dateFcst-" + i);
            date = dayjs().add(i, "d").format("(MM/DD/YYYY)");
            dateFcst.text(date);

            //Get and display weather icon for each day  
            var iconFcst = $("#iconFcst-" + i);
            const iconcodeFcst = data.list[i].weather[0].icon;
            var iconUrlFcst = "https://openweathermap.org/img/w/" + iconcodeFcst + ".png";
            iconFcst.attr("src", iconUrlFcst);

            // Get and display forecast temp for each day 
            var tempFcst = $("#tempFcst-" + i);
            tempFcst.text("Temp:  " + data.list[i].main.temp + "  \u00B0C");

            // Get and display forecast wind-speed for each day
            var windFcst = $("#windFcst-" + i);
            windFcst.text("Wind:  " + data.list[i].wind.speed + "  KMH");

            // Get and display forecast humidity for each day  
            var humidityFcst = $("#humidityFcst-" + i);
            humidityFcst.text("Humidity:  " + data.list[i].main.humidity + "  %");

          }
    
          //Add name of city searched into local storage
          cityList.push(city)
          localStorage.setItem("listcities", JSON.stringify(cityList))
        
          // Get last city searched, add to search history and display              
         var lastCity = cityList.slice(-1) 
         console.log(lastCity)
         var addCity = document.createElement('h5')
         addCity.textContent = lastCity 
         addCity.classList.add("searchHistory")
         document.getElementById("searchHistory").appendChild(addCity)
                
        });
    });
  });
