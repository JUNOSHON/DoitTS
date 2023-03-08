let person = { name: "JUNO", age: 22 };
let { name, age } = person;

let array = [1, 2, 3, 4];
let [head, ...rest] = array;

let a = 1,
  b = 2;
[a, b] = [b, a];
