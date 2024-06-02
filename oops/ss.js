// class declaration
// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   greet() {
//     console.log(
//       `hello, my name is ${this.name} and i am ${this.age} years old`
//     );
//   }
// }
class Animal {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    speak(){
        console.log(`${this.name} makes a noise`)
    }
}

class Tiger extends Animal {
    constructor(name, age, email){
        super(name, age)
        this.email = email;
    }
    speak(){
        console.log(`${this.name} barks ${this.age}`)
    }
}
// class Animal {
//     constructor(name, age, email) {
//       this.name1 = name;
//       this.age2 = age;
//       this.email3 = email;
//     }
  
//     speak() {
//       console.log(`${this.name1} makes a noise`);
//     }
//   }
  
//   // Derived class (Child)
  
//   class Tiger extends Animal {
//     constructor(name1, name2, breed) {
//       //   this.name = name;
//       super(name1, name2);
//       this.breed = breed;
//     }
  
//     speak() {
//       console.log(`${this.name1} barks ${this.age2}`);
//     }
//   }
  
//   const dog1 = new Tiger("alabai", 22, "dubai breed");
//   dog1.speak();
  

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const animals = [new Dog("Rex"), new Cat("Whiskers")];
  animals.forEach((animal) => animal.speak());


  const FetchCountry = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
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
  
  FetchCountry();