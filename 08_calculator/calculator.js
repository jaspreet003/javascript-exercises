const sum = function (...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {

    if (Array.isArray(args[i])) {

      if (args[i].length > 0) {

        sum += args[i].reduce((a, b) => {

          return a + b;
        })
      } else { sum += 0 }

    } else {
      if (typeof args[i] === 'number') {
        sum += args[i];
      }
    }
  }

  return sum;
};


const subtract = function (a, b) {

  return a - b;

};

const add = function (a, b) {

  return a + b;

};

const multiply = function (...args) {
  let product = 1;

  for (let i = 0; i < args.length; i++) {

    if (Array.isArray(args[i])) {

      if (args[i].length > 0) {

        product *= args[i].reduce((a, b) => {

          return a * b;
        })
      } else { product *= 1 }

    } else {
      if (typeof args[i] === 'number') {
        product *= args[i];
      }
    }
  }

  return product;
};

const power = function (number, power) {

  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }

  return result;
};

const factorial = function (number) {

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
