const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let sum = a - b;
  return sum;
};

const sum = function (array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
};

const multiply = function (array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  return sum;
};

const power = function (a, b) {
  let pwr = 0;
  let increment = a;
  for (i = 1; i < b; i++) {
    increment *= a;
  }
  pwr = increment;
  return pwr;
};

const factorial = function (a) {
  let fact = 1;
  for (i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
