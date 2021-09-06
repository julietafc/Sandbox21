"use strict";

let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

let person2 = {
  firstName: "other Peter",
  age: 29,
  student: false,
};

let person3 = person1;

person3.firstName = "Changed";

person3 = person2;

person2.firstName = "Also changed";

person1 = person3;
console.log(person1);
console.log(person2);
console.log(person3);
