var searchBtn = $("#btn");
var dayBlk = $("#day-block");
var APIKey = "2165f11d31c7c574376d30da15a79ef6";
var weatherCity = $("#userinput");


function getCityWeather() {
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + weatherCity + "&limit=1&appid=" + APIKey

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
        var cityTemp = $("<h3>");
        var tempList = $("<p>");
        cityTemp.text(data[i]);
        tempList.text(data[i]);
    
        cityTemp.append(tempList);
        dayBlk.append(cityTemp);

        }
    });
}

searchBtn.on("click", getCityWeather);
