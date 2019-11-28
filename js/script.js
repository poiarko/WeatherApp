function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            receiveData(position.coords.latitude, position.coords.longitude);
        })

    } else {
        console.log('Could not get location')
    }
}

function receiveData(lat, long) {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            return response;
        })
        .then(function (response) {
            displayWeather(response);
        })
}

function displayWeather(response) {
    var celcius = Math.round(parseFloat(response.main.temp) - 273.15);
    getElement("current-name").innerHTML = response.name;
    getElement("current-temperature").innerHTML = 'Temperature: ' + celcius + '&deg;C';
    getElement("current-description").innerHTML = 'Description: ' + response.weather[0].description;
    getElement("current-wind-speed").innerHTML = 'Wind speed: ' + response.wind.speed + ' m/s';
    getElement("current-pressure").innerHTML = 'Pressure: ' + response.main.pressure + ' hPa';
    getElement("current-humidity").innerHTML = 'Humidity: ' + response.main.humidity + '%';

    displayImage(response);

}


function displayImage(response) {
    switch (response.weather[0].main) {
        case 'Clear':
            document.getElementById('current-weather-details').style.background = "url('img/clear.jpg') no-repeat";
            document.getElementById('icon').innerHTML = "<img src= 'img/iconfinder_weather-clear_118959.png'>";
            imageCover();
            break;
        case 'Clouds':
            document.getElementById('current-weather-details').style.background = "url('img/clouds.jpg') no-repeat";
            document.getElementById('icon').innerHTML = "<img src= 'img/iconfinder_weather-overcast_118962.png'>";
            imageCover();
            break;
        case 'Rain':
            document.getElementById('current-weather-details').style.background = "url('img/rain.jpg') no-repeat";
            document.getElementById('icon').innerHTML = "<img src= 'img/iconfinder_weather-showers-scattered_118964.png'>";
            imageCover();
            break;
        case 'Snow':
            document.getElementById('current-weather-details').style.background = "url('img/snow.jpg') no-repeat";
            document.getElementById('icon').innerHTML = "<img src= 'img/iconfinder_weather-snow_118966.png'>";
            imageCover();
            break;
        case 'Fog':
            document.getElementById('current-weather-details').style.background = "url('img/fog.jpg') no-repeat";
            document.getElementById('icon').innerHTML = "<img src= 'img/iconfinder_icon-24-cloud-fog_316275.png'>";
            imageCover();
            break;
        default:

    }
}

function getElement(id) {
    return document.getElementById(id);
}

function imageCover() {
    document.getElementById('current-weather-details').style.backgroundSize = 'cover';
    document.getElementById('city-weather-details').style.backgroundSize = 'cover';
}

var inputCity = document.getElementById('city_input');
var find_button = document.getElementById('find_button');

find_button.disabled = true;

function setButtonStatus() {
    find_button.disabled = !this.value;
}


function receiveDataByCityName() {
    var city = inputCity.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            return response;

        })
        .then(function (response) {
            displayWeatherByCity(response);
            console.log(response)
        })
}

inputCity.addEventListener('input', setButtonStatus);
find_button.addEventListener('click', receiveDataByCityName);

function displayWeatherByCity(response) {
    var celcius = Math.round(parseFloat(response.main.temp) - 273.15);
    getElement("current-name-city").innerHTML = response.name;
    getElement("current-temperature-city").innerHTML = 'Temperature: ' + celcius + '&deg;C';
    getElement("current-description-city").innerHTML = 'Description: ' + response.weather[0].description;
    getElement("current-wind-speed-city").innerHTML = 'Wind speed: ' + response.wind.speed + ' m/s';
    getElement("current-pressure-city").innerHTML = 'Pressure: ' + response.main.pressure + ' hPa';
    getElement("current-humidity-city").innerHTML = 'Humidity: ' + response.main.humidity + '%';

    displayImageCity(response);
}

function displayImageCity(response) {
    switch (response.weather[0].main) {
        case 'Clear':
            document.getElementById('city-weather-details').style.background = "url('img/clear.jpg') no-repeat";
            document.getElementById('icon-city').innerHTML = "<img src= 'img/iconfinder_weather-clear_118959.png'>";
            imageCover();
            break;
        case 'Clouds':
            document.getElementById('city-weather-details').style.background = "url('img/clouds.jpg') no-repeat";
            document.getElementById('icon-city').innerHTML = "<img src= 'img/iconfinder_weather-overcast_118962.png'>";
            imageCover();
            break;
        case 'Rain':
            document.getElementById('city-weather-details').style.background = "url('img/rain.jpg') no-repeat";
            document.getElementById('icon-city').innerHTML = "<img src= 'img/iconfinder_weather-showers-scattered_118964.png'>";
            imageCover();
            break;
        case 'Snow':
            document.getElementById('city-weather-details').style.background = "url('img/snow.jpg') no-repeat";
            document.getElementById('icon-city').innerHTML = "<img src= 'img/iconfinder_weather-snow_118966.png'>";
            imageCover();
            break;
        case 'Fog':
            document.getElementById('city-weather-details').style.background = "url('img/fog.jpg') no-repeat";
            document.getElementById('icon-city').innerHTML = "<img src= 'img/iconfinder_icon-24-cloud-fog_316275.png'>";
            imageCover();
            break;
        default:

    }
}
