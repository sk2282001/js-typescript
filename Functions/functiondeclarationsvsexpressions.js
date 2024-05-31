//function declaration
function calcage(birthYear){
    return 2045 - birthYear;
}
const age = calcage(1991)

//function expression
const calcage2 = function (birthYear){
    return 2037 - birthYear;
}

const age1 = calcage2(1991);
// console.log(age, age1);
console.log(age);
console.log(age1);