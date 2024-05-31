const FetchCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data))
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
           <button class="modal__weather" data-lat="${
             country.latlng[0]
           }" data-lng="${country.latlng[1]}">Click for Weather</button>
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
      weatherapi(lat, lng);
      openWeatherPopup();
    });
  });
};

const weatherapi = (lat, lng) => {
  const apiKey = "56dfeea00caa99ac1003c9f79ba67bb4";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      const descElement = document.querySelector(".desc");
      const tempElement = document.querySelector(".temp");
      const humidityElement = document.querySelector(".humidity");
      const windElement = document.querySelector(".wind");

      if (descElement && tempElement && humidityElement && windElement) {
        descElement.textContent = `Description: ${data.weather[0].description}`;
        tempElement.textContent = `Temp: ${data.main.temp}°C`;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
        windElement.textContent = `Wind Speed: ${data.wind.speed} km/h`;
      } else {
        console.error("One or more weather elements not found in the DOM");
      }
    })
    .catch((err) => console.error(err));
};

FetchCountry();
