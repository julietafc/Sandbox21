"use strict";

const person1 = {
  fisrtName: "Peter",
  age: 29,
  student: false,
};

console.log(person1);
console.log(person1.lastName);

person1.lastName = "Fernandez";

console.log(person1.lastName);
console.log(person1);

person1.lastName = undefined;

console.log(person1.lastName);
console.log(person1.middleName);

delete person1.lastName;
console.log(person1);

person1.age++;
console.log(person1);

const person2 = {
  fisrtName: "Julieta",
  age: 30,
  student: true,
};

person1 = person2;
