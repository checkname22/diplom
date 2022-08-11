'use strict';

const tempBlock = document.getElementsByClassName('game-menu-box__weather_api-temp')[0];
const iconBlock = document.getElementsByClassName('game-menu-box__weather_api-icon')[0];

const getCoord = async () => {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  });
  let city = {
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
  }
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=e6a35c5282af1ee132785bb9ea3e7392`)
    .then(res => res.json())
    .then(json => {
      let weatherObj = {};
      return weatherObj = {
        temp: JSON.stringify(json.main.temp - 273,15),
        weatherIcon : json.weather[0].icon,
      }
    })
    .then((weatherObj) => {
      tempBlock.textContent = `${Math.ceil(weatherObj.temp)} ℃`;
      iconBlock.src = `https://openweathermap.org/img/w/${weatherObj.weatherIcon}.png`;
    })
}

if(getCoord) {
  getCoord();
}
