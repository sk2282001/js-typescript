let allCountries = [];
const FetchCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      allCountries = data;
      displayCountries(data);
    })
    .catch((err) => console.error(err));
};

const displayCountries = (countries) => {
  const html = countries.map((country) => getCountry(country)).join(" ");
  const container = document.querySelector(".countries");
  container.innerHTML = html;
  addWeatherButtonListeners();
};

const getCountry = (country) => {
  return `<div class="country-col">
         <h2>${country.name.common}</h2>
         <img src=${country.flags.png} alt="${country.name.common} flag">
         <p class="country-set">Region: ${country.region}</p>
         <p class="country-set">Capital: ${country.capital}</p>
         <p class="country-set">Country Code: ${country.borders?.[0]}</p>
         <p class="country-set">latIng: ${country.latlng[0].toFixed(
           2
         )}, ${country.latlng[1].toFixed(2)}</p>
         <button class="modal__weather" data-country="${
           country.name.common
         }" data-lat="${country.latlng[0]}" data-lng="${
    country.latlng[1]
  }">Click for Weather</button>
      </div>`;
};

const openWeatherPopup = () => {
  document.querySelector(".backdrop").classList.remove("hidden");
  document.querySelector(".Popup__Weather").classList.remove("hidden");
};

const closeWeatherPopup = () => {
  document.querySelector(".backdrop").classList.add("hidden");
  document.querySelector(".Popup__Weather").classList.add("hidden");
};

const addWeatherButtonListeners = () => {
  document.querySelectorAll(".modal__weather").forEach((button) => {
    button.addEventListener("click", (event) => {
      const lat = event.target.getAttribute("data-lat");
      const lng = event.target.getAttribute("data-lng");
      const country = event.target.getAttribute("data-country");
      weatherapi(lat, lng, country);
      openWeatherPopup();
    });
  });
};

const weatherapi = (lat, lng, country) => {
  const apiKey = "56dfeea00caa99ac1003c9f79ba67bb4";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector(".name").innerHTML = `Weather Update: ${country}`;
      document.querySelector(
        ".desc"
      ).innerHTML = `<b>Description:</b> ${data.weather[0].description}`;
      document.querySelector(
        ".temp"
      ).innerHTML = `<b>Temp:</b> ${data.main.temp}°C`;
      document.querySelector(
        ".humidity"
      ).innerHTML = `<b>Humidity:</b> ${data.main.humidity}%`;
      document.querySelector(
        ".wind"
      ).innerHTML = `<b>Wind Speed:</b> ${data.wind.speed} km/h`;
    })
    .catch((err) => console.log(err));
};

let debounce;

const searchCountries = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  debounce = setTimeout(() => {
    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchTerm)
    );
    displayCountries(filteredCountries);
  }, 2000);
};

document.querySelector(".search").addEventListener("input", searchCountries);

FetchCountry();
