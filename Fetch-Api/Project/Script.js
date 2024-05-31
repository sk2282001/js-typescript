const FetchCountry = () => {
  //   const response = await fetch("https://restcountries.com/v3.1/all");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

// FetchCountry().then(
//   (data) => console.log(data),
//   (err) => console.log(err)
// );

const displayCountries = (countries) => {
  console.log(countries);
  const html = countries.map((country) => getCountry(country));

  const container = document.querySelector(".countries");
  container.innerHTML = html.join(" ");
};

const getCountry = (country) => {
  console.log(country);
  return `<div class="country-col">
     <h2>${country.name.common}</h2>
     <img src=${country.flags.png}>
     <p class="country-set">Region:  ${country.region}</p>
     <p class="country-set">Capital:  ${country.capital}</p>
     <p class="country-set">Country Code:  ${country.borders?.[0]}</p>
     <p class="country-set">latIng:  ${country.latlng[0].toFixed(
       2
     )}, ${country.latlng[1].toFixed(2)}</p>
     <button class="modal__weather">Click for Weather</button>
  </div>`;
};
FetchCountry();
