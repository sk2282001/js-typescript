const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resources");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

// promise chaining

getData("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getData("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved: ", data);
    return getData("todos/shuan.json");
  })
  .then((data) => {
    console.log("promise 3 resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });

//Promise example

// const getsomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     reject("some error");
//   });
// };

// getsomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getsomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
