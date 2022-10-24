var searchBtn = $("#btn");
var APIKey = "2165f11d31c7c574376d30da15a79ef6";
var city = $("#userInput").value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

console.log(city);
function getCityWeather() {

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
        console.log(data)
        var cityTemp = $(".city-info");

        cityTemp.textContent = data[i].html_url;
        }
    });
}

searchBtn.on("click", getCityWeather);
