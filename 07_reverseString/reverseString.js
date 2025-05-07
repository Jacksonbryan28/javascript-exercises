const reverseString = function (getString) {
  let outputString = "";
  let getStringLength = getString.length;
  for (i = getStringLength; i >= 0; i--) {
    outputString = outputString + getString.charAt(i);
  }
  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
