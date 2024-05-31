function displayer(typesome) {
  document.querySelector(".print").textContent = typesome;
}

function first() {
  displayer("Hi");
}

function second() {
  displayer("How are you ?");
}

first();
second();

//callback

const getnames = function (callback) {
  setTimeout(() => {
    callback([1, 2, 3]);
  }, 1500);
};

const add = (array) => {
  let sum = 0;
  for (const i in array) {
    sum += i;
  }
  console.log(sum);
};

getnames(add);
