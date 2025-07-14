const palindromes = function (string) {
  //remove non-alphabetical characters
  let cleanString = string.replace(/[^a-zA-Z0-9]/g, "");
  //set string to lowercase
  let lowerCase = cleanString.toLowerCase();
  //reverse string
  let reverseString = "";
  for (i = lowerCase.length; i >= 0; i--) {
    reverseString += lowerCase.charAt(i);
  }
  console.log(reverseString);
  //check if reverse == original string - if true return true, if false, return false
  if (lowerCase == reverseString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
