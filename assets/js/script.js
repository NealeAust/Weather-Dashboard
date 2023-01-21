const APIKey = "74ad0572a84c4528b742eb829895e376";

var submitButtonEl = document.querySelector("#submit");
submitButtonEl.addEventListener("click", function (event) {
  event.preventDefault();

  //   Obtain City Name from Search Input

  var city = document.querySelector("#cityName").value.trim();

  var cityList = JSON.parse(localStorage.getItem("listcities"))

  if (cityList === null) {
    cityList = [];
  }

  var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;

  fetch(geoUrl)
    .then(function (response) {
      // console.log(response)
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      console.log(data[0].name);
      const lat = data[0].lat;
      const lon = data[0].lon;


      console.log(lat);
      console.log(lon);

      const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + APIKey + "&units=metric";
      console.log(weatherUrl);

      fetch(weatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {

          var cityWeather = $("#cityWeather")
          cityWeather.text(data.city.name);
          var currentDate = document.querySelector("h2");
          currentDate.textContent = dayjs().format("(MM/DD/YYYY)");
          const iconcode = data.list[0].weather[0].icon             
          var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
          $("#weatherIcon").attr("src", iconUrl);
                
          console.log(data);
          console.log(data.list[0].weather[0].icon)
          
                    
          var temp = $("#temperature");
          temp.text("Temp:  " + data.list[0].main.temp + "  \u00B0C");

          var wind = $("#windSpeed");
          wind.text("Wind:  " + data.list[0].wind.speed + "  KMH");

          var humidity = $("#humidity");
          humidity.text("Humidity:  " + data.list[0].main.humidity + "  %");

          
          // console.log(data.list[0].wind.speed);

          // 5 day forcast

          for (var i = 1; i <= 5; i++) {
            // add class to future cards to create card containers
            var cardFc = $(".cardFc");
            cardFc.addClass("cardFc");

            var dateFc = $("#dateFc-" + i);
            date = dayjs().add(i, "d").format("(MM/DD/YYYY)");
            dateFc.text(date);

            // add temp to 5 day forecast
            var tempFc = $("#tempFc-" + i);
            tempFc.text("Temp:  " + data.list[i].main.temp + "");

            // add wind speed to 5 day forecast
            var windFc = $("#windFc-" + i);
            windFc.text("Wind:  " + data.list[i].wind.speed + "  KMH");

            // add humidity to 5 day forecast
            var humidityFc = $("#humidityFc-" + i);
            humidityFc.text("Humidity:  " + data.list[i].main.humidity + "  %");


          }


          cityList.push(city)
          localStorage.setItem("listcities", JSON.stringify(cityList))
          for (var i = 0; i < cityList.length; i++) {
            var entry = document.createElement('h5')
            entry.textContent = cityList[i]
          //  console.log(cityList[i]);
           
            entry.classList.add("searchHistory")


             document.getElementById("searchHistory").appendChild(entry)
          }



        });
    });

});






































































