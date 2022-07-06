const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(...args) {
  var len = args[0].length;

  var sum = 0;
  for (let i = 0; i < len; i++) {
    sum += args[0][i];
  }
  return sum;
	
};

const multiply = function(...args) {
  var len = args[0].length;

  var product = 1;
  for (let i = 0; i < len; i++) {
    product *= args[0][i];
  }
  return product;

};

const power = function(base, exp) {
  return Math.pow(base,exp);
	
};

const factorial = function(num) {

  var factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;

	
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
