const sumAll = function (numOne, numTwo) {
  //Defines it as a number
  let sumOutput = 0;
  let numOneTest = numOne;
  let numTwoTest = numTwo;

  if (
    typeof numOneTest === "number" &&
    typeof numTwoTest === "number" &&
    numOne > 0 &&
    numTwo > 0 &&
    Number.isInteger(numOne) &&
    Number.isInteger(numTwo)
  ) {
    if (numOne < numTwo) {
      for (i = numOne; i <= numTwo; i++) {
        sumOutput += i;
      }
    } else {
      for (i = numTwo; i <= numOne; i++) {
        sumOutput += i;
      }
    }
    return sumOutput;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
