"use strict";

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";

console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];
let result;
result = people.push("Draco");
console.log(result);
console.log(people);

result = people.pop();
console.log(result);
console.log(people);

result = people.push("Neville");
console.log(result);
console.log(people);

result = people.push("Luna");
console.log(result);
console.log(people);

result = people.slice(0, 3);
console.log(result);
console.log(people);

result = people.splice(1, 0, "Cho");
console.log(result);
console.log(people);

people[1] = "Ginny";
console.log(result);
console.log(people);

result = people.push("Fred", "George");
console.log(result);
console.log(people);

result = people.indexOf("Fred");
console.log(result);
console.log(people);

result = people.splice(result, 1);
console.log(result);
console.log(people);

result = people.unshift("Roberto");
console.log(result);
console.log(people);

result = people.shift("Roberto");
console.log(result);
console.log(people);
