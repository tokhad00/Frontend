const beginButton = document.getElementById('begin-button');
const weatherTable = document.getElementById('weather-table');

function getLocationByBrowser() {
  return new Promise(function(resolve, reject) {
    window.navigator.geolocation.getCurrentPosition(function(pos) {
      const coordinates = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      }
      resolve(coordinates);
    }, function(err) {
      reject(err);
    });
  });
}

function getLocationByIP(path) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    }
    xhr.onerror = () => reject('Ошибка!');
    xhr.send(null);
  });
}

function getNearestPlaces(latitude, longitude) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`, true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    }
    xhr.onerror = () => reject('Ошибка!');
    xhr.send(null);
  });
}

function getWeather(id) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.metaweather.com/api/location/${id}`, true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    }
    xhr.onerror = () => reject('Ошибка!');
    xhr.send(null);
  });
}

function renderCoordsTable(coords) {
  const distance = getDistanceBetweenPoints(coords[0].latitude, coords[0].longitude, coords[1].latitude, coords[1].longitude);
  const coordsTable = document.getElementById('coords-table');
  coordsTable.innerHTML = `
    <th>IP-адрес</th>
    <th>Населенный пункт</th>
    <th>Координаты из браузера</th>
    <th>Координаты по IP</th>
    <th>Расстояние между точками</th>
    <tr>
      <td>${coords[1].ip}</td>
      <td>${coords[1].city}</td>
      <td>${coords[0].latitude}, ${coords[0].longitude}</td>
      <td>${coords[1].latitude}, ${coords[1].longitude}</td>
      <td>${distance}</td>
    </tr>`;
}

function renderWeatherTable(place) {
  weatherTable.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${place.title}</td>
      <td>${place.consolidated_weather[1].applicable_date}</td>
      <td>${place.consolidated_weather[1].weather_state_name}</td>
      <td>${place.consolidated_weather[1].wind_direction_compass}</td>
      <td>${Math.round(place.consolidated_weather[1].wind_speed)}</td>
      <td>${Math.round(place.consolidated_weather[1].min_temp)}</td>
      <td>${Math.round(place.consolidated_weather[1].max_temp)}</td>
      <td>${Math.round(place.consolidated_weather[1].humidity)}</td>
    </tr>`);
}

function getDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const latitudeInDeg = transformToRadians(lat2 - lat1);
  const longitudeInDeg = transformToRadians(lon2 - lon1); 
  const a = Math.sin(latitudeInDeg/2) * Math.sin(latitudeInDeg/2) + Math.cos(transformToRadians(lat1)) * Math.cos(transformToRadians(lat2)) * 
    Math.sin(longitudeInDeg/2) * Math.sin(longitudeInDeg/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  return R * c;
}

function transformToRadians(deg) {
  return deg * (Math.PI/180);
}

async function processData() {
  const weatherText = document.getElementById('weather-text');
  let allCoordinates = [];

  const browserCoords = await getLocationByBrowser();
  allCoordinates.push(browserCoords);

  const ipCoords = await getLocationByIP('https://freegeoip.app/json');
  allCoordinates.push(ipCoords);
  renderCoordsTable(allCoordinates);

  weatherText.innerHTML = 'Погода на завтра';
  weatherTable.innerHTML = `
    <th>Населенный пункт</th>
    <th>Дата</th>
    <th>Осадки</th>
    <th>Направление ветра</th>
    <th>Скорость ветра, м/с</th>
    <th>Минимальная T, C</th>
    <th>Максимальная T, C</th>
    <th>Влажность, %</th>`;
  
  const nearestPlaces = await getNearestPlaces(ipCoords.latitude, ipCoords.longitude);
  for (let i = 0; i < 5; i++) {
    const weatherInCity = await getWeather(nearestPlaces[i].woeid);
    renderWeatherTable(weatherInCity);
  }
}

beginButton.addEventListener('click', processData);