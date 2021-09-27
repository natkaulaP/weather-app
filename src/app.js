function fetchWeather(response){
  console.log(response.data.main)
 console.log(response.data.main.pressure);
 let city = document.querySelector("#city");
 city.innerHTML = response.data.name;
 let temperature = Math.round(response.data.main.temp);
 let description = document.querySelector("#description");
 description.innerHTML = response.data.weather[0].main;
 let temp = document.querySelector("#temp");
 temp.innerHTML = `${temperature}°C`;
 let pressure = Math.round(response.data.main.pressure)
 pressureElement=document.querySelector("#pressure");
 pressureElement.innerHTML = `${pressure} Mb`;
 let humidity = document.querySelector("#humidity");
 let humidityElement=response.data.main.humidity
 humidityElement.innerHTML = `${humidity} %`;
 let wind = Math.round(response.data.wind.speed);
 let windSpeed = document.querySelector("#wind");
 windSpeed.innerHTML =`${wind} km/h`;

}



let apiKey = "c4c86bfef566dd206b4bde22d1586022";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=krakow&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(fetchWeather);
