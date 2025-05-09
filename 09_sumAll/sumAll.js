const sumAll = function (numOne, numTwo) {
  //Defines it as a number
  let sumOutput = 0;
  let numOneTest = numOne;
  let numTwoTest = numTwo;

//   if(numOne !== 'number' || numTwo !== 'number'){
//     return "ERROR";
//   }
//   else
   if (
    typeof numOneTest === "number" &&
    typeof numTwoTest === "number" &&
    numOne > 0 &&
    numTwo > 0
  ) {
    if (numOne < numTwo) {
      for (i = numOne; i <= numTwo; i++) {
        sumOutput += i;

        //Logs to test
        //   console.log(sumOutput);
        //   console.log("numOne Value: " + numOne + " numTwo Value: " + numTwo);
        //   console.log("i Value" + i);
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
