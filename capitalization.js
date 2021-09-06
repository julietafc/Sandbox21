"use strict";

capitalize("juLIETa");

// console.log(name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase());

function capitalize(name) {
  let capInitial = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
  console.log(capInitial);
}
