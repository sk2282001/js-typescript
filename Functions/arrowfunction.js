//Arrow function

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear; 
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Saravanan'));
console.log(yearsUntilRetirement(1981, 'Sunil'));

// my try

// let test = (first) => {
//     let f = "saravanan" - first;
//     return f;
// }
// console.log(test("saravanan"));

const calc1Age3 = birthyear => 2037 - birthyear;

const age4 = calc1Age3(1991);
console.log(age4);

// you want write multiple code use block {}
const yearsuntilretire = (birthyear,firstname) => {
    const age = 2037 - birthyear;
    const retire = 65 - age;
    // return retire;
    return `${firstname} retires in ${retire} year`;
}
console.log(yearsuntilretire(1999, "Saravanan"))
