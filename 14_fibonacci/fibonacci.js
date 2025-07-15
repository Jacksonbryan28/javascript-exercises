const fibonacci = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (n < 0) {
    return "OOPS";
  }

  let a = 0,
    b = 1;

  for (i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
