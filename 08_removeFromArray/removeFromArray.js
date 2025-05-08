const removeFromArray = function () {
  //makes an array from the arguments (which is an array in location [0], and # amount of other arguments)
  let args = Array.from(arguments);

  //makes nester array be the first array we want to check and modify, now args has what we want to check against.
  let nestedArray = args.shift();

  //runs a loop for however many inputs you get on top of the original array
  for (i = 0; i <= args.length; i++) {
    //checks if at each location it matches the current argument we are checking
    for (x = 0; x <= nestedArray.length; x++) {
      //if they match, we remove it from that slice
      if (nestedArray[x] === args[i]) {
        nestedArray.splice(x, 1);
        x = 0;
      }
    }
  }
  return nestedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
