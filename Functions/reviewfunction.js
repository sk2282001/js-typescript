const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsuntilretire = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🍕`);
    return -1;
  }
};
console.log(yearsuntilretire(1991, "saravanan"));
console.log(yearsuntilretire(1990, "saravanan"));
