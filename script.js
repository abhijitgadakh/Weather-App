let weather = {
  apikey: "93e37ed0ea3aefeea90b58754a473d20",
  fetchWeather: function (cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apikey}`
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerHTML = `Weather in ${name}`;

    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;

    document.querySelector(".description").innerHTML = description;

    document.querySelector(".temp").innerHTML = `${temp}°C`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${temp}%`;

    document.querySelector(".wind").innerHTML = `Wind Speed: ${speed}km/h`;
    document.querySelector(".weather").classList.remove("loading");

    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`;
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
weather.fetchWeather("Pune");
