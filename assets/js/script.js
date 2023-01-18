const APIKey = "74ad0572a84c4528b742eb829895e376";

var submitButtonEl = document.querySelector("#submit");
submitButtonEl.addEventListener("click", function (event) {
    event.preventDefault();

    //   Obtain City Name from Search Input
    
    
    var city = document.querySelector("#cityName").value.trim();
    var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;
    var weatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}";

    fetch(geoUrl)

        .then(function (response) {
            // console.log(response)
            return response.json()
        })

        .then(function (data) {
            console.log(data);
            console.log(data[0].name)
            console.log(data[0].lat)
            console.log(data[0].lon)

            fetch(weatherURL)
                .then(function (response) {
                    // console.log(response)
                    return response.json()
                })

                .then(function (data) {
                    console.log(data);

                });
        })
});









































