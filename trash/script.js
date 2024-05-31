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
  Popupweather();
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
       <button class="modal__weather" onclick="weatherapi()">Click for Weather</button>
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

const Popupweather = () => {
  document.querySelectorAll(".modal__weather").forEach((button) => {
    button.addEventListener("click", openWeatherPopup);
  });
};

FetchCountry();

function weatherapi(lat, lng) {
  const apiKey = "e0876f436dd7641a3927ccc431845894";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // document.querySelector(".desc").innerHTML = res.name;
  // document.querySelector(".temp").innerHTML = res.main.temp + "C";
  // document.querySelector(".humidity").innerHTML = res.main.humidity + "%";
  // document.querySelector(".wind").innerHTML = res.wind.speed + " ";
}
weatherapi(lat, lng);
