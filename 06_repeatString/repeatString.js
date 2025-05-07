const repeatString = function (inputString, repeatNum) {
  let outputString = "";
  for (let i = 0; i < repeatNum; i++) {
    outputString = outputString + inputString;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
