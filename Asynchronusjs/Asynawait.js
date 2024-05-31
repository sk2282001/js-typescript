const getTodos = async () => {
  const response = await fetch("todos.json");
  //   console.log(response);
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  //   console.log(data);
  return data;
};
// getTodos();
// console.log(1);
// console.log(2);
// const data = getTodos();
// console.log(data);
// const test = getTodos();
// console.log(test);

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log(err.message));

// console.log(3);
// console.log(4);
