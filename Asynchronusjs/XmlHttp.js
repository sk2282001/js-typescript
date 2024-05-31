// ES5 https XMl reuqest
// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", function () {
//   console.log(request, request.readyState);
//   if (request.readyState === 4 && request.staus === 200) {
//     console.log(request, request.readyState);
//   } else if (request.readyState === 4) {
//     console.log("could not fetch the data");
//   }
// });
// request.open("GET", "example/fetch/Api.json");
// request.send();

// it's all of this inside a function

// const getTodos = () => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request, request.readyState);
//     } else if (request.readyState === 4) {
//       console.log("could not fetch the data");
//     }
//   });
//   request.open("GET", "example/fetch/Api.json");
//   request.send();
// };
// getTodos();

// callback function and fired

// const getTodos1 = function (callback) {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", function () {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//       // console.log(request, request.readyState);
//       // callback(undefined, request.responseText);
//       callback(_, request.readyState);
//     } else if (request.readyState === 4) {
//       // console.log("couldn't fetch the data");
//       // callback("could not fetch the data", undefined);
//       callback("could not fetch the data", _);
//     }
//   });
//   request.open("GET", "example/fetch/Api.json");
//   request.send();
// };

// console.log(1);
// console.log(2);
// getTodos1((err, data) => {
//   console.log("callback fired");
// if (err) {
//   console.log(err);
// } else {
//   console.log(data);
// }
// console.log(err, data)
// return err,data;
//   return {
//     err,
//     data,
//   };
// });
// console.log(3);
// console.log(4);

// JSON Data

// const getData = (callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch the data", undefined);
//     }
//   });

//   request.open("GET", "todos.json");
//   request.send();
// };

// getData((err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// callback hell

const getData = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};
// this also a callback
getData("todos/luigi.json", (err, data) => {
  console.log(data);
  getData("todos/mario.json", (err, data) => {
    console.log(data);
    getData("todos/shuan.json", (err, data) => {
      console.log(data);
    });
  });
});

// function saravanan() {
//   const store = [21, 22, 23];

//   const save = [];

//   store.forEach(function (value) {
//     save.push(value * 2);
//   });
//   console.log(save);
// }
// saravanan();

// Destructuring

// function saravanan() {
//   const name = "saravanan";
//   const age = 22;
//   const [...print] = name;
//   console.log(print);
// }
// saravanan();
