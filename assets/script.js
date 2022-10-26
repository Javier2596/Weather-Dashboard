var searchBtn = $("#btn");
var dayBlk = $("#day-block");
var APIKey = "2165f11d31c7c574376d30da15a79ef6";
var weatherCity = $("#userinput").val();


function getCityWeather() {
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid=" + APIKey;
    console.log("hello world");
    fetch(queryURL)
     .then(function (response) {
         return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
        var cityName = $("<h3>");
        var weatherVal = $("<p>")
        cityName.text(data[i].name);
        weatherVal.text(data[i].list.weather)
    
        cityName.append(weatherVal);
        dayBlk.append(cityName);

        }
    });
    
}

searchBtn.on("click", getCityWeather);

