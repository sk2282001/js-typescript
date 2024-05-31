const saravanan = {
  fname: "saravanan",
  lname: "sivakumar",
  birthyear: 1991,
  job: "teacher",
  friends: ["sunil", "sargunan", "siva"],
  hasDriverLicense: true,

  // calcAge: function (birthyear){
  //    return 2024 - birthyear;
  // }

  // calcAge: function(){
  //     console.log(this);
  //     return 2024 - this.birthyear;
  // }

  calcAge: function () {
    this.age = 2024 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this.fname} is a ${this.calcAge()} year old ${this.job}, he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver license`;
  },
};

console.log(saravanan.calcAge());
console.log(saravanan.age);
console.log(saravanan.age);
console.log(saravanan.age);
// console.log(saravanan['calcAge'](1991));

//challenge saravanan is a46 years old teacher, he has a driver license.
console.log(saravanan.getSummary());

//challenge

const saro = {
  firstname: "saravanan",
  mass: 45,
  height: 1.79,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const sunil = {
  firstname: "saravanan",
  mass: 45,
  height: 1.79,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
  },
};

saro.calcBMI();
sunil.calcBMI();
console.log(saro.bmi, sunil.bmi);